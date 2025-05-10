// components/Testimonials.tsx (Server Component)
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '@/app/constants'
import TestimonialsClient from './TestimonialsClient'; // Import the Client Component

// Define interface for the data structure expected from Airtable
// Added null/undefined checks to fields for safer access later
interface AirtableRecord {
    id: string; // Airtable record ID
    createdTime: string; // Airtable creation time
    fields?: { // Make fields optional in case of malformed records
        Name?: string; // Use 'Text' as per original Airtable field assumption, or adjust if your field is 'testimonial'
		title?: string;
        testimonial?: string; // Use 'Author' as per original assumption, or adjust if your field is 'name'
        headshot?: Array<{ url: string }>; // Assuming ImageUrl is an attachment field
        // Add other fields if necessary and make them optional
    };
}

// Define interface for the formatted data we want to pass to the client
interface FormattedTestimonial {
    text: string;
    author: string;
    imageUrl?: string; // Pass just the URL string to the client
}


async function retrieveTestimonial(viewName: string): Promise<FormattedTestimonial[]> {
    const encodedTableName = encodeURIComponent("Testimonials"); // Encode the table name
    const encodedViewName = encodeURIComponent(viewName);

    // Add checks for missing keys before fetching
    if (!AIRTABLE_API_KEY) {
        console.error("AIRTABLE_API_KEY is not defined.");
        return []; // Return empty array or throw error
    }
     if (!AIRTABLE_BASE_ID) {
         console.error("AIRTABLE_BASE_ID is not defined.");
         return []; // Return empty array or throw error
     }


    try {
        const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}?view=${encodedViewName}&maxRecords=100`, {
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`
            },
            next: {
                revalidate: 60 * 60 * 1.5 // revalidate every 1.5 hours
            }
        });

        // --- IMPORTANT: Check response.ok first! ---
        if (!response.ok) {
            // Attempt to read the error body for more details
            const errorBody = await response.text();
            console.error(`Airtable API error: ${response.status} ${response.statusText}`, errorBody);
            // Handle API errors, e.g., return an empty array or throw an error
            return [];
        }
         // --- End Check ---


        const data = await response.json();

        // --- IMPORTANT: Check if data and data.records exist and are an array ---
        // If the API was successful but the structure is unexpected
        if (!data || !Array.isArray(data.records)) {
             console.error("Airtable response did not contain a 'records' array:", data);
             return []; // Return empty array if the expected structure is missing
        }
        // --- End Check ---


        const records: AirtableRecord[] = data.records;
        //console.log("Fetched records:", records); // Log the actual array

        // Map the Airtable data structure to your desired format
        const formattedTestimonials: FormattedTestimonial[] = records.map(record => ({
            // Use optional chaining (?.) and nullish coalescing (|| "") for safer access
            text: record.fields?.testimonial || "", // Assuming your Airtable column is 'Text'
            author: "—"+record.fields?.Name + ", " + record.fields?.title || "", // Assuming your Airtable column is 'Author'
            // Check if ImageUrl field exists, is an array, and has at least one item
            imageUrl: record.fields?.headshot && Array.isArray(record.fields.headshot) && record.fields.headshot.length > 0
                      ? record.fields.headshot[0].url // Use the url from the first attachment logo.fields.logo[0].thumbnails.large.url
                      : undefined // Or provide a default image URL or leave undefined
        }));

        return formattedTestimonials;

    } catch (error) {
        // Catch network errors or issues during response.json() parsing
        console.error("Error fetching or parsing testimonials from Airtable:", error);
        // Handle errors, e.g., return an empty array
        return [];
    }
}

interface TestimonialsServerProps {
    // Accept a prop to determine which view to fetch, e.g., 'homepage', 'gov-partner', 'student'
    view: string;
}

// This is your async Server Component
export default async function TestimonialsServer({ view }: TestimonialsServerProps) {
    // Fetch data on the server before rendering
    const testimonialsData = await retrieveTestimonial(view);

    // Render the Client Component, passing the fetched data as a prop
    return (
        <TestimonialsClient testimonials={testimonialsData} />
    );
}
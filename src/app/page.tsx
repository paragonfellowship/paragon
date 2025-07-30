interface Image {
    id: string,
    width: number,
    height: number,
    url: string,
    filename: string,
    size: number,
    type: string,
    thumbnails: {
        small: {
            url: string,
            width: number,
            height: number
        },
        large: {
            url: string,
            width: number,
            height: number
        },
        full: {
            url: string,
            width: number,
            height: number
        }
    }
}

import Section from "@/components/Section";
import { Subheading, Text } from '@/components/Typography';
import Image from "next/image";
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TopBar from '@/components/TopBar';
import DynamicGrid from '@/components/DynamicGrid';
import GrayDivider from '@/components/GrayDivider';
import TestimonialsServer from '@/components/Testimonials';
import TickText from '@/components/TickText';

import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, REVALIDATE_NUM } from '@/app/constants'
import Card from '@/components/Card_Static';

interface logoRecord {
    id: string,
    createdTime: string,
    fields: {
        name: string,
		logo: Image[],
		image_blob: string
    }
}

interface factRecord {
    id: string,
    createdTime: string,
    fields: {
        Item: string,
		Number: number,
		Notes: string
    }
}

async function retrieveLogos(): Promise<logoRecord[]> {
    const encodedTableName = encodeURIComponent("Government Partner Logos"); // Encode the table name
	const encodedViewName = encodeURIComponent("all_ordered");
    const records = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}?view=${encodedViewName}&maxRecords=100`, {
        headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`
        },
        next: {
            revalidate: REVALIDATE_NUM
        }
    });
	const reco = await records.json();// ... (after fetching and parsing 'reco') ...
	

if (!Array.isArray(reco.records)) {
    console.error("reco.records is not an array! Cannot filter.");
    return [];
}

	const rec = reco.records
	
for (let i = rec.length - 1; i >= 0; i--) {
	//removes entries that do not have a blobbed image. This is to protect if the airtable data is revalidated before a new entry gets its image blobbed
  if (!rec[i].fields.image_blob) {
    // If no blobbed image, then remove from the array
    rec.splice(i, 1);
  }
}
/*
const rec = reco.records.filter(entry => {
    // Ensure 'entry.fields' exists
    if (!entry.fields) {
        // console.log(`Record ID ${entry.id} has no 'fields' object. Filtering out.`);
        return false;
    }

    const imageBlobValue = entry.fields.image_blob; // Assuming 'image_blob' is the correct field name under 'fields'

    // Log details for each item being filtered by the full condition
    const c1 = imageBlobValue !== null;
    const c2 = typeof imageBlobValue !== 'undefined';
    const c3 = imageBlobValue !== ""; // Check for empty string

    // Uncomment the next line for very detailed per-item debugging if needed:
    // console.log(`Filtering ID: ${entry.id}, Value: "${imageBlobValue}", Type: ${typeof imageBlobValue}, NullCheck: ${c1}, UndefinedCheck: ${c2}, EmptyStringCheck: ${c3}, Result: ${c1 && c2 && c3}`);

    return c1 && c2 && c3;
});
*/
return rec;
}
async function retrieveFacts(): Promise<factRecord[]> {
	const encodedTableName = encodeURIComponent("Facts"); // Encode the table name
	const encodedViewName = encodeURIComponent("all_ordered");
	const records = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}?view=${encodedViewName}&maxRecords=100`, {
			headers: {
				'Authorization': `Bearer ${AIRTABLE_API_KEY}`
			},
			next: {
				revalidate: REVALIDATE_NUM
			}
		});
	const rec = await records.json();
	return rec.records
}

/*

console.log(govLogos[0]);
const x=await retrievePeople()
console.log(x[0].fields.logo);
const govLogos=await retrievePeople();
const govLogos = Object.values(governments).map(government => government.logo);

//const govLogos = await retrievePeople()
//
//console.log(x[0].fields.logo[0].thumbnails.large.url);
const govLogos = Object.values(governments).map(government => government.logo);
console.log(govLogos[0])
const x=await retrievePeople()
console.log(x[0].fields.logo[0].thumbnails.large);

*/

export default async function Home() {
	const govLogos = await retrieveLogos();
	const facts = await retrieveFacts();
	/*
	facts[0]=# of Fellows
	facts[1]=# of Universities
	facts[2]=# of Projects
	facts[3]=# of Gov Partners
	facts[4]=# of States
	facts[5]=% of diverse students
	*/
  return (
    <>
      <TopBar />
      <div className="background-container">
        <DynamicGrid />
        <HeroSection />
      </div>
      <Section className='overflow-y-hidden'>
      <div className="text-black text-2xl md:text-4xl text-left">
        Paragon is a national organization that connects{' '}
        <span className="font-semibold">university students and new grads</span>{' '}
        with opportunities to work on science and tech policy issues at the{' '}
        <span className="font-semibold">state and local level.</span>
      </div>

      <br></br>
      <br></br>
      <div className="text-black text-lg md:text-2xl font-light w-full md:max-w-[65%] text-left mt-4">
        Paragon is supported by the{' '}
        <a href="https://pitcases.org/2024-network-challenge-grantee-reveal/" className="underline">
          2024 PIT-UN Network Challenge
        </a>
        , a project of the Public Interest Technology University Network, the{' '}
        <a href="https://www.rtyouthpower.org" className="underline">
          Responsible Tech Youth Power Fund
        </a>
        , and the{' '}
        <a href="https://fas.org" className="underline">
          Federation of American Scientists
        </a>
        .
      </div>
    </Section>
      <Section className='overflow-y-hidden'>
       <Subheading>Our Program</Subheading>
       <GrayDivider />
       <Text>
         Paragon is a tech policy fellowship that connects local governments with a team of talented students
         from local colleges and universities to conduct in-depth research on a tech policy issue. Our Fellows
         are passionate about public service and are eager to make a difference in their community.
       </Text>
        
       {/* --- MODIFIED CONTAINER --- */}
       {/* Changed from 'flex' to 'grid' and updated column/gap classes. */}
       <div className="grid grid-cols-1 md:grid-cols-2 w-full py-8 md:py-16 gap-8 px-4">
        
         {/* Card 1 Wrapper - 'md:flex-1' is removed */}
         <div className="flex flex-col">
           <Card style={{ flexGrow: 1 }} className="h-full">
             <p className="text-xl font-semibold text-gray-500 mb-3 md:mb-5">Hands-On Policy Experience</p>
             <p className="text-base md:text-lg font-light text-black">
               Fellows contribute 5-10 hours of remote work per week for three months to develop technology policy for a state or local government. They develop policy in direct collaboration with the government officials responsible for implementing their ideas. So far, our Fellows&apos; policy in AI, cybersecurity, digital accessiblity, and more has already touched the lives of 10+ million people.
             </p>
           </Card>
         </div>

         {/* Card 2 Wrapper */}
         <div className="flex flex-col">
           <Card style={{ flexGrow: 1 }} className="h-full">
             <p className="text-xl font-semibold text-gray-500 mb-3 md:mb-5">Training & Resources</p>
             <p className="text-base md:text-lg font-light text-black">
               Fellows learn how to think about and write policy through our bootcamps and the policy workshops we run throughout the cohort. They also get to hear from <a href="/team/speakers" style={{color: 'blue', textDecoration: 'underline'}}>our guest speakers</a>, who are academics, activists, and public and private sector leaders.
             </p>
           </Card>
         </div>

         {/* Card 3 Wrapper */}
         <div className="flex flex-col">
           <Card style={{ flexGrow: 1 }} className="h-full">
             <p className="text-xl font-semibold text-gray-500 mb-3 md:mb-5">Entry into the Tech Policy Community</p>
             <p className="text-base md:text-lg font-light text-black">
               Fellows join our growing alumni network and network with some of the most promising future leaders in the tech policy field. Current and former Fellows also can take advantage of our <a href="/students/mentorship" style={{color: 'blue', textDecoration: 'underline'}}>exclusive mentorship program</a>, where they form deep relationships with and gain guidance from established names in the tech policy space.
             </p>
           </Card>
         </div>
         
         {/* Card 4 Wrapper */}
         <div className="flex flex-col">
           <Card style={{ flexGrow: 1 }} className="h-full">
             <p className="text-xl font-semibold text-gray-500 mb-3 md:mb-5">$500 Stipend</p>
             <p className="text-base md:text-lg font-light text-black">
               Fellows who successfully complete the program receive a $500 stipend to compensate them for their hard work.
             </p>
           </Card>
         </div>
       </div>
     </Section>
	<Section className="overflow-y-hidden">
      <Subheading>Our Reach</Subheading>
      <GrayDivider />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full py-8 md:py-16 px-4">
        <div className="flex flex-col items-center text-center">
          <TickText text={facts[0].fields.Number} className="text-5xl md:text-7xl font-bold text-black" />
          <p className="text-base md:text-xl text-black mt-2">
            <span className="font-bold">Fellows</span> placed on{" "}
            <span className="font-bold">{facts[2].fields.Number} projects</span> from{" "}
            <span className="font-bold">{Math.floor(facts[1].fields.Number / 10) * 10}+</span> colleges and universities nationally
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TickText text={facts[5].fields.Number} suffix="%" className="text-5xl md:text-7xl font-bold text-black" />
          <p className="text-base md:text-xl text-black mt-2">
            identify as <span className="font-bold">underrepresented</span> in
            technology and policy
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TickText text={facts[2].fields.Number*500} className="text-5xl md:text-7xl font-bold text-black" />
          <p className="text-base md:text-xl text-black mt-2">
            hours <span className="font-bold">dedicated</span> to tech policy research
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TickText text={facts[3].fields.Number} className="text-5xl md:text-7xl font-bold text-black" />
          <p className="text-base md:text-xl text-black mt-2">
            established partnerships with state and local governments across{" "}
            <span className="font-bold">{facts[4].fields.Number} U.S. states and territories</span>
          </p>
        </div>
      </div>
    </Section>
      <Section className='overflow-y-hidden'>
        <Subheading>Testimonials</Subheading>
        <GrayDivider/>
        <TestimonialsServer view="homepage" />
      </Section>

      <Section className='overflow-y-hidden'>
        <Subheading>Our Partners</Subheading>
        <GrayDivider/>
        <a href='/projects' className='text-blue-500 block w-full overflow-hidden'>
        <Carousel className='mt-10' speed={35}>
          {
            govLogos.map((logo, index) => (
				<Image key={index} src={logo.fields.image_blob} width={logo.fields.logo[0].thumbnails.large.width} height={logo.fields.logo[0].thumbnails.large.height} alt={logo.fields.name} className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
				//<img key={index} src={logo.fields.logo[0].thumbnails.large.url} alt={logo.fields.name} className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
            ))
          }
        </Carousel>
        </a>
      </Section>
      <Footer/>
    </>
  );
}
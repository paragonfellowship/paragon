// components/TestimonialsClient.tsx (This will be your Client Component)
"use client"; // This directive is necessary here

import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "@/components/Card";
// import Image from "next/image"; // If you prefer Next.js Image component

// Define interface for the testimonial data structure expected by this component
interface Testimonial {
    text: string;
    author: string;
    imageUrl?: string;
}

interface TestimonialsClientProps {
    testimonials: Testimonial[]; // Expect an array of testimonial objects as a prop
}

// This component is NOT async
export default function TestimonialsClient({ testimonials }: TestimonialsClientProps) {
    const selectedTestimonials = testimonials || []; // Use the data passed as a prop
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const interactionDebounceTimeout = useRef<NodeJS.Timeout | null>(null); // To prevent scroll handler fighting arrow clicks

    // Function to scroll to a specific index
    const scrollToIndex = useCallback((index: number) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        // Ensure children are valid elements before proceeding
        const children = Array.from(container.children).filter(child => child instanceof HTMLElement) as HTMLElement[];
        const targetElement = children[index];

        if (targetElement) {
            const containerPaddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft) || 0;
            const scrollLeftTarget = targetElement.offsetLeft - containerPaddingLeft; // Adjust for container padding

            // Debounce scroll handler during programmatic scroll
            if (interactionDebounceTimeout.current) {
                clearTimeout(interactionDebounceTimeout.current);
            }
            // Prevent the scroll handler from immediately overriding the activeIndex set here
            interactionDebounceTimeout.current = setTimeout(() => {
                interactionDebounceTimeout.current = null;
            }, 150); // Adjust timeout as needed

            container.scrollTo({
                left: scrollLeftTarget,
                behavior: "smooth",
            });

            // Update active index immediately for responsive UI (dots/arrows)
            setActiveIndex(index);
        }
    }, []); // Dependencies remain the same as the logic doesn't depend on `testimonials` directly

    // Handler for Previous button click
    const handlePrevClick = useCallback(() => {
        const newIndex = activeIndex - 1;
        if (newIndex >= 0) {
            scrollToIndex(newIndex);
        }
    }, [activeIndex, scrollToIndex]); // Dependencies are correct

    // Handler for Next button click
    const handleNextClick = useCallback(() => {
        const newIndex = activeIndex + 1;
        if (newIndex < selectedTestimonials.length) {
            scrollToIndex(newIndex);
        }
    }, [activeIndex, selectedTestimonials.length, scrollToIndex]); // Dependencies are correct

    // Updated scroll handler to determine active index based on scroll position
    const handleScroll = useCallback(() => {
        // If an interaction (arrow click) is happening, ignore scroll events temporarily
        if (interactionDebounceTimeout.current) return;

        if (!containerRef.current) return;

        const container = containerRef.current;
        const scrollLeft = container.scrollLeft;
        const clientWidth = container.clientWidth;

        // Calculate the scroll position corresponding to the center of the container viewport
        const containerCenterScroll = scrollLeft + clientWidth / 2;
        let closestIndex = 0;
        let minDiff = Infinity;

         // Filter to ensure we only process element nodes that are likely cards
         const cardElements = Array.from(container.children).filter(child =>
             child instanceof HTMLElement && child.classList.contains('snap-center') // Assuming your Card component applies this class
         ) as HTMLElement[];


        cardElements.forEach((cardElement, index) => {
            // Calculate the center position of the card relative to the container's scroll position
            const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
            const diff = Math.abs(cardCenter - containerCenterScroll);

            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = index;
            }
        });
        // Only update state if the determined index is different from the current one
        setActiveIndex(prevIndex => prevIndex !== closestIndex ? closestIndex : prevIndex);

    }, [selectedTestimonials.length]); // Dependency is correct

    // Effect to attach scroll and resize listeners
    useEffect(() => {
        const container = containerRef.current;
        if (container && selectedTestimonials.length > 0) {
            // Add a small delay before initial calculation to allow layout stabilization
            const timer = setTimeout(() => {
                handleScroll(); // Call handleScroll initially to set the correct active index
            }, 100);

            container.addEventListener("scroll", handleScroll, { passive: true });
            window.addEventListener("resize", handleScroll);

            return () => {
                clearTimeout(timer);
                container.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleScroll);
                if (interactionDebounceTimeout.current) {
                    clearTimeout(interactionDebounceTimeout.current);
                }
            };
        }
         // Clean up listeners even if testimonials become empty
        return () => {
             const container = containerRef.current;
             if (container) {
                 container.removeEventListener("scroll", handleScroll);
             }
             window.removeEventListener("resize", handleScroll);
             if (interactionDebounceTimeout.current) {
                 clearTimeout(interactionDebounceTimeout.current);
             }
         };
    }, [handleScroll, selectedTestimonials.length]); // Dependencies are correct

    // Add a useEffect to scroll to index 0 when testimonials data changes (e.g., switching views)
    useEffect(() => {
        // Use a timeout to ensure the DOM is updated after testimonials change
        const resetTimer = setTimeout(() => {
             scrollToIndex(0); // Scroll to the first testimonial
        }, 50); // Small delay

        return () => clearTimeout(resetTimer);
    }, [testimonials, scrollToIndex]); // Re-run when the testimonials prop changes

    // --- JSX Structure ---
    return (
        <div className="relative p-4 md:p-8">
            {/* Style tag to hide webkit scrollbar */}
            <style>{`
                .testimonial-scroll-container::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
             {/* Display a loading message or spinner if testimonials are empty initially? */}
             {selectedTestimonials.length === 0 ? (
                 <p className="text-center text-gray-500">Loading testimonials...</p>
             ) : (
             <> {/* Use a fragment if you have multiple top-level elements */}
                <div
                    className="flex overflow-x-auto space-x-4 py-4 px-4 scroll-smooth snap-mandatory snap-x scrollbar-hide scroll-padding-x-4 testimonial-scroll-container"
                    ref={containerRef}
                    style={{
                        scrollbarWidth: "none", // Firefox
                        msOverflowStyle: "none", // IE/Edge
                    }}
                >
                    {selectedTestimonials.map((testimonial, index) => (
                        // Ensure each card has a unique, stable key if possible, otherwise index is fallback
                        <Card key={testimonial.author ? `${testimonial.author}-${index}` : index} className="flex-shrink-0 w-full md:w-11/12 lg:w-10/12 snap-center"> {/* Adjust width as needed */}
                            <div className="flex flex-col md:flex-row items-center md:items-start h-full p-4"> {/* Added padding within card */}
                                {/* Image Container */}
                                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
                                    {testimonial.imageUrl && (
                                        // Using simple <img> tag as per your original code, but consider Next.js <Image> for optimization
                                        <img
                                            src={testimonial.imageUrl}
                                            alt={`Headshot of ${testimonial.author.split(',')[0].slice(1)}`} // Better alt text
                                            className="object-cover w-full h-full" // Use w-full h-full with object-cover in the relative container
                                            // If using Next.js <Image>: fill={true}, sizes="(max-width: 768px) 96px, 128px", priority={index < 2}
                                        />
                                    )}
                                     {!testimonial.imageUrl && (
                                        // Optional: Placeholder or default image if no image URL
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">No Image</div>
                                     )}
                                </div>

                                {/* Text Container */}
                                <div className="flex-grow flex flex-col justify-center"> {/* Centered text vertically */}
                                    <p className="text-base md:text-lg italic text-gray-800 mb-4 text-center md:text-left"> {/* Slightly smaller base text */}
                                        &ldquo;{testimonial.text}&rdquo;
                                    </p>
                                    <p className="text-sm md:text-base font-semibold text-gray-600 text-center md:text-left"> {/* Slightly smaller base text */}
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Navigation Controls: Arrows and Dots */}
                {selectedTestimonials.length > 1 && ( // Only show controls if there's more than one testimonial
                     <div className="flex justify-center items-center mt-6 space-x-4">
                         {/* Left Arrow Button */}
                         <button
                             onClick={handlePrevClick}
                             disabled={activeIndex === 0}
                             className="p-2 rounded-full text-gray-600 hover:bg-gray-200 active:bg-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                             aria-label="Previous testimonial"
                         >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                             </svg>
                         </button>

                         {/* Dots Pagination */}
                         <div className="flex justify-center items-center space-x-2">
                             {selectedTestimonials.map((_, index) => (
                                 <span
                                     key={index}
                                     className={`block w-2.5 h-2.5 rounded-full transition-colors duration-300 ${ // Made dots slightly smaller
                                         index === activeIndex ? "bg-gray-800 scale-110" : "bg-gray-300 hover:bg-gray-400" // Added scale effect for active
                                     } cursor-default`} // Removed pointer cursor as dots are not clickable
                                     title={`Testimonial ${index + 1} of ${selectedTestimonials.length}`}
                                 />
                             ))}
                         </div>

                         {/* Right Arrow Button */}
                         <button
                             onClick={handleNextClick}
                             disabled={activeIndex === selectedTestimonials.length - 1}
                             className="p-2 rounded-full text-gray-600 hover:bg-gray-200 active:bg-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                             aria-label="Next testimonial"
                         >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                             </svg>
                         </button>
                     </div>
                )}
              </>
             )}
        </div>
    );
}
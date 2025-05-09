"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "@/components/Card";
//import Image from "next/image"

const testimonials = [
    // homepage testimonials
    [
        {
            text: "While Georgia now has an AI policy in effect, the massive boom of generative AI has brought with it specific challenges. This Spring, Paragon Fellows worked with the GTA to recommend enforcement and education mechanisms to address generative AI's potential effect on government operations at the state level. The work produced by Paragon will help inform a GenAI policy that contains guidelines for the use of generative AI by all 40,000 state employees.",
            author: "—Nikhil Deshpande, Chief Digital and AI Officer, Georgia Technology Authority",
            imageUrl: "/Headshots/NikhilD.png", 
        },
        {
            text: "Paragon is truly committed to learning and provides countless resources to help you explore different paths of interest. Most importantly, it prepares you for working in actual policy spaces and allows you to harness your own skills. I am proud to be a part of an organization that is so focused on community building and community impact—which makes the work that we do as Fellows especially rewarding.",
            author: "—Noreen Ahmed, Fall 2024 Georgia and Spring 2025 Madison Fellow",
            imageUrl: "/Headshots/NoreenA.png", 
        },
        {
            text: "Paragon Fellows helped us with Language Access—specifically, in support of the Office of New Americans created in 2024 to assist immigrants in the St. Louis area. Their research laid the groundwork for developing a comprehensive language access plan for our city, and their final report included actionable recommendations that will undoubtedly improve language access services for our residents.",
            author: "—Simon Huang, Chief Technology Officer, City of St. Louis, Missouri",
            imageUrl: "/Headshots/SimonH.png", 
        },
        {
            text: "Paragon helped me view tech policy not just as a regulatory framework, but also as a dynamic tool for shaping innovation. I'm grateful for the opportunity to work directly with a government partner and gain firsthand insight into their needs and challenges, something that is hard to experience as a college student.",
            author: "—Aditya Seth, Spring 2025 Santa Clara County Fellow",
            imageUrl: "/Headshots/AdityaS.jpg", 
        },
        {
            text: "Paragon Fellows helped our city create a comprehensive AI procurement framework, establishing a structured approach for evaluating AI technologies against core values such as privacy, security, equity, and transparency. This framework will directly benefit over 15,000 residents and ensure all future AI applications align with ethical standards and serve the public responsibly.",
            author: "—Melanie McDonough, Chief Innovation Officer, City of Lebanon, New Hampshire",
            imageUrl: "/Headshots/MelanieM.png", 
        },
        {
            text: "Paragon has been immensely fulfilling and reaffirmed my commitment to responsible technological advancement. I appreciated directly working with our government partner and being some of the first in helping San José build capacity against generative AI miscommunication.",
            author: "—Isabelle Anzabi, Spring 2024 San José Fellow",
            imageUrl: "/Headshots/IsabelleA.png", 
        },
    ],
    // Gov partner page testimonials
    [
        {
            text: "The team was highly engaged, efficient, and consistently motivated, which made the collaboration both productive and enjoyable... [The Fellows] brought the right mix of skills and competencies needed to successfully tackle nuanced and complex projects.",
            author: "—Christopher Paul, Chief Privacy Officer, County of Santa Clara, California",
            imageUrl: "/Headshots/ChrisP.png", 
        },
        {
            text: "Paragon Fellows helped us with Language Access—specifically, in support of the Office of New Americans created in 2024 to assist immigrants in the St. Louis area. Their research laid the groundwork for developing a comprehensive language access plan for our city, and their final report included actionable recommendations that will undoubtedly improve language access services for our residents.",
            author: "—Simon Huang, Chief Technology Officer, City of St. Louis, Missouri",
            imageUrl: "/Headshots/SimonH.png", 
        },
        {
            text: "Paragon Fellows helped our city create a comprehensive AI procurement framework, establishing a structured approach for evaluating AI technologies against core values such as privacy, security, equity, and transparency. This framework will directly benefit over 15,000 residents and ensure all future AI applications align with ethical standards and serve the public responsibly.",
            author: "—Melanie McDonough, Chief Innovation Officer, City of Lebanon, New Hampshire",
            imageUrl: "/Headshots/MelanieM.png", 
        },
        {
            text: "While Georgia now has an AI policy in effect, the massive boom of generative AI has brought with it specific challenges. This Spring, Paragon Fellows worked with the GTA to recommend enforcement and education mechanisms to address generative AI's potential effect on government operations at the state level. The work produced by Paragon will help inform a GenAI policy that contains guidelines for the use of generative AI by all 40,000 state employees.",
            author: "—Nikhil Deshpande, Chief Digital and AI Officer, Georgia Technology Authority",
            imageUrl: "/Headshots/NikhilD.png", 
        },
        {
            text: "[Paragon's] work provides the foundation material for us to develop our AI Literacy Training. Without this work, we would be significantly delayed in moving forward with this type of training, and I am not sure when the program development would have started.",
            author: "—Stephanie Deitrick, Chief Data & Analytics Officer, City of Tempe, Arizona",
            imageUrl: "/Headshots/StephanieD.png", 
        }
    ],
    // Student page testimonials
    [
        {
            text: "Paragon has been one of the most transformative experiences of my academic journey so far. The work environment is filled with passionate, driven individuals, and the amount of growth I’ve had—whether in research skills, policy analysis, or just confidence in my abilities—has been incredible. Before this, I had never done such extensive research or extracted valuable insights in such a structured way, but this experience pushed me to develop skills I never knew I had. The exposure, mentorship, and hands-on engagement with policymakers made it clear that, even as a student, I can make an impact.",
            author: "—Bhoomika Gupta, Spring 2025 Albuquerque Fellow",
            imageUrl: "/Headshots/BhoomikaG.jpg", 
        },
        {
            text: "As a nontraditional and early career tech policy student, I know how critical it is for students to have early exposure to the tech policy sector; however, the barrier to obtain experience is not often accessible and sometimes not achievable. Paragon provides the opportunity to have hands-on experience working with a government partner on a tech policy initiative—a reality that I did not think was possible. To have the incredible privilege to conduct in-depth research on a real-world tech policy challenge, it reaffirms my passions about public service, making a difference in their community, and learning how to build leadership.",
            author: "—Yvette Vargas, Spring 2025 Albuquerque Project Lead",
            imageUrl: "/Headshots/YvetteV.png", 
        },
        {
            text: "Paragon is truly committed to learning and provides countless resources to help you explore different paths of interest. Most importantly, it prepares you for working in actual policy spaces and allows you to harness your own skills. I am proud to be a part of an organization that is so focused on community building and community impact—which makes the work that we do as Fellows especially rewarding.",
            author: "—Noreen Ahmed, Fall 2024 Georgia and Spring 2025 Madison Fellow",
            imageUrl: "/Headshots/NoreenA.png", 
        },
        {
            text: "Local governments are heavily understaffed. Some of these offices don't have the resources to learn about future technologies, so any opportunity to get students involved is really great. These Fellows didn't just bridge this gap—they provided a creative, academic perspective that only students could bring to the table.",
            author: "—Jude Miller, Spring 2024 St. Louis Project Lead",
            imageUrl: "/Headshots/JudeM.png", 
        },
        {
            text: "The fellowship has given me that rare gift of seeing abstract principles materialize into community impact, all while maintaining that delicate balance between idealism and pragmatism that every effective policy professional must master.",
            author: "—Catherine Schunk, Spring 2025 U.S. Department of State Fellow",
            imageUrl: "/Headshots/CateS.png", 
        },
        {
            text: "Paragon helped me view tech policy not just as a regulatory framework, but also as a dynamic tool for shaping innovation. I'm grateful for the opportunity to work directly with a government partner and gain firsthand insight into their needs and challenges, something that is hard to experience as a college student.",
            author: "—Aditya Seth, Spring 2025 Santa Clara County Fellow",
            imageUrl: "/Headshots/AdityaS.jpg", 
        },
        {
            text: "Paragon has been immensely fulfilling and reaffirmed my commitment to responsible technological advancement. I appreciated directly working with our government partner and being some of the first in helping San José build capacity against generative AI miscommunication.",
            author: "—Isabelle Anzabi, Spring 2024 San José Fellow",
            imageUrl: "/Headshots/IsabelleA.png", 
        }
    ],
];
export default function Testimonials({ list }: { list: number }) {
    const selectedTestimonials = testimonials[list] || []; // Default to empty array if list index is invalid
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const interactionDebounceTimeout = useRef<NodeJS.Timeout | null>(null); // To prevent scroll handler fighting arrow clicks

    // Function to scroll to a specific index
    const scrollToIndex = useCallback((index: number) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const children = Array.from(container.children);
        const targetElement = children[index] as HTMLElement;

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
            }, 150); // Adjust timeout as needed (slightly longer than smooth scroll typically takes)


            container.scrollTo({
                left: scrollLeftTarget,
                behavior: "smooth",
            });

            // Update active index immediately for responsive UI (dots/arrows)
            setActiveIndex(index);
        }
    }, []);

    // Handler for Previous button click
    const handlePrevClick = () => {
        const newIndex = activeIndex - 1;
        if (newIndex >= 0) {
            scrollToIndex(newIndex);
        }
    };

    // Handler for Next button click
    const handleNextClick = () => {
        const newIndex = activeIndex + 1;
        if (newIndex < selectedTestimonials.length) {
            scrollToIndex(newIndex);
        }
    };

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

        Array.from(container.children).forEach((child, index) => {
            if (child.nodeType === 1) { // Ensure it's an element node
                const cardElement = child as HTMLElement;
                // Calculate the center position of the card relative to the container's scroll position
                const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
                const diff = Math.abs(cardCenter - containerCenterScroll);

                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = index;
                }
            }
        });
        // Only update state if the determined index is different from the current one
        setActiveIndex(prevIndex => prevIndex !== closestIndex ? closestIndex : prevIndex);

    }, [selectedTestimonials.length]); // Depend only on the length

    // Effect to attach scroll and resize listeners
    useEffect(() => {
        const container = containerRef.current;
        if (container && selectedTestimonials.length > 0) {
            // Add a small delay before initial calculation to allow layout stabilization
            const timer = setTimeout(() => {
                handleScroll(); // Call handleScroll initially
            }, 100);

            container.addEventListener("scroll", handleScroll, { passive: true }); // Use passive listener for scroll performance
            window.addEventListener("resize", handleScroll);

            return () => {
                clearTimeout(timer);
                container.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleScroll);
                 if (interactionDebounceTimeout.current) {
                    clearTimeout(interactionDebounceTimeout.current); // Clear timeout on unmount
                }
            };
        }
    }, [handleScroll, selectedTestimonials.length]); // Re-run if handleScroll or length changes


    // --- JSX Structure ---
    return (
        <div className="relative p-4 md:p-8">
            {/* Style tag to hide webkit scrollbar */}
            <style>{`
                .testimonial-scroll-container::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
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
                    <Card key={testimonial.author || index} className="flex-shrink-0 w-full md:w-11/12 lg:w-10/12 snap-center"> {/* Adjust width as needed */}
                        <div className="flex flex-col md:flex-row items-center md:items-start h-full p-4"> {/* Added padding within card */}
                            {/* Image Container */}
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
                                {testimonial.imageUrl && (
									
                                    //<Image 
									<img
                                        src={testimonial.imageUrl}
                                        alt={`Headshot of ${testimonial.author.split(',')[0]}`} // Better alt text
                                        //fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 96px, 128px" // Corrected sizes based on h/w
                                        //priority={index < 2} // Prioritize loading first images
                                    />
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
        </div>
    );
}
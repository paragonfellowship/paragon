"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "@/components/Card";
import Image from "next/image"

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
            text: "As a nontraditional and early career tech policy student, I know how critical it is for students to have early exposure to the tech policy sector; however, the barrier to obtain experience is not often accessible and sometimes not achievable. Paragon provides the opportunity to have hands-on experience working with a government partner on a tech policy initiative—a reality that I did not think was possible. To have the incredible privilege to conduct in-depth research on a real-world tech policy challenge, it reaffirms my passions about public service, making a difference in their community, and learning how to build leadership.",
            author: "—Yvette Vargas, Spring 2025 Albuquerque Project Lead",
            imageUrl: "/Headshots/YvetteV.png", 
        },
        {
            text: "Paragon Fellows helped our city create a comprehensive AI procurement framework, establishing a structured approach for evaluating AI technologies against core values such as privacy, security, equity, and transparency. This framework will directly benefit over 15,000 residents and ensure all future AI applications align with ethical standards and serve the public responsibly.",
            author: "—Melanie McDonough, Chief Innovation Officer, City of Lebanon, New Hampshire",
            imageUrl: "/Headshots/MelanieM.png", 
        },
        {
            text: "The fellowship has given me that rare gift of seeing abstract principles materialize into community impact, all while maintaining that delicate balance between idealism and pragmatism that every effective policy professional must master.",
            author: "—Catherine Schunk, Spring 2025 U.S. Department of State Fellow",
            imageUrl: "/Headshots/CateS.png", 
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
            text: "Paragon is truly committed to learning and provides countless resources to help you explore different paths of interest. Most importantly, it prepares you for working in actual policy spaces and allows you to harness your own skills. I am proud to be a part of an organization that is so focused on community building and community impact—which makes the work that we do as Fellows especially rewarding.",
            author: "—Noreen Ahmed, Fall 2024 Georgia and Spring 2025 Madison Fellow",
            imageUrl: "/Headshots/NoreenA.png", 
        },
        {
            text: "Paragon has been immensely fulfilling and reaffirmed my commitment to responsible technological advancement. I appreciated directly working with our government partner and being some of the first in helping San José build capacity against generative AI miscommunication.",
            author: "—Isabelle Anzabi, Spring 2024 San José Fellow",
            imageUrl: "/Headshots/IsabelleA.png", 
        }
    ],
];

export default function Testimonials({ list }: { list: number }) {
  const selectedTestimonials = testimonials[list];
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;

    const isAtStart = scrollLeft < 1;
    const isAtEnd = Math.abs(scrollLeft - (scrollWidth - clientWidth)) < 1;

    let closestIndex = 0;

    if (isAtStart) {
      closestIndex = 0;
    } else if (isAtEnd) {
      // Ensure there are testimonials before setting to last index
      if (selectedTestimonials.length > 0) {
        closestIndex = selectedTestimonials.length - 1;
      } else {
        closestIndex = 0; // Default to 0 if no testimonials
      }
    } else {
      const containerCenterScroll = scrollLeft + clientWidth / 2;
      let minDiff = Infinity;

      Array.from(container.children).forEach((child, index) => {
        if (child.nodeType === 1) {
          const cardElement = child as HTMLElement;
          const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
          const diff = Math.abs(cardCenter - containerCenterScroll);

          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = index;
          }
        }
      });
    }

    setActiveIndex(closestIndex);
  }, [selectedTestimonials.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      handleScroll(); // Call handleScroll initially to set the correct active index on mount
      container.addEventListener("scroll", handleScroll);
      // Add a resize listener as card positions/widths might change on resize
      window.addEventListener("resize", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div className="relative p-4 md:p-8">
      {/* Add style tag to hide webkit scrollbar */}
      <style>{`
                .testimonial-scroll-container::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
      <div
        className="flex overflow-x-auto space-x-4 py-4 px-4 scroll-smooth snap-mandatory snap-x scrollbar-hide scroll-padding-x-4 testimonial-scroll-container" // Added custom class for targeting
        ref={containerRef}
        style={{
          // Inline styles for Firefox and IE/older Edge
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {selectedTestimonials.map((testimonial, index) => (
          <Card key={index} className="flex-shrink-0 w-full snap-center">
            {/* Modified the main content flex container.
              On mobile (default), it's a column layout (flex-col).
              On medium screens and up (md:), it becomes a row layout (md:flex-row).
              items-start aligns items to the top in a column and to the left in a row.
            */}
            <div className="flex flex-col md:flex-row items-center md:items-start h-full">
              {/* Image container div.
                flex-shrink-0 prevents the image from shrinking.
                mb-4 adds margin-bottom on mobile.
                md:mb-0 md:mr-6 removes margin-bottom and adds margin-right on medium+ screens.
                relative is needed for the Next.js Image component with fill.
                h-32 w-24 sets the size on mobile.
                md:h-32 md:w-24 maintains the size on medium+ screens.
                rounded-full makes it a circle.
                overflow-hidden clips the image to the rounded shape.
                shadow-lg adds a shadow.
                Added mx-auto to center the image horizontally on mobile.
                md:mx-0 removes the auto horizontal margin on medium+ screens.
              */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 relative h-32 w-24 md:h-32 md:w-24 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
                {testimonial.imageUrl && (
                  <Image
                    src={testimonial.imageUrl}
                    alt={`${testimonial.author}`}
                    // Use fill to make the image take the size of the parent div
                    fill
                    // object-cover ensures the image covers the oval container
                    className="object-cover"
                    // Add sizes prop for performance with fill
                    // Adjust sizes based on container widths (96px and 128px)
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                )}
              </div>

              {/* Text div */}
              <div className="flex-grow flex flex-col justify-between">
                <p className="text-lg md:text-xl italic text-black mb-4 text-center md:text-left">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-base md:text-lg font-semibold text-gray-600 text-center md:text-left">
                  {testimonial.author}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Dots Pagination - now purely visual spans */}
      <div className="flex justify-center mt-6 space-x-2">
        {selectedTestimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-300"
            } cursor-default`}
            title={`Testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  [ //homepage testimonials
    {
      text: "While Georgia now has an AI policy in effect, the massive boom of generative AI has brought with it specific challenges. This Spring, Paragon Fellows worked with the GTA to recommend enforcement and education mechanisms to address generative AI's potential effect on government operations at the state level. The work produced by Paragon will help inform a GenAI policy that contains guidelines for the use of generative AI by all 40,000 state employees.",
      author: "—Nikhil Deshpande, Chief Digital and AI Officer, Georgia Technology Authority",
    },
	{
      text: "Paragon is truly committed to learning and provides countless resources to help you explore different paths of interest. Most importantly, it prepares you for working in actual policy spaces and allows you to harness your own skills. I am proud to be a part of an organization that is so focused on community building and community impact—which makes the work that we do as Fellows especially rewarding.",
      author: "—Noreen Ahmed, Fall 2024 Georgia and Spring 2025 Madison Fellow",
    },
    {
      text: "Paragon Fellows helped us with Language Access—specifically, in support of the Office of New Americans created in 2024 to assist immigrants in the St. Louis area. Their research laid the groundwork for developing a comprehensive language access plan for our city, and their final report included actionable recommendations that will undoubtedly improve language access services for our residents.",
      author: "—Simon Huang, Chief Technology Officer, City of St. Louis, Missouri",
    },
    {
      text: "Local governments are heavily understaffed. Some of these offices don't have the resources to learn about future technologies, so any opportunity to get students involved is really great. These Fellows didn't just bridge this gap—they provided a creative, academic perspective that only students could bring to the table.",
      author: "—Jude Miller, Spring 2024 St. Louis Project Lead",
    },
  ],
  [ // Gov partner page testimonials
	{
      text: "Paragon Fellows helped our city create a comprehensive AI procurement framework, establishing a structured approach for evaluating AI technologies against core values such as privacy, security, equity, and transparency. This framework will directly benefit over 15,000 residents and ensure all future AI applications align with ethical standards and serve the public responsibly.",
      author: "—Melanie McDonough, Chief Innovation Officer, City of Lebanon, New Hampshire",
    },
    {
      text: "Paragon Fellows helped us with Language Access—specifically, in support of the Office of New Americans created in 2024 to assist immigrants in the St. Louis area. Their research laid the groundwork for developing a comprehensive language access plan for our city, and their final report included actionable recommendations that will undoubtedly improve language access services for our residents.",
      author: "—Simon Huang, Chief Technology Officer, City of St. Louis, Missouri",
    },
    {
      text: "While Georgia now has an AI policy in effect, the massive boom of generative AI has brought with it specific challenges. This Spring, Paragon Fellows worked with the GTA to recommend enforcement and education mechanisms to address generative AI's potential effect on government operations at the state level. The work produced by Paragon will help inform a GenAI policy that contains guidelines for the use of generative AI by all 40,000 state employees.",
      author: "—Nikhil Deshpande, Chief Digital and AI Officer, Georgia Technology Authority",
    },
	{
      text: "The team was highly engaged, efficient, and consistently motivated, which made the collaboration both productive and enjoyable... [The Fellows] brought the right mix of skills and competencies needed to successfully tackle nuanced and complex projects.",
      author: "—Christopher Paul, Chief Privacy Officer, County of Santa Clara, California",
    },
	{
      text: "[Paragon's] work provides the foundation material for us to develop our AI Literacy Training. Without this work, we would be significantly delayed in moving forward with this type of training, and I am not sure when the program development would have started.",
      author: "—Stephanie Deitrick, Chief Data & Analytics Officer, City of Tempe, Arizona",
    },
  ],
[ //Student page testimonials
	{
      text: "Paragon has been immensely fulfilling and reaffirmed my commitment to responsible technological advancement. I appreciated directly working with our government partner and being some of the first in helping San José build capacity against generative AI miscommunication.",
      author: "—Isabelle Anzabi, Spring 2024 San José Fellow",
    },
	{
      text: "As a nontraditional and early career tech policy student, I know how critical it is for students to have early exposure to the tech policy sector; however, the barrier to obtain experience is not often accessible and sometimes not achievable. Paragon provides the opportunity to have hands-on experience working with a government partner on a tech policy initiative—a reality that I did not think was possible. To have the incredible privilege to conduct in-depth research on a real-world tech policy challenge, it reaffirms my passions about public service, making a difference in their community, and learning how to build leadership.",
      author: "—Yvette Vargas, Spring 2025 Albuquerque Project Lead",
    },
	{
      text: "Paragon is truly committed to learning and provides countless resources to help you explore different paths of interest. Most importantly, it prepares you for working in actual policy spaces and allows you to harness your own skills. I am proud to be a part of an organization that is so focused on community building and community impact—which makes the work that we do as Fellows especially rewarding.",
      author: "—Noreen Ahmed, Fall 2024 Georgia and Spring 2025 Madison Fellow",
    },
	{
      text: "Paragon has been one of the most transformative experiences of my academic journey so far. The work environment is filled with passionate, driven individuals, and the amount of growth I’ve had—whether in research skills, policy analysis, or just confidence in my abilities—has been incredible. Before this, I had never done such extensive research or extracted valuable insights in such a structured way, but this experience pushed me to develop skills I never knew I had. The exposure, mentorship, and hands-on engagement with policymakers made it clear that, even as a student, I can make an impact.",
      author: "—Bhoomika Gupta, Spring 2025 Albuquerque Fellow",
    },
	{
      text: "Local governments are heavily understaffed. Some of these offices don't have the resources to learn about future technologies, so any opportunity to get students involved is really great. These Fellows didn't just bridge this gap—they provided a creative, academic perspective that only students could bring to the table.",
      author: "—Jude Miller, Spring 2024 St. Louis Project Lead",
    },
	{
      text: "The fellowship has given me that rare gift of seeing abstract principles materialize into community impact, all while maintaining that delicate balance between idealism and pragmatism that every effective policy professional must master.",
      author: "—Catherine Schunk, Spring 2025 U.S. Department of State Fellow",
    },
]


];

export default function Testimonials({
	list}: {
	list: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerAnimation = (callback: () => void) => {
    setFade(true);
    setTimeout(() => {
      callback();
      setFade(false);
    }, 300);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      triggerAnimation(() =>
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials[list].length - 1 ? 0 : prevIndex + 1
        )
      );
    }, 20000);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    resetInterval();
    triggerAnimation(() =>
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials[list].length - 1 ? 0 : prevIndex + 1
      )
    );
  };

  const prevTestimonial = () => {
    resetInterval();
    triggerAnimation(() =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials[list].length - 1 : prevIndex - 1
      )
    );
  };

  return (
    <div className="relative p-4 md:p-8">
      {/* Testimonial Text */}
      <p
        className={`min-h-64 h-auto text-lg md:text-2xl italic text-black pb-3 md:pb-5 transition-opacity duration-300 max-w-[85%] md:max-w-full mx-auto text-center ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        &ldquo;{testimonials[list][currentIndex].text}&rdquo;
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Navigation Buttons */}
        <div className="flex px-5 mt-4 md:mt-0">
          <div className="pr-5">
            <button
              onClick={prevTestimonial}
              className="text-gray-500 text-2xl hover:text-black w-12 h-12 flex items-center justify-center"
            >
              ‹
            </button>
          </div>
          <div>
            <button
              onClick={nextTestimonial}
              className="text-gray-500 text-2xl hover:text-black w-12 h-12 flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>

        {/* Author */}
        <p
          className={`h-8 text-base md:text-lg font-semibold text-gray-600 transition-opacity duration-300 mb-2 md:mb-0 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {testimonials[list][currentIndex].author}
        </p>
      </div>
    </div>
  );
}
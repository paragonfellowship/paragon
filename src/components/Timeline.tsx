import React from "react";
import Image from "next/image";
// type TimelineEvent = {
//   date: string;
//   title: string;
//   description: string;
// };
//Timeline assets
import TimelineDesktop from '@/assets/Desktop Timeline - Fall.svg';
import TimelineMobile from '@/assets/Mobile Timeline - Fall.svg';

const timelineAlt = "Cohort events arranged in chronological order. Application phase dates: April 6th: Applications open. April 19th: Info Session 1. May 3rd: Info Session 2. MAy 7th: Office Hours. May 9th: Applications Close. MAy 16th: Group Interview Invitations. May 19th-23rd: Group Interview. May 25th: Final Notifications. Project Phase: May 29th: Opening Ceremony. May 31st-June 1st: Policy Bootcamp. Mid-July: Midpoint Presentation. September 5th: Closing ceremony"

export default function Timeline(/*{ events }: { events: TimelineEvent[] }*/) {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Desktop Timeline */}
      <div className="hidden md:flex w-full">
        <Image src={TimelineDesktop} alt={timelineAlt}/>
        {/* Old code that dynamically rendered the timeline based on a child array of events. cool idea, but svgs are easier to get consistent
        Line connecting the events
        <div className="absolute transform -translate-y-8 w-full h-1 bg-gray-200 z-0"></div>
        
        Render each event
        {events.map((event, index) => (
          <div key={index} className="relative z-10 flex flex-col mt-1 items-center">
            Diamond Icon
            <div className="w-4 h-4 bg-blue-500 transform rotate-45 mb-2"></div>
            Event Date
            <p className="text-sm font-bold">{event.date}</p>
            Event Title
            <p className="text-sm font-light text-center max-w-[70%]">{event.title}</p>
            Event Description
            <p className="text-sm text-gray-600 text-center">{event.description}</p>
          </div>
        ))} */}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden">
      <Image src={TimelineMobile} alt={timelineAlt}/>
        {/* Vertical line
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200"></div>
        
        Render each event
        {events.map((event, index) => (
          <div key={index} className="flex items-start pl-12 relative">
            Diamond Icon
            <div className="absolute left-2.5 top-1 w-4 h-4 bg-blue-500 transform rotate-45"></div>
            
            Event Content
            <div className="flex flex-col">
              Event Date
              <p className="text-sm font-bold mb-1">{event.date}</p>
              Event Title
              <p className="text-sm font-light mb-1">{event.title}</p>
              Event Description
              {event.description && (
                <p className="text-sm text-gray-600">{event.description}</p>
              )}
            </div>
          </div>
        ))}*/}
      </div>
    </div>
  );
}
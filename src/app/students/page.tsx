import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {Subheading, Text } from '@/components/Typography';
import BgGrid from '@/components/BgGrid';
import { RiArrowDownLine } from 'react-icons/ri';
import GrayDivider from '@/components/GrayDivider';
import FAQuestion from '@/components/FAQuestion';
import Timeline from '@/components/Timeline';
import Navbar from '@/components/Navbar';
import {FA_APP_URL , INFO_SESSION_URL} from '@/app/constants';


const sections = [
  { id: "expectations", title: "PROJECT EXPECTATIONS" },
  { id: "eligibility", title: "ELIGIBILITY" },
  { id: "process", title: "APP PROCESS" },
  { id: "timeline", title: "TIMELINE" },
  { id: "dates", title: "IMPORTANT DATES" },
  { id: "faq", title: "FAQ" },
];

// const events = [
//   {
//     date: "April 6th",
//     title: "Applications Open",
//     description: "",
//   },
//   {
//     date: "May 9th",
//     title: "Applications Close",
//     description: "",
//   },
//   {
//     date: "May 25th",
//     title: "Final Decisions Announced",
//     description: "",
//   },
//   {
//     date: "May 29th-June 1st",
//     title: "Opening Ceremony and Bootcamp",
//     description: "",
//   },
//   {
//     date: "September 5th",
//     title: "End of Cohort",
//     description: "",
//   },
// ];

export default function About() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <TopBar />
      <div className="background-container min-h-[100svh] flex flex-col">
        <BgGrid />
        <div className="w-full px-4 md:px-0 flex-1 flex flex-row md:block">
          <div className="flex-1 flex flex-col justify-center md:block">
            <Text className="fade-in md:pt-[20%] px-4 md:pl-[12%] text-xl md:text-3xl text-center md:text-left">
              Paragon offers semester-based tech policy projects (Spring, Summer, Fall) for
              <span className="font-semibold"> university students and new grads</span> to work on real policy issues at the
              <span className="font-semibold"> state and local level.</span>
            </Text>

            <Text className="fade-in text-xl md:text-3xl mt-16 md:mt-[5%] mb-12 md:mb-5 text-center md:text-right md:ml-auto md:mr-20">
              Applications for the Summer 2025 cohort are now open.
            </Text>

            <div className="flex justify-center md:justify-end md:pr-[6%] mb-20 md:mb-0">
              <Button 
                className="fade-in"
                style="secondary" 
                inNewTab 
                url={FA_APP_URL}
              >
                apply now
              </Button>
              <Button 
                className="fade-in ml-5"
                style="secondary" 
                inNewTab 
                url={INFO_SESSION_URL}
              >
                Sign up for an info session
              </Button>
            </div>
          </div>
        </div>

        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7vh] left-0 z-10 w-full flex justify-center text-4xl">
          <RiArrowDownLine />
        </div>

        {/* <div className="absolute -bottom-1 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-dark md:block hidden" /> */}
        
        <div className="absolute top-0 left-0 w-full h-full bg-[#050022] md:bg-opacity-65 bg-opacity-40 -z-10" />
      </div>
      
      <Section>
        <Navbar sections={sections} />
      </Section>

      <Section id="expectations">
  <Subheading className='text-3xl md:text-5xl mb-4'>Project Expectations</Subheading>
  <GrayDivider />
  <Text className="text-base md:text-lg">The Paragon Policy Fellowship connects students and recent graduates with opportunities in the science and tech policy space. Fellows typically spend 5–10 hours a week researching and writing a policy brief on key issues for their state or local governments. Our Fellows work on pressing tech policy issues such as broadband infrastructure, renewable energy, and AI procurement. The Fellowship is meant to create a community of future tech policy leaders, and our project-based experiences are designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement.</Text>
  <Text className='font-semibold mt-6'>Fellows in good standing will be compensated with a $500 stipend.</Text>
</Section>

<Section id="eligibility">
  <Subheading className='text-3xl md:text-5xl mb-4'>Eligibility</Subheading>
  <GrayDivider />  
  <Text className="text-base md:text-lg">This Fellowship is an entry-level opportunity geared towards undergraduate/graduate students and recent graduates based in the U.S. interested in entering the tech policy space. As such, we are not expecting applicants to have extensive experience in tech policy and will be evaluating applications based on demonstrated interest in the tech policy sphere (whether it be through relevant coursework, extracurricular activities, or other lived experiences). We enthusiastically welcome applications from those of all backgrounds and are open to accepting prospective Fellows from a wide range of educational backgrounds (i.e. not restricted to any specific major).</Text>
  
  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Minimum Qualifications</Text>
  <ul className='list-disc list-inside text-base md:text-xl space-y-2 ml-4'>
    <li>Currently enrolled (including undergraduate and graduate students) or recent graduate (graduated from a degree program within the last year).</li>
    <li>Ability to consistently commit 5-10 hours of honest, focused work per week.</li>
    <li>Ability to consistently e-meet with teammates 1-2 times per week and complete work asynchronously.</li>
    <li>Reside primarily in the United States and have work authorization during the Fellowship.</li>
  </ul>

  <Text className='mt-8'>We currently offer two tracks: one for Fellows and one for Project Leads.</Text>

  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Track 1 - Fellows</Text>
  <Text className="text-base md:text-lg">For the initial application, the essays are the most important component. While previous experiences and education will help round out an application, we care the most about a potential Fellow&apos;s passion and interest in the tech policy/public service space. Fellows work with their team, Project Lead, and government partner to complete their assigned policy project.</Text>
  
  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Track 2 - Project Leads</Text>
  <Text className="text-base md:text-lg">We are seeking Project Leads with prior managerial or policy experience. Project leads serve as key liaisons between the project teams and government partners, facilitating communication and cooperation to ensure the alignment of project goals and government expectations. Leads will work closely with the government partners and the organizing team to provide support and direction to the team of Fellows. Past candidates have shown a strong ability to steer the project&apos;s direction and navigate ambiguity.</Text>
  
</Section>

<Section id="process">
  <Subheading className='text-3xl md:text-5xl mb-4'>APPLICATION PROCESS</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg">Following the initial application round, we select a group of finalists to interview in a group setting. At this stage, students will be organized into teams of 5-8 and tasked to complete a mock policy assignment over the course of one week. From there, we will select Fellows based on their demonstrated effort, engagement with the rest of the team, and ability to collaborate asynchronously. We will select Project Leads based on their leadership qualities, problem-solving ability, and effectiveness in organizing and managing projects.</Text>
  <Text className="text-base md:text-lg mt-6">If you are only applying to a Fellow position, we do not expect any previous policy expertise and will not evaluate your fit based on the deliverable. Instead, we will focus on how you approach this assignment and work as a team. If you are applying to be a Project Lead, we will be particularly interested in how you navigate challenges and motivate team members to complete the project.</Text>
</Section>

<Section id="timeline">
  <Subheading className='text-3xl md:text-5xl mb-4'>TIMELINE</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg mb-6">Below is the timeline for the Spring 2025 cohort.</Text>
  <Timeline/>
</Section>

<Section id="dates">
  <Subheading className='text-3xl md:text-5xl mb-4'>Important Dates</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg">
    We offer semester-based tech policy projects 3 times a year: Spring, Summer, and Fall. The Spring Fellowship runs from late January to early May, our Summer program runs from late May to early September, and the Fall Fellowship runs from early October to late December. Applications for each cohort will be expected to open 1-2 months in advance.
  </Text>
  <Text className="text-base md:text-lg mt-6">
    Applications are now open for the Summer 2025 cohort. The Summer 2025 Fellowship will run from <span className="font-semibold underline">May 29th to September 5th, 2025</span>.
  </Text>
  {/* <Text className="text-base md:text-lg mt-6">
    Apps for the Fall 2025 cohort will be expected to open at a later date. Join our <a href={NEWSLETTER_URL} className="underline">mailing list</a> to be notified when apps open.
  </Text> */}
</Section>

      <Section id="faq">
        <Subheading>FAQ</Subheading>
        <GrayDivider/>
        <div>
        <FAQuestion
          question = "What is the Fellowship timeline?"
          answer = "We offer semester-based tech policy projects 3 times a year: Spring, Summer, and Fall. The Spring Fellowship runs from late January to early May, our Summer program runs from late May to early September, and the Fall Fellowship runs from early October to late December. Applications for each cohort will be expected to open 1-2 months in advance."
          />
        <FAQuestion
          question = "Is there a stipend given to Fellows?"
          answer = "Yes! Fellows in good standing will receive a $500 stipend after the cohort's midpoint. Paragon will coordinate the stipend payments."
        />
        <FAQuestion
          question = "Can I apply to both the Fellow and Project Lead positions? What happens if I'm not accepted as a Project Lead?"
          answer = "If you are not accepted as a Project Lead, you will still be considered as a Fellow! The Project Lead application is largely the same as the Fellow application, just with a few more questions."
        />
        <FAQuestion
          question = "What are some past project examples?"
          answer = "Our past cohorts have worked on the following topics: generative AI policies for state employees, technology for foreign language access of government services, combating deepfakes of government officials, and combating manipulation of public feedback forms to the government. You can find more information about our projects on the Past Projects page."
        />
        <FAQuestion
          question = "How long do the projects run?"
          answer = "Projects run for about 3 months each. Fellows will also have the opportunity to remain in the Fellowship for a second cohort."
        />
        <FAQuestion
          question = "How will Fellows be matched with government partners?"
          answer = "Since many of our government partners are excited to work with local students and we are seeking to build a strong student community, we will prioritize matching Fellows with projects in their region."
        />
        <FAQuestion
          question = "Will the Fellowship be remote?"
          answer = "The Fellowship will be remote. However, Fellows may have the opportunity to present their work at policy events or attend in-person social gatherings throughout the Fellowship!"
        />
        </div>
        <FAQuestion
          question = "What kind of student would be best suited for this Fellowship? How much government experience is required?"
          answer = "We encourage all students located in the US who are interested in making real-world impact via policy or government work to apply. This Fellowship is geared towards training those without much formal policy experience, as well as more experienced students who want to exercise their analytical, writing, and policy abilities. We encourage experienced candidates to apply to be Project Leads."
        />
        <FAQuestion
          question = "I am an international student. Can I still be a Fellow?"
          answer = "All students who will reside in the United States during the Fellowship and have work authorization are eligible to apply. We will work with international students to attempt to provide them a stipend, though we cannot guarantee this depending on the type of visa you possess."
        />
        <FAQuestion
          question = "How can I learn more about the Fellowship?"
          answer = "Paragon will be hosting two info sessions to give applicants the opportunity to learn more about our mission, understand what the executive team looks for in competitive applications, and hear from our current members on their experiences in the Fellowship. Furthermore, we will be holding office hours a couple of days before the application closes to give you the opportunity to ask last-minute questions. RSVP to an info session or our office hours using the button below."
        />
      </Section>
      <Section>
        <Subheading className='flex justify-center text-center'>What impact will you<br />make with Paragon?</Subheading>
        <div className='flex justify-center'>
          <Button url={FA_APP_URL} inNewTab className='mt-4 justify-center'>Apply Now</Button>
          <Button url={INFO_SESSION_URL} inNewTab className='mt-4 ml-5 justify-center'>RSVP for an Info Session</Button>
        </div>

      </Section>


      <Footer/>
    </div>
  );
}

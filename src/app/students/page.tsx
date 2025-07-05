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
import {FELLOW_APP_URL , INFO_SESSION_URL, CURRENTLY_APPLYING} from '@/app/constants';
import TestimonialsServer from '@/components/Testimonials';

const sections = [
  { id: "overview", title: "OVERVIEW" },
  { id: "eligibility", title: "ELIGIBILITY" },
  { id: "process", title: "APP PROCESS" },
  { id: "timeline", title: "TIMELINE" },
  { id: "dates", title: "IMPORTANT DATES" },
  { id: "student testimonials", title: "STUDENT TESTIMONIALS" },
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
              Applications for the Fall 2025 cohort are now open. <br />
            </Text>

            <div className="flex justify-center md:justify-end md:pr-[6%] mb-20 md:mb-0">
			{CURRENTLY_APPLYING && (
              <Button 
                className="fade-in"
                style="secondary" 
                inNewTab 
                url={FELLOW_APP_URL}
              >
                apply now
              </Button>
			)}
			{CURRENTLY_APPLYING && (
              <Button 
                className="fade-in ml-5"
                style="secondary" 
                inNewTab 
                url={INFO_SESSION_URL}
              >
                Sign up for an info session
              </Button>
			)}

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

      <Section id="Overview">
  <Subheading className='text-3xl md:text-5xl mb-4'>Overview</Subheading>
  <GrayDivider />
  <Text className="text-base md:text-lg">The Paragon Policy Fellowship connects students and recent graduates with opportunities in the science and tech policy space. Fellows typically spend 5–10 hours a week researching and writing a policy brief on key issues for their state or local governments. Our Fellows work on pressing tech policy issues such as broadband infrastructure, digital accessibility, and AI procurement. The Fellowship is meant to create a community of future tech policy leaders, and our project-based experiences are designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement. In addition, all current and former Fellows are eligible to apply to our <a href="/students/mentorship" style={{color: 'blue', textDecoration: 'underline'}}>exclusive mentorship program</a>.</Text>
  <Text className='font-semibold mt-6'>Fellows in good standing at the end of the cohort will be compensated with a $500 stipend.</Text>
</Section>

<Section id="eligibility">
  <Subheading className='text-3xl md:text-5xl mb-4'>Eligibility</Subheading>
  <GrayDivider />  
  <Text className="text-base md:text-lg">This Fellowship is an entry-level opportunity geared towards undergraduate/graduate students and recent graduates based in the U.S. interested in entering the tech policy space. As such, we are not expecting applicants to have extensive experience in tech policy and will be evaluating applications based on demonstrated interest in the tech policy sphere (whether it be through relevant coursework, extracurricular activities, or other lived experiences). We enthusiastically welcome applications from those of all backgrounds and are open to accepting prospective Fellows from a wide range of educational backgrounds (i.e., not restricted to any specific major).</Text>
  
  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Minimum Qualifications</Text>
  <ul className='list-disc list-inside text-base md:text-xl space-y-2 ml-4'>
    <li>Ability to consistently commit 5-10 hours of honest, focused work per week. Depending on your schedule, you may need to work on evenings or during the weekend to meet the requirements of the program.</li>
    <li>Ability to consistently e-meet with teammates 1–2 times per week and complete work asynchronously.</li>
    <li>Currently enrolled in a degree program (including undergraduate, graduate, or PhD students) or recently graduated from one (within the past year).</li>
    <li>Reside primarily in the United States and have work authorization during the Fellowship.</li>
  </ul>

  <Text className='mt-8'>We currently offer two tracks: one for Fellows and one for Project Leads.</Text>

  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Track 1 - Fellows</Text>
  <Text className="text-base md:text-lg">Each Paragon project is made up of 6-8 Fellows. When selecting Fellows, we care the most about a potential Fellow&apos;s passion and interest in the tech policy and public service space (though past experience in tech policy helps). Fellows will be responsible for conducting key research in their government partner&apos;s area of interest and collaborating with other Fellows on drafting deliverables. Paragon supports its Fellows through its engaging guest speaker series, informative Policy workshops, and accessible office hours with members of the Organizing Team.</Text>
  
  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Track 2 - Project Leads</Text>
  <Text className="text-base md:text-lg">A Project Lead directs each Paragon project. Project Leads serve as key liaisons between the Fellows and government partners, facilitating communication and cooperation to ensure the alignment of project goals and government expectations. Project Leads must balance taking care of all administrative responsibilities so their Fellows can focus on the substantive portion of the project and shaping the overall direction and vision of the project. Generally, Project Leads are graduate or PhD students, though undergraduates with extensive leadership or project management experience are also encouraged to apply.</Text>
  
</Section>

<Section id="process">
  <Subheading className='text-3xl md:text-5xl mb-4'>APPLICATION PROCESS</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg">Following the initial application round, we select a group of finalists to interview in a group setting. At this stage, students will be organized into teams of 7–8 and tasked to complete a mock policy assignment over the course of one week. From there, we will select Fellows based on their demonstrated effort, engagement with the rest of the team, and ability to collaborate asynchronously. We will select Project Leads based on their leadership qualities, problem-solving ability, and effectiveness in organizing and managing projects.</Text>
  <Text className="text-base md:text-lg mt-6">If you are only applying to a Fellow position, we do not expect any previous policy expertise and will not evaluate your fit based solely on the deliverable. Instead, we will focus on how you approach this assignment and work as a team. If you are applying to be a Project Lead, we will be particularly interested in how you navigate challenges and motivate team members to complete the project.</Text>
</Section>

<Section id="timeline">
  <Subheading className='text-3xl md:text-5xl mb-4'>TIMELINE</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg mb-6">Below is the timeline for the Summer 2025 cohort.</Text>
  <Timeline/>
</Section>

<Section id="dates">
  <Subheading className='text-3xl md:text-5xl mb-4'>Important Dates</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg">
    We offer semester-based tech policy projects 3 times a year: Spring, Summer, and Fall. The Spring Fellowship runs from late January to early May, our Summer program runs from late May to early September, and the Fall Fellowship runs from late September to late December. Applications for each cohort open roughly two months before each cohort&apos;s start date.
  </Text>
  <Text className="text-base md:text-lg mt-6">
    Applications are now <span className="font-semibold underline">open for the Fall 2025 cohort</span>. Applications will close on September 5th at 11:59 PM EST.
  </Text>
  {/* <Text className="text-base md:text-lg mt-6">
    Apps for the Fall 2025 cohort will be expected to open at a later date. Join our <a href={NEWSLETTER_URL} className="underline">mailing list</a> to be notified when apps open.
  </Text> */}
</Section>
<Section id="student testimonials">
  <Subheading className='text-3xl md:text-5xl mb-4'>Student Testimonials</Subheading>
  <GrayDivider/>
  <TestimonialsServer view="students" />
</Section>
      <Section id="faq">
        <Subheading>FAQ</Subheading>
        <GrayDivider/>
        <div>
        <FAQuestion
          question = "What is the Fellowship timeline?"
          answer = "We offer semester-based tech policy projects 3 times a year: Spring, Summer, and Fall. The Spring Fellowship runs from late January to early May, our Summer program runs from late May to early September, and the Fall Fellowship runs from early October to late December. Applications for each cohort will be expected to open 1–2 months in advance."
          />
        <FAQuestion
          question = "Is there a stipend given to Fellows?"
          answer = "Yes! Fellows in good standing will receive a $500 stipend. Paragon will coordinate the stipend payments."
        />
        <FAQuestion
          question = "Can I apply to both the Fellow and Project Lead positions? What happens if I'm not accepted as a Project Lead?"
          answer = "You can only apply to be a Fellow or a Project Lead. However, if you are not accepted as a Project Lead, you will still be considered as a Fellow! The Project Lead application is largely the same as the Fellow application, just with a few more questions."
        />
        <FAQuestion
          question = "What are some past project examples?"
          answer = "You can find information about our previous projects on our <a href='/projects' target='_blank' style='color: darkgray; text-decoration: underline;'>Projects page</a>."
        />
        <FAQuestion
          question = "How long do the projects run?"
          answer = "Projects run for about 3 months each. However, near the end of each project, Fellows will have the opportunity to apply to remain as a Fellow for a second cohort, apply to promote to become a Project Lead for future semesters, or apply to join our organizing team."
        />
        <FAQuestion
          question = "How will Fellows be matched with government partners?"
          answer = "Since many of our government partners are excited to work with local students and we are seeking to build a strong student community, we will prioritize matching Fellows with projects in their region. In addition, we will seek to match Fellows with projects that match their policy interests."
        />
        <FAQuestion
          question = "Will the Fellowship be remote?"
          answer = "Yes, the Fellowship will be remote. However, Fellows may have the opportunity to present their work at policy events or attend in-person social gatherings throughout the Fellowship!"
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
          question = "I am a high school student excited to enter the world of tech policy. Can I apply?"
          answer = "Unfortunately, we do not accept high school applicants at this time. All Fellows must have, at minimum, started the first semester of their undergraduate degree."
        />
		<FAQuestion
          question = "Are admissions rolling?"
          answer = "No, they are not. Feel free to take the necessary time to refine your application before submitting it."
        />
		<FAQuestion
          question = "How are Fellows supported after the program?"
          answer = "All Fellows are given the opportunity at the end of the program to apply to return for an additional semester, return as a Project Lead, or join our organizing team, where they gain valuable experience in running an organization. Regardless of if Fellows apply to remain with Paragon or not, they join our Alumni network where they may continue to gain access to our guest speaker events, regional meet-ups, and our <a href='/students/mentorship' target='_blank' style='color: darkgray; text-decoration: underline;'>mentorship program</a>."
        />
        <FAQuestion
          question = "How can I learn more about the Fellowship?"
          answer = "During each application season, we host two info sessions in addition to a last minute office hours Zoom room. These are the perfect place for you to come and ask any questions you may have. Furthermore, feel free to email us at Paragonfellowship@gmail.com"
        />
      </Section>
      <Section>
        <Subheading className='flex justify-center text-center'>What impact will you<br />make with Paragon?</Subheading>
        <div className='flex justify-center'>
		{/*
          <Button url={FELLOW_APP_URL} inNewTab className='mt-4 justify-center'>Apply Now</Button>
          <Button url={INFO_SESSION_URL} inNewTab className='mt-4 ml-5 justify-center'>RSVP for an Info Session</Button>
		*/}
		<Button url={"mailto:paragonfellowship@gmail.com"} className='mt-4 justify-center'>Contact Us</Button>
        </div>

      </Section>


      <Footer/>
    </div>
  );
}

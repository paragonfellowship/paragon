import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {Subheading, Text } from '@/components/Typography';
import BgGrid from '@/components/BgGrid';
import { RiArrowDownLine } from 'react-icons/ri';
import GrayDivider from '@/components/GrayDivider';
import TestimonialsServer from '@/components/Testimonials';
import FAQuestion from '@/components/FAQuestion';
//import Timeline from '@/components/Timeline';
import Navbar from '@/components/Navbar';
import ProjectMaps from '@/components/ProjectMaps';

const sections = [
  { id: "impact", title: "OUR IMPACT & PREVIOUS PARTNERS" },
  // { id: "projects", title: "02 PAST PROJECTS" },
  { id: "partner testimonials", title: "PARTNER TESTIMONIALS" },
  //{ id: "timeline", title: "03 PROJECT SCOPING & TIMELINE" },
  { id: "faq", title: "FAQ" },
];


export default function About() {
  return (
<div className="relative w-full overflow-x-hidden">
  <TopBar />
<div className="background-container min-h-[100svh] flex flex-col">
  <BgGrid/>
  <div className="w-full px-4 md:px-0 flex-1 flex flex-row md:block">
    <div className="flex-1 flex flex-col justify-center md:block">
      <Text className='fade-in md:pt-[20%] px-4 md:pl-[12%] text-xl md:text-3xl text-center md:text-left'>
        Paragon works with state and local governments <span className='font-semibold'>big and small</span> from every jurisdiction across the country to provide <span className='font-semibold'>pro-bono tech policy research</span> to inform evidence-based policymaking.
      </Text>

      <Text className='fade-in text-xl md:text-3xl mt-16 md:mt-[5%] mb-12 md:mb-5 text-center md:text-right md:ml-auto md:mr-20'>
        Interested in exploring a partnership with Paragon?
      </Text>

      <div className="flex justify-center md:justify-end md:pr-20 pt-4 md:pt-10 mb-20 md:mb-0">
        <Button 
          className="fade-in md:z-30"
          style="secondary"
          inNewTab 
          url="/interest-form"
        >
          Interest Form
        </Button>
      </div>
    </div>
  </div>

  <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7vh] left-0 z-10 w-full flex justify-center text-4xl">
    <RiArrowDownLine />
  </div>

  {/* Gradient overlay - desktop only */}
  {/* <div className="absolute -bottom-1 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-dark md:block hidden" /> */}
  
  {/* Background overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#050022] md:bg-opacity-65 bg-opacity-40 -z-10" />
</div>

<Section className="w-full overflow-x-hidden">
  <Navbar sections={sections} />
</Section>

<Section id="impact">
  <Subheading className='text-3xl md:text-5xl mb-4'>Our Impact & Previous Partners</Subheading>
  {/* <GrayDivider /> */}
  <Text className="text-base md:text-lg">
    Since our founding, Paragon has partnered with 21 governments across 15 states and territories on 35 projects. Our work ranges from writing GenAI policy with the State of Georgia to advising on deepfake policy for the City of San José to writing accessibility guidelines for translation software for the City of Lebanon. For more examples, check out our <a href="/projects" style={{ color: 'blue', textDecoration: 'underline' }}>Projects</a> page to read some of our Fellows&apos; policy briefs. See the map below for every government Paragon has partnered with.
  </Text>
  
  {/* <-- 2. ADD THE COMPONENT HERE --> */}
  <div className="my-10">
    <ProjectMaps />
  </div>
</Section>

<Section id="partner testimonials">
  <Subheading className='text-3xl md:text-5xl mb-4'>Partner Testimonials</Subheading>
  <GrayDivider/>
  <TestimonialsServer view="government" />
</Section>

{/* <Section id="timeline">
  <Subheading className='text-3xl md:text-5xl mb-4'>03 Project Scoping &amp; Timeline</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg mb-6">Our typical project timeline:</Text>
  <Timeline events={events} />
</Section> */}
      <Section id="faq">
        <Subheading>FAQ</Subheading>
        <GrayDivider/>
        <div>
        <FAQuestion
          question="How much does this Fellowship cost? What do I have to do to qualify?"
          answer="Our work is entirely pro bono! To participate, all government partners must do is agree to virtually meet once every two weeks with the Fellows and provide feedback on their work. Partners are generally responsible for guiding the overall direction of the research, though the Paragon organizing team is responsible for managing the project and ensuring its success."
        />
        <FAQuestion
          question="What can you expect to receive at the end?"
          answer="Generally, governments can expect a research or policy brief at the end of the program. However, our deliverables are tailored to your and your community's needs, so not only is the information specific to your community, the deliverable can take whatever form would be most beneficial to you. Occasionally, we have produced deliverables such as practical frameworks and outreach guides when those formats have been the best means to address the problem we were seeking to solve."
        />
        <FAQuestion
          question="Will Fellows be compensated for the project?"
          answer="Yes. All Fellows and Project Leads receive a stipend of $500. Paragon provides these stipends thanks to our philanthropic grants."
        />
        <FAQuestion
          question="How do I select which kind of project I would like to do?"
          answer="Our Partnerships team works with you over the course of a couple virtual meetings to determine your interests then provides you with project descriptions for each idea. After you select one, we refine it into a final Statement of Work."
        />
		<FAQuestion
          question="How much of a time commitment is hosting a Paragon Fellowship?"
          answer="Since the Paragon organizing team handles managing each project, our Fellowship is very accessible to even the busiest government partner. Government partners are free to invest as much time as they would like in the project and the Fellows, but even an investment of only an hour a week is enough for a project to flourish."
        />
        <FAQuestion
          question="How long do the projects run?"
          answer="Projects run for about 3 months each. However, government partners with longer term needs can explore recurring projects over the course of multiple cohorts."
        />
        <FAQuestion
          question="How many Fellows typically work on a project?"
          answer="Each project is supported by a dedicated team of 5-8 Fellows and 1 Project Lead from your area or as close to your area as possible."
        />
        </div>
      </Section>
      <Section>
        <Subheading className='flex justify-center text-center'>What can Paragon<br />do for you?</Subheading>
        <div className='flex justify-center'>
          <Button url={"mailto:partnerships@paragonfellowship.org"} className='mt-4 justify-center'>Contact our Partnerships Team</Button>
        </div>

      </Section>


      <Footer/>

    </div>
  );
}
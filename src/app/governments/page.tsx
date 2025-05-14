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

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {Subheading, Text } from '@/components/Typography';
import Image from 'next/image';
import BgGrid from '@/components/BgGrid';
import { RiArrowDownLine } from 'react-icons/ri';
import GrayDivider from '@/components/GrayDivider';
import Carousel from '@/components/Carousel';
import TestimonialsServer from '@/components/Testimonials';
import FAQuestion from '@/components/FAQuestion';
//import Timeline from '@/components/Timeline';
import Navbar from '@/components/Navbar';

import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '@/app/constants'

interface logoRecord {
    id: string,
    createdTime: string,
    fields: {
        name: string,
		logo: Image[]
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
            revalidate: 60 * 60 * 24 // revalidate every day
        }
    });
    const rec = await records.json();
    return rec.records;
}

const sections = [
  { id: "impact", title: "OUR IMPACT & PREVIOUS PARTNERS" },
  // { id: "projects", title: "02 PAST PROJECTS" },
  { id: "partner testimonials", title: "PARTNER TESTIMONIALS" },
  //{ id: "timeline", title: "03 PROJECT SCOPING & TIMELINE" },
  { id: "faq", title: "FAQ" },
];

// const events = [
//   {
//     date: "Late January 2025",
//     title: "Policy Bootcamp",
//     description: "",
//   },
//   {
//     date: "Mid March 2025",
//     title: "Check-ins & Midpoint Review with Paragon Team",
//     description: "",
//   },
//   {
//     date: "Late March 2025",
//     title: "Midpoint Presentation",
//     description: "",
//   },
//   {
//     date: "Late April 2025",
//     title: "Final Policy Brief Presentation",
//     description: "",
//   },
//   {
//     date: "End of April 2025",
//     title: "Final Cohort Presentation & Wrap-Up",
//     description: "",
//   },
//   {
//     date: "May 1st 2025",
//     title: "Cohort End",
//     description: "",
//   },
// ];


export default async function About() {
	const govLogos = await retrieveLogos();
  return (
<div className="relative w-full overflow-x-hidden">
  <TopBar />
<div className="background-container min-h-[100svh] flex flex-col">
  <BgGrid/>
  <div className="w-full px-4 md:px-0 flex-1 flex flex-row md:block">
    <div className="flex-1 flex flex-col justify-center md:block">
      <Text className='fade-in md:pt-[20%] px-4 md:pl-[12%] text-xl md:text-3xl text-center md:text-left'>
        Paragon works with state and local governments, <span className='font-semibold'>big and small</span>, from every jurisdiction across the country to provide <span className='font-semibold'>pro-bono tech policy research</span> to inform evidence-based policymaking.
      </Text>

      <Text className='fade-in text-xl md:text-3xl mt-16 md:mt-[5%] mb-12 md:mb-5 text-center md:text-right md:ml-auto md:mr-20'>
        Interested in exploring a partnership with Paragon?
      </Text>

      <div className="flex justify-center md:justify-end md:pr-20 pt-4 md:pt-10 mb-20 md:mb-0">
        <Button 
          className="fade-in md:z-30"
          style="secondary"
          inNewTab 
          url="https://forms.gle/Y2tckRZyg5Yice3f7"
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
    Since our founding, Paragon has partnered with 17 governments across 11 states on 28 projects. We&apos;ve worked with governments and organizations across the country to better science & tech policy processes. Our work ranges from writing GenAI policy with the State of Georgia, to advising on deepfake policy for the City of San José, to writing accessibility guidelines for translation software for the City of Lebanon. For more examples, check out our <a href="/projects" style={{ color: 'blue', textDecoration: 'underline' }}>Projects</a> page to read some of our Fellows&apos; policy briefs.
  </Text>
  {/* <Text>Spring (5 new / 5 total): Boston; Lebanon, NH; Georgia; St. Louis, MO; San Jose, CA</Text>
   <Text>Summer (2 new / 7 total): CalHHS, Santa Clara</Text>
   <Text>Fall (5 new / 9 total): Brownsville, TX; Los Angeles, CA; Tempe, AZ</Text> */}
{/* </Section> */}

{/* <Section id="projects">
  <Subheading className='text-3xl md:text-5xl mb-4'>02 Past Projects</Subheading>
  <GrayDivider /> */}
  
  <a href='/projects' className='text-blue-500 block w-full overflow-hidden'>
    <Carousel className='mt-10' speed={35}>
          {
            govLogos.map((logo, index) => (
			<img key={index} src={logo.fields.logo[0].thumbnails.large.url} alt={logo.fields.name} className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
				//<Image key={index} src={logo.fields.logo[0].thumbnails.large.url} width={logo.fields.logo[0].thumbnails.large.width} height={logo.fields.logo[0].thumbnails.large.height} alt={logo.fields.name} className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
            ))
          }
        </Carousel>
  </a>
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
          answer="Our work is entirely pro bono! To participate, all government partners must do is agree to virtually meet once every two weeks with the Fellows and provide feedback on their work. Partners are generally responsible for guiding the overall direction of the research."
        />
        <FAQuestion
          question="What can you expect to receive at the end?"
          answer="Governments can expect a research or policy brief at the end of the program."
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
          question="How long do the projects run?"
          answer="Projects run for about 3 months each. However, government partners with longer term needs can explore recurring projects over the course of multiple cohorts."
        />
        <FAQuestion
          question="How many Fellows typically work on a project?"
          answer="Each project is supported by a dedicated team of 5-8 Fellows and 1 Project Lead from your area."
        />
        </div>
      </Section>
      <Section>
        <Subheading className='flex justify-center text-center'>What can Paragon<br />do for you?</Subheading>
        <div className='flex justify-center'>
          <Button url={"mailto:paragonfellowship@gmail.com"} className='mt-4 justify-center'>Contact Us</Button>
        </div>

      </Section>


      <Footer/>

    </div>
  );
}
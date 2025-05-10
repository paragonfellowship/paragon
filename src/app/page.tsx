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

import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '@/app/constants'

interface logoRecord {
    id: string,
    createdTime: string,
    fields: {
        name: string,
		logo: Image[]
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
            revalidate: 60 * 60 * 1.5 // revalidate every 1.5 hours
        }
    });
    const rec = await records.json();
    return rec.records;
}
async function retrieveFacts(): Promise<factRecord[]> {
	const encodedTableName = encodeURIComponent("Facts"); // Encode the table name
	const encodedViewName = encodeURIComponent("all_ordered");
	const records = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}?view=${encodedViewName}&maxRecords=100`, {
			headers: {
				'Authorization': `Bearer ${AIRTABLE_API_KEY}`
			},
			next: {
				revalidate: 60 * 60 * 1.5 // revalidate every 1.5 hours
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
	facts[5]=# of Hours Worked
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
      <Section className="overflow-y-hidden">
      <Subheading>Our Reach</Subheading>
      <GrayDivider />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full py-8 md:py-16 px-4">
        <div className="flex flex-col items-center text-center">
          <TickText text={facts[0].fields.Number} className="text-5xl md:text-7xl font-bold text-black" />
          <p className="text-base md:text-xl text-black mt-2">
            <span className="font-bold">fellows</span> placed on{" "}
            <span className="font-bold">{facts[2].fields.Number} projects</span> from{" "}
            <span className="font-bold">{Math.round(facts[1].fields.Number / 10) * 10}+</span> colleges and universities nationally
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TickText text={60} suffix="%" className="text-5xl md:text-7xl font-bold text-black" />
          <p className="text-base md:text-xl text-black mt-2">
            identify as <span className="font-bold">underrepresented</span> in
            technology and policy
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TickText text={facts[5].fields.Number} className="text-5xl md:text-7xl font-bold text-black" />
          <p className="text-base md:text-xl text-black mt-2">
            hours <span className="font-bold">volunteered</span> towards tech policy research
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <TickText text={facts[3].fields.Number} className="text-5xl md:text-7xl font-bold text-black" />
          <p className="text-base md:text-xl text-black mt-2">
            established partnerships with state and local governments across{" "}
            <span className="font-bold">{facts[4].fields.Number} U.S. states</span>
          </p>
        </div>
      </div>
    </Section>
      <Section className='overflow-y-hidden'>
        <Subheading>Our Program</Subheading>
        <GrayDivider/>
        <Text>Paragon is a tech policy fellowship that connects local governments with a team of talented students from local colleges and universities to conduct in-depth research on a tech policy issue. Our fellows are passionate about public service and are eager to make a difference in their community.</Text>
        <div className="flex flex-col md:flex-row justify-between items-start w-full py-8 md:py-16 gap-y-8 md:gap-y-0 px-4">
        <div className="flex flex-col items-start max-w-full md:max-w-[30%]">
          <p className="text-xl font-semibold text-gray-500 mb-3 md:mb-5">Talent Pipeline</p>
          <p className="text-base md:text-lg font-light text-black">
            Fellows contribute 5-10 hours per week for twelve weeks to the project; this
            provides a similar time commitment to a college course while building
            early-career policy experience that prepares them to join the public
            service workforce.
          </p>
        </div>
        <div className="flex flex-col items-start max-w-full md:max-w-[30%] px-0 md:px-8">
          <p className="text-xl font-semibold text-gray-500 mb-3 md:mb-5">Field Exposure</p>
          <p className="text-base md:text-lg font-light text-black">
            Introduce fellows to a diverse cohort of leaders in the technology policy
            space from both public and private sectors and at all levels of
            government.
          </p>
        </div>
        <div className="flex flex-col items-start max-w-full md:max-w-[30%]">
          <p className="text-xl font-semibold text-gray-500 mb-3 md:mb-5">Hands-On Training</p>
          <p className="text-base md:text-lg font-light text-black">
            We offer policy workshops and bootcamps instructed by experienced policy
            researchers, along with mentorship, professional development sessions,
            and career advice.
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
				//<Image key={index} src={logo.fields.logo[0].thumbnails.large.url} width={logo.fields.logo[0].thumbnails.large.width} height={logo.fields.logo[0].thumbnails.large.height} alt={logo.fields.name} className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
				<img key={index} src={logo.fields.logo[0].thumbnails.large.url} alt={logo.fields.name} className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
            ))
          }
        </Carousel>
        </a>
      </Section>
      <Footer/>
    </>
  );
}
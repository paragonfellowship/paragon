
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {SmallText, Subheading, Text } from '@/components/Typography';
import Link from 'next/link';
import { RiArrowDownLine } from 'react-icons/ri';
import BgGrid from '@/components/BgGrid';
import ProjectCard from '@/components/ProjectCard';
import GrayDivider from '@/components/GrayDivider';

export default function Projects() {
  return (  
    <>
      <TopBar />
      <div
        className="background-container relative flex flex-col md:block"
      >
        <BgGrid lineCount={7} />
        
        <div className="flex-1 flex flex-col justify-center md:block">
          <Text className='text-white text-4xl pl-4 md:text-7xl md:pl-20 md:mt-60 pb-10 md:pb-0 font-semibold text-center md:text-left'>
            Project Portfolio
          </Text>
          
          <Text className="text-xl md:text-3xl md:text-right pt-0 md:pt-40 max-w-full px-4 md:ml-auto md:pr-20 font-semibold text-center">
            View our past Fellows&apos; work!
          </Text>
        </div>

        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7vh] left-0 z-10 w-full flex justify-center text-4xl">
          <RiArrowDownLine />
        </div>

        {/* Gradient overlay - desktop only */}
        <div className="absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark md:block hidden" />
        
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#050022] md:bg-opacity-65 bg-opacity-40 -z-10" />
      </div>

	<Section>
	<Text className='md:text-4xl text-2xl uppercase font-semibold pb-3'>Fall 2024 </Text> 
	<GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link href="/projects/fa24/federal-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Students work with the Federal government to analyze supercomputers" 
                />
            </Link> 
            <Link href="/projects/fa24/georgia-state-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Georgia Students draft AI Usage rules for State employees" 
                />
            </Link>
			<Link href="/projects/fa24/la-cd3-lail-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Los Angeles, CA Students spotlight language access needs" 
                />
            </Link>
			<Link href="/projects/fa24/la-cd3-ada-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Los Angeles, CA Students make the City more accessible online" 
                />
            </Link>
			<Link href="/projects/fa24/santa-clara-county-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Santa Clara County, CA Students develop AI Use Case Guidelines" 
                />
            </Link>
			<Link href="/projects/fa24/brownsville-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Brownsville, TX students fight the digital divide" 
                />
            </Link>
			<Link href="/projects/fa24/tempe-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Tempe, AZ students draft an innovative AI curriculum" 
                />
            </Link>
        </div>
		<br /><br />
      <Text className='md:text-4xl text-2xl uppercase font-semibold pb-3'>Summer 2024 </Text> 
      <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
			<Link href="/projects/su24/lebanon-ada-su24" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="Students improve digital accessibility for Lebanon, NH" 
                />
            </Link> 
			<Link href="/projects/su24/st-louis-su24" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="ST. LOUIS, MO STUDENTS EXAMINE TECH-POWERED Cultural DIVERSITY" 
                />
            </Link> 
            <Link href="/projects/su24/santa-clara-county-su24" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="Cybersecurity Risk Prioritization in Santa Clara County, CA" 
                />
            </Link>
			<Link href="/projects/su24/san-jose-ai-su24" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="SAN JOSé, CA STUDENTS DEVELOP AI Procurement Risk assessment" 
                />
            </Link>
        </div>
		<br /><br />
        <Text className='md:text-4xl text-2xl uppercase font-semibold pb-3'>Spring 2024 </Text> 
        <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link href="/projects/sp24/lebanon-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="STUDENTS IN LEBANON, NH CREATE AI AUDITING FRAMEWORK"
                />
            </Link>
			<Link href="/projects/sp24/boston-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="BOSTON, MA STUDENTS WORK ON TECH PROCUREMENT GUIDELINES" 
                />
            </Link>
            <Link href="/projects/sp24/san-jose-pi-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="SAN JOSé, CA STUDENTS TACKLE PUBLIC INTEGRITY AND AI" 
                />
            </Link>
			<Link href="/projects/sp24/san-jose-ai-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="SAN JOSé, CA STUDENTS CONFRONT AI-GENERATED MISINFORMATION" 
                />
            </Link>
            <Link href="/projects/sp24/st-louis-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="AI-Driven Language Access for St. Louis, MO" 
                />
            </Link>
        </div>
        <SmallText className='text-xs pt-5'>This page will continuously be updated over the year with new projects. Be sure to check back later for new policy memos!</SmallText>
      </Section>

      <Section>
        <Subheading className='flex justify-center text-center'>What can Paragon<br />do for you?</Subheading>
        <div className='flex justify-center'>
          <Button url={"mailto:paragonfellowship@gmail.com"} className='mt-4 justify-center'>Contact Us</Button>
        </div>

      </Section>



      <Footer/>

    </>
  );
}
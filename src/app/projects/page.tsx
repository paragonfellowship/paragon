
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
import Navbar from '@/components/Navbar';

const sections = [
  { id: "AI Innovation", title: "AI INNOVATION" },
  { id: "AI Governance", title: "AI GOVERNANCE" },
  { id: "Accessibility", title: "ACCESSIBILITY" },
  { id: "Data Management", title: "DATA MANAGEMENT" },
  { id: "Cybersecurity", title: "CYBERSECURITY" },
  { id: "Internal Practices", title: "INTERNAL PRACTICES" }
];

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
            PROJECT PORTFOLIO
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
        <Navbar sections={sections} />
      </Section>
  <Section id="AI Innovation">
  <Subheading className='text-3xl md:text-5xl mb-4'>AI Innovation</Subheading>
	<GrayDivider />
	<div className="grid md:grid-cols-3 gap-6 text-center">
	<Link href="/projects/st-louis-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="Fellows create AI-Driven Language Access for St. Louis, MO" 
                />
            </Link>
	<Link href="/projects/st-louis-su24" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="ST. LOUIS, MO Fellows EXAMINE TECH-POWERED Cultural DIVERSITY" 
                />
            </Link>
	<Link href="/projects/la-cd3-lail-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Los Angeles, CA Fellows spotlight language access needs" 
                />
            </Link>
				<Link href="/projects/state-sp25" passHref>
                <ProjectCard 
                  timeline='2025 Spring cohort'
                  projectTitle="Fellows evaluate AI weapon transfers for the State Department" 
                />
            </Link>
	</div>
</Section>
  <Section id="AI Governance">
  <Subheading className='text-3xl md:text-5xl mb-4'>AI Governance</Subheading>
      <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
		<Link href="/projects/san-jose-pi-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="SAN JOSé, CA Fellows TACKLE PUBLIC INTEGRITY AND AI" 
                />
            </Link>
			<Link href="/projects/san-jose-ai-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="SAN JOSé, CA Fellows CONFRONT AI-GENERATED MISINFORMATION" 
                />
            </Link>
            <Link href="/projects/lebanon-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="Fellows IN LEBANON, NH CREATE AI AUDITING FRAMEWORK"
                />
			</Link>
			<Link href="/projects/tempe-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Tempe, AZ Fellows draft an innovative AI curriculum" 
                />
            </Link>
            <Link href="/projects/georgia-state-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Georgia Fellows draft AI Usage rules for State employees" 
                />
            </Link>
			<Link href="/projects/santa-clara-county-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Santa Clara County, CA Fellows develop AI Use Case Guidelines" 
                />
            </Link>
			{/*<Link href="/projects/santa-clara-county-sp25" passHref>
                <ProjectCard 
                  timeline='2025 Spring cohort'
                  projectTitle="Santa Clara County, CA Fellows launch an AI dictionary" 
                />
            </Link> */}
        </div>
</Section>
  <Section id="Accessibility">
  <Subheading className='text-3xl md:text-5xl mb-4'>Accessibility</Subheading>
      <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
			<Link href="/projects/lebanon-ada-su24" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="Fellows improve digital accessibility for Lebanon, NH" 
                />
            </Link>
			<Link href="/projects/la-cd3-ada-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Los Angeles, CA Fellows make the City more accessible online" 
                />
            </Link>
			<Link href="/projects/brownsville-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Brownsville, TX Fellows fight the digital divide" 
                />
            </Link>
		<Link href="/projects/madison-sp25" passHref>
                <ProjectCard 
                  timeline='2025 Spring cohort'
                  projectTitle="Madison, WI Fellows develop an accessibility action plan" 
                />
            </Link>
			{/*
			<Link href="/projects/alexandria-sp25" passHref>
                <ProjectCard 
                  timeline='2025 Spring cohort'
                  projectTitle="" 
                />
            </Link>*/}
        </div>
</Section>
  <Section id="Data Management">
  <Subheading className='text-3xl md:text-5xl mb-4'>Data Management</Subheading>
      <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
		<Link href="/projects/missoula-sp25" passHref>
                <ProjectCard 
                  timeline='2025 Spring cohort'
                  projectTitle="Missoula, MT Fellows advance the City closer to WWC Certification" 
                />
            </Link>
			<Link href="/projects/tempe-sp25" passHref>
                <ProjectCard 
                  timeline='2025 Spring cohort'
                  projectTitle="Tempe, AZ Fellows draft an innovative Data curriculum" 
                />
            </Link>
        </div>
</Section>
  <Section id="Cybersecurity">
  <Subheading className='text-3xl md:text-5xl mb-4'>Cybersecurity</Subheading>
      <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link href="/projects/santa-clara-county-su24" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="Santa Clara County, CA Fellows help prioritize Cybersecurity Risk" 
                />
            </Link>
        </div>
</Section>
  <Section id="Internal Practices">
  <Subheading className='text-3xl md:text-5xl mb-4'>Internal Practices (Procurement, Research, and Budgeting)</Subheading>
      <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
			<Link href="/projects/boston-sp24" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="BOSTON, MA Fellows WORK ON TECH PROCUREMENT GUIDELINES" 
                />
            </Link>
			<Link href="/projects/san-jose-ai-su24" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="SAN JOSé, CA Fellows DEVELOP AI Procurement Risk assessment" 
                />
            </Link>
            <Link href="/projects/federal-fa24" passHref>
                <ProjectCard 
                  timeline='2024 Fall cohort'
                  projectTitle="Fellows work with the Federal government to analyze supercomputers" 
                />
            </Link> 
			{/*<Link href="/projects/montana-sp25" passHref>
                <ProjectCard 
                  timeline='2025 Spring cohort'
                  projectTitle="Montana Fellows propose new IT funding structure" 
                />
            </Link>*/}
        </div>
		<SmallText className='text-xs pt-5'>This page will continuously be updated over the year with new projects. Be sure to check back later for new policy memos!</SmallText>

</Section>
      <Section>
        <Subheading className='flex justify-center text-center'>What can Paragon<br />do for you?</Subheading>
        <div className='flex justify-center'>
          <Button url={"mailto:partnerships@paragonfellowship.org"} className='mt-4 justify-center'>Contact Us</Button>
        </div>

      </Section>



      <Footer/>

    </>
  );
}
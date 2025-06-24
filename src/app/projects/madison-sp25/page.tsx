//import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
//import Image from 'next/image';

export default function SJ2() {
  return (
    <>
      <TopBar />
      <Section className='h-[40vh] flex flex-col justify-center mt-16' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <div className="flex flex-col justify-end h-full pb-4">
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Madison, WI</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Advancing Digital<br></br>Accessibility in the City of Madison</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Given the upcoming enforcement of federal accessibility guidelines for cities with populations of greater than 50,000 on April 24, 2026, cities are required to examine their digital accessibility policies to ensure compliance. Under Article II of the Americans with Disabilities Act (ADA), all digital services provided by municipalities must meet the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
<br /><br />In light of this, the city of Madison, Wisconsin has requested that the Paragon SP25 Madison Team review the relevant standards of digital accessibility, research the approaches of aspirant cities for modes of comparison, and provide recommendations for strategies to implement appropriate accessibility measures to achieve their goal of full compliance with federal regulations.


        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        In the public sector, prioritizing digital accessibility is essential for ensuring equitable service delivery and proactively adapting to regulatory changes. This project aims to support the City of Madison in developing a comprehensive digital accessibility policy and implementation strategy to achieve compliance with the upcoming 2026 digital accessibility deadline set by Title Ⅱ of the ADA. 
<br /><br />The Paragon Team will analyze Madison&apos;s current digital accessibility landscape, benchmark against other municipalities, and identify key opportunities and challenges. Based on these insights, the Team aims to provide policy recommendations for Madison to pursue the long-term development of digital accessibility. Ultimately, this project will help Madison build a more inclusive environment, ensuring that people with disabilities can fully access and benefit from public services.

        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
		
		Our approach followed a five-stage process to ground the recommendations: 
<br/><br/>Stage 1: Literature Review<br/>
We began by researching the City of Madison’s existing digital accessibility efforts and broader best practices in digital accessibility. This included reviewing academic literature, government resources, journals, and standards such as the Web Content Accessibility Guidelines (WCAG).
<br/><br/>Stage 2: Comparative Research<br/>
We conducted a comparative analysis of Madison’s digital accessibility policies and practices against those of peer and aspirational cities recognized for their innovation and inclusivity in digital governance.
<br/><br/>Stage 3: Stakeholder Outreach<br/>
To deepen our understanding of both Madison’s local context and national trends in digital accessibility, we conducted interviews with subject matter experts from municipalities across the country and a former federal policy leader. These conversations helped us assess how other cities are navigating federal accessibility guidelines, what strategies have proven successful, and how Madison might draw inspiration from their experiences. The insights gathered informed our recommendations by highlighting current challenges, effective practices, and opportunities for meaningful progress tailored to Madison’s needs.
<br/><br/>Stage 4: Policy Review<br/>
We reviewed Madison’s existing Administrative Policy Memoranda (APMs) to assess alignment with digital accessibility standards, identifying areas in need for stronger protocol and further development. 
<br/><br/>Stage 5: Policy Development and Recommendations<br/>
Based on the findings from the previous stages, we developed a comprehensive strategy with actionable recommendations and policy guidance. This plan is designed to help Madison close existing gaps, align with the new Title II digital accessibility requirements, and build inclusive, compliant digital services for all residents. 
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Digital Accessibility Policy and Implementation Strategy </Text>
            <SmallText>
			1) An assessment of the current digital accessibility landscape of Madison, Wisconsin in regard to the new Title II regulations of the ADA.
<br/><br/>2) A comprehensive review of the gaps between the new Title II digital requirements and the current practices of the City of Madison.
<br/><br/>3) An analysis of peer and aspirant cities and their current digital accessibility practices to find areas for improvement for the city of Madison.
<br/><br/>4) Recommendations on how Madison can bridge the existing digital accessibility gaps and achieve compliance with the new Title II regulations by April 24, 2026.

            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Digital Accessibility Policy Guidance</Text>
            <SmallText>
			1) Evaluate current Administrative Policy Memoranda (APMs) and provide recommendations for revisions.
<br/><br/>2) Draft sample policies for new digital accessibility policies.

			</SmallText>
          </div> 
		<hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Executive Summary</Text>
            <SmallText>
			1) A concise document summarizing key findings and recommendations.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
			</div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        This report demonstrates that Madison is at a pivotal moment in advancing digital accessibility. Our assessment highlights both the city’s current efforts and the structural gaps that must be addressed to meet federal compliance by the April 24, 2026 deadline. By benchmarking against peer and aspirant cities and incorporating input from national accessibility leaders, we provide Madison with a roadmap grounded in practical, forward-looking solutions.
<br/><br/>The implementation of our recommendations and sample policies positions Madison to become a leader in municipal digital accessibility. As digital services become central to how residents interact with their city, ensuring accessibility is not only a legal obligation but a civic imperative.
<br/><br/>Looking ahead, future work should focus on building internal capacity through training, formalizing ongoing accessibility review processes, and establishing mechanisms for accountability and community feedback. Additionally, Madison should continue monitoring federal guidance, emerging technologies, and evolving best practices to adapt its digital infrastructure and policies over time. This deliverable provides the foundation for Madison to move not only toward compliance, but also long-term digital equity where accessibility is a core value and embedded from the start. 


</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Wendy Zeng', role: '(Project Lead)', school: 'UC Berkeley' },
			{ name: 'Colin Angel', role: '', school: 'University of Texas' },
            { name: 'Alexandra Ladjeva', role: '', school: 'Brandeis University' },
            { name: 'Claudia Hebert', role: '', school: 'Arizona State University' },
            { name: 'Alexis Eskenazi', role: '', school: 'UC Berkeley' },
            { name: 'Zinan Yue', role: '', school: 'UC Berkeley' },
			{ name: 'Noreen Ahmed', role: '', school: 'Rutgers University - New Brunswick' },
			{ name: 'Carlos Betancur', role: '', school: 'Brown University' },
          ].map((contributor, index) => (
            <div key={index} className='border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center'>
              <Text className='text-center font-semibold'>{contributor.name} {contributor.role}</Text>
              <SmallText className='text-center font-italic'>{contributor.school}</SmallText>
            </div>
          ))}
        </div>
      </Section>

      <Footer/>

    </>
  );
}
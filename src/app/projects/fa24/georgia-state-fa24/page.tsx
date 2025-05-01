import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';

export default function SJ2() {
  return (
    <>
      <TopBar />
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <div className="flex flex-col justify-end h-full pb-4">
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>State of Georgia</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Generative AI Standards for State Governance</Text>
        </div>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Generative AI is revolutionizing public service operations, and The State of Georgia remains committed to advancing the responsible use of emerging technologies as part of its broader strategy to promote efficiency, transparency, and public trust. In alignment with this mission, the Georgia Technology Authority (GTA) guides the development, implementation, and oversight of AI policies that shape the work of over 40,000 state employees. Building on last year&apos;s foundational policies, &quot;SS-23-002: AI Responsible Use (Standard)&quot; and &quot;PS-23-001: Enterprise Responsible Use (Policy),&quot; the Paragon Fellows have contributed extensively to updating and refining these AI standards to address emerging challenges in AI governance.
<br></br><br></br>
During the Fall 2024 term, the Paragon Policy Fellows supported GTA by conducting in-depth research and collaborative policy development. This work focused on identifying and addressing gaps in the existing guidelines, ensuring AI policies are adaptable and robust enough to accommodate rapid technological advancements. Our approach emphasized creating clear, actionable standards that can be implemented effectively across departments.
<br></br><br></br>
Through the efforts of the Fall 2024 Paragon Policy Fellows, the State of Georgia now possesses an updated framework that reflects the rapid evolution of Generative AI technologies. This framework emphasizes clarity, ethical practices, and a commitment to supporting state employees in navigating the complexities of AI in their roles.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        This projected aimed to position Georgia as a leader in Generative AI governance by:
<br></br><br></br>
- Updating existing standards to address new challenges in AI applications.
<br></br>
- Supporting state employees through actionable guidelines and resources for responsible AI usage
<br></br>
- Strengthening GTA’s capacity to promote ethical AI practices across government operations
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
      To achieve these objectives, our team followed a structured, iterative approach:
<br></br><br></br>
- Expanded the AI Glossary: Added 16 terms and refined definitions to improve accessibility and understanding of AI-related concepts.
<br></br>- Resolved Document Feedback: Addressed over 25 comments on the current standards document to incorporate best practices.
<br></br>- Developed Supporting Appendices: Proposed supplementary materials, such as best practices for maintaining AI query records and crafting unbiased prompts.
<br></br>- Conducted Comparative Analysis: Reviewed policies from other states and municipalities to benchmark best practices.
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>8 Deliverables</Subheading>
        <div className='md:w-[80%]'>
        <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Literature Review</Text>
            <SmallText>Summaries of current efforts in AI education, regulation, applications, and governance, drawn from both private and public sectors.
            </SmallText>
          </div> 
			<hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>AI Definitions: Placements Guide</Text>
            <SmallText>Revised guidelines informed by feedback from the Georgia Technology Council, addressing transparency and accountability.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>GenAI Policy/Guideline Tracker</Text>
            <SmallText>A review of AI policies from 24 cities and states.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
		<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Use Case Table</Text>
            <SmallText>Six key scenarios with permitted and prohibited uses of AI.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" /> 
		<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Query Writing and Response Analysis</Text>
            <SmallText>Methods for maintaining query records suitable for audits and bias assessments.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />  
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
			<Text className='mb-2'>Unbiased Queries Notes:</Text>
            <SmallText>Tips for writing impartial and equitable prompts.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
			<Text className='mb-2'>AI Tools Approval Process</Text>
            <SmallText>Guidance on enforcing standards, engaging employees through an AI Ambassador program, and conducting collaborative workshops.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
		</div>
		</Section>
      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        The updated Generative AI standards signify a crucial step forward in equipping Georgia’s state employees with the tools and knowledge needed to navigate AI’s complexities responsibly. These standards provide a roadmap for ethical AI use, emphasizing transparency, accountability, and adaptability.
<br></br><br></br><br></br>
Looking ahead, we recommend the following:
<br></br><br></br>
- Build a detailed and flexible AI policy framework that can adapt to rapid technological advancements and evolving use cases.
<br></br>- Invest in ongoing education and training programs to help employees stay informed about AI developments and best practices.
<br></br>- Establish clear and concise documentation to ensure that AI use across agencies remains consistent, transparent, and compliant with regulations.
<br></br>- Create dedicated spaces for collaboration where employees can share AI innovations, challenges, and insights to build collective growth.
<br></br>- Regularly update approved tool lists and use-case guidelines to reflect emerging trends and tools, ensuring relevance and effectiveness.

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Nsisong Udosen', role: 'Project Lead', school: 'Parsons School of Design' },
            { name: 'Abhay Sastry', role: 'Fellow', school: 'Georgia Institute of Technology' },
            { name: 'Desiree B. Junfijiah', role: 'Fellow', school: 'Widener University' },
            { name: 'Elena Ajayi', role: 'Fellow', school: "St. John's University" },
            { name: 'Noreen Ahmed', role: 'Fellow', school: 'Stanford University' },
            { name: 'Sharanya Maddukuri', role: 'Fellow', school: 'George Mason University' },
			{ name: 'Shivam Saran', role: 'Fellow', school: 'Emory University' },
			{ name: 'Wynee Pintado', role: 'Fellow', school: 'Barnard University' },
			{ name: 'Zev Van Zanten', role: 'Fellow', school: 'Duke University' },
          ].map((contributor, index) => (
            <div key={index} className='border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center'>
              <Text className='text-center font-semibold'>{contributor.name}</Text>
              <SmallText className='text-center'>{contributor.role}</SmallText>
              <SmallText className='text-center'>{contributor.school}</SmallText>
            </div>
          ))}
        </div>
      </Section>

      <Footer/>

    </>
  );
}
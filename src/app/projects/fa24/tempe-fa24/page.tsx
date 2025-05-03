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
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <div className="flex flex-col justify-end h-full pb-4">
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Tempe, AZ</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>AI Literacy<br /> and Ethics Training Curriculum Syllabus</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        In 2024, the City of Tempe is prioritizing the expansion of AI literacy and ethical AI usage across its municipal operations. As AI-powered tools become more integrated into public services, the city recognizes the importance of equipping employees with both foundational AI knowledge and a clear understanding of the ethical, legal, and societal implications. The initiative aligns with Tempe’s Ethical AI Policy and Generative AI Use Guidelines to ensure that AI technologies are procured and used responsibly. The creation of an aligned curriculum would serve to educate the city’s employees and further empower them in the face of the constantly evolving AI-landscape. Thus, the curriculum syllabus hopes to promote discourse regarding the proliferation of AI tools for municipal functions.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        As Tempe’s Ethical AI Policy outlines 12 guiding principles, the current project is a manifestation of Principle 11, which aims to provide training programs for Tempe’s city employees. The AI curriculum syllabus, featuring tailored procurement recommendations, aims to democratize the skills and knowledge necessary to contend with the risks and ethical drawbacks of municipal AI use in Tempe, AZ. The layout, format, and intuitive framing of information intends to increase accessibility of and remove the perceived esoteric veil from AI related content. The four modules outlined in the syllabus (Module 1 - Mechanical Basics and Data Types, Module 2 - Outline of AI Risks, Module 3 - Specific Tempe AI Use Cases, and Module 4 - Actionable Steps for Governance) seek to guide the city’s municipal workers towards a holistic competency that will facilitate their transition from consumers/users of AI tools to executors and arbiters of its governance.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       The methodological process began by consulting with the project’s Tempe city government partner Dr. Stephanie Deitrick, Chief Data Analytics Officer, to outline the curriculum’s initial goals. Relevant reviewed literature and interviews withs AI pedagogy experts informed the flow, organization, and body of content. Common topics between the reputable literature and consulted subject-matter experts verified the validity of content structure and topic inclusion. In conjunction, the coalescence of Dr. Deitrick iterative feedback with the former allowed for a successful workflow.

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Curriculum Syllabus</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Module 1: What is AI?</Text>
            <SmallText>
			-Overview and Basics
<br />- Foundational terms
<br />- Data types
<br />- Machine learning fundamentals
<br />- Generative AI
<br />- Self-Check Questions
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Module 2: AI Risks</Text>
            <SmallText>
			- Categories
    <br />- Malicious Use
    <br />- AI Race
    <br />- Organizational Risks
<br />- Rogue AIs
<br />- Intro to current approaches to risk
    <br />- Blueprint for an AI Bill of Rights
    <br />- Tempe Ethical AI Policy
	</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Module 3: AI in Tempe</Text>
            <SmallText>
			- Two municipal case studies
<br />- Reminder: Tempe’s Mission
<br />- Your role
<br />- Tempe’s Ethical AI Policy overview
<br />- Overview of existing AI use cases in Tempe
            </SmallText>
          </div>
<hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Module 4: Practical Steps for Governance</Text>
            <SmallText>
			- What can I do about AI?
    <br />- Should I use AI at all?
<br />- Risk mitigation strategies
<br />- Broader Legislative and Policy Map
            </SmallText>
          </div> 		  
			<hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Appendix</Text>
            <SmallText>
			- What about procurement?
    <br />- Additional resources
            </SmallText>
          </div> 		  
		<hr className="border-t border-gray-300 my-4 mt-6" />
		</div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        In conclusion, this project addresses a critical gap by creating an approachable, comprehensive AI Literacy and Ethics Curriculum tailored to the City of Tempe&apos;s needs. Grounded in the Tempe Ethical AI Policy, the curriculum emphasizes responsible AI use, ethical considerations, and risk management. By focusing on municipal priorities, the project hopes to enhance the city&apos;s ability to navigate the evolving generative AI landscape effectively. 

In Spring 2025, the Dr. Deitrick plans to implement components of the outlined project for employee use. The project hopes to equip municipal employees with the knowledge to make informed decisions and uphold ethical standards in AI adoption. Altogether, these efforts hope to, on a macro-scale, effect increased productivity, improved public service delivery, data-driven decision-making, cost savings, public safety and security.

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Osaiyekemwen Ruth Ogbemudia', role: '(Project Lead)', school: 'Cornell University' },
			{ name: 'Helen Song', role: '', school: 'University of Wisconsin-Madison' },
            { name: 'Jackson Luo', role: '', school: 'University of Illinois (Chicago)' },
            { name: 'Samdeet Kahn', role: '', school: 'Brown University' },
            { name: 'Junsuh Kim', role: '', school: 'MIT' },
            { name: 'Alyssa Png', role: '', school: 'Columbia University' },
            { name: 'Kendall Schrohe', role: '', school: 'Santa Clara University ' },
			{ name: 'Anish Wuppalapati', role: '', school: 'Georgetown University' }
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
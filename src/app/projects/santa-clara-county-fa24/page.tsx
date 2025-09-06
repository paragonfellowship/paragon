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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Santa Clara County, CA</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>AI Use Case Guidelines for Mitigating<br></br>Gen AI Risk in Santa Clara County, CA</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Santa Clara County, CA is a prominent local government serving nearly two million residents. The County faces an increasing challenge in evaluating and implementing AI systems across its numerous departments. As AI technology becomes increasingly prevalent in government operations, the County receives a growing influx of proposals for AI implementation that span diverse use cases - from streamlining administrative processes to enhancing public services. Currently, the County&apos;s approach requires creating individual guidelines and evaluation criteria for each AI technology proposal, resulting in a fragmented and resource-intensive process. This approach has become increasingly unsustainable as the volume of AI proposals grows. The lack of a standardized framework for evaluating AI technologies across departments makes it challenging for the County to maintain both efficiency and thorough risk assessment in its technology adoption process.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        This document recommends a streamlined multi-stage framework for generating AI use case guidelines for the Santa Clara County government. We offer a template of use-case guidelines to approve future technology usage proposals to streamline the time-consuming process of producing guidelines for each individual proposal. We propose a singular, standardized document to evaluate AI usage applications utilizing a two-tier template, first focusing on technology and then on specific departments and divisions within the government. By implementing this structured methodology, Santa Clara County, CA can more effectively assess and approve AI systems across departments, while ensuring both technological consistency and departmental specificity. 
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       We focused on analyzing Santa Clara County&apos;s existing technology evaluation processes to develop an efficient two-tiered template for AI use case guidelines. We reviewed current departmental use case guidelines to identify common elements and department-specific requirements. We conduct a systematic literature review of relevant state legislation, including California&apos;s AB 302 and SB 313, as well as federal frameworks such as NIST&apos;s AI Risk Management Framework.

<br></br><br></br>To validate our approach, we mapped existing County use case guidelines to identify patterns in departmental requirements and conducted stakeholder consultations to understand specific implementation needs. We also benchmarked against other municipal AI governance frameworks, particularly from jurisdictions of similar size and complexity. This comprehensive strategy enabled us to determine the essential components for both technology-specific and department-specific tiers and maintain adaptability across county departments.

        </Text>
      </Section>
		<Section>
        <Subheading>Project Deliverables</Subheading>
        <Text>
        We created a two-tiered template for generating use-case guidelines that simplifies the guideline creation process to ensure that each department&apos;s guidelines are both thorough and aligned with organizational standards.
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Two Tiers</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Tier 1 (Technology Focused)</Text>
            <SmallText>This tier was designed to establish a standardized baseline for consistent operational understanding. It includes a comprehensive technology overview, limitations such as constraints and usage restrictions, typical use cases, and data security and privacy measures. 
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Tier 2 (Department/Division-Focused)</Text>
            <SmallText>This tier Includes detailed guidance on specific technology applications, outlines tailored data security measures, and prescribes detailed responsibility and liability frameworks. In addition, it includes protocols for incident response and contact information to guarantee that each department has clear guidelines on how to handle situations when they arise from technology use. Tier 2 has a narrower scope due to the targeted context of the department/division.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        Our two-tiered template for use-case guidelines represents a novel approach to streamlining technology application proposals and mitigating risks from new GenAI technologies. By introducing a modular framework with two distinct levels, our method ensures a more efficient, scalable, and adaptable procurement process for evaluating and approving the use of various rapidly emerging technologies across a wide range of county operations.

We recommend a phased approach to implement this system. The county should begin by creating a robust set of Tier 1 guidelines for any broad pilot technology, such as generative AI tools like GPTs. Concurrently, departments can start drafting Tier 2 guidelines specific to their operational needs, using the Tier 1 framework as a base. The current existing guidelines can be retrofitted into our two-tier structure in order to ensure consistency and alignment with the new framework. By leveraging our recommendations, Santa Clara County can enhance its capacity to adopt and regulate technologies while safeguarding security, privacy, and ethical use.  

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Favour Nerrise', role: '(Project Lead)', school: 'Stanford University' },
			{ name: 'Eesha Agarwal', role: '(Project Lead)', school: 'Princeton University' },
            { name: 'Carmela Wilkins', role: '', school: 'Parsons School of Design' },
            { name: 'Mishayla Harve', role: '', school: 'Georgia Institute of Technology' },
            { name: 'Pranav Dulepet', role: '', school: 'University of Maryland' },
            { name: 'Priti Rangekar', role: '', school: 'Stanford University' },
            { name: 'Tony Wang', role: '', school: 'Stanford University' },
			{ name: 'Atharva Nihalani', role: '', school: 'Brown University' },
			{ name: 'Abiha Kashif', role: '', school: 'University of Minnesota' }
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
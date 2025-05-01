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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Brownsville, TX</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Mitigating the Impacts of the Termination<br />of the Affordable Connectivity Program (ACP)</Text>
        </div>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Reliable and high-speed internet has become critically important for participating in the digital economy, as well as for accessing essential services, such as online healthcare, educational opportunities, and professional development resources. Digital inclusion similarly promotes access to social services and improves civic participation. However, there currently exists a digital divide in the United States which is both about the affordability and accessibility of broadband access. 

<br /><br />The Affordable Connectivity Program (ACP) was a prominent federal initiative that achieved widespread enrollment across the United States, significantly improving broadband accessibility and affordability for eligible households. The City of Brownsville, Texas (the “City”), was one of the largest beneficiaries under the program. Consequently, the termination of the ACP earlier in 2024, due largely to funding constraints, raises important questions about the City’s ability and approach to ensuring that its residents remain connected to the internet.

<br /><br />Considering the adverse threat that an expanding digital divide poses, Brownsville, TX, is determined to leverage and direct all available resources to ensure that its residents continue to enjoy uninterrupted and affordable broadband access following the termination of the ACP.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        This project aims to evaluate the impacts of the ACP&apos;s termination on broadband access in the City of Brownsville. Building on insights gained from stakeholder engagement and secondary data, the policy memorandum outlines strategic pathways for Brownsville to fund and sustain affordable broadband access. The memorandum acknowledges the City of Brownsville’s pre-existing framework and partnerships, which were established prior to the ACP’s termination, and leverages them to propose a series of actionable recommendations.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       Our methodological process began with an analysis of the legislative history and policies underlying the ACP, as well as the program’s impact across the United States. Building on this understanding, we examined how the termination of the ACP affects cities like Brownsville, which were heavily dependent on the program.

<br /><br />Through a combination of desk research and stakeholder engagement, we explored Brownsville’s response to the termination of the ACP, including the redirection and in some cases, acceleration, of the City’s pre-existing efforts to improve broadband access for its residents. Following this, the memorandum identified gaps in Brownsville’s current efforts to provide affordable and accessible broadband for its residents.

<br /><br />Through an in-depth comparative analysis, we comprehensively reviewed the models and initiatives adopted across the United States to ensure continuous, accessible, and affordable broadband access. This analysis included examples from cities such as Pharr, TX; Santa Cruz, CA; and Hillsboro, OR, to gain insights into successful models, programs, and initiatives, and their possible applicability in Brownsville. This analysis directly informed some of the policy recommendations in the final memorandum, forming part of the proposed multifaceted approach designed to help Brownsville mitigate the impact of the ACP’s termination and institutionalize affordable broadband access for residents of the City.

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Analysis of the ACP&apos;s termination</Text>
            <SmallText>An analysis of insights gained from available data on the impact of the ACP across the United States, particularly in Brownsville. This analysis also examines the potential effects of the ACP’s termination, especially on the City of Brownsville, which was one of the program’s largest beneficiaries.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Policy Review</Text>
            <SmallText>A review of existing local, state, and federal policies, programs, and initiatives established across the United States to improve and promote broadband access and digital inclusion. This includes an evaluation of best practices and successful models from other cities and states.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5'> 
            <Text className='mb-2'>Recommendations</Text>
            <SmallText>Policy recommendations that the City of Brownsville may adopt and implement to mitigate the expansion of the digital divide following the termination of the ACP. These recommendations present a multifaceted and multilayered approach and include detailed strategies for securing and maximizing federal funding, accelerating local initiatives, fostering public-private partnerships, exploring alternative funding sources, and advocating for necessary policy changes.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        In conclusion, for many underserved and unserved communities across the United States, the ACP represented inclusion by subsidizing broadband access for eligible households, including those within the City of Brownsville. The termination of the ACP earlier in 2024 raises concerns about Brownsville’s ability to ensure uninterrupted and affordable broadband access for its residents.

<br /><br />The policy memorandum outlines a series of actionable recommendations, prioritized within a structured implementation timeline. The short-term implementation plan includes strategies that the City of Brownsville could adopt to provide residents with immediate, though temporary, broadband access while positioning itself to secure federal funding under relevant programs for long-term broadband infrastructure development and other digital inclusion initiatives. 
<br /><br />The mid-term implementation plan focuses on ensuring stable, affordable, and accessible broadband by attracting more Internet Service Providers (ISPs) to Brownsville and fostering competition among these ISPs. 

<br /><br />The long-term implementation plan emphasizes participation in and advocacy for robust federal broadband policies that promote affordability and infrastructure development. 

<br /><br />By providing strategic recommendations, the policy memorandum empowers Brownsville to navigate the post-ACP landscape with resilience and innovation.
</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Tomisin Olanrewaju', role: '(Project Lead)', school: 'Harvard University' },
			{ name: 'Caroline Bouisse', role: '', school: 'The University of Chicago' },
            { name: 'Ahmed Diongue', role: '', school: 'MIT' },
            { name: 'Taylor Petrofski', role: '', school: 'University of Virginia' },
            { name: 'Danni Chacon', role: '', school: 'Vanderbilt University' },
            { name: 'Garv Jain', role: '', school: 'George Mason University' },
            { name: 'Dani Benavente', role: '', school: 'McGill University' },
			{ name: 'Rhea Banerjee', role: '', school: 'Georgetown University' }
          ].map((contributor, index) => (
            <div key={index} className='border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center'>
              <Text className='text-center font-semibold'>{contributor.name} ({contributor.role})</Text>
              <SmallText className='text-center'>{contributor.school}</SmallText>
            </div>
          ))}
        </div>
      </Section>

      <Footer/>

    </>
  );
}
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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Lebanon, NH</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Website & Software Accessibility<br></br> in Lebanon, New Hampshire</Text>
        </div>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        The City of Lebanon, New Hampshire, must comply with Title II of the Americans with Disabilities Act (ADA), which mandates that local governments ensure their services, programs, and activities are accessible to individuals with disabilities. The Department of Justice’s 2024 rule for digital ADA compliance establishes Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as the technical standard for compliance under Title II of the ADA. Compliance with this standard is crucial to ensure that all citizens can access important government updates, communications, and services.
<br></br><br></br>People with disabilities face obstacles when accessing digital content that fails WCAG 2.1 AA standards. The City of Lebanon guarantees both legal compliance and equitable accessibility for all community members by upholding WCAG 2.1 AA. Otherwise, significant swaths of Lebanon’s populace will be unable to access, understand, or interact with online government services if these requirements are not met. Therefore, adherence to the DOJ regulations will promote inclusiveness, avert prejudice, and improve the general user experience for persons with a disability. 

        </Text>
      </Section>

      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
        The team first conducted research to ground ourselves in the common themes found in accessibility literature. After highlighting some of the most common ADA complaints, we focused on interviewing pertinent stakeholders within the city. These interviews served as a baseline for addressing Lebanon-specific compliance concerns. Our research has borne out case study countries like Norway that have had the most success in digital accessibility. Some of our research groups took the unique approach of conducting an accessibility audit, walking through Lebanon&apos;s website as an ADA tester would. This audit provided valuable feedback from the perspective of a person with a disability. 
        </Text>
      </Section>
		<Section>
        <Subheading>Project Deliverables</Subheading>
        <Text>
        Our 30-page report provides “Action Pack Items” or a list of suggestions, recommendations, or forms tailored to the City of Lebanon&apos;s current accessibility issues. There are three Action Pack Items in this report divided among Lebanon’s three major accessibility issues:
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Action Pack Items</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Action Pack #1</Text>
            <SmallText>Action Pack Item #1 is meant to give specific and general recommendations to the city of Lebanon to help address persistent accessibility issues in digital compliance with Title II of the ADA. This item will focus holistically on several different aspects of digital accessibility. 
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Action Pack #2</Text>
            <SmallText>The primary objective of Action Pack Item #2 is to identify significant barriers for individuals with disabilities from submitting a digital accommodation request via Lebanon’s website. Absent an accessible reporting mechanism, Lebanon has no means of addressing complaints or blindspots in its WCAG 2.1 standard AA compliance. This Action Pack Item is a written accessibility audit report conducted on Lebanon’s online accessibility reporting web form.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'>
            <Text className='mb-2'>Action Pack #3</Text>
            <SmallText>The primary objective of Action Pack Item #3 was to identify essential steps beyond WCAG 2.1 requirements for ensuring comprehensive accessibility of the tools/software. Action Pack Item Item #3 is a third-party vendor form built around the WCAG 2.2 AA technical standard. The higher standard aids Lebanon’s Technology Review Committee in conforming to the DOJ’s 2024 rule and future regulations that heighten ADA requirements.  
			</SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        In conclusion, Lebanon can improve its digital accessibility compliance under Title II  of the ADA by implementing these action pack items. Examining the demographic breakdown in the City of Lebanon shows that around 10.8% of the entire population identifies as having a disability. Of this subsection, the most common disabilities include mobility, cognitive, and hearing impairments. Given the prevalence of these types of disabilities, Lebanon&apos;s focus in the short run should be on addressing concerns from online users with these impairments. 
<br></br><br></br>Although each action pack item aids Lebanon&apos;s compliance efforts, the City should further focus in the long run on a concept known as &quot;Universal Design.&quot; Universal design entails opening digital spaces for all users, not just people with disabilities. The principles underlying universal design are the backdrop to ADA regulatory changes. Thus, Lebanon can ensure its compliance efforts by striving above the minimum regulatory criteria toward a universal digital design. 
</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Yana Sharifullina', role: '(Project Lead)', school: 'Swarthmore College' },
            { name: 'Naa Ameley Owusu-Amo', role: '', school: 'Baylor University' },
            { name: 'Nora Sun', role: '', school: 'Harvard University' },
            { name: 'Alicia Krasner', role: '', school: 'Harvey Mudd College' },
            { name: 'Fallyn Buckner', role: '', school: 'Claremont McKenna College' },
            { name: 'Tyfani Fennell', role: '', school: 'Washington University in St. Louis' }
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
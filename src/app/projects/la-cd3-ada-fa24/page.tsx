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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Los Angeles CD 3, CA</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Web Accessibility in Los Angeles<br />(Council District 3)</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        In today’s digital age, accessibility is essential to ensuring that all residents can effectively and equitably engage with their local government. Recognizing this, the Department of Justice (DOJ) issued <a href="https://www.justice.gov/opa/pr/justice-department-publish-final-rule-strengthen-web-and-mobile-app-access-people" style={{ color: 'blue', textDecoration: 'underline' }}>guidance</a> requiring municipal governments to bring their digital platforms, sites, and media into compliance with WCAG standards within two years. These requirements build on Title II of the Americans with Disabilities Act (ADA), which mandates that municipalities make their digital services and communications accessible to all users, including individuals with various types of disabilities.

<br /><br />According to 2023 <a href="https://data.census.gov/table?q=Los%20Angeles,%20California%20and%20disability&g=060XX00US0603791750_160XX00US0644000" style={{ color: 'blue', textDecoration: 'underline' }}>US Census Bureau data</a>, the City of Los Angeles, home to approximately 3.8 million residents, had 443,919 people with disabilities, encompassing a diverse range of needs including, but not limited to:
<br /><br />
- 97,347 individuals with hearing impairments
<br /><br />
- 93,319 individuals with vision impairments
<br /><br />
- 181,041 individuals with cognitive disabilities
<br /><br />
While Los Angeles has already made significant progress in fostering an inclusive digital infrastructure, inconsistencies in accessibility standards across departments and platforms present an opportunity for improvement. This project seeks to address these inconsistencies by proposing a comprehensive, citywide strategy to digital accessibility. By standardizing compliance and resolving remaining accessibility challenges, LA City Council District 3 (CD3) and the broader City of Los Angeles can strengthen their commitment to equitable service and establish themselves as a model of digital inclusivity for municipalities nationwide.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        In order to ensure a comprehensive approach to improving digital accessibility, this project offers targeted recommendations based on the current level of adoption and desired compliance goals of LA’s District 3. The project and its deliverables were designed to support city staff in achieving compliance with accessibility standards, implementing technical improvements, and fostering meaningful community engagement, so that CD3 can make its digital platforms and resources more inclusive and accessible to all residents.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       Compliance Guidelines:<br />The team first reviewed the April 24, 2024, DOJ final rule requiring state and local governments to make their website compliant with WCAG 2.1 Level A and Level AA guidelines for ADA Title II. Then, the fellows created an updated, user-friendly handbook incorporating examples, definitions, and visual enhancements based on a similar document from the Los Angeles Department on Disabilities (DOD). Importantly, the team included updated success criteria, ensuring that the handbook aligns with WCAG 2.2.
<br /><br />
Technical Enhancements:<br />To begin with, the team assessed 41 departmental and 15 district websites for accessibility compliance using automated tools (e.g., WAVE) and manual testing. The fellows then identified, detailed, and addressed common accessibility challenges in a guidance deck for developers, emphasizing solutions for both retrofitting existing sites and designing accessible websites from the outset.
<br /><br />
Community Engagement:<br />The team started by reviewing best practices in digital accessibility. The fellows then drafted interview and survey tools, as well as conducted a pilot interview with Valley Village; using the interview’s insights, the fellows refined the tools and expanded topics to include device compatibility. Last, the team developed feedback survey on Qualtrics for integration into the CD3 website. 

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Compliance Guidelines — Technical Standards Handbook: </Text>
            <SmallText>Building on the LA Department on Disabilityʼs (DOD) existing guidance on WCAG 2.1 compliance, the team has developed an actionable handbook for CD3 on making their digital artifacts (e.g., CD3 website, social media) accessible. It aims to be more digestible in design and actionable by including examples of compliance. Specifically, it focuses on Level AA compliance with WCAG (as required by ADA Title II and an April 2024 final rule from the DOJ) and incorporates the updated standards released in WCAG 2.2.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Technical Enhancements — Deck on Accessibility Standards:</Text>
            <SmallText>Based on the comprehensive review of Los Angeles’ 15 district and 41 departmental websites, the team has developed a deck to address recurring accessibility issues. It includes stylized guidance and examples of common mistakes, providing CD3 with a standardized framework for understanding and addressing these issues. To complement the deck, the team produced a detailed resource and process document, capturing notes and observations from the review of specific sites. 
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5'> 
            <Text className='mb-2'>Community Engagement — Interview Guide:</Text>
            <SmallText>Designed to facilitate focus sessions with key stakeholders, the document standardizes the approach across sessions, ensuring consistent and comprehensive data collection. More specifically, the interview guide includes tailored questions for various stakeholder groups, an interview request template, a list of potential contacts to engage, and a feedback survey to streamline data collection and ensure actionable insights.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        Through this project, the team has equipped Los Angeles’ District 3 with tailored tools, resources, and recommendations, directly supporting the City of LA in meeting its WCAG compliance obligations while fostering a culture of proactive accessibility. With standardized compliance guidelines and actionable resources, CD3 staff can efficiently identify and resolve accessibility issues, ensuring that digital infrastructure improvements align with DOJ mandates. At the same time, by prioritizing accessibility and involving stakeholders in the process, CD3 strengthens its relationship with the community, meeting evolving needs of its residents.
<br /><br />
While this project has laid a strong foundation for CD3’s digital accessibility improvements, long-term success will depend on sustained commitment and continued innovation. Moving forward, it is recommended that CD3 incorporates the *Success Criteria* from the Technical Standards Handbook into its website to comply with the April 24, 2024, Final Rule. Immediate steps include addressing existing instances of noncompliance and resolving recurring issues using the Deck on Accessibility Standards. CD3 must also finalize the survey design by pilot-testing it with a small group of residents to ensure clarity and usability. The survey should then be integrated into the feedback portal with the web development team’s support, followed by a communication campaign to encourage widespread participation.
<br /><br />
By implementing these recommendations, CD3 will achieve its accessibility goals and serve as a model for the city. Notably, <a href="http://myla311.lacity.org" style={{ color: 'blue', textDecoration: 'underline' }}>MyLA311</a>, which currently lacks accessibility features, could benefit from CD3’s leadership in creating a citywide standard. These efforts not only ensure compliance but also position CD3 as a leader in digital inclusivity, fostering equitable access to services across Los Angeles — and nationwide.


</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Yana Sharifullina', role: '(Project Lead)', school: 'Swarthmore College' },
			{ name: 'Cynthia Zheng', role: '', school: 'Swarthmore College' },
            { name: 'Nick Masi', role: '', school: 'Brown University' },
            { name: 'Jun Lee', role: '', school: 'Brown University' },
            { name: 'Autumn Dorsey', role: '', school: 'Harvard University' },
            { name: 'Hana Samad', role: '', school: 'McGill University' },
            { name: 'Madison Harvey', role: '', school: 'Brown University' },
			{ name: 'Tembibolaji Oni', role: '', school: 'University of Pennsylvania' }
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
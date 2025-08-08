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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>US State Department</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Evaluating AI Weapons<br></br>Technology for Arms Transfers</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Emerging technologies are critical to national security and are becoming more advanced every day. As a general purpose technology, Artificial intelligence (AI) can accelerate innovation and adoption in other domains of critical and emerging technologies. For militaries worldwide, AI offers up new opportunities as well as challenges. To better understand the risks involved in developing and using AI in the military domain, the 2025 Spring Cohort Paragon team conducted an extensive and academic-style research project, providing the Office of Regional Security and Arms Transfers (RSAT), within the Bureau of Political-Military Affairs at the U.S. Department of State (DOS), with a landscape capture of current AI usage in the security domain as well as recommending  ideas and methods for guiding future policies regarding how AI embedded in defense articles/services could be transferred. This project explored existing case studies of ‘weaponized’ AI worldwide, conducted stakeholder interviews, and developed a framework for the USG to better address the intersection of emerging technologies and arms transfers. 

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        Our team set out to provide analysis of the current uses of weaponized AI and to create a framework, i.e. ‘Weaponized AI Transfer Scorecard’, to help evaluate arms transfers in the future. We accomplished these goals through two deliverables:
    <br /><br />1. Weaponized AI Landscape Overview
        <br />a. Definition of Key Terms: Defined terms necessary to understand different forms of AI and how AI may be used in the context of national security and defense.
        <br />b. Discussion of Contemporary AI Weapon Landscape: Mapped key players and the latest developments in the field of AI in the military and national security domain. 
        <br />c. Overview of Weaponized AI on the Global Stage: Explored how countries around the world have been leveraging weaponized AI, including a forecast of possible future use. 
    <br /><br />2. Weaponized AI Framework
        <br />a. Key Principles: Defined and explained key principles to help assess a AI technology transfer case examples.
<br />b. Case Studies: Evaluated relevant case studies
<br />c. Stakeholder Interviews: Spoke to key subject matter experts
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       Our research began with a broad literature review, which fellows then narrowed to develop a comprehensive framework for evaluating the transfer of AI-enabled military capabilities. Landscape Analysis: We conducted a thorough mapping of the ‘weaponized’ AI ecosystem, examining historical patterns of technological revolution in warfare, defining key terminology, and identifying convergent challenges like algorithmic opacity and data governance issues. We also conducted a market analysis and survey of the current AI and defense tech ecosystem. 
    <br /><br />1. Principles Development: We established seven core principles (Fairness, Transparency, Accountability, Data Governance, Sustainability, Cybersecurity, and Non-Proliferation) based on ethical frameworks, legal considerations, and technical limitations identified in the landscape analysis. We then refined each principle with requirements that RSAT could use nominally as a Transfer Scorecard.
    <br /><br />2. Case Study Application: We applied our scorecard to diverse strategic partnerships, selecting representative cases across NATO allies, ANZUS treaty members, mutual defense partners, and space-based technologies. For each case, we systematically evaluated compliance with our established principles, documented findings, and identified patterns to validate the scorecard&apos;s effectiveness as a policy tool for decision-makers evaluating potential weapons transfers.
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Weaponized AI Landscape Overview</Text>
            <SmallText>
				The initial landscape analysis revealed a rapidly evolving ecosystem in which traditional defense contractors and civilian technology companies increasingly converge. The report distinguished between Lethal Autonomous Weapons Systems (LAWS) that can select and engage targets without human intervention after activation, and Intelligence, Surveillance, Target Acquisition, and Reconnaissance (ISTAR) platforms that enhance battlefield awareness while maintaining human oversight. The analysis identified several convergent challenges affecting AI weapons development: 
    <br />• Definitional ambiguity 
    <br />• Ethical considerations (i.e. Human Responsibility and Accountability Measures)
    <br />• The &quot;black box&quot; problem of algorithmic opacity
    <br />• Data governance challenges in military environments
    <br />• Reliability issues, including structural bias integration and operational unpredictability
<br /><br />Next, a market analysis showed that U.S. and Chinese investments dominate globally, with the U.S. leading in private sector funding and China producing more research publications. Fellows found that traditional defense contractors like Lockheed Martin and Northrop Grumman heavily invest in AI integration, while technology companies that previously avoided military applications are now entering the field. These developments reshape tactical decision-making and strategic considerations across military domains—from autonomous ground vehicles and drone swarms to AI-enhanced naval vessels and cyber operations. Finally, Deliverable #1 (Interim Report) examined weaponized AI developments across multiple geographic regions, highlighting case studies from Iran, Israel, North and South Korea, China, and the Arctic. 
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Weaponized AI Transfer Scorecard</Text>
            <SmallText>
			Fellows created a comprehensive framework for evaluating potential transfers against seven fundamental principles in an attempt to help policymakers balance strategic partnerships with national security considerations. The seven core principles are as follows: 
    <br /><br />1. Fairness
        <br />◦ Evaluation of algorithmic fairness and bias mitigation; 
        <br />◦ Assessment of pre-existing, technical, and emergent biases; 
        <br />◦ Measurement of equalized outcomes across different contexts. 
    <br /><br />2. Transparency
        <br />◦ Addressing the &quot;black box&quot; problem of algorithmic opacity through explainable AI; 
        <br />◦ Ensuring openness throughout the learning and training process; 
        <br />◦ Applying software engineering principles to development. 
    <br /><br />3. Accountability
        <br />◦ Creating systems of human expertise and accountabilityin commanding and ordering AI deployment; 
        <br />◦ Defining and scoping human-in-the-loop validation approaches; 
        <br />◦ Establishing clear responsibility for AI-driven decisions. 
    <br /><br />4. Data Governance
        <br />◦ Ensuring data traceability and documentation;
        <br />◦ Standardizing anonymization, processing, and transformation practices;
        <br />◦ Clarifying terms regarding data ownership and updates.
    <br /><br />5. Sustainability
        <br />◦ Assessing full lifecycle impacts from production to decommissioning;
        <br />◦ Evaluating energy consumption and infrastructure demands;
        <br />◦ Managing long-term economic liabilities.
    <br /><br />6. Cybersecurity
        <br />◦ Examining the recipient country&apos;s cyber defense framework;
        <br />◦ Evaluating system design for zero-trust architecture;
        <br />◦ Implementing security audits and anomaly detection.
    <br /><br />7. Non-Proliferation
        <br />◦ Preventing horizontal and vertical proliferation of weaponized AI;
        <br />◦ Addressing military technologies being integrated into civilian public safety infrastructure;
        <br />◦ Implementing controls against reverse engineering.
<br /><br />Fellows applied this framework to diverse real-world scenarios, including NATO relationships (U.S. to Estonia to Ukraine, and U.S. to France), strategic partnerships (U.S. to Israel), intelligence-sharing alliances (U.S. to Australia and New Zealand), mutual defense treaties (U.S. to South Korea), and dual-use technologies (Starlink, Large Language Models). These case studies demonstrated the scorecard&apos;s suitability and value across different strategic contexts.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
		</div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        The Weaponized AI Transfer Scorecard provides RSAT with a tool to make forward-leaning decisions about AI-technology-defense transfers that balance strategic partnerships with security considerations. By systematically evaluating each transfer against established principles, the scorecard helps identify potential risks while facilitating beneficial exchanges with allies. As AI technology evolves (which it will inevitably and at increasing acceleration), this framework offers a foundation that can help steer policy knowledge on other matters relating to science and technology.

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Jacqueline Malaret', role: '(Project Lead)', school: 'Florida International University' },
			{ name: 'Audrey Berlie', role: '', school: 'Stetson University' },
            { name: 'Alexa Celis', role: '', school: 'NYU' },
            { name: 'Hyerin Cha', role: '', school: 'George Mason University' },
            { name: 'Arshi Mahajan', role: '', school: 'Dartmouth College' },
            { name: 'Cate Schunk', role: '', school: 'University of Dallas' },
			{ name: 'Phia Teller', role: '', school: 'NYU' },
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
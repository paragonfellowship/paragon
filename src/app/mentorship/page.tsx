import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {Subheading, Text } from '@/components/Typography';
import BgGrid from '@/components/BgGrid';
import { RiArrowDownLine } from 'react-icons/ri';
import GrayDivider from '@/components/GrayDivider';
import FAQuestion from '@/components/FAQuestion';
import Navbar from '@/components/Navbar';
import {FA_APP_URL , INFO_SESSION_URL} from '@/app/constants';
import Card from '@/components/Card_Static';

const sections = [
  { id: "program_overview", title: "PROGRAM OVERVIEW" },
  { id: "eligibility", title: "ELIGIBILITY" },
  { id: "mentor_faq", title: "MENTOR FAQ" },
  { id: "mentee_faq", title: "MENTEE FAQ" },
];

export default function About() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <TopBar />
      <div className="background-container min-h-[100svh] flex flex-col">
        <BgGrid />
        <div className="w-full px-4 md:px-0 flex-1 flex flex-row md:block">
        <div className="flex-1 flex flex-col justify-center md:block">
          <Text className='text-white text-4xl pl-4 md:text-7xl md:pl-20 md:mt-60 pb-10 md:pb-0 font-semibold text-center md:text-left'>
            Paragon Policy Mentorship
          </Text>
<br />
            <Text className="fade-in text-xl md:text-3xl mt-16 md:mt-[5%] mb-12 md:mb-5 text-center md:text-right md:ml-auto md:mr-20">
              Empowering Fellows through one-on-one mentorship and community support.
            </Text>

            <div className="flex justify-center md:justify-end md:pr-[6%] mb-20 md:mb-0">
              <Button 
                className="fade-in"
                style="secondary" 
                inNewTab 
                url={FA_APP_URL}
              >
                apply as a mentee
              </Button>
              <Button 
                className="fade-in ml-5"
                style="secondary" 
                inNewTab 
                url={INFO_SESSION_URL}
              >
                apply as a mentor
              </Button>
            </div>
          </div>
        </div>

        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7vh] left-0 z-10 w-full flex justify-center text-4xl">
          <RiArrowDownLine />
        </div>

        {/* <div className="absolute -bottom-1 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-dark md:block hidden" /> */}
        
        <div className="absolute top-0 left-0 w-full h-full bg-[#050022] md:bg-opacity-65 bg-opacity-40 -z-10" />
      </div>
      
      <Section>
        <Navbar sections={sections} />
      </Section>
      <Section id="program_overview">
  <Subheading className='text-3xl md:text-5xl mb-4'>Program Overview</Subheading>
  <GrayDivider />
  <Text className="text-base md:text-lg">Our six-month program provides a tech policy Fellowship with one-on-one mentoring and structured support from a dedicated community.</Text>
  <br />
  <Text className='font-italic mt-6 text-center'>&quot;Just one hour a month can launch a career&quot;</Text>
  <br /><br />
<div style={{ display: 'flex', alignItems: 'stretch'}}>
  <div style={{ marginRight: '16px', flexBasis: '50%', maxWidth: '50%', display: 'flex', flexDirection: 'column' }}>
    <Card style={{ flexGrow: 1 }}> {/* Apply flexGrow to the Card */}
      <h3 className="text-2xl font-bold">For Mentors:</h3>
      <br />
      <p>Share your expertise with the tech policy leaders of the future. Mentors benefit from expanded professional networks and opportunities to develop and refine management and leadership.</p>
	</Card>
  </div>

  <div style={{ flexBasis: '50%', maxWidth: '50%', display: 'flex', flexDirection: 'column' }}>
    <Card style={{ flexGrow: 1 }}> {/* Apply flexGrow to the Card */}
      <h3 className="text-2xl font-bold">For Mentees:</h3>
      <br />
      <p>Develop your career through curated events and deep one-on-one relationships. Fellows expand tech policy expertise with the personalized support of a seasoned mentor.</p>
    </Card>
  </div>
  
</div>
<br />
        <div className='flex justify-center'>
          <Button url={FA_APP_URL} inNewTab className='mt-4 justify-center'>Become a Mentor</Button>
          <Button url={INFO_SESSION_URL} inNewTab className='mt-4 ml-5 justify-center'>Become a Mentee</Button>
        </div>
</Section>

<Section id="dates">
  <Subheading className='text-3xl md:text-5xl mb-4'>Important Dates</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg">
   Our mentorship program operates bi-annually. Our innaugural cohort applications (for both mentor and mentee) close July 1st. The program will last from mid July to late December.
  </Text>
  {/* <Text className="text-base md:text-lg mt-6">
    Apps for the Fall 2025 cohort will be expected to open at a later date. Join our <a href={NEWSLETTER_URL} className="underline">mailing list</a> to be notified when apps open.
  </Text> */}
</Section>
      <Section id="mentor_faq">
        <Subheading>Mentor FAQ</Subheading>
        <GrayDivider/>
        <FAQuestion
          question = "What is expected of me as a mentor?"
          answer = "As a mentor, you'll guide a Paragon Fellow through their career journey, providing career advice, sharing your professional experiences, and helping them set and achieve goals. You'll meet with your mentee 1-2 times a month and offer constructive feedback."
          />
        <FAQuestion
          question = "How much time do I need to commit?"
          answer = "You will need to commit to monthly meetings with your mentee for about 30-60 minutes per meeting, along with occasional follow-up communication. This will span six months."
        />
        <FAQuestion
          question = "What will I be responsible for during the mentorship?"
          answer = "You'll be responsible for guiding your mentee in areas like resume building, career planning, job search strategies, and networking. You can also share industry insights and advice based on your experiences."
        />
        <FAQuestion
          question = "How will I be paired with a mentee?"
          answer = "We’ll match you with a mentee based on shared interests, career goals, and availability. We’ll make sure that both you and your mentee are aligned on the mentorship goals."
        />
        <FAQuestion
          question = "What do I do if I face challenges with my mentee?"
          answer = "If you're facing challenges, our program coordinators are available to help with suggestions or to adjust the mentorship plan. We want to ensure both you and your mentee have a successful experience."
        />
        <FAQuestion
          question = "What can I expect?"
          answer = "Mentors in the Paragon Policy Mentorship Program will have the opportunity to inspire and guide emerging tech policy professionals while expanding their own networks by connecting with fellow mentors. They will also receive a LinkedIn endorsement and invitations to our exclusive speaker events and LinkedIn group, where we share job opportunities. Paragon is also happy to write a letter of recommendation for mentors who are previous Paragon Fellows themselves, and spotlight outstanding mentors and mentees on our newsletter and social media. Mentees can look forward to career guidance, peer support, and expert advice on tackling complex challenges within the Responsible Tech landscape. They will also gain access to our network of speaker events and LinkedIn group to support their professional growth."
        />
        <FAQuestion
          question = "Can I continue mentoring after the program ends?"
          answer = "Yes! We encourage long-term connections and will provide opportunities for you to stay engaged with the Paragon Fellowship community after the program concludes."
        />
        <FAQuestion
          question = "What kind of student would be best suited for this Fellowship? How much government experience is required?"
          answer = "We encourage all students located in the US who are interested in making real-world impact via policy or government work to apply. This Fellowship is geared towards training those without much formal policy experience, as well as more experienced students who want to exercise their analytical, writing, and policy abilities. We encourage experienced candidates to apply to be Project Leads."
        />
        <FAQuestion
          question = "I am an international student. Can I still be a Fellow?"
          answer = "All students who will reside in the United States during the Fellowship and have work authorization are eligible to apply. We will work with international students to attempt to provide them a stipend, though we cannot guarantee this depending on the type of visa you possess."
        />
		<FAQuestion
          question = "I am a high school student excited to enter the world of tech policy. Can I apply?"
          answer = "Unfortunately, we do not accept high school applicants at this time. All Fellows must have, at minimum, started the first semester of their undergraduate degree."
        />
		<FAQuestion
          question = "Are admissions rolling?"
          answer = "No, they aren't! We only begin reviewing applications once the application deadline has passed. Feel free to take the necessary time to refine your application before submitting it."
        />
        <FAQuestion
          question = "How can I learn more about the Fellowship?"
          answer = "Paragon will be hosting <a href='https://forms.gle/6219w6s3B8r4gD3m7' target='_blank' style='color: darkgray; text-decoration: underline;'>two info sessions</a> to give applicants the opportunity to learn more about our mission, understand what the Organizing Team looks for in competitive applications, and hear from our current members on their experiences in the Fellowship. Furthermore, we will be holding office hours a couple of days before the application closes to give you the opportunity to ask last-minute questions."
        />
      </Section> 
<Section id="mentee_faq">
        <Subheading>Mentee FAQ</Subheading>
        <GrayDivider/>
        <FAQuestion
          question = "What can I expect from my mentor?"
          answer = "As a mentor, you'll guide a Paragon Fellow through their career journey, providing career advice, sharing your professional experiences, and helping them set and achieve goals. You'll meet with your mentee 1-2 times a month and offer constructive feedback."
          />
        <FAQuestion
          question = "How often will I meet with my mentor?"
          answer = "You will need to commit to monthly meetings with your mentee for about 30-60 minutes per meeting, along with occasional follow-up communication. This will span six months."
        />
        <FAQuestion
          question = "How will I be paired with a mentor?"
          answer = "You'll be responsible for guiding your mentee in areas like resume building, career planning, job search strategies, and networking. You can also share industry insights and advice based on your experiences."
        />
        <FAQuestion
          question = "What should I do if I’m not getting what I need from the mentorship?"
          answer = "We’ll match you with a mentee based on shared interests, career goals, and availability. We’ll make sure that both you and your mentee are aligned on the mentorship goals."
        />
        <FAQuestion
          question = "What are my responsibilities during the mentorship?"
          answer = "If you're facing challenges, our program coordinators are available to help with suggestions or to adjust the mentorship plan. We want to ensure both you and your mentee have a successful experience."
        />
        <FAQuestion
          question = "Will I receive any support for my job search or career development?"
          answer = "Mentors in the Paragon Policy Mentorship Program will have the opportunity to inspire and guide emerging tech policy professionals while expanding their own networks by connecting with fellow mentors. They will also receive a LinkedIn endorsement and invitations to our exclusive speaker events and LinkedIn group, where we share job opportunities. Paragon is also happy to write a letter of recommendation for mentors who are previous Paragon Fellows themselves, and spotlight outstanding mentors and mentees on our newsletter and social media. Mentees can look forward to career guidance, peer support, and expert advice on tackling complex challenges within the Responsible Tech landscape. They will also gain access to our network of speaker events and LinkedIn group to support their professional growth."
        />
        <FAQuestion
          question = "Will I get any recognition for completing the program?"
          answer = "Yes! We encourage long-term connections and will provide opportunities for you to stay engaged with the Paragon Fellowship community after the program concludes."
        />
      </Section>


      <Footer/>
    </div>
  );
}

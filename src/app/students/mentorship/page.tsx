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
import {MENTOR_APP_URL, MENTEE_APP_URL} from '@/app/constants';
import Card from '@/components/Card_Static';

const sections = [
  { id: "program_overview", title: "PROGRAM OVERVIEW" },
  { id: "eligibility_timeline", title: "ELIGIBILITY & TIMELINE" },
  { id: "mentor_faq", title: "MENTOR FAQ" },
  { id: "mentee_faq", title: "MENTEE FAQ" },
];

export default function About() {
  return (
  <div className="relative w-full overflow-x-hidden">
    <TopBar />
    {/* Main container, flex column */}
    {/* Added pb- to ensure space at the bottom for the absolutely positioned arrow */}
    {/* Adjusted pb- values if needed */}
    <div className="background-container min-h-[100svh] flex flex-col pb-16 md:pb-24"> {/* <-- Added pb- here */}

        <BgGrid /> {/* Overlay */}

        {/* Main Content Wrapper - Structured similar to the working snippet's main content container */}
        {/* Uses flex-1 to take up available space, and handles horizontal padding/centering */}
        <div className="w-full px-4 md:px-0 flex flex-col items-center
                        pt-28 sm:pt-32 md:pt-32 lg:pt-40
                        flex-1"> {/* <-- Added flex-1 here */}

            {/* Inner Content Container - Structured similar to the working snippet's inner container */}
            {/* Uses flex-1 and justify-center to handle vertical positioning within the wrapper */}
            {/* This container holds the actual text and button elements */}
            <div className="flex flex-col items-center w-full max-w-3xl text-center
                            flex-1 justify-center"> {/* <-- Added flex-1 and justify-center here */}
                <Text className='text-white text-5xl md:text-7xl font-semibold px-4 pb-3 md:pb-6'>
                    PARAGON POLICY MENTORSHIP
                </Text>

                {/* Animated elements still have the fade-in class directly */}
                {/* These are nested within the new inner container */}
                <Text className="fade-in text-2xl md:text-3xl
                                 mt-4 sm:mt-5 md:mt-6
                                 mb-8 sm:mb-10 md:mb-10 px-4">
                    Empowering Fellows through one-on-one mentorship and community support.
                </Text>

                <div className="flex flex-col sm:flex-row justify-center items-center w-full px-4
                                 mb-6 md:mb-0">
                    {/* Animated buttons still have the fade-in class directly */}
                    {/* These are nested within the new inner container */}
                    <Button
                        className="fade-in w-full sm:w-auto mb-4 sm:mb-0"
                        style="secondary"
                        inNewTab
                        url={MENTOR_APP_URL}
                    >
                        apply as a mentor
                    </Button>
                    <Button
    // Replicating secondary style classes + adding gray disabled classes
    // Using disabled: prefix for background color
    className="fade-in w-full sm:w-auto sm:ml-5 mt-4 sm:mt-0 uppercase md:text-md text-sm md:px-5 px-2 md:py-3 py-1 border-[.2rem] text-gray-700 cursor-not-allowed border-gray-400 disabled:bg-gray-400" // Added disabled:bg-gray-400
    style="custom" // Use custom style since we are providing all classes in className
    inNewTab
    url={MENTEE_APP_URL}
    disabled={true} // Ensure the disabled attribute is present
    // Removed inline style as it was not effective
>
    mentee apps are invite only
</Button>
                </div>
            </div> {/* End of Inner Content Container */}
        </div> {/* End of Main Content Wrapper */}

        {/* REMOVED: <div className="flex-grow" /> spacer */}

        {/* Arrow Container - Now ABSOLUTELY positioned at the bottom, consistent with working snippet */}
        {/* This takes it out of the normal flex flow */}
        {/* Kept original bottom values for consistency with visual intent */}
        <div className="animate-bounce absolute bottom-5 md:bottom-[6vh] left-0 z-10 w-full flex justify-center text-4xl"> {/* <-- Absolute positioning */}
            <RiArrowDownLine />
        </div>

        {/* Background Overlay - Absolute */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#050022] md:bg-opacity-65 bg-opacity-40 -z-10" />
    </div> {/* End of background-container */}

      
      <Section>
        <Navbar sections={sections} />
      </Section>
      <Section id="program_overview">
  <Subheading className='text-3xl md:text-5xl mb-4'>Program Overview</Subheading>
  <GrayDivider />
  <Text className="text-base md:text-lg">The Paragon Policy Mentorship Program is a six-month initiative designed to support current and former Paragon Fellows by pairing them with experienced professionals in the science, technology, and policy space. Mentors and mentees are matched based on shared interests, career goals, and availability. Once paired, mentees initiate the relationship and work with their mentor to set expectations, define goals, and schedule check-ins.<br /><br />The time commitment is intentionally light—just one hour per month—yet structured to create substantive conversations about career development, skills building, and navigating the tech policy landscape. In addition to one-on-one mentorship, participants benefit from being part of a broader professional community dedicated to building a more inclusive and capable public interest technology workforce.<br /> <br />Mentors are paired with mentees based on shared interests, career aspirations, and availability. Once matched, mentees will initiate introductions, and both parties will work together to define goals, meeting schedules, and discussion topics.</Text>
  <br />
  <Text className='font-medium italic flex justify-center'>Just one hour a month can launch a career</Text>
  <br /><br />
<div style={{ display: 'flex', alignItems: 'stretch'}}>
  <div style={{ marginRight: '16px', flexBasis: '50%', maxWidth: '50%', display: 'flex', flexDirection: 'column' }}>
    <Card style={{ flexGrow: 1 }}> {/* Apply flexGrow to the Card */}
      <h3 className="text-2xl font-bold">For Mentors:</h3>
      <br />
      <p>
	Share your expertise with the tech policy leaders of the future. Mentors benefit from expanded professional networks and opportunities to develop and refine management and leadership. Mentors also gain the opportunity to get involved with any research we publish.
	</p>
	</Card>
  </div>

  <div style={{ flexBasis: '50%', maxWidth: '50%', display: 'flex', flexDirection: 'column' }}>
    <Card style={{ flexGrow: 1 }}> {/* Apply flexGrow to the Card */}
      <h3 className="text-2xl font-bold">For Mentees:</h3>
      <br />
      <p>Develop your career through curated events and deep one-on-one relationships. Mentees expand their tech policy expertise with the personalized support of a seasoned mentor.</p>
    </Card>
  </div>
  
</div>
</Section>

<Section id="eligibility_timeline">
  <Subheading className='text-3xl md:text-5xl mb-4'>Eligibility & Timeline</Subheading>
  <GrayDivider />
<div style={{ display: 'flex', alignItems: 'stretch'}}>
  <div style={{ marginRight: '16px', flexBasis: '50%', maxWidth: '50%', display: 'flex', flexDirection: 'column' }}>
    <Card style={{ flexGrow: 1 }}> {/* Apply flexGrow to the Card */}
      <h3 className="text-2xl font-bold">Mentor Requirements:</h3>
      <br />
<ol className='list-decimal list-inside'>
  <li>Commit to a minimum of one (1) hour per month for six months to support your mentee(s).</li>
  <li>Provide guidance on career development, networking, and industry best practices.</li>
  <li>Engage in discussions based on the mentee’s goals and challenges.</li>
  <li>Help mentees build skills relevant to tech policy and adjacent fields.</li>
  <li><span className="font-semibold">Possess at least one (1) year of professional experience in technology policy.</span></li>
</ol>  
	</Card>
  </div>

  <div style={{ flexBasis: '50%', maxWidth: '50%', display: 'flex', flexDirection: 'column' }}>
    <Card style={{ flexGrow: 1 }}> {/* Apply flexGrow to the Card */}
      <h3 className="text-2xl font-bold">Mentee Requirements:</h3>
      <br />
      <ol className='list-decimal list-inside'>
  <li>Commit to a minimum of one (1) hour per month for six months.</li>
  <li>Actively participate in discussions focused on your career goals, challenges, and professional growth.</li>
  <li>Take initiative in setting goals, asking questions, and applying advice from mentorship sessions.</li>
  <li>Be open to feedback and willing to develop skills relevant to tech policy and adjacent fields.</li>
  <li><span className="font-semibold">Be either a current or former Paragon Policy Fellow.</span></li>
</ol>  
    </Card>
  </div>
  
</div>
  <br />
        <div className='flex justify-center'>
          <Text className="text-base md:text-lg">
   Our mentorship program operates bi-annually. <span className="font-semibold">Our innaugural cohort applications (for both mentor and mentee) close July 1st </span>. The program will last from mid July to late December.
  </Text>

</div>
</Section>
      <Section id="mentor_faq">
        <Subheading>Mentor FAQ</Subheading>
        <GrayDivider/>
       <FAQuestion
          question = "What is Paragon?"
          answer = "The Paragon Policy Fellowship is a national student-led organization connecting diverse university students and recent graduates with state and local governments to work on science and technology policy projects. Operated under the <a href='https://fas.org/' target='_blank' style='color: darkgray; text-decoration: underline;'>Federation of American Scientists</a>, Paragon creates inclusive pathways into public interest technology careers. Since January 2024, we’ve placed over 200 Fellows from 82 universities with 17 governments across 11 states. Fellows—85% students of color and 70% underrepresented gender minorities—have tackled projects impacting 11.9 million people, including generative AI policy for the State of Georgia and language access tools for the City of St. Louis. You can find information about our previous projects on our <a href='/projects' target='_blank' style='color: darkgray; text-decoration: underline;'>Projects page</a>."
          />
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
          question = "Who is eligible to be a mentor?"
          answer = "Mentors should have at least 1 year of professional experience in tech policy or a closely related field. This includes areas such as ethical AI, data privacy, cybersecurity, algorithmic accountability, platform governance, digital rights, public interest technology, and more. We welcome individuals from government, academia, industry, or nonprofit sectors who are passionate about guiding emerging leaders."
        />
        <FAQuestion
          question = "What are the benefits of being a mentor?"
          answer = "Mentors gain the opportunity to give back, develop leadership and coaching skills, expand their network, and reflect on their own career paths. They also receive recognition for their contributions and may have the chance to collaborate on high-impact tech policy publications with their names featured on the work."
        />
        <FAQuestion
          question = "Can I continue mentoring after the program ends?"
          answer = "Yes! We encourage long-term connections and will provide opportunities for you to stay engaged with the Paragon Fellowship community after the program concludes."
        />

        <FAQuestion
          question = "Are admissions rolling?"
          answer = "No, they aren't! We only begin reviewing applications once the application deadline has passed. Feel free to take the necessary time to refine your application before submitting it."
        />
      </Section> 
<Section id="mentee_faq">
        <Subheading>Mentee FAQ</Subheading>
        <GrayDivider/>
        <FAQuestion
          question = "Who is eligible to be a mentee?"
          answer = "Only current Paragon Fellows and Paragon Fellowship alumni who have successfully completed the program are eligible to apply. You can find the application link in your email inbox or in the Paragon Alumni LinkedIn Group."
          />
        <FAQuestion
          question = "What can I expect from my mentor?"
          answer = "Your mentor will provide guidance on your career, help you refine your professional goals, advise on job searching, and share insights from their own career journey in tech policy."
          />
        <FAQuestion
          question = "How often will I meet with my mentor?"
          answer = "You'll meet with your mentor at least once a month for about 30-60 minutes each session. These meetings will be a mix of virtual and/or in-person depending on availability."
        />
        <FAQuestion
          question = "How will I be paired with a mentor?"
          answer = "You'll be responsible for guiding your mentee in areas like resume building, career planning, job search strategies, and networking. You can also share industry insights and advice based on your experiences."
        />
        <FAQuestion
          question = "What should I do if I’m not getting what I need from the mentorship?"
          answer = "If you feel like you're not getting what you need, please reach out to the program coordinators. We can adjust the approach or even reassign you to another mentor if necessary."
        />
        <FAQuestion
          question = "What are my responsibilities during the mentorship?"
          answer = "First, it is up to you, the mentee, to reach out to your mentor and schedule meetings. You should actively participate in meetings, share your goals and challenges, and be open to feedback. It’s important to follow up on the advice your mentor gives and take initiative in your career development."
        />
        <FAQuestion
          question = "Will I receive any support for my job search or career development?"
          answer = "Yes! Your mentor will provide career guidance, including tips on resume building, job interviews, and networking strategies to help you take the next step in your tech policy career."
        />
        <FAQuestion
          question = "Will I get any recognition for completing the program?"
          answer = "Yes! You’ll receive a certificate of completion, and you’ll be invited to a networking event or graduation ceremony. You will also receive a LinkedIn endorsement and invitations to our exclusive speaker events and LinkedIn group, where we share job opportunities. Plus, the relationships you build with mentors can help you with future opportunities."
        />
      </Section>
	<Section>
        <Subheading className='flex justify-center text-center'>Inspire the next generation<br />of tech policy leaders</Subheading>
        <div className='flex justify-center'>
          <Button url={MENTOR_APP_URL} inNewTab className='mt-4 justify-center'>Become a Mentor</Button>
		{/*<Button url={MENTEE_APP_URL} inNewTab className='mt-4 ml-5 justify-center'>Become a Mentee</Button>*/}

        </div>

      </Section>


      <Footer/>
    </div>
  );
}

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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Tempe, AZ</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Data Literacy<br /> and Ethics Training Curriculum Syllabus</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Data-driven decision making has become an essential component of effective governance at all levels. Municipal governments are increasingly recognizing the value of leveraging data to enhance service delivery, optimize operations, and improve transparency within the city and with the community. The city of Tempe, Arizona has demonstrated leadership in the use of data and evidence throughout the organization which resulted in their receiving What Works Cities Platinum certification and recent creation of the Center for Integrated Data Innovation. Building on this foundation, Tempe is now focused on developing organizational capacity through a comprehensive Data Literacy Framework designed to equip city employees with the knowledge and skills necessary to effectively utilize data in their work.

<br/> <br/>The Tempe Team of the Paragon Policy Fellowship&apos;s Spring 2025 Cohort has collaborated with the city to support this data and evidence driven culture. Through research on best practices in data literacy education, stakeholder consultations, and analysis of implementation strategies, the team has developed a comprehensive Data Literacy Framework tailored to meet the specific needs of Tempe&apos;s municipal government and workforce.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        Although various data literacy frameworks have been developed in the education and private sectors respectively, comprehensive frameworks for the public sector are often difficult to access and lack the breadth that is essential for widespread utilization. Our team filled this gap by: 

    <br/>1. Curriculum Development: We constructed a curriculum that is: accessible for learners of all knowledge and skill levels, comprehensive in its scope, and widely applicable across multiple mediums. 

    <br/>2. Training Modules: Beyond providing conceptual information regarding data, our framework includes a variety of interactive applications, including examples from Tempe’s Open Data Portal and assessments throughout. 

    <br/>3. Implementation Recommendations: We took the initiative to suggest methods for implementation that will enable city employees to retain the information provided and eventually utilize the skills learned in their daily work. 
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       The research we conducted for this project was all-encompassing and incorporated insights from a multitude of disciplines, including: pedagogy, data science, data security, data ethics, public policy, and the private sector. This allowed us to craft a final product that is as comprehensive and dynamic as possible.

    <br/>1. Existing Best Practices: In order to gain the best understanding of what data literacy is and the optimal strategies for implementing data literacy education programs on a large scale, we conducted extensive research, spanning over a variety of fields. We identified existing data literacy policies at the municipal level, such as the program currently used in the city of San Francisco. Additionally, we incorporated insights from the work of some of the leading scholars in technological education, including Stephen Downes and Ellen Mandinach. This research allowed us to determine the essential components to be included in our curriculum. 

   <br/> 2. Case Studies: We provided case study examples of how data can be used incorrectly, or in some instances outright manipulated, in order to emphasize the importance of responsible and ethical data usage. For example, the COMPAS program utilized biased data in the construction of an algorithm that was intended to predict recidivism rates for criminals. However, the algorithm was trained using biased data, leading to disproportionate prison sentences given to minorities. This case study and others provide a clear example as to the real-world implications of irresponsible data usage. 

    <br/>3. Stakeholder Engagement: In addition to our research, we made it imperative to actively engage with a variety of stakeholders throughout the construction process to ensure that we were on the correct path. We conducted an interview with Arizona State University professor and World Economic Forum consultant Andrew Maynard to acquire insight on why data literacy programs are essential for governments, and how the process of implementation works. We also interviewed a professional curricularist, who provided us with critical information regarding curriculum design. Finally, we maintained frequent communication with our government partners, as well as other Tempe employees, to confirm that their needs were being met throughout the process.  

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Curriculum Syllabus</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Data Literacy Curriculum</Text>
            <SmallText>
			Our curriculum consists of four sections: an introduction to the concept of data; a section on data visualization and management strategies; a section covering ethical data usage and data risk; and finally, a section on Tempe’s existing data policies. Each section builds upon the last, and is accessible for beginners and more advanced learners alike. The curriculum is intentionally designed to be dynamic, allowing for those implementing the program to do so at their desired pace, using the resources they prefer. 
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Training Modules</Text>
            <SmallText>
			An integral component of our curriculum are interactive elements which enable learners to directly engage with the content. This includes: examples of actual data usage in Tempe, sourced from the Tempe Open Data Portal; quizzes at the end of each section; and opportunities for learners to work with sample datasets to test their knowledge and skills. 
	</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Implementation Instruction</Text>
            <SmallText>
			Since it is not within the scope of this project to fully implement the Data Literacy Framework, we have provided our government partners with the information and resources needed to implement this program as they see fit. We have included suggestions for in-person implementation such as in a workshop or seminar format. Additionally, we have provided recommendations for implementation strategies online or in a hybrid setting. 
            </SmallText>
          </div>
		<hr className="border-t border-gray-300 my-4 mt-6" />
		</div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        Through this cohort, we have developed a comprehensive, accessible, and widely applicable Data Literacy Framework for the city government of Tempe, AZ. This framework can be utilized by our government partners to improve data literacy across all departments, and in turn succeed in their mission of making Tempe a data-driven city. Ultimately, the impact of our work will be widespread, as all residents of Tempe will benefit from a data-driven approach to policymaking and governance. 

 <br/> <br/>Moving forward, we hope that future Paragon cohorts will continue our work. Data is a complex subject, and rapid technological advancements make it so that employees will benefit from continued education and training. Providing our government partners with continued support as they implement our framework, and building upon it over time will be essential to the success of this project. Furthermore, our team is considering refining our framework in order to potentially pursue publication and widespread administration in cities across the country. 

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Evelyn Alvarado', role: '(Project Lead)', school: 'San Jose State University' },
			{ name: 'Christopher Krutz', role: '', school: 'Loyola University Chicago' },
            { name: 'Rhea Midhe', role: '', school: 'Arizona State University' },
            { name: 'Zhuoying Lin', role: '', school: 'UCLA' },
            { name: 'Manas Khatore', role: '', school: 'UC Berkeley' },
            { name: 'Farhana Urni', role: '', school: 'Arizona State University' },
            { name: 'Sita Sudhakar ', role: '', school: 'Arizona State University' }
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
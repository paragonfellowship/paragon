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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Los Angeles CD 3, CA</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Enhancing Language Access through<br></br>Community Based and AI Approaches</Text>
        </div>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Los Angeles is one of the most linguistically diverse cities in the United States and faces significant challenges in providing equitable language access, especially for Indigenous language speakers. This diversity and lack of data surrounding indigenous languages creates communication challenges, hindering knowledge and access to essential news, events, resources, services and processes.

<br></br><br></br>Due to staffing shortages and the complexity of managing diverse linguistic needs, CD3 struggles to deliver public service announcements, notices, and emergency information in all emergency response languages. This limitation disproportionately affects communities with limited English proficiency, hindering their access to vital services and resources.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        Our project aims to support linguistic and cultural preservation by promoting equitable access to translation services across various fields and disciplines. This project builds on the Citywide Language Access Plan (LAP) to evaluate community-based methods and approaches for more accurate and culturally sensitive translations. Furthermore, the project investigates the role of AI-driven tools for meaningful language access improvements. By doing so, we seek to foster inclusivity and social participation, prevent the isolation of minority language communities, and support the survival and revitalization of these languages.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       To gain a better understanding of the current landscape, we examined the policies, practices, and technologies related to language access. We began by reviewing Los Angeles&apos; language access policies alongside approaches from other cities such as Boston, New York, and Seattle to identify best practices. We also evaluated relevant state and federal language access policies, including Title VI and Executive Order 13166. To explore technological solutions, we assessed AI-driven natural language processing (NLP) tools and community-based translation models. We analyzed existing translation tools like Google Translate, DeepL, Cohere Aya, and UNESCO’s NLLB as case studies to evaluate the current and potential roles of technology in translation services.

<br></br><br></br>In the stakeholder engagement phase, we conducted interviews with staff from LA CD 3, representatives from community organizations such as CIFD, language experts from organizations like CIELO, researchers from academic institutions such as UCSC, and technology professionals from AWS to gain insights and perspectives into the significance of community collaboration and the application of AI language tools.

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Language Access Approaches and Solutions: Policies, Partnerships, and Practices</Text>
            <SmallText>This deliverable provides a roadmap for addressing language equity gaps and ensuring access to essential services in linguistically diverse communities. It includes a curated partnership directory of community-based organizations (CBOs), universities, and philanthropic entities to drive collaboration for a more inclusive and responsive language access framework. This collaborative approach facilitates a holistic, community-centered model for translation services, promoting mutual trust and respect for cultural nuances. Translation approaches for underrepresented languages, case studies of successful translation projects, and recommendations for contractor engagement are outlined to further support practical implementation. Additionally, relevant state and federal policies are mapped to establish a legal and operational foundation.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>AI Language Access Implementation Toolkit</Text>
            <SmallText>This toolkit evaluates the role of AI and technological tools to equip CD3 staff with the resources to make informed decisions about adopting translation technologies. It includes frameworks for assessing AI translation tools, criteria for vendor evaluation, and strategies for fostering community engagement. Practical frameworks were developed to guide the evaluation and responsible implementation of AI language technologies, emphasizing cultural sensitivity and community-centered approaches. Recommendations were provided to support evidence-based decision-making in AI adoption and to ensure alignment with community needs. The deliverable also facilitates effective collaboration between technical teams and community stakeholders, promoting inclusive and ethical integration of advanced language translation technologies.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        By strategically addressing language equity gaps, the city can increase its capacity to protect and promote linguistic diversity, particularly as Los Angeles grapples with resource limitations while striving to serve its increasingly diverse and multicultural population. Providing language access helps foster social inclusion, ensuring that Indigenous groups and non-English speakers can advocate for their needs and fully participate in civic, social, and economic life. It enables Indigenous communities to maintain their cultural identity while also integrating into broader society, ensuring their voices are included in shaping policies that affect them. This project supports the city’s efforts to build a more inclusive, just, and engaged community.
<br></br><br></br>By adopting these recommendations, CD3 can improve linguistic inclusivity, enhance access to critical services, and preserve the cultural heritage of Indigenous communities. Future work includes:<br></br><br></br>1) Testing AI tools with community feedback to refine translation quality<br></br> 2) Expanding partnerships with regional and national organizations<br></br>3) Monitoring the impact of implemented solutions through standardized metrics

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Wendy Zeng', role: 'Project Lead', school: 'UC Berkeley' },
			{ name: 'Smita Samanta', role: 'Project Lead', school: 'New York University ' },
            { name: 'Emma Christie', role: 'Fellow', school: 'UCLA' },
            { name: 'Asli Kocak', role: 'Fellow', school: 'Tufts University' },
            { name: 'Antara Chugh', role: 'Fellow', school: 'UCLA' },
            { name: 'Karina Castro', role: 'Fellow', school: 'San Jose State University' },
            { name: 'Elizabeth Fonseca', role: 'Fellow', school: 'UC Santa Cruz' },
			{ name: 'Shreya Taluja', role: 'Fellow', school: 'University of Pennsylvania' },
			{ name: 'Matheus Dias', role: 'Fellow', school: 'UC Berkeley' },
			{ name: 'Yasmin Jafari', role: 'Fellow', school: 'UCLA' },
			{ name: 'Josh Crowley', role: 'Fellow', school: 'Pomona College' },
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
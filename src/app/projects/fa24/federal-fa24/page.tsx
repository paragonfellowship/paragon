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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Federal Government</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>The Current State of<br></br>USG Supercomputer Capacities and Utilization</Text>
        </div>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        The supercomputers owned and operated by the United States federal government (USG) constitute a fleet of sophisticated computational resources that can be deployed at a moment’s notice to address critical use-cases. Historically, these supercomputers have played an important role in solving complex problems and modeling predictions. They have achieved scientific breakthroughs that led to opportunities for multidisciplinary applications across both the private and public sector industries in the United States. In this era of increasing computational complexities, our dependency on legacy systems and the need to expand our supercomputer fleet is consequential if the U.S. is to remain globally competitive while satisfying its domestic needs.
<br></br><br></br>To help meet the computational needs of today and the demands of tomorrow, the 2024 Fall Cohort Energy Team of Paragon Policy Fellowship has aggregated and consolidated pertinent information regarding the highest performing USG supercomputers. We then processed and analyzed the data and created a Wiki site.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        By rule, federal agencies are required to publish data on their facilities and utilization. Yet, there is no integrated database that provides a bird’s-eye view of all high-performance computing (HPC) facilities in the federal government. Our team set out to fill this gap in 3 ways:
<br></br><br></br><br></br>
1) Data Consolidation: Conduct a comprehensive survey of USG supercomputers, their operational purposes, and their current capabilities.
<br></br><br></br>
2)Performance Comparison: Calculate the approximate amounts of compute and time required to train a large language model (LLM) similar to OpenAI’s GPT-4 on the newest supercomputers owned and operated by the U.S. Department of Energy (DOE) and compare the results to industry-funded supercomputers. This supplements CSET Georgetown’s May 2024 analysis on the National Artificial Intelligence Research Resource (NAIRR) and its compute power.
<br></br><br></br>
3)Resource Allocation Analysis: Analyze the changes in compute allocation data from 3 main DOE research initiatives from 2019 to 2024: Innovative and Novel Computational Impact on Theory and Experiment (INCITE), The ASCR Leadership Computing Challenge (ALCC), and The Energy Research Computing Allocations Process (ERCAP).
<br></br><br></br><br></br>
This project charts the capabilities and utilization of federal HPC resources in recent years in a manner that is comprehensive yet accessible to the public. At the same time, the database may serve as an impetus for more coordinated discussions on future HPC investments among federal agencies.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       Our research process began with identifying pertinent data on USG supercomputers. As we mentioned in the previous section, the project is divided into 3 distinctive parts. Each part required a set of unique data that combine to create a complete picture of federal HPC resources.
<br></br><br></br><br></br>
1) Data Consolidation: We used the TOP500 data list from June 2024 to streamline and expedite the data collection. TOP500 is an internationally recognized and authoritative source of data on supercomputer capabilities across the globe. We corroborated the data from TOP500 against official websites on individual supercomputers.
<br></br><br></br>
2) Performance Comparison: We collected training hardware and performance-per-GPU data from official reports on each relevant supercomputer. For Eagle, Frontier, and Aurora, we pulled figures on total compute power from the TOP500 HPL (64-bit precision) benchmark test ranking. HPL-MxP benchmarks at lower precisions are also available online. However, there are few concrete associations between such benchmarks and a specific precision value available. Therefore, we have chosen the most conservative approach when estimating training time, cost, and energy usage by estimating a relatively low floating point operations per second (FLOPS) speedup of 2x when converting from 64 to 32-bit precision. Nevertheless, when available, we show comparisons using HPL-MxP data for DOE computers and label them as such for interested parties.
<br></br><br></br>
3) Resource Allocation Analysis: Our team initially searched through official websites of DOE national laboratories for data. We followed this up with a search through the document repositories of DOE Office of Scientific and Technical Information (OSTI) and Advanced Scientific Computing Research (ASCR). Finally, we tracked down the necessary data for analysis in the websites of individual DOE research programs, including INCITE, ALCC, and NERSC. The process required 2 months to complete. After using R commands to extract the data from INCITE, ALCC, and NERSC websites, we processed them on Google Sheets and Microsoft Excel. We performed the planned analyses, interpreted the results, and created figures on the same spreadsheets.
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Data Consolidation</Text>
            <SmallText>We present our analysis of 59 USG supercomputers currently in operation and their computational capabilities. We find an overwhelming dominance of DOE in the field of HPC within the federal government. 85.2% of the data processing abilities in the extant fleet of supercomputers represented in FLOPS comes from DOE systems. At the same time, 18 of 59 USG supercomputers belong to DOE (30.51%), and Frontier and Aurora are one of the world’s most powerful supercomputers in operation. This highlights the fact that DOE supercomputers are on average capable of processing more data in a shorter timeframe than comparable systems owned and operated by other federal agencies.
<br></br><br></br>The <a href="https://github.com/paragon-fa24-energy/FA-24-Energy-Wiki/wiki" style={{ color: 'blue', textDecoration: 'underline' }}>USG Supercomputer Wiki</a> supplements our report.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Performance Comparison</Text>
            <SmallText>Relative comparisons using HPL benchmarks demonstrate that xAI’s Colossus, which may train a GPT-4-scale model in 3.9 days, outperforms both Frontier (train in 324.5 days) and Aurora (train in 385 days) by significant margins. Comparisons based on HPL-MxP benchmarks show noticeably lower estimates for Frontier (train in 76.4 days) and Aurora (train in 73.5 days), but these figures are still higher than the estimate for xAI’s Colossus. Moreover, requiring at least 13 GWh and roughly $1.3 million to train GPT-4, Colossus also exhibits higher power efficiency than either Frontier (147.6 GWh, roughly $14.7 million) or Aurora (268.18 GWh, roughly $26.82 million). We assess that though DOE supercomputers are the most powerful among those already deployed and in operation, private sector supercomputers have caught up and will soon surpass them in performance.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'>
            <Text className='mb-2'>Resource Allocation Analysis</Text>
            <SmallText>The pace at which computational capabilities of USG supercomputers improve has been fast, which implies that even with the increasing complexities in scientific research, DOE facilities would be able to accommodate many more users in the future. Indeed, the deployment of more advanced supercomputers such as Frontier, Aurora, and Perlmutter led to more compute power made available to the scientific community. The total FLOPS supplied to qualified projects through INCITE, ALCC, and ERCAP increased from 8.02 × 1024 in 2019 to 3.52 × 1025 in 2024, showing a 439% jump. Simultaneously, we observe a steady increase in the number of projects that either utilized artificial intelligence (AI) or conducted foundational research on the subject. Over 20% of projects accepted by INCITE and ALCC today relate to AI and machine learning (ML).
			</SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        We show in this report that DOE’s dominance in HPC highlights its critical role in advancing scientific research and protecting national priorities. DOE supercomputers, such as Frontier and Aurora, remain the most powerful systems in the world. However, the rise of private sector supercomputers reveals a competitive landscape where corporate systems are quickly surpassing government capabilities in certain fields, such as AI. Despite this shifting landscape, DOE has made significant strides in improving access to its HPC resources and the increasing adoption of AI and ML in federally supported projects in recent years.
Moving forward, while DOE’s supercomputing infrastructure remains robust, it must anticipate the rapidly evolving demands of AI research and be able to provide an alternative to private sector systems that can process more data at a faster pace with lower energy cost. This report provides a foundation for DOE to assess its strategic direction and prioritize investments in HPC innovations, ensuring the U.S. remains globally competitive and well-equipped to address future computational challenges.

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Jae Wan Ahn', role: 'Project Lead', school: 'University of Chicago' },
			{ name: 'Audrey Berlie', role: 'Fellow', school: 'Stetson University' },
            { name: 'Eric Gong', role: 'Fellow', school: 'Harvard University' },
            { name: 'Bryn Kerslake', role: 'Fellow', school: 'Colby College' },
            { name: 'Arshi Mahajan', role: 'Fellow', school: 'Dartmouth College' },
            { name: 'Madison Moreau', role: 'Fellow', school: 'University of Chicago' },
            { name: 'Uchenna Andrew Offorjebe', role: 'Fellow', school: 'University of Chicago' },
			{ name: 'Virginia Washington', role: 'Fellow', school: 'University of Chicago' }
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
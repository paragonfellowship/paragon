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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Missoula, MN</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Achieving<br></br>What Works Cities Certification</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        The City of Missoula is undertaking a strategic initiative to define, strengthen, and implement data governance practices that promote more efficient, transparent, and secure management of city information. Recognizing the growing importance of cross-departmental collaboration and data-informed decision-making, Missoula has partnered with the Paragon Policy Fellowship to conduct a comprehensive assessment of its current data sharing and privacy protocols and to design a roadmap for sustainable governance. 
<br></br><br></br>This initiative is guided in part by the nationally recognized What Works Cities (WWC) Certification framework, which serves as a lens for identifying actionable improvements. What Works Cities (WWC) is an initiative launched by Bloomberg Philanthropies with the goal of helping local governments adopt data-driven standards to ensure that they are efficient and well-managed. In particular, the Fellowship team focused on the DM3 (data sharing) and DM5 (data privacy) criteria in the WWC assessment to benchmark current practices and set achievable targets.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        The Paragon Fellowship Team is supporting the City of Missoula in its efforts to become the first city in the state of Montana to earn a WWC certificate. Focusing on the DM3 and DM5 criteria in the WWC assessment, the team has provided an in-depth assessment of Missoula’s current data policy and an actionable roadmap for the city to meet these criteria. Through a case study evaluation of other WWC cities, a study of data policy best practices, and interviews with relevant stakeholders involved with Missoula’s data sharing and privacy, the Missoula Team has properly positioned the city to accomplish the DM3 and DM5 milestones and achieve WWC certification. 
<br></br><br></br>The core question underlying this project is:
<br></br><br></br>How can the city of Missoula successfully implement a data governance policy to satisfy the following What Works Cities (WWC) criteria?
<br></br><br></br>DM3: “Your local government has documented and user-friendly processes to expedite the sharing of data—including protected data—both cross-departmentally within your local government and with external partners”
<br></br><br></br>DM5: “Your local government has documented policies or practices to protect the privacy and confidentiality of government-held data.”
<br></br><br></br>The analysis presented in this report, while anchored to WWC criteria, offers more than just a compliance exercise with an external certification and speaks directly to Missoula’s broader ambitions to modernize its internal systems, improve public transparency, and uphold high ethical standards in the use of government data. As the City expands its digital infrastructure, the need for clear, consistent data governance becomes increasingly urgent. Without a unified approach, departments risk duplicating effort, mishandling sensitive information, or losing opportunities for strategic insight. The analysis and recommendations presented in this report are therefore not only designed to help Missoula meet the DM3 and DM5 criteria, but to build a forward-looking framework that strengthens coordination across departments, safeguards resident privacy, and ensures that data is used in ways that are fair, responsible, and aligned with public service values.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       To build this framework, the team conducted stakeholder interviews, analyzed city documentation, reviewed best practices from WWC-certified municipalities, and evaluated legal and organizational constraints. Based on these findings, this deliverable outlines a phased implementation strategy tailored to Missoula’s unique departmental structure and capacity, along with detailed role definitions and prioritization of specific certification criteria. The proposed roadmap is designed not only to advance Missoula toward WWC certification, but to embed sustainable, city-wide practices that ensure data is shared responsibly, managed consistently, and protected comprehensively.
<br></br><br></br>This document covers the following elements of the project:
<br/>    1. Assessment: Assessment of Missoula’s current data policies (DM3 & DM5)
<br/>    2. Analysis: Comparative analysis of WWC-certified cities to identify best practices
<br/>    3. Stakeholder Engagement: Interviews & collaboration with city departments
<br/>    4. Ethical Considerations: Ethical considerations in data sharing & privacy policy
<br></br><br></br>Furthermore, the recommendations in this report are organized into the following components:
<br/>    5. Role and terminology definitions
<br/>    6. Criteria prioritization recommendations
<br/>    7. Phased roadmap for implementation
<br/>    8. Risks and mitigation strategies
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Assessment</Text>
            <SmallText>
			• Analysis of Existing Documentation: We evaluated Missoula’s data privacy and sharing policies, which prioritize structured records management and secure file-sharing practices, in compliance with Montana’s record retention mandates. Missoula currently uses OneDrive, Teams, and SharePoint for file storage and sharing, with significant overlap in their functions. There are some gaps in the policy, particularly regarding file sharing protocols for external recipients, as authentication via email is currently required but lacks stronger encryption methods. 
    <br></br><br></br>• Data Policy Best Practices: We overviewed existing best practices for data policy. Effective municipal data governance hinges on formalized internal and external agreements and processes similar to Missoula&apos;s existing document management framework. Literature indicates that cities achieving WWC certification consistently implement cross-agency data sharing agreements and memorandums of understanding with clearly documented response timelines. These agreements, managed as a portfolio and reviewed by legal, privacy, security, and data management teams, ensure consistent standards across departments.
    <br></br><br></br>• Case Study of Existing Cities: To gain insight into how city governments ensure data security and management, we reviewed city governments that have received a WWC certification. While examining data management policies throughout different city institutions we also compared their residential population and distance to the city of Missoula. These variables were factored to see how cities comparatively similar to Missoula in terms of region and size were doing in data security and management. We primarily focussed on two case studies of Issaquah, Washington and Baton Rouge, Louisiana.
    <br></br><br></br>• Stakeholder Interviews: To gain more insight into Missoula’s inner workings right now, we interviewed the stakeholders below. We categorized our findings into 3 groups: data sharing processes, data privacy, and regulating these standards through governance:
        <br/><br/>◦ Alicia Vanderheiden – Central Services Strategic Projects and Operations
        <br/>◦ Art Warren – Sharepoint & Teams Administrator
        <br/>◦ Claire Trimble – City Clerk
        <br/>◦ Eric Hallstrom – Chief Operating Officer
        <br/>◦ Laurie Clark – Police Department Business Manager
        <br/>◦ Lee Macholz – GIS Manager
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Roadmap</Text>
            <SmallText>
			• Key Terminology and Role Defintions: To help Missoula build up their data policies, we have identified and provided definitions on key terms and positions that are important in this process. These terms and definitions have been drawn from government sources through our case studies and private sources through our own research. Additionally, we have utilized feedback from Lee Macholz and Jesse Neidigh through stakeholder interviews to align the definitions closer to Missoula’s mission. These definitions have been standardized to reflect their ability to be implemented throughout the city and easily digestible by all city staff members. For role definitions, we also provided general goals and duties that each position should entail. Furthermore, whenever it was applicable, we added recommendations based on Missoula’s current status as well as what other cities have done. 
    <br></br><br></br>• Criteria Prioritization: To achieve WWC certification, the city must meet 4 of the 5 DM3 criteria to achieve silver certification, and 2 of the 3 DM5 criteria to achieve gold certification. When deciding which of the criteria to prioritize, we evaluated on the basis of how much more work will be necessary for Missoula to achieve WWC certification. We recommend that the City prioritize fulfilling the criteria that require a lower amount of effort. 
    <br></br><br></br>• Step-based Implementation: We developed a timeline for implementing our recommendations in four phases:
        <br/>◦ Phase 0: Foundations (Months 0–6) - Build the basic structure for governance by defining standards, roles, and early priorities
        <br/>◦ Phase 1: Pilot Program (Months 7–12)
        <br/>◦ Phase 2: Citywide Expansion and Refinement (Months 13–18)
        <br/>◦ Phase 3: Full Citywide Implementation and Long-Term Sustainability (Months 19–30)
    <br></br><br></br>• Potential Setbacks and Offsetting Strategies: We forecasted potential setbacks to this implementation and potential mitigation plans:
        <br/>◦ Resistance to Change Due to Departmental Autonomy
        <br/>◦ Technical Constraints
        <br/>◦ Limited Staff Time and Capacity
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
			</div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        This project positions Missoula to become a statewide leader in municipal data governance by delivering a clear roadmap for achieving WWC certification and embedding sustainable practices for data sharing and privacy. Through detailed assessments, stakeholder engagement, and best practice benchmarking, the project has laid the foundation for long-term organizational change. Adoption of standardized roles, shared terminology, and phased implementation strategies will enhance interdepartmental coordination, reduce data-related risks, and improve public trust. Looking ahead, future work should focus on expanding pilot programs across departments, developing robust feedback mechanisms, and exploring external funding opportunities to support technical infrastructure upgrades. Continued collaboration with city leadership and the Data Governance Committee will be essential to ensure that new policies are not only implemented but institutionalized across all levels of city government.

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Alex Wasdahl', role: '(Project Lead)', school: 'UCLA' },
			{ name: 'Khushi Bhalla', role: '', school: 'UC Berkeley' },
            { name: 'Neil Ghosh', role: '', school: 'Vanderbilt University' },
            { name: 'Cayetano Nard', role: '', school: 'University of Illinois at Urbana-Champaign' },
            { name: 'Neesha Patel', role: '', school: 'UC Santa Barbara' },
            { name: 'Flora Wang', role: '', school: 'UC Berkeley' },
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
/*
interface Image {
    id: string,
    width: number,
    height: number,
    url: string,
    filename: string,
    size: number,
    type: string,
    thumbnails: {
        small: {
            url: string,
            width: number,
            height: number
        },
        large: {
            url: string,
            width: number,
            height: number
        },
        full: {
            url: string,
            width: number,
            height: number
        }
    }
}
*/

interface PersonRecord {
    id: string,
    createdTime: string,
    fields: {
        name: string,
        title: string,
        school: string,
        region: string,
        email: string,
        linkedin: string,
        website: string,
        image: string,
        team: string
    }
}

import Card from "@/components/Card"
import Footer from '@/components/Footer'
//import Image from "next/image"
//import { ElementType } from "react"
//import { RiLinkedinLine, RiLinksLine, RiMailLine } from "react-icons/ri"
import { colleges } from '@/app/constants'
import TopBar from '@/components/TopBar'
import BgGrid from "@/components/BgGrid"
import { Heading } from "@/components/Typography"
import { RiArrowDownLine } from "react-icons/ri"
import GrayDivider from "@/components/GrayDivider"
import {SocialIcon} from 'react-social-icons';
import organizingTeam from '@/app/team/Organizing Team.json';
import strategicAdvisors from '@/app/team/Strategic Advisors.json';
import formerOrganizingTeam from '@/app/team/Former Team Members.json';
const NO_REGION = "";


/*
function encodeTableName(tableName: string): string {
    return encodeURIComponent(tableName); // Automatically encodes spaces to %20
}

// Updated function to retrieve people with encoded table name
async function retrievePeople(tableName: string): Promise<PersonRecord[]> {
    const encodedTableName = encodeTableName(tableName); // Encode the table name
    const records = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}?maxRecords=100&view=all_ordered`, {
        headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 1.5 // revalidate every 1.5 hours
        }
    });
    const rec = await records.json();
    return rec.records;
}
*/

// Helper function to group people by region. We don't actually group by region. I am leaving this here until I can figure out how to delete it.
function groupPeopleByRegion(people: PersonRecord[]) {
    return people.reduce((acc: { [key: string]: PersonRecord[] }, person) => {
        const region = person.fields.region || NO_REGION;
        if (!acc[region]) {
            acc[region] = [];
        }
        acc[region].push(person);
        return acc;
    }, {});
}

export default function Team() {
    const organizingByRegion = groupPeopleByRegion(organizingTeam);
    const advisorsByRegion = groupPeopleByRegion(strategicAdvisors);
    const formerByRegion = groupPeopleByRegion(formerOrganizingTeam);
    return <>
        <TopBar />
        <div
            className="background-container"
            style={{ height: '60vh' }}
        >
        <BgGrid lineCount={7} />
        <Heading className='fade-in text-white text-6xl text-center mt-60'>Meet the Team</Heading>
        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7svh] left-0 z-10 w-full flex justify-center text-4xl"><RiArrowDownLine /></div>
            <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#050022] bg-opacity-65 -z-10' />
      </div>
        <main className="m-8">
           <TeamSection title="Strategic Advisors" peopleByRegion={advisorsByRegion} />
            <TeamSection title="Organizing Team" peopleByRegion={organizingByRegion} />
           <TeamSection title="Organizing Team Alumni" peopleByRegion={formerByRegion} />
        </main>
        <Footer/>
    </>
}


// Reusable component to render each section (Strategic Advisors, Organizing Team, Former Organizing Team)
function TeamSection({ title, peopleByRegion }: { title: string, peopleByRegion: { [key: string]: PersonRecord[] } }) {
    return (
        <section className="mb-10">
            <p className="text-3xl font-bold uppercase mb-5">{title}</p>
            <GrayDivider />
            {Object.entries(peopleByRegion).map(([region, people], i) => (
                <div key={i}>
                    <p className="text-2xl font-bold">{region}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                        {people.map((person, i) => (
                            <Card key={i} className="flex flex-row w-full items-start">
                                <div className='relative h-min'>
									{person.fields.image && <img src={person.fields.image} alt={person.fields.name} className="aspect-square h-32 w-32 object-cover rounded-full shadow-lg " />}
									<div className="block w-24 h-20 box-border mt-3 mx-auto flex items-center justify-center overflow-hidden">
										{colleges[person.fields.school] && <img src={colleges[person.fields.school].logo.src} alt={colleges[person.fields.school].name} className="max-w-full max-h-full object-contain"/>}
									</div>
                                </div>
                                <div className="flex flex-col h-full ml-5 w-4/6">
                                    <p className="text-3xl font-semibold">{person.fields.name}</p>
                                    <p className="text-xl">{person.fields.team}</p>
							
                                    <div className="flex flex-row mt-2 gap-2">
                                        {person.fields.email && person.fields.email.trim() !== "" && (
                                            
											<SocialIcon url={`mailto:${person.fields.email}`}  target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>
                                        )}
                                        {person.fields.linkedin && <SocialIcon network="linkedin" url={person.fields.linkedin}  target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>}
                                        {person.fields.website && <SocialIcon url={person.fields.website}  target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>} 
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

/*
function IconButton({ icon: Icon, url }: { icon: ElementType, url: string }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center aspect-square h-10 border-2 border-gray-600 rounded-lg bg-primary hover:bg-secondary text-white transition hover:bg-opacity-60">
                <Icon className="text-xl" />
            </div>
        </a>
    );
}
*/
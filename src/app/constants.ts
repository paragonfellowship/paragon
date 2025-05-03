// import maricopaLogo from '@/assets/governments/Maricopa.png';
import brownsvilleLogo from '@/assets/governments/Brownsville.png';
import bostonLogo from '@/assets/governments/Boston.png';
import stLouisLogo from '@/assets/governments/StLouis.png';
import georgiaLogo from '@/assets/governments/Georgia.png';
import losAngelesLogo from '@/assets/governments/LosAngeles.png';
//import southBendLogo from '@/assets/governments/SouthBend.png';
//import oaklandLogo from '@/assets/governments/Oakland.png';
// import nycLogo from '@/assets/governments/NYC.png';
//import southCarolinaLogo from '@/assets/governments/SouthCarolina.png';
// import doeLogo from '@/assets/governments/DoE.png';
import tempeLogo from '@/assets/governments/Tempe.png'; 
import santaClaraLogo from '@/assets/governments/Santa Clara.png';
import sanJoseLogo from '@/assets/governments/SanJose.png'; 
import lebanonLogo from '@/assets/governments/Lebanon.png';
import AlbuquerqueLogo from '@/assets/governments/Albuquerque Logo.png';
import AlexandriaLogo from '@/assets/governments/Alexandria Logo.png';
import CDIILogo from '@/assets/governments/CDII Logo.png';
//import FortlauderdaleLogo from '@/assets/governments/Fort Lauderdale.png';
import MadisonLogo from '@/assets/governments/Madison.png';
import MissoulaLogo from '@/assets/governments/Missoula.png';
import MontanaSITSDLogo from '@/assets/governments/Montana SITSD.png';
import USStateLogo from '@/assets/governments/US State Logo.png';
//import FortCollinsLogo from '@/assets/governments/Fort Collins.png';
//import BismarckLogo from '@/assets/governments/Bismarck.png';
//import PennsylvaniaLogo from '@/assets/governments/Pennsylvania.png';
//import USVILogo from '@/assets/governments/USVI.png';
import { StaticImageData } from 'next/image';
//San Jose,
//Santa Clara County, 
//LA, 
//CA HHS, 
//Tempe, 
//Albuquerque, 
//Montana, 
//Missoula, 
//St. Louis, 
//Georgia, 
//Boston, 
//Lebanon, 
//State department, 
//Alexandria, 
//Madison, 
//Brownsville
export const governments: {
    [key: string]: {
        name: string,
        logo: StaticImageData
    }
} = {
    // maricopa: {
    //     name: 'Maricopa',
    //     logo: maricopaLogo
    // },
    sanJose: {
        name: 'San Jose, California',
        logo: sanJoseLogo
    },
	lebanon: {
        name: 'Lebanon, New Hampshire',
        logo: lebanonLogo
    },
	MontanaSITSD: {
        name: 'Montana State Information Technology Services Division',
        logo: MontanaSITSDLogo
    },
    boston: {
        name: 'Boston, Massachusetts',
        logo: bostonLogo
    },
    georgia: {
        name: 'Georgia Technology Authority',
        logo: georgiaLogo
    },
    brownsville: {
        name: 'Brownsville, Texas',
        logo: brownsvilleLogo
    },
    stLouis: {
        name: 'St. Louis, Missouri',
        logo: stLouisLogo
    },
    USStateDepartment: {
        name: 'U.S. Department of State',
        logo: USStateLogo
    },
    losAngeles: {
        name: 'Los Angeles, California (Council District 3)',
        logo: losAngelesLogo
    },

    // southBend: {
    //     name: 'South Bend',
    //     logo: southBendLogo
    // },
    // oakland: {
    //     name: 'Oakland',
    //     logo: oaklandLogo
    // },
    // nyc: {
    //     name: 'New York City',
    //     logo: nycLogo
    // },
    // southCarolina: {
    //     name: 'South Carolina',
    //     logo: southCarolinaLogo
    // },
    // doe: {
    //     name: 'Department of Energy',
    //     logo: doeLogo
    // },
    tempe: {
        name: 'Tempe, Arizona',
        logo: tempeLogo
    },
    santaClara: {
        name: 'Santa Clara County, California',
        logo: santaClaraLogo
    },
    Alexandria: {
        name: 'Alexandria, Virginia',
        logo: AlexandriaLogo
    },
    CDII: {
        name: 'California Center for Data Insights and Innovation',
        logo: CDIILogo
    },
    // Fortlauderdale: {
    //     name: 'Fortlauderdale, Florida',
    //     logo: FortlauderdaleLogo
    // },
    Madison: {
        name: 'Madison, Wisconsin',
        logo: MadisonLogo
    },
    Missoula: {
        name: 'Missoula, Montana',
        logo: MissoulaLogo
    },
    Albequerque: {
        name: 'Albuquerque, New Mexico',
        logo: AlbuquerqueLogo
    }
	//,
	//Bismarck: {
    //    name: 'Bismarck, North Dakota',
    //    logo: BismarckLogo
    //},
	//FortCollins: {
    //    name: 'Fort Collins, Colorado',
    //    logo: FortCollinsLogo
    //},
	//Pennsylvania: {
    //    name: 'Pennsylvania',
    //    logo: PennsylvaniaLogo
    //},
	//USVI: {
    //    name: 'U.S. Virgin Islands Next Generation Network',
    //    logo: USVILogo
    //}
};


export const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
export const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

export const AIRTABLE_URL = process.env.AIRTABLE_URL;
//export const MAIL_LIST_URL = "https://forms.gle/hAVRwpTkid44jAZY8"
export const NEWSLETTER_URL = "https://paragonpolicyfellowship.substack.com/"
export const FA_APP_URL = "https://airtable.com/appDqtLGrF88LO8wI/pag6HK7ZRduVx50bk/form"
export const INFO_SESSION_URL = "https://forms.gle/6219w6s3B8r4gD3m7"


export type MenuOption = {
    name: string,
    url: string,
    topBar?: boolean
}

export const defaultMenuOptions: MenuOption[] = [
    //{ name: 'Home', url: '/' },
    { name: 'Past Projects', url: '/projects', topBar: true },
    { name: 'For Governments', url: '/governments', topBar: true },
    { name: 'Meet the Team', url: '/team', topBar: true },
    { name: 'Advisors & Speakers', url: '/advisors', topBar: true },
    { name: 'Contact us', url: 'mailto:paragonfellowship@gmail.com' }
]

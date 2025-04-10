/* THESE are the files when using logos
import brownLogo from '@/assets/colleges/brown.svg';
import dukeLogo from '@/assets/colleges/duke.svg';
import georgemasonLogo from '@/assets/colleges/georgemason.svg';
import georgetownLogo from '@/assets/colleges/georgetown.svg';
import gtLogo from '@/assets/colleges/georgiatech.svg';
import harvardLogo from '@/assets/colleges/harvard.svg';
import hunterLogo from '@/assets/colleges/hunter.svg';
import iitLogo from '@/assets/colleges/iitlogo.png';
import mcgillLogo from '@/assets/colleges/mcgill.svg';
import mitLogo from '@/assets/colleges/mit.svg';
import pennLogo from '@/assets/colleges/penn.svg';
import princetonLogo from '@/assets/colleges/princeton.svg';
import risdLogo from '@/assets/colleges/risd.svg';
import stanfordLogo from '@/assets/colleges/stanford.svg';
import ubcLogo from '@/assets/colleges/ubclogo.png';
import ucbLogo from '@/assets/colleges/ucb.svg';
import uchicagoLogo from '@/assets/colleges/uchicago.svg';
import uciLogo from '@/assets/colleges/uci.svg';
import uclaLogo from '@/assets/colleges/ucla.svg';
import ucsdLogo from '@/assets/colleges/ucsdlogo.png';
import ugaLogo from '@/assets/colleges/uga.png';
import umaineLogo from '@/assets/colleges/umaine.svg';
import untLogo from '@/assets/colleges/unt.svg';
import uscLogo from '@/assets/colleges/usc.svg';
import yaleLogo from '@/assets/colleges/yale.svg';
import utaLogo from '@/assets/colleges/uta.svg';
*/

//these are the files when using seals
import brownLogo from '@/assets/colleges/brown.png';
import dukeLogo from '@/assets/colleges/duke.png';
import georgemasonLogo from '@/assets/colleges/georgemason.png';
import georgetownLogo from '@/assets/colleges/georgetown.png';
import gtLogo from '@/assets/colleges/georgiatech.png';
import harvardLogo from '@/assets/colleges/harvard.png';
import hunterLogo from '@/assets/colleges/hunter.png';
import iitLogo from '@/assets/colleges/iit.png';
import mcgillLogo from '@/assets/colleges/mcgill.png';
import mitLogo from '@/assets/colleges/mit.png';
import pennLogo from '@/assets/colleges/penn.png';
import princetonLogo from '@/assets/colleges/princeton.png';
import risdLogo from '@/assets/colleges/risd.png';
import stanfordLogo from '@/assets/colleges/stanford.png';
import ubcLogo from '@/assets/colleges/ubc.png';
import ucbLogo from '@/assets/colleges/ucb.png';
import uchicagoLogo from '@/assets/colleges/uchicago.png';
import uciLogo from '@/assets/colleges/uci.png';
import uclaLogo from '@/assets/colleges/ucla.png';
import ucsdLogo from '@/assets/colleges/ucsd.png';
import ugaLogo from '@/assets/colleges/uga.png';
import umaineLogo from '@/assets/colleges/umaine.png';
import untLogo from '@/assets/colleges/unt.png';
import uscLogo from '@/assets/colleges/usc.png';
import yaleLogo from '@/assets/colleges/yale.png';
import utaLogo from '@/assets/colleges/uta.png';



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
    brownsville: {
        name: 'Brownsville',
        logo: brownsvilleLogo
    },
    boston: {
        name: 'Boston',
        logo: bostonLogo
    },
    stLouis: {
        name: 'St. Louis',
        logo: stLouisLogo
    },
    georgia: {
        name: 'Georgia',
        logo: georgiaLogo
    },
    losAngeles: {
        name: 'Los Angeles',
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
        name: 'Tempe',
        logo: tempeLogo
    },
    santaClara: {
        name: 'Santa Clara',
        logo: santaClaraLogo
    },
    sanJose: {
        name: 'San Jose',
        logo: sanJoseLogo
    },
    lebanon: {
        name: 'Lebanon',
        logo: lebanonLogo
    },
    Albequerque: {
        name: 'Albequerque',
        logo: AlbuquerqueLogo
    }, 
    Alexandria: {
        name: 'Alexandria',
        logo: AlexandriaLogo
    },
    CDII: {
        name: 'CDII',
        logo: CDIILogo
    },
    // Fortlauderdale: {
    //     name: 'Fortlauderdale',
    //     logo: FortlauderdaleLogo
    // },
    Madison: {
        name: 'Madison',
        logo: MadisonLogo
    },
    Missoula: {
        name: 'Missoula',
        logo: MissoulaLogo
    },
    MontanaSITSD: {
        name: 'MontanaSITSD',
        logo: MontanaSITSDLogo
    },
    USStateDepartment: {
        name: 'US Department of State',
        logo: USStateLogo
    }
};

export const colleges: {
    [key: string]: {
        name: string,
        logo: StaticImageData
    }
} = {
    harvard: {
        name: 'Harvard University',
        logo: harvardLogo
    },
    brown: {
        name: 'Brown University',
        logo: brownLogo
    },
    yale: {
        name: 'Yale University',
        logo: yaleLogo
    },
    penn: {
        name: 'University of Pennsylvania',
        logo: pennLogo
    },
    gt: {
        name: 'Georgia Tech',
        logo: gtLogo
    },
    uga: {
        name: 'University of Georgia',
        logo: ugaLogo
    },
    risd: {
        name: 'Rhode Island School of Design',
        logo: risdLogo
    },
    iit: {
        name: 'Illinois Tech',
        logo: iitLogo
    },
    georgetown: {
        name: 'Georgetown University',
        logo: georgetownLogo
    },
    stanford: {
        name: 'Stanford University',
        logo: stanfordLogo
    },
    ucsd: {
        name: 'UC San Diego',
        logo: ucsdLogo
    },
    ucb: {
        name: 'UC Berkeley',
        logo: ucbLogo
    },
    uci: {
        name: 'UC Irvine',
        logo: uciLogo
    },
	duke: {
        name: 'Duke University',
        logo: dukeLogo
    },
	georgemason: {
        name: 'George Mason University',
        logo: georgemasonLogo
    },
	hunter: {
        name: 'Hunter College',
        logo: hunterLogo
    },
	mcgill: {
        name: 'McGill University',
        logo: mcgillLogo
    },
	mit: {
        name: 'Massachusetts Institute of Technology',
        logo: mitLogo
    },
	princeton: {
        name: 'Princeton University',
        logo: princetonLogo
    },
	ubc: {
        name: 'University of British Columbia',
        logo: ubcLogo
    },
	uchicago: {
        name: 'University of Chicago',
        logo: uchicagoLogo
    },
	ucla: {
        name: 'UCLA',
        logo: uclaLogo
    },
	ucsd: {
        name: 'UC San Diego',
        logo: ucsdLogo
    },
	umaine: {
        name: 'University of Maine',
        logo: umaineLogo
    },
	unt: {
        name: 'University of North Texas',
        logo: untLogo
    },
	usc: {
        name: 'USC',
        logo: uscLogo
    },
	uta: {
        name: 'University of Texas at Austin',
        logo: utaLogo
    }
}

export const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
export const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

export const AIRTABLE_URL = process.env.AIRTABLE_URL;
export const MAIL_LIST_URL = "https://forms.gle/hAVRwpTkid44jAZY8"
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

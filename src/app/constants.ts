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

// import { URLS } from "../route"

import { Service } from '../type'
import { URLS } from './url'

const content: any = {
    en: {
        title: 'Service',
        subtitle: 'What i offer',
        services: [
            {
                'Experience': {
                    value: '+4 years',
                    icon: 'award-svg',
                    width: '31',
                    url: URLS.experience
                }
            },
            {
                'Completed': {
                    value: '3+ projects',
                    icon: 'cloud-svg',
                    width: '26',
                    url: '#'
                }
            },
            {
                'Supports': {
                    value: 'online 24/7',
                    icon: 'hear-phone-svg',
                    width: '20',
                    url: '#'
                }
            }
        ], 
        more: "view more"
    },
    fr: {
        title: 'Service',
        subtitle: "Ce que j'offre",
        services: [
            {
                'Expérience': {
                    value: '+4 years',
                    icon: 'award-svg',
                    width: '31',
                    url: URLS.experience
                }
            },
            {
                'Finis': {
                    value: '3+ projects',
                    icon: 'cloud-svg',
                    width: '26',
                    url: '#'
                }
            },
            {
                'Supports': {
                    value: 'online 24/7',
                    icon: 'hear-phone-svg',
                    width: '20',
                    url: '#'
                }
            }
        ], 
        more: "view more"
    }
}

const userPreferredLanguage = navigator.language || 'en-EN'
export const SERVICE: Service = content[userPreferredLanguage.split('-')[0]] || content.en

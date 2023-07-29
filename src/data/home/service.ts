// import { URLS } from "../route"

import { getContent } from '../../function'
import { Service } from '../../type'
import { URLS } from './../url'

const content: any = {
    en: {
        title: 'Service',
        subtitle: 'What i offer',
        services: [
            {
                'Experience': { icon: 'award-svg', width: '31', url: URLS.experience }
            },
            {
                'Completed': { icon: 'cloud-svg', width: '26', url: '#' }
            },
            {
                'Supports': { icon: 'hear-phone-svg', width: '20', url: '#' }
            }
        ], 
        more: "view more"
    },
    fr: {
        title: 'Service',
        subtitle: "Ce que j'offre",
        services: [
            {
                'Expérience': { icon: 'award-svg', width: '31', url: URLS.experience }
            },
            {
                'Finis': { icon: 'cloud-svg', width: '26', url: '#' }
            },
            {
                'Supports': { icon: 'hear-phone-svg', width: '20', url: '#' }
            }
        ], 
        more: "voir plus"
    }
}


export const SERVICE: Service =  getContent(content)

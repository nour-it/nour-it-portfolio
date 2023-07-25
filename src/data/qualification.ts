import { Qualificaton } from "../type"

let content: any = {
    en: {
        title: 'Qualification',
        subtitle: 'My personal journey',
        categories: [
            {
                name: "Education",
                icon: "hat-svg",
                width: '36',
            },
            {
                name: "Experience",
                icon: 'bag-svg',
                width: '31',
            },
        ],
        qualifications: [
            {
                title: 'scientific secondary school diploma',
                adress: 'CPAP, Lome-Togo',
                icon: 'calendar',
                period: '2017-2018'
            },
            {
                title: 'company internship',
                adress: 'Tixpros, Lome-Togo',
                icon: 'calendar',
                period: 'Oct 2021 - Dec 2021'
            },
            {
                title: 'Bachelor in Application Development',
                adress: 'Lome-Togo',
                icon: 'calendar',
                period: '2022-2023'
            },
            {
                title: 'Freelance',
                adress: 'Lome-Togo',
                icon: 'calendar',
                period: '2022 - now'
            }
        ]
    },
    fr: {
        title: 'Qualification',
        subtitle: 'Mon parcours personnel',
        categories: [
            {
                name: "Education",
                icon: "hat-svg",
                width: '36',
            },
            {
                name: "Expérience",
                icon: 'bag-svg',
                width: '31',
            },
        ],
        qualifications: [
            {
                title: "diplôme d'études secondaires scientifiques",
                adress: 'CPAP, Lome-Togo',
                icon: 'calendar',
                period: '2017-2018'
            },
            {
                title: 'stage en entreprise',
                adress: 'Tixpros, Lome-Togo',
                icon: 'calendar',
                period: 'Oct 2021 - Dec 2021'
            },
            {
                title: "Licence en développement d'applications",
                adress: 'Lome-Togo',
                icon: 'calendar',
                period: '2022-2023'
            },
            {
                title: 'Freelance',
                adress: 'Lome-Togo',
                icon: 'calendar',
                period: '2022 - now'
            }
        ]
    }

}


const userPreferredLanguage = navigator.language || 'en-EN'
export const QUALIFICATION: Qualificaton = content[userPreferredLanguage.split('-')[0]] || content.en

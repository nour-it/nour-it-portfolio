import { getContent } from "../../function"
import { Qualificaton } from "../../type"

export const maps = [
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.959098851414!2d1.2448910760198397!3d6.13619792754077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e19c3bb2e793%3A0xbbdad6758eaea80!2sColl%C3%A8ge%20P%C3%A8re%20Augustin%20Planque!5e0!3m2!1sfr!2stg!4v1690936601725!5m2!1sfr!2stg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.549099733632!2d1.1341243!3d6.1910354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1021595ee3060945%3A0xf2306751eab0a044!2sTixPros!5e0!3m2!1sfr!2stg!4v1690937163170!5m2!1sfr!2stg"   style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4123973887804!2d1.1814190760199719!3d6.209212126733687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1021584125c0882f%3A0x11e8cba601416cf4!2sESGIS%20Annexe%20Avedji!5e0!3m2!1sfr!2stg!4v1690936694347!5m2!1sfr!2stg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
]

let content: any = {
    en: {
        title: 'Qualification',
        subtitle: 'My personal journey',
        categories: [
            { name: "Education", icon: "hat-svg", width: '36', },
            { name: "Experience", icon: 'bag-svg', width: '31', },
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
            { name: "Education", icon: "hat-svg", width: '36', },
            { name: "Expérience", icon: 'bag-svg', width: '31', },
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

export const QUALIFICATION: Qualificaton =  getContent(content)

// import { URLS } from "../route"

import { Service } from "../type"
import { URLS } from "./url"

let service: Service = {
    title: "Service",
    subtitle: "What i offer",
    services: [{
        'Experience': {
            value: "+4 years",
            icon: "award-svg",
            width: "31",
            url: URLS.experience
        },
    }, {
        'Completed': {
            value: "3+ projects",
            icon: "cloud-svg",
            width: "26",
            url: "#",
        },
    }, {
        'Supports': {
            value: "online 24/7",
            icon: "hear-phone-svg",
            width: "20",
            url: "#"
        }
    }],
    previousRole: `In my previous role, I was responsible for building and maintaining a suite of web applications for a large
    e-commerce company. I worked closely with designers and product managers to ensure that the applications
    were user-friendly and met the needs of our customers. I also collaborated with back-end developers to
    integrate our front-end code with the company's API.`,
    resumeLink: `https://firebasestorage.googleapis.com/v0/b/nour-it-portfolio.appspot.com/o/cv-seydou-nouroudine.docx?alt=media&token=21189ea6-2de1-407f-9cc6-32f79cc1f57e`
} 

export const SERVICE = service
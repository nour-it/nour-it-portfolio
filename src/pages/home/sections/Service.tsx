import React from 'react'

export default function Service() {
    return (
        <section className="section_service" id="service">
            <div>
                <h1 className="h1">{SERVICE.title}</h1>
                <p className="text-gray-1">{SERVICE.subtitle}</p>
            </div>
            <div>
                {SERVICE.services.map(serviceItem)}
            </div>
        </section>
    )
}

function serviceItem(service: Object, index: number, array: Object[]): React.ReactNode {
    const { icon, value, width } = Object.values(service)[0]
    return <div className="border rounded">
        <svg id="web-svg" width={width} height={width}>
            <use xlinkHref={`/css/sprite.svg#${icon}`} />
        </svg>
        <h2 className="h2">{Object.keys(service)[0]}</h2>
        <a href='#'>
            <span className="text-gray-2">view more</span>
            <svg id="arrow-right-svg" width="15" height="15">
                <use xlinkHref="/css/sprite.svg#arrow-right-svg" />
            </svg>
        </a>
    </div>
}



type Service = {
    title: String,
    subtitle: String,
    services: Object[],
    previousRole: String,
    resumeLink: string,
}

const SERVICE: Service = {
    title: "Service",
    subtitle: "What i offer",
    services: [{
        'Experience': {
            value: "+4 years",
            icon: "award-svg",
            width: "31"
        },
    }, {
        'Completed': {
            value: "3+ projects",
            icon: "cloud-svg",
            width: "26"
        },
    }, {
        'Supports': {
            value: "online 24/7",
            icon: "hear-phone-svg",
            width: "20"
        }
    }],
    previousRole: `In my previous role, I was responsible for building and maintaining a suite of web applications for a large
    e-commerce company. I worked closely with designers and product managers to ensure that the applications
    were user-friendly and met the needs of our customers. I also collaborated with back-end developers to
    integrate our front-end code with the company's API.`,
    resumeLink: `https://firebasestorage.googleapis.com/v0/b/nour-it-portfolio.appspot.com/o/cv-seydou-nouroudine.docx?alt=media&token=21189ea6-2de1-407f-9cc6-32f79cc1f57e`
} 

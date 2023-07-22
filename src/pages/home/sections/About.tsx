import React from 'react'
import NourButton from '../../../components/core/NourButton'
import NourIcon from '../../../components/core/NourIcon'

export default function About() {
    return (
        <section className="section__about" id="about">
            <div>
                <h1 className="h1">{ABOUT.title}</h1>
                <p className="text-gray-1">{ABOUT.subtitle}</p>
            </div>
            <div>
                <div><img src="/img/me.jpeg" alt="user 2" /></div>
                <div>
                    <div>{ABOUT.abouts.map(aboutItem)}</div>
                    <p>{ABOUT.previousRole}</p>
                    <NourButton href={ABOUT.resumeLink} >
                        Download CV
                        <NourIcon id={`docuemt-svg`} width={24} />
                    </NourButton>
                </div>
            </div>
        </section>
    )
}

function aboutItem(about: Object, index: number, array: Object[]): React.ReactNode {
    const { icon, value, width } = Object.values(about)[0]
    return <div className="card-1 border rounded" key={index.toString()}>
        <NourIcon id={icon} width={width} />
        <p className="text-gray-1">{Object.keys(about)[0]}</p>
        <span className="text-gray-2">{value}</span>
    </div>
}

type AboutType = {
    value: String,
    icon: String
}

type HomeAbout = {
    title: String,
    subtitle: String,
    abouts: Object[],
    previousRole: String,
    resumeLink: string,
}

const ABOUT: HomeAbout = {
    title: "About Me",
    subtitle: "My Introducation",
    abouts: [{
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
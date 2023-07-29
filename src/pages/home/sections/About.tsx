import React from 'react'
import NourButton from '../../../components/core/NourButton'
import NourIcon from '../../../components/core/NourIcon'
import { ABOUT } from '../../../data/home/about'

export default function About() {
    return (
        <section className="section__about" >
            <div>
                <h1 className="h1">{ABOUT.title}</h1>
                <p className="text-gray-1">{ABOUT.subtitle}</p>
            </div>
            <div>
                <div><img src="/img/me.jpeg" alt="user 2" /></div>
                <div>
                    <div>{ABOUT.abouts.map(aboutItem)}</div>
                    <p>{ABOUT.previousRole}</p>
                    <NourButton to={ABOUT.resumeLink} >
                        {ABOUT.download}
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

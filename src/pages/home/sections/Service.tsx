import React from 'react'
import NourIcon from '../../../components/core/NourIcon'
import { SERVICE } from '../../../data/service'
import { Link } from 'react-router-dom'


function serviceItem(service: Object, index: number, array: Object[]): React.ReactNode {
    const { icon, value, width, url } = Object.values(service)[0]
    return <div className="border rounded" key={index.toString()}>
        <NourIcon id={icon} width={width} />
        <h2 className="h2">{Object.keys(service)[0]}</h2>
        <Link to={url}>
            <span className="text-gray-2">view more</span>
            <NourIcon id={'arrow-right-svg'} width="15" />
        </Link>
    </div>
}


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

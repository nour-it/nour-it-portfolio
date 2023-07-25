import React from 'react'
import { CLIENT } from '../../../data/testimonial'

export default function Testimonial() {
    return (
        <section className="section_testimonial">
            <div>
                <h1 className="h1">{CLIENT.title}</h1>
                <p className="text-gray-1">{CLIENT.subtitle}</p>
            </div>
            <div>
                {CLIENT.clients.map(clientItem)}
            </div>
            <div><span className="dot active"></span></div>
        </section>
    )
}

function clientItem(client: Object, index: number, array: Object[]): React.ReactNode {
    const name = Object.values(client)[0]
    const domain = Object.values(client)[1]
    const image = Object.values(client)[2]
    const message = Object.values(client)[3]
    return <div className="shadow rounded" key={index.toString()}>
        <p>{message}</p>
        <div>
            <div><img src={`/img/client/${image}`} alt="client" /></div>
            <div>
                <span className="text-orange-1">{name}</span>
                <span className="text-orange-2">{domain}</span>
            </div>
        </div>
    </div>
}

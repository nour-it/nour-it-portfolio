import React from 'react'

export default function Testimonial() {
    return (
        <section className="section_testimonial">
            <div>
                <h1 className="h1">Testimonial</h1>
                <p className="text-gray-1">My client saying</p>
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
            <div><img src={`/img/${image}`} alt="client" /></div>
            <div>
                <span className="text-orange-1">{name}</span>
                <span className="text-orange-2">{domain}</span>
            </div>
        </div>
    </div>
}



type Client = {
    title: String,
    subtitle: String,
    clients: Object[],
}

const CLIENT: Client = {
    title: "Service",
    subtitle: "What i offer",
    clients: [
        {
            name: "Wilson Xavier",
            domain: "Web site developpement",
            image: "user-2.png",
            message: `I recently hired a web design firm to build a new e-commerce website for my business, and I couldn't be
       happier with the results. The designers were very professional and easy to work with, and they took the time
       to understand my specific needs and goals for the site. They provided me with multiple design options to
       choose from, and were quick to make any necessary revisions to ensure that I was completely satisfied with
       the final product.

       The end result was a stunning, user-friendly website that has helped to significantly increase my online
       sales. The site is easy to navigate, and the checkout process is streamlined and efficient. I've received a
       lot of positive feedback from customers on the design and functionality of the site.

       Overall, I would highly recommend this web design firm to anyone looking to build a new website. They
       provided exceptional service, delivered a top-quality product, and exceeded my expectations in every way.`
        },
        {
            name: "Justus",
            domain: "Web and Mobile App developpement",
            image: "justus.jpg",
            message: `I recently hired a web development company to create a new website for my small business, and I could not
            be happier with the results. From start to finish, the entire process was seamless and professional. The
            designers took the time to understand my vision for the site and worked closely with me to bring it to life.
            They were responsive to all of my questions and requests, and made sure that I was completely satisfied with
            the end product.
            The final result was a beautiful, functional website that accurately reflects the spirit of my business.
            I've received numerous compliments on the site and I'm confident that it will help drive traffic and sales.
            Overall, I would highly recommend this web development company to anyone in need of a new website. They
            exceeded my expectations in every way!`
        },
    ],
} 

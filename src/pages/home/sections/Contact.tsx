import React from 'react'
import NourButton from '../../../components/core/NourButton'
import NourIcon from '../../../components/core/NourIcon'

export default function Contact() {
    return (
        <section className="section_contact" id="contact">
            <div>
                <h1 className="h1">Contact Me</h1>
                <p className="text-gray-1">get in touch</p>
            </div>
            <div>
                <div>
                    <h2 className="h2">Talk to me</h2>
                    {CONTACT.contacts.map(contactItem)}
                </div>
                <div>
                    <h2 className="h2">Write to me</h2>
                    <form action="" method="post">
                        <input name="name" id="name" className="border rounded" placeholder="Insert you name" />
                        <input type="email" name="email" id="email" className="border rounded" placeholder="Insert you email" />
                        <textarea name="project" id="project" cols={30} rows={10} className="border rounded"
                            placeholder="Write your project"></textarea>
                        <NourButton type="submit">
                            send message
                            <NourIcon id={`prime_send-svg`} />
                        </NourButton>
                    </form>
                </div>
            </div>
        </section>
    )
}


function contactItem(contact: Object, index: number, array: Object[]): React.ReactNode {
    const way = Object.values(contact)[0]
    const id = Object.values(contact)[1]
    const link = Object.values(contact)[2]
    const icon = Object.values(contact)[3]
    const width = Object.values(contact)[4]
    return <div className="border rounded" key={index.toString()}>
        <NourIcon id={icon} width={width} />
        <h2 className="h2">{way}</h2>
        <span className="text-gray-2">{id}</span>
        <a href={link}>
            <span>with me</span>
            <NourIcon id={"arrow-right-svg"} width={15} />
        </a>
    </div>
}


type Contact = {
    title: String,
    subtitle: String,
    contacts: Object[],
}

const CONTACT: Contact = {
    title: "Service",
    subtitle: "What i offer",
    contacts: [
        {
            way: "Email",
            id: "reply.nour.it@gmail.com",
            link: "mailto:reply.nour.it@gmail.com",
            icon: "email-svg",
            width: "35",
        },
        {
            way: "Whatsapp",
            id: "+228 91108834",
            link: "https://wa.me/22891108834?text=salut",
            icon: "whatsapp-svg",
            width: "35",
        },
        {
            way: "Messanger",
            id: "nourxxIt",
            link: "https://www.facebook.com/nourxxIt/",
            icon: "messanger-svg",
            width: "35",
        },
    ],
}


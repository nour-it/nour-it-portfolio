import React, { useRef } from 'react'
import NourButton from '../../../components/core/NourButton'
import NourIcon from '../../../components/core/NourIcon'
import { CONTACT } from '../../../data/home/contact';

export default function Contact() {

    const contactFormRef = useRef(null);

    function onSubmitContactForm(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <section className="section_contact" >
            <div>
                <h1 className="h1">{CONTACT.title}</h1>
                <p className="text-gray-1">{CONTACT.subtitle}</p>
            </div>
            <div>
                <div>
                    <h2 className="h2">{CONTACT.talk}</h2>
                    {CONTACT.contacts.map(contactItem)}
                </div>
                <div>
                    <h2 className="h2">{CONTACT.write}</h2>
                    <form action="" method="post" onSubmit={onSubmitContactForm} ref={contactFormRef}>
                        <input name="name" id="name" className="border rounded" placeholder={CONTACT.form.name} />
                        <input type="email" name="email" id="email" className="border rounded" placeholder={CONTACT.form.email} />
                        <textarea name="project" id="project" cols={30} rows={10} className="border rounded"
                            placeholder={CONTACT.form.message}></textarea>
                        <NourButton type="submit">
                            {CONTACT.send}
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
            <span>{CONTACT.with}</span>
            <NourIcon id={"arrow-right-svg"} width={15} />
        </a>
    </div>
}

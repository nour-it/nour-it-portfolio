import { Contact } from "../type";

const content: any = {
    en: {
        title: "Contact Me",
        subtitle: "get in touch",
        write: "Write to me",
        send: "send message",
        talk: "Talk to me",
        with: "with me",
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
                link: "https://wa.me/22891108834?text=Salut",
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
        form: {
            name: "Insert you name",
            email: "Insert you email",
            message: "Write your project"
        }
    },
    fr: {
        title: "Contactez moi",
        subtitle: "entrer en contact",
        write: "Écris moi",
        send: "envoyer le message",
        talk: "Me parler",
        with: "avec moi",
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
                link: "https://wa.me/22891108834?text=Salut",
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
        form: {
            name: "Saisissez votre nom",
            email: "Saisissez votre email",
            message: "Décrivez votre projet"
        }
    },

}

const userPreferredLanguage = navigator.language || 'en-EN'
export const CONTACT: Contact = content[userPreferredLanguage.split('-')[0]] || content.en


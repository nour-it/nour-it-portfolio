import { getContent } from "../../function";
import { Client } from "../../type";

const content: any = {
    en: {
        title: "Testimonial",
        subtitle: "My client saying",
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
    },
    fr: {
        title: "Témoignage",
        subtitle: "Ce que disent mes clients",
        clients: [
            {
                name: "Wilson Xavier",
                domain: "Développement de site Web",
                image: "user-2.png",
                message: `J'ai récemment embauché une entreprise de conception Web pour créer un nouveau site Web de commerce électronique pour mon entreprise, et je ne pouvais pas être
                plus heureux avec les résultats. Les concepteurs étaient très professionnels et faciles à travailler, et ils ont pris le temps
                pour comprendre mes besoins spécifiques et mes objectifs pour le site. Ils m'ont fourni plusieurs options de conception pour
                choisir, et j'ai rapidement fait toutes les révisions nécessaires pour s'assurer que j'étais entièrement satisfait de
                le produit final.
         
                Le résultat final a été un site Web époustouflant et convivial qui a contribué à augmenter considérablement mon expérience en ligne.
                ventes. Le site est facile à naviguer et le processus de paiement est simplifié et efficace. j'ai reçu un
                beaucoup de commentaires positifs des clients sur la conception et la fonctionnalité du site.
         
                Dans l'ensemble, je recommanderais vivement cette société de conception de sites Web à tous ceux qui souhaitent créer un nouveau site Web. Ils
                fourni un service exceptionnel, livré un produit de qualité supérieure et dépassé mes attentes à tous points de vue.`
            },
            {
                name: "Justus",
                domain: "Développement d'applications Web et mobiles",
                image: "justus.jpg",
                message: `J'ai récemment embauché une société de développement Web pour créer un nouveau site Web pour ma petite entreprise, et je ne pouvais pas
                être plus heureux avec les résultats. Du début à la fin, l'ensemble du processus a été transparent et professionnel. Le
                les designers ont pris le temps de comprendre ma vision du site et ont travaillé en étroite collaboration avec moi pour lui donner vie.
                Ils ont répondu à toutes mes questions et demandes et ont veillé à ce que j'étais entièrement satisfait de
                le produit final.
                Le résultat final était un beau site Web fonctionnel qui reflète fidèlement l'esprit de mon entreprise.
                J'ai reçu de nombreux compliments sur le site et je suis convaincu qu'il contribuera à générer du trafic et des ventes.
                Dans l'ensemble, je recommanderais vivement cette société de développement Web à toute personne ayant besoin d'un nouveau site Web. Ils
                a dépassé mes attentes à tous points de vue!`
            },
        ],
    }

}

export const CLIENT: Client =  getContent(content)

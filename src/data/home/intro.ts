import { getContent } from "../../function";
import { HomeIntro } from "../../type";


const content: any = {
    en: {
        title: "Web and Mobile App developer",
        descriptions: [
            `Hi, I'm Nouroudine, a web developer with over fourth years of experience in the industry. I specialize in
            front-end development and have a strong foundation in HTML, CSS, and JavaScript. I am also proficient in
            popular web development framework like React.`,
            `My passion for web development extends beyond my professional work. I am an active contributor to several
            open-source projects and enjoy experimenting with new technologies. In my free time, you can find me
            attending hackathons or working on personal projects to hone my skills.`,
            `I'm excited to join your team and contribute to building innovative and impactful web applications.`
        ],
        say: "say hello"

    },
    fr: {
        title: "Développeur d'applications Web et mobiles",
        descriptions: [
            `Salut, je suis Nouroudine, un développeur web avec plus de quatre ans d'expérience dans l'industrie. je me spécialise dans
            développement front-end et avoir une base solide en HTML, CSS et JavaScript. je maîtrise également
            cadre de développement Web populaire comme React.`,
            `Ma passion pour le développement Web s'étend au-delà de mon travail professionnel. Je suis un contributeur actif à plusieurs
            projets open-source et aime expérimenter de nouvelles technologies. Dans mon temps libre, tu peux me trouver
            assister à des hackathons ou travailler sur des projets personnels pour perfectionner mes compétences.`,
            `Je suis ravi de rejoindre votre équipe et de contribuer à la création d'applications Web innovantes et percutantes.`
        ],
        say: "dire bonjour"
    }
}

export const intro: HomeIntro = getContent(content)
import { getContent } from "../../function";
import { Experience } from "../../type";

const content: any = {
    en: {
        experiences: [
            {
                title: "company internship",
                adress: "Tixpros, Lome-Togo",
                date: "Oct 2021 - Dec 2021",
                description: `
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, excepturi. Nam sunt omnis eos nemo. Officia quas quisquam accusamus? Distinctio omnis perferendis aut ipsum, alias nihil asperiores blanditiis ad quae.</p>
                <img src="/img/client/user.jpg" alt="" />
                `,
            },
        ],
    },
    fr: {
        experiences: [
            {
                title: 'stage en entreprise',
                adress: 'Tixpros, Lome-Togo',
                date: 'Oct 2021 - Dec 2021',
                description: "pas encore de description traduite",
            },
        ],
    }
}

export const EXPERIENCE: Experience = getContent(content)
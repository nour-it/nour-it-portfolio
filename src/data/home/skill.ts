import { getContent } from "../../function"
import { Skill } from "../../type"


const content: any = {
    en: {
        title: "Skills",
        subtitle: "My technical level",
        skills: [{
            images: ["figma.png"],
            name: "Figma",
            category: "UI Design, Prototype",
            height: "50px",
        }, {
            images: ["react.svg"],
            name: "ReactJS + React Native",
            category: "Front-end developpement",
            height: "50px",
        }, {
            images: ["mysql.png", "postgres.png"],
            name: "Mysql + Postgres",
            category: "Databases",
            height: "50px",
        }, {
            images: ["php.png", "nodejs.png"],
            name: "Php + NodeJS",
            category: "Server-side languages",
            height: "50px",
        }, {
            images: ["html.png"],
            name: "HTML 5",
            category: "Structural Design",
            height: "50px",
        }, {
            images: ["css.png", "scss.png"],
            name: "CSS 3 + SCSS",
            category: "Style Design",
            height: "60px",
        }, {
            images: ["laravel.svg"],
            name: "Laravel",
            category: "Frameworks and libraries",
            height: "50px",
        }, {
            images: ["vscode.png"],
            name: "VS Code",
            category: "Code Editor",
            height: "50px",
        }, {
            images: ["git.png"],
            name: "Git",
            category: "Version control",
            height: "50px",
        },],
    },
    fr: {
        title: "Compétences",
        subtitle: "Mon niveau technique",
        skills: [{
            images: ["figma.png"],
            name: "Figma",
            category: "UI Design, Prototype",
            height: "50px",
        }, {
            images: ["react.svg"],
            name: "ReactJS + React Native",
            category: "Développement front-end",
            height: "50px",
        }, {
            images: ["mysql.png", "postgres.png"],
            name: "Mysql + Postgres",
            category: "Bases de données",
            height: "50px",
        }, {
            images: ["php.png", "nodejs.png"],
            name: "Php + NodeJS",
            category: "Langages côté serveur",
            height: "50px",
        }, {
            images: ["html.png"],
            name: "HTML 5",
            category: "Design structurel",
            height: "50px",
        }, {
            images: ["css.png", "scss.png"],
            name: "CSS 3 + SCSS",
            category: "Conception de style",
            height: "60px",
        }, {
            images: ["laravel.svg"],
            name: "Laravel",
            category: "Frameworks et bibliothèques",
            height: "50px",
        }, {
            images: ["vscode.png"],
            name: "VS Code",
            category: "Éditeur de codes",
            height: "50px",
        }, {
            images: ["git.png"],
            name: "Git",
            category: "Contrôle de version",
            height: "50px",
        },],
    }
}


export const SKILL: Skill =   getContent(content)



import React from 'react'

export default function Skills() {
    return (
        <section className="section_skills" id="skills">
            <div>
                <h1 className="h1">{SKILL.title}</h1>
                <p className="text-gray-1">{SKILL.subtitle}</p>
            </div>
            <div>
                {SKILL.skills.map(skillItem)}
            </div>
        </section>
    )
}


function skillItem(skill: Object, index: number, array: Object[]): React.ReactNode {
    const images = Object.values(skill)[0];
    const name = Object.values(skill)[1];
    const category = Object.values(skill)[2];
    const height = Object.values(skill)[3];
    return <div className="card-1 border" key={index.toString()} >
        <div>
            {images.map((img: string, i: number) => <img src={`/img/${img}`} alt="" key={index.toString() + i.toString()} height={height} />)}
        </div>
        <p className="text-black-3">{name}</p>
        <span className="text-gray-3">{category}</span>
    </div>
}

type Skill = {
    title: String,
    subtitle: String,
    skills: Object[],
}

const SKILL: Skill = {
    title: "Skills",
    subtitle: "My technical level",
    skills: [{
        images: ["figma.png"],
        name: "Figma",
        category: "Front-end developpement",
        height: "50px",
    }, {
        images: ["react.svg"],
        name: "ReactJS + React Native",
        category: "UI Design, Prototype",
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
}


import React from 'react'
import { SKILL } from '../../../data/home/skill';

export default function Skills() {
    return (
        <section className="section_skills" >
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
            {images.map((img: string, i: number) => <img src={`/img/skill/${img}`} alt="" key={index.toString() + i.toString()} height={height} />)}
        </div>
        <p className="text-black-3">{name}</p>
        <span className="text-gray-3">{category}</span>
    </div>
}

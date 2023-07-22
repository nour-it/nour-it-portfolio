import React from 'react'
import NourIcon from '../../../components/core/NourIcon'

export default function Qualification() {
    return (
        <section className='section_qualification' id='blog'>
            <div>
                <h1 className='h1'>{QUALIFICATION.title}</h1>
                <p className='text-gray-1'>{QUALIFICATION.subtitle}</p>
            </div>
            <div>
                {QUALIFICATION.categories.map(categoryItem)}
            </div>
            <div>
                <div className='line'>
                    {QUALIFICATION.qualifications.map((value: Object, index: number): React.ReactNode => (<span className='round'></span>))}
                </div>
                {QUALIFICATION.qualifications.map(qualificationItem)}
            </div>
        </section>
    )
}


function categoryItem(category: Object, index: number, array: Object[]): React.ReactNode {
    const name = Object.values(category)[0]
    const icon = Object.values(category)[1]
    const width = Object.values(category)[2]

    return (
        <div>
            <NourIcon id={icon} width={width} />
            <h2 className='h2'>{name}</h2>
        </div>
    )
}


function qualificationItem(qualification: Object, index: number, array: Object[]): React.ReactNode {
    const title = Object.values(qualification)[0]
    const adress = Object.values(qualification)[1]
    const icon = Object.values(qualification)[2]
    const period = Object.values(qualification)[3]

    const position = index % 2 == 0 ? 'left' : 'right'
    return (
        <div className={`card-3 ${position}`}>
            <div>
                <h2 className='h2'>{title}</h2>
                <a className='h2 gray-5' href='#'>{adress}</a>
            </div>
            <span className='text-gray-2'>
                <NourIcon id={"calendar"} width={18} /> {period}
            </span>
        </div>
    )
}

type Qualificaton = {
    title: String
    subtitle: String
    categories: Object[]
    qualifications: Object[]
}

const QUALIFICATION: Qualificaton = {
    title: 'Qualification',
    subtitle: 'My personal journey',
    categories: [
        {
            name: "Education",
            icon: "hat-svg",
            width: '36',
        },
        {
            name: "Experience",
            icon: 'bag-svg',
            width: '31',
        },
    ],
    qualifications: [
        {
            title: 'scientific secondary school diploma',
            adress: 'CPAP, Lome-Togo',
            icon: 'calendar',
            period: '2017-2018'
        },
        {
            title: 'company internship',
            adress: 'Tixpros, Lome-Togo',
            icon: 'calendar',
            period: 'Oct 2021 - Dec 2021'
        },
        {
            title: 'Bachelor in Application Development',
            adress: 'Lome-Togo',
            icon: 'calendar',
            period: '2022-2023'
        },
        {
            title: 'Freelance',
            adress: 'Lome-Togo',
            icon: 'calendar',
            period: '2022 - now'
        }
    ]
}

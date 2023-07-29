import React from 'react'
import NourContainer from '../../components/core/NourContainer'
import ExperienceHeader from '../../components/header/ExperienceHeader'
import HomeFooter from '../../components/footer/HomeFooter'
import NourIcon from '../../components/core/NourIcon'
import { EXPERIENCE } from '../../data/experience/experience'


function experienceItem(experience: Object, index: number, array: Object[]): React.ReactNode {
  // const { title, adress, date, description} = Object.values(experience)[0]
  const title = Object.values(experience)[0];
  const adress = Object.values(experience)[1];
  const date = Object.values(experience)[2];
  const description = Object.values(experience)[3];
  return <div className='experience' key={index.toString()}>
    <div className="card-3 right">
      <div>
        <h2 className="h2">{title}</h2>
        <a className="h2 gray-5" href="#">{adress}</a>
      </div>
      <span className="text-gray-2">
        <NourIcon id="calendar" width="18" />
        {date}
      </span>
    </div>
    <div dangerouslySetInnerHTML={{ __html: description }} />
  </div>
}

export default function ExperienceIndex(props: any) {
  return (
    <NourContainer >
      <ExperienceHeader />
      {EXPERIENCE.experiences.map(experienceItem)}
      <HomeFooter />
    </NourContainer>
  )
}

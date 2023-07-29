import React from 'react'
import NourButton from '../../../components/core/NourButton'
import NourIcon from '../../../components/core/NourIcon'

import {intro} from '../../../data/home/intro'

export default function Intro() {
  return (
    <section className="section__intro" id="home">
      <div>
        <div className="logo">Nour<span>It</span></div>
        <div className="text-black-2">
          <hr /> {intro.title}
        </div>
        <div>
           {intro.descriptions.map((value: String, index: number, array: String[]): React.ReactNode => <p key={index.toString()}>{value}</p>)}
        </div>
        <a href="#contact" className="btn">
          {intro.say}
          <NourIcon id={"prime_send-svg"} width={24}/>
        </a>
      </div>
      <div><img src="/img/logo512.png" alt="user"/></div>
    </section>
  )
}


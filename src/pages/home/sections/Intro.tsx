import React from 'react'

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
          say Hello
          <svg width="24" height="24">
            <use xlinkHref="/css/sprite.svg#prime_send-svg" />
          </svg>
        </a>
      </div>
      <div><img src="/img/logo512.png" alt="user"/></div>
    </section>
  )
}

type HomeIntro = {
    title: String,
    descriptions: String[]
}

const intro: HomeIntro = {
    title: "Web and Mobile App developer",
    descriptions: [
        `Hi, I'm Nouroudine, a web developer with over fourth years of experience in the industry. I specialize in
        front-end development and have a strong foundation in HTML, CSS, and JavaScript. I am also proficient in
        popular web development framework like React.`,
        `My passion for web development extends beyond my professional work. I am an active contributor to several
        open-source projects and enjoy experimenting with new technologies. In my free time, you can find me
        attending hackathons or working on personal projects to hone my skills.`,
        `I'm excited to join your team and contribute to building innovative and impactful web applications.`
    ]
}
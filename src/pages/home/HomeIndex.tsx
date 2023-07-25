import React from 'react'
import NourContainer from '../../components/core/NourContainer'
import Intro from './sections/Intro'
import HomeHeader from '../../components/header/HomeHeader'
import Separator from './components/Separator'
import About from './sections/About'
import Skills from './sections/Skills'
import Service from './sections/Service'
import Qualification from './sections/Qualification'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import HomeFooter from '../../components/footer/HomeFooter'

export default function HomeIndex() {
  
  const space = "calc(var(--space) * 12)";

  return (
    <NourContainer>
      <HomeHeader />
      <Intro />
      <Separator />
      <div style={{marginBottom: space}} id="about"/>
      <About />  
      <div style={{marginBottom: space}} id="service"/>
      <Service />
      <div style={{marginBottom: space}} id="skills"/>
      <Skills />
      <div style={{marginBottom: space}} id='blog'/>
      <Qualification />
      <div style={{marginBottom: space}}/>
      <Testimonial />
      <div style={{marginBottom: space}} id="contact"/>
      <Contact />
      <HomeFooter />
    </NourContainer>
  )
}

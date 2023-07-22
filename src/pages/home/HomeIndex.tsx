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
  const userPreferredLanguage = navigator.language || "en-EN";

  return (
    <NourContainer>
      <HomeHeader />
      <Intro />
      <Separator />
      <About />  
      <Service />
      <Skills />
      <Qualification />
      <Testimonial />
      <Contact />
      <HomeFooter />
    </NourContainer>
  )
}

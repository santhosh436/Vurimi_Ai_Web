import React from 'react'
import HeroSection from '../Components/AboutUs/HeroSection'
import Journey from '../Components/AboutUs/Journey'
import ImageSlider from '../Components/AboutUs/OurTeam'
import Branches from '../Components/AboutUs/Branches'

const AboutPage = () => {
  return (
    <div>
      <HeroSection/>
      <Journey/>
      <ImageSlider/>
      <Branches/>
    </div>
  )
}

export default AboutPage

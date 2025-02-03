import React from 'react'
import Navbar from '../Common/Navbar'
import ImageCarousel from '../Components/Home/ImageCarousel'
import HomeProducts from '../Components/Home/HomeProducts'
import Credits from '../Components/Home/Credits'
import CompanyDeliveryProvides from '../Components/Home/CompanyDeliveryProvides'
import DroneApplications from '../Components/Home/DroneApplications'
import ReviewSlider from '../Components/Home/ReviewSlider'
import Footer from '../Common/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <ImageCarousel/>
        <HomeProducts/>
        <Credits/>
        <CompanyDeliveryProvides/>
        <DroneApplications/>
        <ReviewSlider/>
        <Footer/>
    </div>
  )
}

export default LandingPage

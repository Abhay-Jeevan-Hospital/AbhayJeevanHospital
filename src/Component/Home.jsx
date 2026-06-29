import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Hero from './Hero'
import Consultant from '../Page/Consultants'
import GalleryHome from './GalleryHome'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import PreFooterCTA from './PreFooterCTA'
// import BreadCrumb from './BreadCrumb'

// import AppBread from './Breadcrumb'

const Home = () => {
  return (
    <>
    {/* <NavigationBar/> */}
    {/* <AppBre1ad/> */}
    {/* <BreadCrumb/> */}

    {/* <Hero/> */}
    <HeroSection/>
    <AboutSection/>
    <GalleryHome/>
    <Consultant/>
    <PreFooterCTA/>

    
    {/* <Footer/> */}
    </>
  )
}

export default Home
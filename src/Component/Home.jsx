import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Hero from './Hero'
import Consultant from '../Page/Consultant'
import GalleryHome from './GalleryHome'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import PreFooterCTA from './PreFooterCTA'
import HospitalPhotoBanner from './HospitalPhotoBanner'
import Contact from './Contact'
import SpecialtiesSection from './SpecialitiesSection'
import BreadCrumb from './BreadCrumb'

// import AppBread from './Breadcrumb'

const Home = () => {
  return (
    <>
      

      {/* <Hero/> */}
      <HeroSection />
      <AboutSection />
      <GalleryHome />

      {/* <!-- Elfsight Instagram Feed | Untitled Instagram Feed --> */}
      <div className='md:m-10'>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-c27b289f-8d73-4408-b356-aad31a1cc6db" data-elfsight-app-lazy></div>
      </div>
      <SpecialtiesSection />
      <Consultant />



      {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
      <div className='md:m-10'>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-4e6e246f-3a88-44d1-811f-94b962667e51" data-elfsight-app-lazy></div>
      </div>

   
      <Contact />


      {/* <Footer/> */}
    </>
  )
}

export default Home
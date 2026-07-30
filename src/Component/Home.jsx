import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Hero from './Hero'
import GalleryHome from './GalleryHome'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import PreFooterCTA from './PreFooterCTA'
import HospitalPhotoBanner from './HospitalPhotoBanner'
import Contact from './Contact'
import SpecialtiesSection from './SpecialitiesSection'
import BreadCrumb from './BreadCrumb'
import { Helmet } from "react-helmet-async";
import ConsultantHome from './ConsultantHome'

// import AppBread from './Breadcrumb'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Abhay Jeevan Hospital | Best Multispeciality Hospital in Jhunsi, Prayagraj
        </title>

        <meta
          name="description"
          content="Abhay Jeevan Hospital is a trusted multispeciality hospital in Jhunsi, Prayagraj providing expert doctors, emergency care, advanced treatments and patient-focused healthcare."
        />

        <meta
          name="keywords"
          content="Abhay Jeevan Hospital, Hospital in Jhunsi, Best Hospital Prayagraj, Multispeciality Hospital, Emergency Care, Orthopedic, Gynecology"
        />

        <meta name="author" content="Abhay Jeevan Hospital" />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Abhay Jeevan Hospital" />

        <meta
          property="og:description"
          content="Trusted Multispeciality Hospital in Jhunsi, Prayagraj."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://yourdomain.com/" />

        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Abhay Jeevan Hospital"
        />

        <meta
          name="twitter:description"
          content="Trusted Multispeciality Hospital in Jhunsi, Prayagraj."
        />

        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

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
      {/* <Consultant /> */}
      <ConsultantHome/>



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
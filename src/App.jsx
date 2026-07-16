import { useState } from 'react'
import './App.css'
import Home from './Component/Home'
import NavigationBar from './Component/NavigationBar'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'
import WhatsAppButton from './Component/whatsappButton'
import MobileActionBar from './Component/MobileActionBar'
// import PreFooterCTA from './Component/PreFooterCTA'
import HospitalPhotoBanner from './Component/HospitalPhotoBanner'
import Breadcrumb from './Component/BreadCrumb'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <NavigationBar />
      {/* <Home/> */}
      {/* <AbhayJeevanHospital/> */}
      <main id='main-content'>
        <WhatsAppButton />
        <Breadcrumb />
        <Outlet />
        <MobileActionBar />
      </main>
      {/* <PreFooterCTA/> */}
      <HospitalPhotoBanner />
      <Footer />
    </>
  )
}

export default App

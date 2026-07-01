import { useState } from 'react'
import './App.css'
import Home from './Component/Home'
import NavigationBar from './Component/NavigationBar'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'
import WhatsAppButton from './Component/whatsappButton'
import MobileActionBar from './Component/MobileActionBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <NavigationBar/>
    {/* <Home/> */}
    {/* <AbhayJeevanHospital/> */}
    <main id ='main-content'>
<WhatsAppButton/>
    <Outlet/>
<MobileActionBar/>
    </main>
    <Footer/>
    </>
  )
}

export default App

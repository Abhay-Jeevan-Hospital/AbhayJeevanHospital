import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AbhayJeevanHospital from './Component/AbhayJeevanHospital'
import Home from './Component/Home'
import NavigationBar from './Component/NavigationBar'
import Footer from './Component/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <NavigationBar/>
    <Home/>
    <AbhayJeevanHospital/>
    <Footer/>
    </>
  )
}

export default App

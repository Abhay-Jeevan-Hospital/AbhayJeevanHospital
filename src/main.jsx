import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookAppointment from './Page/BookAppointment.jsx'
import Home from './Component/Home.jsx'
import Gallery from './Page/Gallery.jsx'
import About from './Page/About.jsx'
import OurSpecialities from './Page/OurSpecialities.jsx'
import Consultants from './Page/Consultants.jsx'
import Contact from './Page/Contact.jsx'
import Gynecology from './Page/Specialities/Gynecology.jsx'
import InfertilityIVF from './Page/Specialities/InfertilityIVF.jsx'
import GeneralMedicine from './Page/Specialities/GeneralMedicine.jsx'
import Paediiatrics from './Page/Specialities/Paediiatrics.jsx'
import GeneralSurgery from './Page/Specialities/GeneralSurgery.jsx'
import PlasticAndReconstructiveSurgery from './Page/Specialities/PlasticAndReconstructiveSurgery.jsx'
import ContactForm from './Page/ContactForm.jsx'
// import { BrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <><App/></>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'book-appointment',
        element: <ContactForm/>
      },
      {
        path: 'gallery',
        element: <Gallery/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'gallery',
        element: <Gallery/>
      },
      {
        path: 'specialities',
        element: <OurSpecialities/>
      },
      {
        path: 'consultants',
        element: <Consultants/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'specialities/gynecology',
        element: <Gynecology/>
      },
      {
        path: 'specialities/infertility-and-ivf',
        element: <InfertilityIVF/>
      },
      {
        path: 'specialities/general-medicine',
        element: <GeneralMedicine/>
      },
      {
        path: 'specialities/pardiatrics',
        element: <Paediiatrics/>
      },
      {
        path: 'specialities/general-surgery',
        element: <GeneralSurgery/>
      },
      {
        path: 'specialities/plastic-and-reconstructive-surgery',
        element: <PlasticAndReconstructiveSurgery/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
    // <BrowserRouter>
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
    // </BrowserRouter>11
)

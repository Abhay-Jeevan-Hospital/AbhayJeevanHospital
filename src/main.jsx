import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookAppointment from './Page/BookAppointment.jsx'
import Home from './Component/Home.jsx'
// import Gallery from './Page/Gallery.jsx'
import About from './Page/About.jsx'
import OurSpecialities from './Page/OurSpecialities.jsx'
import Consultant from './Page/Consultant.jsx'
import Contact from './Page/Contact.jsx'
import Gynecology from './Page/Specialities/Gynecology.jsx'
import InfertilityIVF from './Page/Specialities/InfertilityIVF.jsx'
import GeneralMedicine from './Page/Specialities/GeneralMedicine.jsx'
import Paediatrics from './Page/Specialities/Paediatrics.jsx'
import GeneralSurgery from './Page/Specialities/GeneralSurgery.jsx'
import PlasticAndReconstructiveSurgery from './Page/Specialities/PlasticAndReconstructiveSurgery.jsx'
import ContactForm from './Page/ContactForm.jsx'
import AbhayJeevanGallery from './Page/AbhayJeevanGallery.jsx'
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
        path: 'about',
        element: <About/>
      },
      // {
      //   path: 'gallery',
      //   element: <Gallery/>
      // },
      {
        path: 'gallery',
        element: <AbhayJeevanGallery/>
      },
      {
        path: 'specialities',
        element: <OurSpecialities/>
      },
      {
        path: 'consultants',
        element: <Consultant/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'specialities/obstetrics-gynecology',
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
        path: 'specialities/pediatrics',
        element: <Paediatrics/>
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

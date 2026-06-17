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
        element: <BookAppointment/>
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
        path: 'Specialities',
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

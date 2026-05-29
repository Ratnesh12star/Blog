import React from 'react'
import Navbar from '../components/Navbar'
import StudentHero from '../components/student/StudentHero'
import StudentAbout from '../components/student/StudentAbout'
import StudentPanel from './StudentPanel'
import Footer from '../components/Footer'

const Student = () => {
  return (
    <>
       <Navbar/>
       <StudentHero/>
       <StudentAbout/>
       <StudentPanel/>
       <Footer/>
    </>
  )
}

export default Student
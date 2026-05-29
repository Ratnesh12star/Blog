import React from 'react'
import Navbar from '../components/Navbar'
import TeacherHero from '../components/teacher/TeacherHero'
import TeacherAbout from '../components/teacher/TeacherAbout'
import TeacherPanel from './TeacherPanel'
import Footer from '../components/Footer'

const Teacher = () => {
  return (
     <>
        <Navbar/>
        <TeacherHero/>
        <TeacherAbout/>
        <TeacherPanel/>
        <Footer/>
     </>
  )
}

export default Teacher
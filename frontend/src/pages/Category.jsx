import React from 'react'
import Navbar from '../components/Navbar'
import CategoryHero from '../components/categeory/CategoryHero'
import CategoryAbout from '../components/categeory/CategoryAbout'
import CategoryPanel from './CategoryPanel'
import Footer from '../components/Footer'

const Category = () => {
  return (
    <>
       <Navbar/>
       <CategoryHero/>
       <CategoryAbout/>
       <CategoryPanel/>
       <Footer/>
    </>
  )
}

export default Category
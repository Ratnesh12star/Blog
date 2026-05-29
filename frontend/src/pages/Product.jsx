import React from 'react'
import Navbar from '../components/Navbar'
import ProductHero from '../components/product/ProductHero'
import ProductAbout from '../components/product/ProductAbout'
import Footer from '../components/Footer'
import ProductPanel from './ProductPanel'

const Product = () => {
  return (
    <>
       <Navbar/>
       <ProductHero/>
       <ProductAbout/>
       <ProductPanel/>
       <Footer/>
    </>
  )
}

export default Product
import React from 'react'
import "./Home.css"
import Slider from '../common/Slider/Slider'
import Header from '../common/Header/Header'
import Products from '../common/Products/Products'
import End from '../common/end/End'
import Carousell from '../common/Carousel/Carousell'

const Home = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts
}) => {
  return (
    <div className='home'>
    
    <Header allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} />
    <Products/>
    <Carousell/>
    <Slider/>
    <End/>
    </div>
  )
}

export default Home

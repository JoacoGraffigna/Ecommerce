import React from 'react'
import Header from '../../common/Header/Header'
import Products from '../../common/Products/Products'
import End from '../../common/end/End'
import Slider from '../../common/Slider/Slider'
import ProductList from '../../common/Carrito/ProductList'


const Notebook = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts
}) => {
  return (
    <div>
      <Header allProducts={allProducts}
        setAllProducts={setAllProducts} 
        total={total} 
        setTotal={setTotal} 
        countProducts={countProducts} setCountProducts={setCountProducts}/>
      <Products/>
      <h2 className='title'>Notebooks</h2>
      <ProductList allProducts={allProducts}
        setAllProducts={setAllProducts} 
        total={total} 
        setTotal={setTotal} 
        countProducts={countProducts} setCountProducts={setCountProducts}/>
    <Slider />
    <End/>
    </div>
  )
}

export default Notebook

import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Pheriperals from './components/pages/Pheriperals/Pheriperals';
import Components from './components/pages/Components/Components';
import Notebook from './components/pages/Notebook/Notebook';
import Buildpc from './components/pages/buildpc/Buildpc';
import { useState } from 'react';


function App() {
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)
  return (
    <div >

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home
       allProducts={allProducts}
        setAllProducts={setAllProducts} 
        total={total} 
        setTotal={setTotal} 
        countProducts={countProducts} setCountProducts={setCountProducts} />}/>

        <Route path='/Pheriperals' element={<Pheriperals allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}/>

        <Route path='/Components' element={<Components allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}/>

        <Route path='/Notebook' element={<Notebook allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}/>

        <Route path='/BuildYourPc' element={<Buildpc allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

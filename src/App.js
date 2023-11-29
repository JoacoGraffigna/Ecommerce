import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Pheriperals from './components/pages/Pheriperals/Pheriperals';

function App() {
  return (
    <div >

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Pheriperals' element={<Pheriperals/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

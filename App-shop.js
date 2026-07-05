import React, { createContext } from 'react';
import './App.css';
import './project.css'
import Navbar from './Navbar';
import Sliders from './Sliders';
import Products from './Products';
import About from'./about'
import Details from './details'
import S from './prac'
import K from './K'
import B  from './b'

import {Routes,Route,Link} from 'react-router-dom'


export const c = createContext()

function App() {

const x = {p:"kijfvk"}

  return (
    <div >
      {/* <c.Provider value={x}>
        <S/>
      </c.Provider> */}
   <Navbar/>
   <Routes>
<Route path='/' element={
  <>
  <Sliders/>
  <Products/>
  </>
}
/>
<Route path="about" element={<About/>}
/>
<Route path="a/:k" element={<K/>}
/>
<Route path='product/:id' element={<Details/>}/>
    </Routes>
 {/* <S.k/> */}

    </div>
  );
}

export default App;

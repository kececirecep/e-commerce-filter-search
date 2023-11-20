import { useState } from 'react';
import './App.css';
import  Nav from './Navigation/Nav'
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

import products from './data/data'


function App() {  

  return (
    <div>
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
    </div>
  );
}

export default App;

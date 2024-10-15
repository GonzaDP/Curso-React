import { useState } from 'react'  
import NavBar from './Components/nav/NavBar'
import './App.css'
import ItemListContainerWithHoc from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <div>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={ <ItemListContainerWithHoc  />}/> 
          <Route path='/category/:idCategory' element={ <ItemListContainerWithHoc  />}/>
          <Route path='/detail/:idProduct' element={ <ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

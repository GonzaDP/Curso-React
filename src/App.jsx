import { useState } from 'react'  
import NavBar from './Components/nav/NavBar'
import './App.css'
import ItemListContainerWithHoc from './Components/ItemListContainer/ItemListContainer'


function App() {
  

  return (
    <div>
    <NavBar />
    <ItemListContainerWithHoc />
    </div>
  )
}

export default App

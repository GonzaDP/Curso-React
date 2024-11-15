import { useState } from 'react'
import NavBar from './Components/nav/NavBar'
import './App.css'
import ItemListContainerWithHoc from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Components/Context/CartContext'
import Cart from './Components/CartContainer/Cart'
import Checkout from './Components/Checkout/Checkout'


function App() {


  return (
    <div className='fondo'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainerWithHoc />} />
            <Route path='/category/:idCategory' element={<ItemListContainerWithHoc />} />
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

import { createContext, useState } from "react";
import Shop from "./pages/shop";
import CartPage from "./pages/cartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fav from "./pages/fav";
import DetailPage from "./pages/detail/detailPage";
export var MyContent = createContext()
export default function App() {
  var [cart,setCart]=useState([])
  var [fav,setFav]=useState([])
  return (
    <>
      <MyContent.Provider value={{fav,setFav,cart,setCart}}>
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Shop/>}/>
          <Route path="cart" element={<CartPage/>}/>
          <Route path="fav" element={<Fav/>}/>
          <Route path="detail" element={<DetailPage/>}/>
        </Routes>
        </BrowserRouter>
      </MyContent.Provider>
    </>
  )
}
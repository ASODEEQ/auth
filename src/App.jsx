// import { useState } from "react"
import Addproduct from "./components/Addproduct"
import Displayproduct from "./components/Displayproduct"
import { Route, Routes } from "react-router-dom" //to make route works
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"




function App() {
  // const [allproducts, setallproducts] = useState([])

  // const saveProduct = (product) => {
  //   // let products = product
  //   setallproducts([...allproducts, product])
  // }

  // const deleteProduct = (index) => {
  //   let newProduct= [...allproducts]
  //   newProduct.splice(index, 1)
  //   setallproducts(newProduct)
  // }

  // const editProduct=(index, product)=>{
  //   let newProduct= [...allproducts]
  //   newProduct.splice(index,1,product)
  //   setallproducts(newProduct)
  // }

  return (
    <>
    <Routes>
    <Route path={'/'} element={<Register/>}/>
    <Route path={'/login'} element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    </Routes>
      {/* <Addproduct saveProduct={saveProduct} /> */}
      {/* <Displayproduct allproducts={allproducts} deleteProduct={deleteProduct} editProduct={editProduct} /> */}
    </>
  )
}

export default App

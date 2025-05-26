import React, { useState } from 'react'

const Addproduct = ({saveProduct}) => {
    const [productName, setproductName] = useState("")
    const [productPrice, setproductPrice] = useState(0)
    const [productImage, setproductImage] = useState("")
    const [productQuantity, setproductQuantity] = useState(0)
    const handleSubmit=()=>{
        // let product = {productName, productPrice, productImage, productQuantity}
        // saveProduct(product)
        saveProduct({productName, productPrice, productImage, productQuantity})
    }
  return (
    <div>
        <input type="text" placeholder='product name' onChange={(e)=>setproductName(e.target.value)}/> <br />
        <input type="text" placeholder='product Price' onChange={(e)=>setproductPrice(e.target.value)}/> <br />
        <input type="text" placeholder='product Image' onChange={(e)=>setproductImage(e.target.value)}/> <br />
        <input type="text" placeholder='product Quantity' onChange={(e)=>setproductQuantity(e.target.value)}/> <br />

      <button type="button" onClick={handleSubmit}>Submit product</button>
      
    </div>
  )
}

export default Addproduct
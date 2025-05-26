import React, { useState } from 'react'

const Displayproduct = ({ allproducts, deleteProduct, editProduct }) => {
  const [productName, setproductName] = useState("")
  const [productPrice, setproductPrice] = useState(0)
  const [productImage, setproductImage] = useState("")
  const [productQuantity, setproductQuantity] = useState(0)
  const [currentIndex, setcurrentIndex] = useState(0)

  return (
    <div>
      {allproducts.map((product, index) => (
        <div key={index}>
          <h1>{product.productName}</h1>
          <p>${product.productPrice}</p>
          <img src={product.productImage} alt="product" width={200} height={200} /> <br />
          <p>{product.productQuantity}</p>

          <button onClick={() => deleteProduct(index)}>delete</button>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setcurrentIndex(index)} >edit</button>




          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input type="text" placeholder='product name' onChange={(e) => setproductName(e.target.value)} />
                  <input type="text" placeholder='product Price' onChange={(e) => setproductPrice(e.target.value)} />
                  <input type="text" placeholder='product Image' onChange={(e) => setproductImage(e.target.value)} />
                  <input type="text" placeholder='product Quantity' onChange={(e) => setproductQuantity(e.target.value)} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>editProduct(currentIndex, {productName, productPrice, productImage, productQuantity})}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Displayproduct
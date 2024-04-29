import { useEffect, useState } from 'react';
import './App.css';
import Productcard from './Component/Productcard';



function App() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json()
    setProducts(data)

  }

  if (products.length === 0) {
    return <h1>Geting the data</h1>
  }
  return (
    <>
      <div className='cards'>
        {products.map((p) => <Productcard {...p} key={p.id}></Productcard>)}
      </div>
    </>
  )

}

export default App;

import { Fragment, useEffect, useState } from 'react'


import axios from 'axios'
import Loading from './components/Loading'
import ProductCard from './components/ProductCard'

function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchProducts = async () => {
    try {

      setLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products`);

      setProducts(response.data);

   
    }

    catch (error) {
  setError(error.message);
    } finally {
      setLoading(false)
   
    }
  }

  useEffect(() => {
   fetchProducts()
  }, [])
  
  if (loading) return <Loading />
  if (error) return (
    <div className='flex items-center justify-center h-screen text-red-700 text-3xl text-center'>
      {error}
    </div>
  );
  return (
    <div className="bg-white">
      <div className=" container mx-auto  px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
        <h1 className="text-2xl text-center text-gray-900 mb-9 font-bold capitalize">
          products list
        </h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.length > 0 ? (
            products.map((productItem) => (
              <Fragment key={productItem.id}>
                <ProductCard product={productItem} />
              </Fragment>
            ))
          ) : (
            <p className="text-gray-900  text-center font-semibold">
              No products yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App

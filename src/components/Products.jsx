
import React from 'react'
import { productList } from './constants'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className='bg-white px-3 py-5'>
        <h1 className='text-lg lg:text-2xl font-semibold '>Popular Products</h1>

        <div className='my-5 flex flex-wrap justify-evenly'>
          {productList?.products?.map((item)=>{
            return <ProductItem key={item.id}  item={item}/>
          })}
        </div>

    </div>
  )
}

export default Products
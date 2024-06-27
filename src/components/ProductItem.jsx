
import React from 'react'
import star from "../assets/star.png"

const ProductItem = ({item}) => {

  return (
    <div className='flex flex-col items-center justify-center w-72 border p-3 my-3 cursor-pointer hover:shadow-2xl'>
        <img className='h-64 w-full object-contain' src={item?.image_link} alt="product image" />

        <div className='flex flex-col'>
            <h2>{item?.name}</h2>
            <p className='text-sm text-gray-500'>{item?.brand}</p>
            
            <div className='flex items-center gap-2'>
            <span className='flex items-center text-xs text-white font-semibold bg-green-700 rounded  px-2 py-1 gap-1'>{item?.rating} <img className='h-3' src={star} alt="star logo" /></span>                  
            <p className='text-lg font-semibold text-gray-600'>{"(" + item?.num_ratings + ")"}</p>
            </div>

            <div className='flex items-center gap-2'>
            <p className='text-lg font-semibold'>₹{item?.price}</p>
            <p className='font-semibold text-gray-500 line-through'>₹{item?.original_price}</p>
            <p className='font-semibold text-sm text-green-600'>{item?.discount + " off"}</p>
            </div>

            <p className='text-xs font-semibold text-green-700'>Bank Offer</p>
        </div>
    </div>
  )
}

export default ProductItem
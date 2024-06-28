
import React from 'react'
import star from "../assets/star.png"

const ProductItem = ({item}) => {

  return (
    <div className='flex flex-col items-center justify-center w-[9.1rem] sm:w-72 border p-3 mb-3 sm:my-3 cursor-pointer hover:shadow-2xl'>
        <img className='h-32 sm:h-64 w-full object-contain' src={item?.image_link} alt="product image" />

        <div className='flex flex-col gap-1'>
            <h2 className='text-sm lg:text-base'>{item?.name.slice(0,25) + "..."}</h2>
            <p className='hidden sm:flex text-sm text-gray-500'>{item?.brand}</p>
            
            <div className='flex items-center gap-2'>
            <span className='flex items-center text-xs text-white font-semibold bg-green-700 rounded  px-2 py-1 gap-1'>{item?.rating} <img className='h-3' src={star} alt="star logo" /></span>                  
            <p className='text-sm lg:text-lg font-semibold text-gray-600'>{"(" + item?.num_ratings + ")"}</p>
            </div>

            <div className='flex items-center gap-2'>
            <p className='text-base lg:text-lg  font-semibold'>₹{item?.price}</p>
            <p className='font-semibold text-gray-500 line-through hidden lg:flex'>₹{item?.original_price}</p>
            <p className='font-semibold text-sm text-green-600'>{item?.discount + " off"}</p>
            </div>

            <p className='hidden sm:flex text-xs font-semibold text-green-700'>Bank Offer</p>
        </div>
    </div>
  )
}

export default ProductItem
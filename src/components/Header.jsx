
import React from 'react'

const Header = () => {

  return (
    <div className='flex items-center justify-evenly py-5'>
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="flipkart logo" />

      <div className='flex items-center gap-3 bg-blue-50 py-3 px-5 rounded-lg w-[40%] text-lg'>
        <img className='h-5' src="https://www.pngkit.com/png/full/26-269603_search-magnifying-glass-icon-png-grey.png" alt="search logo" />

        <p className='text-gray-500'>Search for Products, Brands and More</p>
      </div>

      <button className='hidden lg:flex items-center gap-2'>
        <img className='h-6 ' src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="login logo" />
        
        <p>Login</p>

        <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/10017/10017905.png" alt="dropdown logo" />
      </button>

      <button className='hidden lg:flex items-center gap-3'>
        <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/13/13256.png" alt="cart logo" />
        <p>Cart</p>
      </button>

      <button className='hidden lg:flex items-center gap-3'>
        <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/5178/5178544.png" alt="bestseller logo" />
        <p>Become a Seller</p>
      </button>

      <button className='p-2 rounded-lg border-white  hover:border hover:bg-gray-100 '>
        <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/8276/8276515.png" alt="menu" />
      </button>

    </div>
  )
}

export default Header

import React from 'react'
import CategoriesBar from './CategoriesBar'
import Products from './Products'
import CategoriesBarMobile from './CategoriesBarMobile'


const Body = () => {
  return (
    <div className='bg-gray-200 w-full px-5 lg:px-10 py-3 flex flex-col gap-5'>
        <CategoriesBar/>
        <CategoriesBarMobile/>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" alt="banner" />

        <Products/>
    </div>
  )
}

export default Body
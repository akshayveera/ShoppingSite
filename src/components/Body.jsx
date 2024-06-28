
import React from 'react'
import CategoriesBar from './CategoriesBar'
import Products from './Products'
import CategoriesBarMobile from './CategoriesBarMobile'
import Banner from './Banner'


const Body = () => {
  return (
    <div className='bg-gray-200 w-full px-5 lg:px-10 py-3 flex flex-col gap-5'>
        <CategoriesBar/>
        <CategoriesBarMobile/>        
        <Banner/>
        <Products/>
    </div>
  )
}

export default Body
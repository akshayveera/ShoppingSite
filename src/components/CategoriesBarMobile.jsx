
import React, { useState } from 'react'
import up from "../assets/arrow-up.png"
import down from "../assets/arrow-down.png"
import Catlog from './Catlog';
import { categoryList } from './constants';

const CategoriesBarMobile = () => {

    const [isClicked, setIsClicked] = useState(false);

  return (
    <div className='w-full'>
        <div className='w-full text-center bg-blue-700 font-semibold py-2 px-5 text-white flex lg:hidden items-center justify-between text-lg rounded-md relative'
        onClick={()=>{
            setIsClicked(!isClicked);
        }}>
            Categories
            {isClicked ? <img className='h-4' src={down} alt="" /> : <img className='h-4' src={up} alt="" />}

        </div>
        
        {isClicked && (
          <div className='w-full min-w-fit lg:hidden'>
            <Catlog catList={categoryList} flag={true}/>      
          </div>
        )}
    
    </div>
  )
}

export default CategoriesBarMobile
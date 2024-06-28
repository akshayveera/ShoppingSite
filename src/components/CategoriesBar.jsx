
import React, { useState } from 'react'
import { categoryList } from './constants'
import Catlog from './Catlog'

const CategoriesBar = () => {

  const hoverArr = Array(categoryList.length).fill(false);
  const [hoverState, setHoverState] = useState(hoverArr);

  const arr = Array(categoryList.length).fill(0);


  return (
    <div className='bg-white py-5 item-center justify-evenly hidden lg:flex z-50'>
        
        {categoryList.map((item, idx)=>{
            return (
                <div key={item.title} className='flex flex-col items-center justify-center cursor-pointer pb-2 relative' 
                onMouseEnter={()=>{
                  const hoverArray = Array(categoryList.length).fill(false);
                  hoverArray[idx] = true;
                  setHoverState(hoverArray);
                }}
                onMouseLeave={()=>{
                  const hoverArray = Array(categoryList.length).fill(false);
                  setHoverState(hoverArray);
                }}
                 >
                    <img className='h-16' src={item.img} alt="category item image" />
                    <p className='group text-sm font-semibold flex items-center justify-center gap-2 hover:text-blue-700'>
                      {item.title} 
                      <span className={'font-semibold border-r-2 border-b-2 border-black p-[3px] rotate-45 group-hover:border-blue-700'}></span>
                    </p> 

                    {hoverState[idx] && (
                      <div className='absolute top-[87px] min-w-fit'>
                        <Catlog catList={categoryList[idx]?.subcategories} flag={(idx>=4 ? false : true)}/>      
                      </div>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default CategoriesBar
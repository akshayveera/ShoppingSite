
import React, { useState } from 'react'

const Catlog = ({catList, flag}) => {
    
    const hoverArr = Array(catList && catList.length).fill(false);
    const [hoverState, setHoverState] = useState(hoverArr);
      
  return (
    <div className='w-full lg:w-[220px] rounded border bg-white shadow-2xl z-50'>
        {catList?.map((item, idx)=>{
            return (
                <div key={item?.title} 
                    className={'group py-3  border-b w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center cursor-pointer text-xs hover:bg-blue-50  hover:shadow-md ' }
                    onMouseEnter={()=>{
                        const hoverArr = Array(catList && catList.length).fill(false);
                        hoverArr[idx] = true;
                        setHoverState(hoverArr);
                    }}
                    onMouseLeave={()=>{
                        const hoverArr = Array(catList && catList.length).fill(false);
                        setHoverState(hoverArr);
                    }}
                    
                    >
                        
                        <div className='flex justify-between items-center w-full'>
                            {flag || item?.subcategories &&  <div className='pl-4 hidden lg:flex'><span className={' font-semibold border-b-2 border-l-2 border-transparent p-[3px] rotate-45 group-hover:border-blue-700 '}></span></div>}

                            <p className={'px-4 ' + (hoverState[idx] && "text-blue-700 font-bold")}>{item?.title} </p>

                            {flag && item?.subcategories && <div className='pr-4 hidden lg:flex'><span className={' font-semibold border-t-2 border-r-2 border-transparent p-[3px] rotate-45 group-hover:border-blue-700 '}></span></div>}
                            {item?.subcategories && <div className='pr-4 flex lg:hidden'><span className={'inline-block font-semibold border-b-2 border-r-2 border-transparent p-[3px] rotate-45 group-hover:border-blue-700 '}></span></div>}

                        </div>


                        {
                            item?.subcategories && hoverState[idx] && (
                                <div className={'lg:absolute lg:top-[0px] w-full lg:w-fit ' + (flag ? " lg:left-[220px] " : " lg:right-[220px] ") }>
                                    <Catlog catList={item?.subcategories} flag={flag}/>      
                                </div>
                            )
                        }

                </div>)
        })}
    </div>
  )
}

export default Catlog
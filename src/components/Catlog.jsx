
import React, { useState } from 'react'

const Catlog = ({catList, flag}) => {
    
    const hoverArr = Array(catList && catList.length).fill(false);
    const [hoverState, setHoverState] = useState(hoverArr);
      
  return (
    <div className='w-[220px] rounded border bg-white shadow-2xl'>
        {catList?.map((item, idx)=>{
            return (
                <p key={item?.title} 
                    className={'group py-2 px-4 border-b w-full flex justify-between items-center cursor-pointer text-xs hover:bg-blue-50  hover:shadow ' }
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
                        {flag || item?.subcategories && <span className={'font-semibold border-b-2 border-l-2 border-transparent p-[3px] rotate-45 group-hover:border-blue-700 '}></span>}

                        <p className={' ' + (hoverState[idx] && "text-blue-700 font-bold")}>{item?.title} </p>

                        {flag && item?.subcategories && <span className={'font-semibold border-t-2 border-r-2 border-transparent p-[3px] rotate-45 group-hover:border-blue-700 '}></span>}

                        {
                            item?.subcategories && hoverState[idx] && (
                                <div className={'absolute top-[0px] min-w-fit ' + (flag ? " left-[220px] " : " right-[220px] ") }>
                                    <Catlog catList={item?.subcategories} flag={flag}/>      
                                </div>
                            )
                        }

                </p>)
        })}
    </div>
  )
}

export default Catlog
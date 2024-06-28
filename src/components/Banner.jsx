
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { bannerList } from './constants';

const Banner = ()=> {

    return (
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} interval={1500} showThumbs={false} >
            {bannerList.map((item)=>{
                return (
                    <div className='h-[200px]'>
                        <img src={item}/>
                    </div>
                )
            })}
        </Carousel>
    );
};

export default Banner;
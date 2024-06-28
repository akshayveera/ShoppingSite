
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { bannerList } from './constants';

const Banner = ()=> {

    return (
        <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} interval={1500} showThumbs={false} >
            {bannerList.map((item)=>{
                return (
                    <div>
                        <img src={item}/>
                    </div>
                )
            })}
        </Carousel>
    );
};

export default Banner;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { reviewDB } from "./reviewDB";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import review1 from '../../components/images/reviews/reviev1 (1).jpg'
// import required modules
import { Pagination, Navigation } from "swiper";

export default function ReviewSlider() {
  return (
    <>
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper3"
      >

                {
                    reviewDB.map((item, index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <img src={item} />
                            </SwiperSlide>
                        )
                    })
                }
            
      </Swiper>
    </>
  );
}

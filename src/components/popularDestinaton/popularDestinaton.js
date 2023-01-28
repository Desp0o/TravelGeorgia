import HeaderComponent from "../HeaderComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { popularDestination } from "./popularDestinationDataBase";

import CardComponent from '../CardComponent'


import "swiper/css";
import "swiper/css/pagination";

import "../../styles/swiperSlider.css";

export default function PopularDestinaton(){
    return(
        <div className="pt-[68px] pb-[80px]">
            <HeaderComponent title='Самые популярные' />
            
            {/* სვაიპერი */}
            <div className="pt-[80px] xs:pt-[40px] pl-[120px] pr-[30px] xs:pl-0">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper2"
            >
        {
            popularDestination.map((card)=>{
                return(
                    <SwiperSlide>
                        <CardComponent 
                            title={card.title}
                            cover={card.cover}
                            destination={card.destination}
                        />
                    </SwiperSlide>
                )
            })
        }
        
      </Swiper>
    
            </div>
        </div>
    )
}
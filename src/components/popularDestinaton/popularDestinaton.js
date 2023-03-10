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
        <div className="pt-[30px] pb-[80px]">
            <HeaderComponent title='Самые популярные' />
            
            {/* სვაიპერი */}
            <div className="pt-[30px] xs:pt-[40px] pl-[120px] xs:pl-0">
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
                    <SwiperSlide key={card.id}>
                        <CardComponent 
                            title={card.title}
                            cover={card.cover}
                            time={card.time}
                            link={card.link}
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
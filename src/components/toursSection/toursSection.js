import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { TourDataBase } from "./toursDatabase";


import "swiper/css";
import "swiper/css/pagination";

import "../../styles/swiperSlider.css";
import HeaderComponent from "../HeaderComponent";

export default function ToursSection(){
    return(
        <div className="w-full pt-[70px] pb-[40px] bg-[#D0E7EA]">
            <HeaderComponent title='ЭКСКУРСИИ' />

            <div className="pt-[80px] xs:pt-[40px] pl-[120px] xs:pl-0" >
                        <Swiper
                            slidesPerView={3.09}
                            spaceBetween={30}
                            loop={true}
                            loopFillGroupWithBlank={false}
                            pagination={{
                            clickable: true,
                            }}
                            breakpoints={{
                                280: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 20,
                                  },
                                640: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 40,
                                },
                                1024: {
                                  slidesPerView: 3.15,
                                  spaceBetween: 20,
                                },
                                1554: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                  },
                              }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {TourDataBase.map((item)=>{
                                return(
                                <SwiperSlide key={item.id}>
                                <div className="w-[373px] xs:max-w-[280px] h-[450px] flex flex-col rounded-[20px] overflow-hidden box-border
                                                shadow-[0_6px_10px_0px_rgba(0,0,0,0.3)] relative">
                                    <div className="w-full h-[50%]" >
                                        <img className="w-full h-full object-cover" src={item.cover} alt="cardslider img" />
                                    </div>

                                    <div className="w-full h-[50%] pt-[10px] pb-[25px] pl-[10px] pr-[25px] flex flex-col gap-[30px] bg-white">
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[24px] xs:text-[18px] font-[500] text-left">{item.title}</p>
                                            <p className="text-[14px] text-left">{item.description}</p>
                                        </div>

                                        <div className="flex justify-between items-center absolute bottom-[25px] right-[25px] left-[10px] w-[100]">
                                            <div className="flex items-center gap-[5px]">
                                                <span>from</span>
                                                <span className="text-[#FF6B6B] font-[500] text-[30px]">{item.price}</span>
                                            </div>
                                            <div className="w-[97px] h-[34px] flex justify-center items-center rounded-[10px] bg-[#00A0B1] cursor-pointer">
                                                <span className="text-center text-[#FFF]">more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                )
                            })}
                            
                           
                </Swiper>
            </div>
        </div>
    )
}
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent";
import Navbar from "../../components/navbar/Navbar";

import {TourDataBase} from '../../components/toursSection/toursDatabase'
import { Link } from "react-router-dom";

export default function AllTours(){
    return(
        <div className="w-full">
            <Navbar 
                homePage='*'
                tours='#' 
            />
            
            <div className="w-full pt-[100px]">
                <HeaderComponent title='ЭКСКУРСИИ' />
            </div>

            <div className="flex flex-wrap gap-[50px] pt-[80px] pb-[100px] pl-[80px] xs:pl-[20px] xl:pl-[150px]">
                {
                    TourDataBase.map((item) => {
                        return(
                            <div key={item.id} className="w-[373px] xs:max-w-[280px] h-[530px] xs:h-[490px] flex flex-col rounded-[20px] overflow-hidden box-border
                                                shadow-[0_6px_10px_0px_rgba(0,0,0,0.3)] relative">
                                    <div className="w-full h-[50%]" >
                                        <img className="w-full h-full object-cover" src={item.cover} alt="cardslider img" />
                                    </div>

                                    <div className="w-full h-[50%] pt-[10px] pb-[25px] pl-[10px] pr-[25px] flex flex-col gap-[30px] bg-white">
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[24px] xs:text-[16px] font-[500] text-left">{item.title}</p>
                                            <p className="text-[14px] xs:text-[12px] text-left">{item.description}</p>
                                        </div>

                                        <div className="flex justify-between items-center absolute bottom-[20px] xs:bottom-[15px] right-[25px] left-[10px] w-[100]">
                                            <div className="flex items-center gap-[5px]">
                                                <span className="xs:text-[14px]">от</span>
                                                <span className="text-[#FF6B6B] font-[500] text-[30px] xs:text-[16px]">{item.price}</span>
                                            </div>
                                            <Link to={item.redirect}>
                                                <div className="w-[97px] xs:w-[57px] h-[34px] xs:h-[24px]  flex justify-center items-center rounded-[10px] bg-[#00A0B1] cursor-pointer">
                                                    <span className="text-center text-[#FFF] xs:text-[12px]">more</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>

            <Footer />
        </div>
    )
}
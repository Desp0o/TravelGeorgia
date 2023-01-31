import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import {ManyDaysData} from  './manyDaysData'
import CardComponent from "../../components/CardComponent";
import HeaderComponent from "../../components/HeaderComponent";


export default function ManyDaysTours(){
    return(
        <div className="w-full">
            <Navbar 
                homePage='*'
                
            />

            <div className="w-full pt-[100px] pb-[100px]">
                <HeaderComponent title='Многодневные Туры' />
                
                <div className="flex flex-wrap gap-[40px] pt-[80px] justify-center items-center" >
                        {ManyDaysData.map((item) => {
                            return(
                                <CardComponent
                                    key={item.id} 
                                    title={item.title}
                                    cover={item.cover}
                                    time={item.time}
                                    link={item.link}
                                />
                            )
                        })}
                </div>


            </div>

            <Footer />
        </div>
    )
}
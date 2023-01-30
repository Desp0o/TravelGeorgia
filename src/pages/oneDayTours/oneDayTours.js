import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import {popularDestination} from  '../../components/popularDestinaton/popularDestinationDataBase'
import CardComponent from "../../components/CardComponent";
import HeaderComponent from "../../components/HeaderComponent";


export default function OneDayTours(){
    return(
        <div className="w-full">
            <Navbar 
                homePage='*'
                
            />

            <div className="w-full pt-[100px] pb-[100px]">
                <HeaderComponent title='Одного дня' />
                
                <div className="flex flex-wrap gap-[40px] pt-[80px] xl:pl-[220px] xl:pr-[220px] justify-center" >
                        {popularDestination.map((item) => {
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
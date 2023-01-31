import "photoswipe/dist/photoswipe.css";

import LittleHeader from "../manyDays/manyDays_inner/ManyDaysHeader";
import HeaderComponent from '../../components/HeaderComponent'
import Navbar from '../../components/navbar/Navbar'
import StepBack from '../stepBack'
import Footer from '../../components/Footer/Footer'

import cover from '../../components/images/inner/rafting.jpeg'

export default function RaftingInner() {
    return (

        <div className="w-full">
            <Navbar homePage='*' />

            <div className='pt-[100px]'>
                <HeaderComponent title='рыбный день' />
            </div>

            <StepBack link='/pages/allTours/allTours' />


            <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />

            <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >



                <p>
                    Для тех, кто любит активный отдых.
                    Наше предложение подходит как для взрослых, так и для детей. Вместе с умелыми инструкторами, вы будете иметь возможность прокатиться по бурной горной реке, выбрав на свой вкус маршрут. По пути вас ждет знакомство с красивейшими горными местами нашей страны
                </p>
                <br />

                <LittleHeader title='ВАРИАНТ 1' />
                <p><b>ТБИЛИСИ. ЧЕРЕПАШЬЕ ОЗЕРО</b></p>
                <p><b>Цена:</b> 150$ от 2 до 5 человек, входят транспортные расходы и услуги экскурсовода</p><br/>
                <p>
                    <b>Рафтинг оплачивается на месте самостоятельно. Короткий маршрут</b><br/>
                    Короткий маршрут: 7 км, длительность по времени 30-40 минут — <b>40 долларов с человека</b><br/>
                    Длинный: 15 км, продолжительность 1 час – 1 час 20 минут — <b>60 долларов с человека.</b> <br/>
                    Сезон рафтинга: со 2 мая по 20 сентября каждого года.
                </p>
                




            </div>




            <div className='pt-[100px]'>
                <Footer />
            </div>

        </div>
    )
}
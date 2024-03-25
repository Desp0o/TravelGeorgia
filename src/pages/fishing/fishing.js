import "photoswipe/dist/photoswipe.css";
import SimpleGallery from './SimpleGallery';

import LittleHeader from "../manyDays/manyDays_inner/ManyDaysHeader";
import HeaderComponent from '../../components/HeaderComponent'
import Navbar from '../../components/navbar/Navbar'
import StepBack from '../stepBack'
import Footer from '../../components/Footer/Footer'

import cover from '../../components/images/inner/fishingInner.webp'


import fish1 from '../../components/images/fishing/fish1.webp'
import fish2 from '../../components/images/fishing/fish2.webp'
import fish3 from '../../components/images/fishing/fish3.webp'
import fish4 from '../../components/images/fishing/fish4.webp'
import fish5 from '../../components/images/fishing/fish5.webp'
import fish6 from '../../components/images/fishing/fish6.webp'
import fish7 from '../../components/images/fishing/fish7.webp'
import fish8 from '../../components/images/fishing/fish8.webp'
import fish9 from '../../components/images/fishing/fish9.webp'
import fish10 from '../../components/images/fishing/fish10.webp'
import fish11 from '../../components/images/fishing/fish11.webp'
import fish12 from '../../components/images/fishing/fish12.webp'

export default function FishingInner() {
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
                    Приглашаем всех желающих
                    в царство грузинских рек, озер
                    и их обитателей!
                    Красивая природа, горный воздух, любимая рыбалка,
                    неспешный разговор,
                    вкусный обед на костре
                    или в грузинском дукане.
                    Отдых для души и тела. Впечатления, к которым в мыслях Вы будете возвращаться вновь и вновь...
                </p>
                <br />

                <LittleHeader title='ВАРИАНТ 1' />
                <p><b>ТБИЛИСИ. ЧЕРЕПАШЬЕ ОЗЕРО</b></p>
                <p><b>Цена:</b> 125€ от 1 до 4 Человек</p>
                <p>ловля окуня и щуки спиннингом сберега</p>
                <p>В тур входит : доставка автомобилем, рыбаловные оснастки, гид рыбалов,чай-кофе-хачапури +чача (100 г)<br/>
                Всю рыбу можно забрать, кроме щуки</p>
                <br />
                
                <LittleHeader title='ВАРИАНТ 2' />
                <p><b>ГОРИ</b></p>
                <p><b>Цена:</b> 200€ от 1 до 4 Человек</p>
                <p>рыбалка на "платнике" на радужную форель спиннингом.</p>
                <p>В тур входит: доставка автомобилем, рыбаловные оснастки, гид рыбалов, чай-кофе-хачапури , шашлык, форель на углях -вино иливодка.
                Рыбу можно забирать, <b>Стоимость одного килограмма 5€</b>. 
                </p>
                <br />

                <LittleHeader title='ВАРИАНТ 3' />
                <p><b>Джавахети, г. Цалка.</b></p>
                <p><b>Цена:</b> 235€ от 1 до 4 Человек</p>
                <p>рыбалка на ручьевую (дикую) форель спиннингом.</p>
                <p>В тур входит доставка автомобилем, рыбаловные оснастки, гид-рыбалов, чай-кофе-хачапури. Обед на природе, или в местном духане. 
                </p>
                <br />


                <div className="flex w-full justify-center my-[100px]">
                <SimpleGallery
                    galleryID="my-test-gallery"
                    images={[
                        {
                            largeURL:
                                `${fish1}`,
                            thumbnailURL:
                                `${fish1}`,
                            width: 541,
                            height: 406,
                        },
                        {
                            largeURL:
                            `${fish2}`,
                            thumbnailURL:
                            `${fish2}`,
                            width: 326,
                            height: 406,
                        },
                        {
                            largeURL:
                            `${fish3}`,
                            thumbnailURL:
                            `${fish3}`,
                            width: 541,
                            height: 302,
                        },
                        {
                            largeURL:
                            `${fish4}`,
                            thumbnailURL:
                            `${fish4}`,
                            width: 541,
                            height: 302,
                        },
                        {
                            largeURL:
                            `${fish5}`,
                            thumbnailURL:
                            `${fish5}`,
                            width: 541,
                            height: 319,
                        },
                        {
                            largeURL:
                            `${fish6}`,
                            thumbnailURL:
                            `${fish6}`,
                            width: 535,
                            height: 401,
                        },
                        {
                            largeURL:
                            `${fish7}`,
                            thumbnailURL:
                            `${fish7}`,
                            width: 535,
                            height: 367,
                        },
                        {
                            largeURL:
                            `${fish11}`,
                            thumbnailURL:
                            `${fish11}`,
                            width: 242,
                            height: 406,
                        },
                        {
                            largeURL:
                            `${fish12}`,
                            thumbnailURL:
                            `${fish12}`,
                            width: 541,
                            height: 406,
                        },
                        {
                            largeURL:
                            `${fish8}`,
                            thumbnailURL:
                            `${fish8}`,
                            width: 535,
                            height: 367,
                        },
                        {
                            largeURL:
                            `${fish9}`,
                            thumbnailURL:
                            `${fish9}`,
                            width: 540,
                            height: 303,
                        },
                        {
                            largeURL:
                            `${fish10}`,
                            thumbnailURL:
                            `${fish10}`,
                            width: 540,
                            height: 303,
                        },
                    ]}
                />
                </div>


            </div>




            <div className='pt-[0px]'>
                <Footer />
            </div>

        </div>
    )
}
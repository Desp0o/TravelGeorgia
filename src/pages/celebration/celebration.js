import LittleHeader from "../manyDays/manyDays_inner/ManyDaysHeader";
import HeaderComponent from '../../components/HeaderComponent'
import Navbar from '../../components/navbar/Navbar'
import StepBack from '../stepBack'
import Footer from '../../components/Footer/Footer'

import cover from '../../components/images/inner/rtveliInner.jpg'

export default function CelebrationInner() {
    return (

        <div className="w-full">
            <Navbar homePage='*' />

            <div className='pt-[100px]'>
                <HeaderComponent title='Праздник в Грузии' />
            </div>

            <StepBack link='/pages/allTours/allTours' />


            <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />

            <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >

                <LittleHeader title='ВАРИАНТ 1' />
                <p><b>ТБИЛИСИ. ЧЕРЕПАШЬЕ ОЗЕРО</b></p>
                <p><b>Цена:</b> 310$ за двоих</p>
                <p><b>Цена:</b> 330$ за троих</p>
                <p><b>Цена:</b> 350$ за четверых</p>

                <br />
                <p>
                    Для Вас в Кахетии​ (выезд из Тбилиси, или из Кахетии, забираем прямо с отеля)​ накрывается грузинский стол, присутствует  колоритный тамада,​ представлено лучшее из традиционной национальной домашней кухни,​ вино, чача, минеральная вода (при желании можно будет вино и чачу купить, чтобы увезти с собой домой). Только для Вас будут петь и танцевать профессиональные актеры в национальной одежде (1,5 часа). С ними можно пофотографироваться, а если проявите заинтересованность заранее в переписке, то и сами примерите национальную одежду.
                </p>
                <br />

                <p>
                    А, может, Вам хочется научится готовить хачапури, хинкали, чурчхелу? Все это возможно в один день! Даже мастер класс по танцам! Как дополнительные услуги, оговариваем вместе  во время оформления заказа.
                    Осенью приглашаем на​ праздник Ртвели (сбор винограда, принятие участия в пригтовлении вина, чачи).
                    Напишите свои пожелания, количество человек, и сориентируем по точной цене. Можно дополнениить мероприятие экскурсиией по городу любви Сигнахи , монастырю Бодбе с видом на Алазанскую долину. Ведь они так рядом! И так красивы!
                    Цена заявленная в данном предложении как первая основная, указана за обслуживание двоих человек, двумя музыкантами, двумя танцорами, полноценным застольем. Включает в себя транспортные расходы, услуги водителя. Каждый каждый последующий человек до пяти + 20$.
                    Больше пяти человек рассчитываем индивидуально в зависимости от транспорта (микроавтобусы, автобусы) и места, требуемого для проведения именно этому количеству человек.
                </p>


                <div className="flex flex-wrap gap-[20px] justify-center my-[100px] xs:my-[50px]">
                <iframe width="300" height="315" src="https://www.youtube.com/embed/bybkjq7lh_8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="300" height="315" src="https://www.youtube.com/embed/lALEeKM_1tc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="300" height="315" src="https://www.youtube.com/embed/I3fnof-egY8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="300" height="315" src="https://www.youtube.com/embed/A9QrmP6swS0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="300" height="315" src="https://www.youtube.com/embed/cUF2C4TDD2U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="300" height="315" src="https://www.youtube.com/embed/cRFwsdPrXTE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

            </div>




            <div className='pt-[100px]'>
                <Footer />
            </div>

        </div>
    )
}
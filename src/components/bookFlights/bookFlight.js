import HeaderComponent from'../HeaderComponent'
import OfferComponent from './offerComponent'

import location2 from '../../components/images/icons/location2.webp'
import payment from '../../components/images/icons/payment.webp'
import airport from '../../components/images/icons/airport.webp'
import batumi from '../../components/images/Batumi.webp'

export default function BookFlight(){
    return(
        <div className="w-full pt-[30px]">
            <HeaderComponent title='Забронируйте Поездку'/>

            <div className='w-full pt-[30px] xs:pt-[40px] pl-[140px] xs:pl-[40px] pb-[80px] flex gap-[60px] xl:justify-center'>

                {/* მარცხენა მხარე */}
                <div className='flex flex-col xs:gap-[20px]'>
                    {/* ელემენტი 1 */}
                    <OfferComponent 
                        icon={location2}
                        title='Выберите Пункт'
                        descritpion='Выберите услугу, тур, экскурсию, которые Вас заинтересовали. Напишите нам для уточнения деталей и окончательного бронирования за Вами дат, транспорта и гида. '
                    />

                    <OfferComponent 
                        icon={payment}
                        title='Оплата При Встрече'
                        descritpion='Оплата
                        осуществляется при встрече , без предоплат, если только речь не идёт о  заказе мероприятия для большого количества человек, требующего бронирования мест в ресторане, автобусов.'
                    />

                    <OfferComponent 
                        icon={airport}
                        title='Встреча в Аэропорту'
                        descritpion='Трансфер из аэропорта к месту жительства  и  другие виды трансфера,  осуществляются по предварительной договоренности. При заказе 4 и более экскурсий для участников от 1 до 5 человек встреча в аэропорту бесплатна.'
                    />
                </div>

                {/* სურათი მარჯვენა */}
                <img src={batumi} alt='booking img' className='w-[570px] rounded-[20px] xs:hidden' />
            </div>
        </div>
    )
}
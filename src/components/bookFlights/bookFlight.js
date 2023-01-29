import HeaderComponent from'../HeaderComponent'
import OfferComponent from './offerComponent'

import location2 from '../../components/images/icons/location2.png'
import payment from '../../components/images/icons/payment.png'
import airport from '../../components/images/icons/airport.png'
import batumi from '../../components/images/Batumi.png'

export default function BookFlight(){
    return(
        <div className="w-full pt-[27px]">
            <HeaderComponent title='Забронируйте Поездку'/>

            <div className='w-full pt-[80px] xs:pt-[40px] pl-[140px] xs:pl-[40px] pb-[80px] flex gap-[60px]'>

                {/* მარცხენა მხარე */}
                <div className='flex flex-col'>
                    {/* ელემენტი 1 */}
                    <OfferComponent 
                        icon={location2}
                        title='Выберите Пункт'
                        descritpion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                    />

                    <OfferComponent 
                        icon={payment}
                        title='Оплата При Встрече'
                        descritpion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                    />

                    <OfferComponent 
                        icon={airport}
                        title='Встреча в Аэропорту'
                        descritpion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                    />
                </div>

                {/* სურათი მარჯვენა */}
                <img src={batumi} alt='booking img' className='w-[570px] rounded-[20px]' />
            </div>
        </div>
    )
}
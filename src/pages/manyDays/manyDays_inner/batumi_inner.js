import HeaderComponent from '../../../components/HeaderComponent'
import Navbar from '../../../components/navbar/Navbar'
import StepBack from '../../stepBack'
import Footer from '../../../components/Footer/Footer'
import LittleHeader from './ManyDaysHeader'

import cover from '../../../components/images/inner/batumi.jpg'

export default function BatumiInner(){
    return(
        
        <div className="w-full">
            <Navbar homePage='*' />
            
            <div className='pt-[100px]'>
                <HeaderComponent title='Тбилиси — Кутаиси — Батуми' />
            </div>

            <StepBack link='/pages/manyDays/manyDays' />

            
                <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >
                    
                    <p><b>Тбилиси — Кутаиси — Батуми</b></p>

                    <br/>
                    <p><b>Цена:</b> 300$ от 1 до 4 Человек</p>
                    <p><b>Цена:</b> 560$ от 5 до 6 Человек </p>
                    <br/>

                    <p>
                    Если Вы собираетесь совершать путешествие от Тбилиси до Батуми (или наоборот от Батуми до Тбилиси), не упустите шанс соединить приятное с полезным. Заказав эту услугу, Вы получаете не только комфортабельный индивидуальный трансфер от одного города в другой, но и знакомитесь с красотами одного из самых больших городов Грузии — Кутаиси. Пещеры Прометея, невероятной красоты природа и истории монастыри Баграта и Гелати. И не важно верующие Вы люди, или не считающие себя таковыми. Красота природы, дух времен старинной архитектуры захватит и тех и других.
                    </p>
                    <br/>

                    
                </div>
            

            

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}
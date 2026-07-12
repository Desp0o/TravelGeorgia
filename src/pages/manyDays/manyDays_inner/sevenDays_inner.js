import { Link } from 'react-router-dom'
import HeaderComponent from '../../../components/HeaderComponent'
import Navbar from '../../../components/navbar/Navbar'
import StepBack from '../../stepBack'
import Footer from '../../../components/Footer/Footer'
import LittleHeader from './ManyDaysHeader'

import cover from '../../../components/images/inner/ananuri.webp'

export default function SevenDaysInner(){
    return(
        
        <div className="w-full">
            <Navbar homePage='*' />
            
            <div className='pt-[100px]'>
                <HeaderComponent title='Семидневный Тур' />
            </div>

            <StepBack link='/pages/manyDays/manyDays' />

            
                <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >
                    <p><b>Цена:</b> 4340₾ / 1440€ - за ВСЮ семью или коллектив  от 1 до 5 чел. включительно.</p>
                    <p>Для большего количества людей цена расчитывается индивидуально. Есть микроавтобусы, автобусы. </p>
                    <br/>

                    <p><b>описание каждой из экскурсий смотрите в разделе однодневных экскурсий. </b></p>

                    <LittleHeader title='День первый'/>
                    <p>
                    Тбилиси, подробно 
                    </p>
                    <br/>
                    <LittleHeader title='День второй'/>
                    <p>
                    Мцхета, подробно
                    </p>
                    <br/>

                    <LittleHeader title='День третий'/>
                    <p>
                    Кахетия (через всю Алазанскую долину к городу любви Сигнахи с дегустацией). Дегустация оплачивается на месте от 10 лари с человека в зависимости от места.
                    </p>
                    <br/>

                    <LittleHeader title='День четвертый'/>
                    <p>
                    Казбег (по военно грузинской дороге к Гергети среди суровых скал и горных рек).
                    </p>
                    <br/>

                    <LittleHeader title='День пятый'/>
                    <p>
                    Боржоми
                    </p>
                    <br/>

                    <LittleHeader title='День шестой'/>
                    <p>
                    Вардзия, Рабат
                    </p>
                    <br/>

                    <LittleHeader title='День седьмой'/>
                    <p>
                    Гори—Уплисцихе
                    </p>
                    <br/>
                    <p>
                    Описание каждой из экскурсий есть в разделе "<Link to='/pages/oneDayTours/oneDayTours' className='text-[#00A0B1] underline hover:text-[#FFD700]'>Однодневные туры</Link>".Возможно изменение маршрута по индивидуальному запросу.
                    </p>

                    
                </div>
            

            

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}
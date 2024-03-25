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
                <HeaderComponent title='Пятидневный Тур' />
            </div>

            <StepBack link='/pages/manyDays/manyDays' />

            
                <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >
                    <p><b>Тбилиси-Мцхета=пещеры Уплисцихе-Кахетия (с Сигнахи) скальный монастырь Давид Гареджи - -Боржоми -Вардзия - Рабат - Казбег (военно-грузинская дорога)</b></p>
                    <br/>
                    <p><b>Цена:</b> 1320$ до 5 Человек</p>
                    <p><b>Большее количество человек рассчитывается индивидуально.</b></p>
                    <br/>

                    <p><b>описание каждой из экскурсий смотрите в разделе однодневных экскурсий. </b></p>

                    <LittleHeader title='День первый'/>
                    <p>
                    Тбилиси, подробно 
                    </p>
                    <br/>

                    <LittleHeader title='День второй'/>
                    <p>
                    Мцхета+пещеры Уплисцихе 
                    </p>
                    <br/>

                    <LittleHeader title='День третий'/>
                    <p>
                    однодневный тур по Кахетии с дегустацией
                    </p>
                    <br/>

                    <LittleHeader title='День четвертый'/>
                    <p>
                    Боржоми
                    </p>
                    <br/>

                    <LittleHeader title='День пятый'/>
                    <p>
                    скальный город-монастырь Давид Гареджи
                    </p>
                    <br/>
                    <br/>

                    <LittleHeader title='День шестой'/>
                    <p>
                    Вардзия-крепость Рабат
                    </p>
                    <br/>
                    <br/>

                    <LittleHeader title='День седьмой'/>
                    <p>
                    по военно-грузинской дороге на Казбег 
                    </p>
                    <br/>
                    <br/>
                    <p>
                    Напоминаем, что на экскурсии присутствуете только Вы. <br/>
                    В цену включены услуги экскурсовода, водителя, транспортные расходы и дегустация в Кахетии.<br/>
                    Из дополнительных расходов подъем на спецтранспорте на гору Казбег около 70 лари (но можно подняться за полтора часа пешком по тропе лесной бесплатно) и входные билеты в крепость Уджарма, замок Греми, Рабат и Вардзия (три, пять и семь лари с человека)
                    </p>

                    
                </div>
            

            

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}
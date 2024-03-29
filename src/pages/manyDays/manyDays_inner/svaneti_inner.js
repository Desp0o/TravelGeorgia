import HeaderComponent from '../../../components/HeaderComponent'
import Navbar from '../../../components/navbar/Navbar'
import StepBack from '../../stepBack'
import Footer from '../../../components/Footer/Footer'
import LittleHeader from './ManyDaysHeader'

import cover from '../../../components/images/inner/svaneti.webp'

export default function TenDaysInner(){
    return(
        
        <div className="w-full">
            <Navbar homePage='*' />
            
            <div className='pt-[100px]'>
                <HeaderComponent title='Десятидневный Тур' />
            </div>

            <StepBack link='/pages/manyDays/manyDays' />

            
                <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >
                    <p><b>Тбилиси-Мцхета-Боржоми-по военно-грузинской дороге на Казбег-Кутаиси-Сванетия - Тбилиси</b></p>
                    <br/>
                    <p><b>Цена:</b> 2820$ до 5 Человек</p>
                    <br/>
                    <p className='text-[#D7235F]'><b>Для тех, кто хочет открыть для себя Грузию по максимуму, и при этом с комфортом! Здесь Вам и города, и горы, подъем на вершины на авто. Разнообразие природы, кухни и архитектуры. Подойдет всем членам активной любознательной семьи от мала до велика ! Предполагает ночевки в Тбилиси, Кахетии, Кутаиси, Сванетии. Подробности в описании. Экскурсию проводят лучшие из наших гидов.</b></p>
                    <br/><br/>

                    <LittleHeader title='День первый'/>
                    <p>
                    Мцхета и Старый Тбилиси 
                    </p>
                    <br/>

                    <LittleHeader title='День второй и третий'/>
                    <p>
                    посвящен Кахетии (программа с ориентацией на Ваши пожелания или на усмотрение гида) 

                    ориентация по цене за ночёвку 60-80 лари с чел. Жилье бронирует Вам гид по ходу маршрута. На третий день вечером возврат в Тбилиси. 
                    </p>
                    <br/>

                    <LittleHeader title='День четвертый'/>
                    <p>
                    леса и водопады Боржоми, с его древней архитектурой серными банями и, конечно же, знаменитой водой из источника 
                    </p>
                    <br/>

                    <LittleHeader title='День пятый'/>
                    <p>
                    военно-грузинской дороге к Казбег. Суровые виды скал, ущелий, горные реки,  и старинные стены замков, крепостей и церквей.
                    </p>
                    <br/>
                    <br/>

                    <LittleHeader title='День шестой'/>
                    <p>
                    выезд из Тбилиси в Сванетию (день в пути, и чтобы этот день не терять смотрим  Кутаиси по пути и там ночуете в Кутаиси, опять таки жильё на ночь ту же цену ориентируйтесь 60-80 лари с чел.) 
                    </p>
                    <br/>
                    <br/>

                    <LittleHeader title='День седьмой, восьмой, девятый'/>
                    <p>
                    полностью посвящен красотам  Сванетии (описание смотри в разделе "Походы в горы"). С учетом трех ночей в Сванетии и завтраком, и ужином , а также с учетом подъемов  на джипах на вершины Ушгули и Тетнурди 
                    </p>
                    <br/>
                    <br/>

                    <LittleHeader title=' десятый день'/>
                    <p>
                    возврат в Тбилиси
                    </p>
                    <br/>
                    <br/>
                    <p><b>Напоминаем, В Тбилиси  самостоятельно жильё бронируете, а в Кахетии, Кутаиси  и Сванетии гид Вам подбирает по маршруту. В Кутаиси и Кахетии  сами оплачиваете жилье, а в Сванетии оно уже включено в счёт с завтраком и ужином.В цену включены транспортные расходы, услуги водителя и экскурсовода. </b></p>

                    
                </div>
            

            

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}
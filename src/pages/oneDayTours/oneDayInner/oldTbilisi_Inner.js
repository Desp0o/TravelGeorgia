import HeaderComponent from '../../../components/HeaderComponent'
import Navbar from '../../../components/navbar/Navbar'
import StepBack from '../../stepBack'
import Uslugi from '../../uslugi'
import Footer from '../../../components/Footer/Footer'

import cover from '../../../components/images/inner/tbilisi.webp'
import Options from '../../options'

export default function OldTbilisi(){
    return(
        
        <div className="w-full">
            <Navbar homePage='*' />
            
            <div className='pt-[100px]'>
                <HeaderComponent title='Старый Тбилиси + Мцхета' />
            </div>

            <StepBack link='/pages/oneDayTours/oneDayTours' />

            
                <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]'>
                    <Options 
                        time='5'
                        price1='120'
                        price2='160'
                    />

                    <p className='my-[30px]'>В рамках одного дня ознакомитесь сразу с двумя столицами нашей страны!
                        Прекрасные горные виды, старинная архитектура (4, 6, 11 столетий!), возможность преклониться перед мощами святых. История и легенды двух городов, из которых берет свое начало сама Грузия. Чудесная возможность приобрести замечательные сувениры , украшения (грузинское минанкари) по цене, дешевле тбилисской, а также попробовать высококачественный кофе на песке, самую вкусную в Грузии чурчхелу из нескольких сортов винограда, домашнее вино и чачу.
                    </p>

                    <li>Выезжаем из Тбилиси от места вашего жительства во Мцхету (20-30 минут в пути).</li><br/>

                    <li>Первая остановка — женский монастырь Самтавро. Место, где жила и исцеляла людей Святая Нино, крестительница Грузии. Здесь можно преклониться перед мощами святых, если вы человек верующий, или просто насладиться чудесными видами и давними строениями (3 век — 10 век!).</li><br/>

                    <li>Посещение сувенирных улочек и главного храма Мцхеты — Светицховели (Второй Иерусалим). Храм таит в себе много загадок до сих пор не разрешенных учеными мира. Прогулка по улочкам Мцхеты с колоритной грузинской архитектурой, умиротворяющей природой.</li><br/>

                    <li>Возможность с собой увезти ароматные грузинские специи, соусы (ткемали) , чай.</li><br/>

                    <li>Подъем к Джвари (на авто), откуда с высоты птичьего полета открывается вид на поражающую своей красотой встречу двух рек — Куры и Арагвы, в свое время вдохновивших Лермонтова на «Мцыри».</li><br/>

                    <li>Возвращение в Тбилиси. Экскурсия по всему Старому Тбилиси от моста Мира и самой древней церкви столицы Анчисхати (6 век, рядом кукольный театр Резо Габриадзе) до серных бань.</li><br/>

                    <li>Возвращение к месту вашего жительства в Тбилиси.</li>
                </div>
            

            <Uslugi />

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}
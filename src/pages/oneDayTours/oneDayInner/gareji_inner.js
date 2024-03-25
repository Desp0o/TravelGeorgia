import HeaderComponent from '../../../components/HeaderComponent'
import Navbar from '../../../components/navbar/Navbar'
import StepBack from '../../stepBack'
import Uslugi from '../../uslugi'
import Footer from '../../../components/Footer/Footer'

import cover from '../../../components/images/inner/davitgareja.webp'
import Options from '../../options'

export default function GarejiOneDay(){
    return(
        
        <div className="w-full">
            <Navbar homePage='*' />
            
            <div className='pt-[100px]'>
                <HeaderComponent title='БОРЖОМИ' />
            </div>

            <StepBack link='/pages/oneDayTours/oneDayTours' />

            
                <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]'>
                    <Options 
                        time='8-9'
                        price1='185'
                        price2='220'
                    />

                    <p className='my-[30px]'>
                    &nbsp;&nbsp;В 9:00 выезжаем от Вашего отеля в Тбилиси. Впереди неблизкий путь к границе с Азербайджаном по дороге в пустыни. Скальный монастырский комплекс, расположен на территории двух стран: государственная граница между Грузией и Азербайджаном делит его на две части. 
                    </p>
                
                    <p>
                    Это впечатляющее по виду и истории место было построено в VI веке паломниками-ассирийцами, неоднократно подвергалось нашествиям турок, монголов и персов, но все же, благодаря самоотверженности грузинских воинов,  дожило до наших дней.. На территории комплекса около 20 монастырей и более 100 пещер-келий. Особенно интересна <b>лавра Святого Давида.</b>
                    </p><br/>

                    <p>
                    В монастырях сохранились <b>уникальные фрески</b>, десятки надписей на различных языках, есть даже нечто совершенно особенное: <b>тетралингва</b> – надпись, сделанная сразу на четырех языках.
                    </p><br/>

                    <p>
                    Обратите внимание, что эта экскурсия не подойдет тем, кому по каким либо причинам трудно ходить,  нельзя много  подниматься вверх по скалам.Если же таких ограничений у Вас нет - добро пожаловать! Один из наших гидов с радостью ознакомит Вас со всеми тайнами скального монастыря. 
                    </p>
                    
                    
                </div>
            

            <Uslugi />

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}
import HeaderComponent from '../../../components/HeaderComponent'
import Navbar from '../../../components/navbar/Navbar'
import StepBack from '../../stepBack'
import Uslugi from '../../uslugi'
import Footer from '../../../components/Footer/Footer'

import cover from '../../../components/images/inner/upliscixe.jpg'
import Options from '../../options'

export default function UpliscixeOneDay(){
    return(
        
        <div className="w-full">
            <Navbar homePage='*' />
            
            <div className='pt-[100px]'>
                <HeaderComponent title='УПЛИСЦИХЕ и Гори' />
            </div>

            <StepBack link='/pages/oneDayTours/oneDayTours' />

            
                <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]'>
                    <Options 
                        time='4-5'
                        price1='150'
                        price2='175'
                    />

                    <p className='my-[30px]'>
                    &nbsp;&nbsp;Древнейший город Уплисцихе был населен людьми вплоть до 1920 года! Это уникальное творение человеческих рук в вулканической основе поражает не только своей древностью, но и горными видами вокруг. 
                    </p>

                    <p>
                    Вас также ожидает знакомство с частью древнего города-крепости Гори. Для людей увлекающихся старинной архитектурой, историей будет интересно посетить крепость Горисцихе и красивейший этнографический музей города Гори.
                    </p><br/>

                    <li>Выезжаем из Тбилиси от места Вашего жительства.</li><br/>

                    <li>Первая остановка по желанию — музей Сталина (стоимость входного билета 15 лари с человека)</li><br/>

                    <li>Также по желанию посещение этнографического музея Гори (стоимость входного билета 10 лари с человека)</li><br/>

                    <li>Остановка около шокирующего на вид мемориала Восьми Рыцарям у подножия крепости Горисцихе. При желании пеший подьем в крепость. </li><br/>

                    <li>Посещение пещерного города Уплисцихе ( стоимость входного билета 7 лари с чел.) Вы не только полюбуетесь на красивые виды окрестностей, но и переживете эффект "путешествия во времени".</li><br/>

                    <li>Возвращение в Тбилиси</li><br/>

                    <p><span className='text-[#D7235F] font-[600]'>ВНИМАНИЕ!</span> Второй возможный  вариант данной экскурсии это Мцхета + пещеры Уплисцихе. Стоимость 130$ за всех</p>
                
                    <br/><p>
                        <b>Есть также и третий вариант, когда пещеры Уплисцихе комбинируем с посещением Боржоми (смотри объяснение ниже, в конце описания экскурсии по Боржоми) </b>
                        </p>    

                </div>
            

            <Uslugi />

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}
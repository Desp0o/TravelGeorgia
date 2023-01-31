import HeaderComponent from '../../components/HeaderComponent'
import Navbar from '../../components/navbar/Navbar'
import StepBack from '../stepBack'
import Footer from '../../components/Footer/Footer'

import cover from '../../components/images/inner/forGeorgiaInner.jpg'

export default function Services() {
    return (

        <div className="w-full">
            <Navbar homePage='*' />

            <div className='pt-[0px] xs:pt-[100px]'>
                <HeaderComponent title='Услуги' />
            </div>

            <StepBack link='/pages/allTours/allTours' />


            <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />

            <div className=' w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >
                <p>
                Все заказы принимаются только в письменном виде.  Билет для брони выписывается на основе переписки. Для семей, малых групп - без заочных  предоплат, оплата уже при встрече, наличными,на месте. 
                </p><br/>

                <b>
                <li>Встреча в аэропорту</li><br/>
                <li>Экскурсии одного дня </li><br/>
                <li>Многодневные туры</li><br/>
                <li>Активный отдых (рафтинг, параплан, катание на лошадях, квадроциклах)</li><br/>
                <li>Горные походы</li><br/>
                <li>Организация застолий с живой музыкой и танцами в нац. стиле (Кахетия)</li><br/>
                <li>Пикники на природе с раскрыванием секретов грузинской кухни, шашлыком-рыбалка с профессиональным инструктором-рыбаком</li><br/>
                </b>


                <p>
                Работаем как с одним человеком, семьями с детьми, так и большими группами. Транспорт - комфортабельные минивены, микроавтобусы, автобусы.
                </p><br/>

                <p>
                Наш профиль - ИНДИВИДУАЛЬНЫЕ экскурсии и туры, это значит, что в салоне авто, никто кроме Вас или Вашей семьи или Вашего коллектива присутствовать не будет. Прекрасный шанс ощутить себя королями тура.
                </p><br/>

                <p>
                Есть англоязычные гиды, но их услуги немного дороже указанных на сайте. 
                </p><br/>

                <p>
                Также занимаемся формированием и рассылкой посылок-сюрпризов и посылок собранных на заказ из Грузии со специями, сувенирами, украшениями, одеждой.  От 65 $. 
                </p>



            </div>




            <div className='pt-[100px]'>
                <Footer />
            </div>

        </div>
    )
}
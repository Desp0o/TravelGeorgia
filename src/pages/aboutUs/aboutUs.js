import HeaderComponent from '../../components/HeaderComponent'
import Navbar from '../../components/navbar/Navbar'
import SimpleGallery from '../fishing/SimpleGallery'
import Footer from '../../components/Footer/Footer'

import cover from '../../components/images/inner/aboutUs.jpg'
import ReviewSlider from './reviewSlider'

import guja from '../../components/images/guja.webp'
import zaza from '../../components/images/zaza.webp'
import tengo from '../../components/images/tengo.webp'
import shota from '../../components/images/shota.webp'


import car1 from '../../components/images/car/car1.jpg'
import car2 from '../../components/images/car/car2.jpg'
import car3 from '../../components/images/car/car3.jpg'
import car4 from '../../components/images/car/car4.jpg'
import car5 from '../../components/images/car/car5.jpg'
import car6 from '../../components/images/car/car6.jpg'
import car10 from '../../components/images/car/car10.jpg'
import car11 from '../../components/images/car/car11.jpg'
import car12 from '../../components/images/car/car12.jpg'
import car13 from '../../components/images/car/car13.jpg'


const tourOperators = [

    {
        id: 1,
        image: `${tengo}`,
        name: 'ТЭНГИЗ',
        description: "открыл для общественности новый комплекс в Давид Гареджи (пещерный монастырь), о чем была снята передача, к нему ездят на паломнические туры коллективы  монастырей и церквей из разных концов мира уже много лет.  Историк. Горняк. Ответит на все вопросы  подробно и увлекательно. Проведет в самые 'дикие' уголки Сакартвело, ознакомит  с древними разрушенными временем городами так, что они оживут перед вами. Откроет незабываемый  мир гор и потаённых троп. По настоящему увлеченный своей страной."
    },

    {
        id: 2,
        image: `${guja}`,
        name: 'ГУДЖА',
        description: "наша гордость. Настоящий путешественник знает, как важно, когда  проводник родился и вырос на той земле, о которой рассказывает. Но наши экскурсоводы примечательны не только этим! "
    },

    {
        id: 3,
        image: `${zaza}`,
        name: 'ЗАЗА',
        description: "знает все регионы Грузии, как и все наши гиды, но особенно влюблен в Кахетию, где живет, и о которой знает все. Имеет свой виноградник и сам делает вино.  Плюс ко всему, Заза художник. Подмечает все оттенки и краски окружающего мира, что делает его экскурсии особенными. "
    },

    {
        id: 4,
        image: `${shota}`,
        name: 'ШОТА',
        description: "много лет  знакомит гостей нашей страны с разными ее уголками,  хорошо владеет не только русским, но и английским языками, всегда внимателен к пожеланиям своих гостей."
    },
]

export default function AboutUs() {
    return (

        <div className="w-full">
            <Navbar homePage='*' />

            <div className='pt-[100px]'>
                <HeaderComponent title='О нас' />
            </div>


            <img src={cover} alt='cover' className='h-[400px] xs:h-[300px] mx-auto object-cover object-center rounded-[10px]' />

            <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px] pb-[80px]' >
                <p>
                    Организаторы и авторы маршрутов: супружеская пара из Тбилиси Микаэль (грузин, 1969 г. рожд.) и Юлия (украинка с грузинским гражданством, 1980 г. рожд.) Деспоташвили. А начиналось все с творчества. Микаэль мастер по художественному выпиливанию (кстати, у него можно приобрести шикарные часы и шкатулки, в том числе музыкальные, портреты из дерева ручной работы, заказав их до приезда в Грузию по себестоимости). Работы Михаэля Деспоташвили хранятся в музеях Польши, Украины, частных коллекциях по всему миру. Юлия, автор, пишет стихи, прозу, песни на ее слова  можно без труда найти в интернете.  Вот на этой почве к нам и начали приезжать друзья по интернету из разных уголков мира, а мы, само собой, знакомили их с культурой страны, кулинарией (Микаэль замечательно готовит). Сработало "сарафанное радио",  начали по совету родных и друзей приезжать к нам уже незнакомые люди, специально для того, чтобы узнать нашу страну. Мы разработали свои маршруты, позволяющие в короткий срок увидеть действительно лучшее. Нашу пару замечали, потому что всегда ходили об руку друг с другом, из-за инвалидности по зрению у Юлии. В результате познакомились с отзывчивыми,  интересными и полезными людьми совершенно естественным образом.  Да ещё и профессионалами своего дела. Это не только экскурсоводы, но и  владельцы ресторанов, музеев, инструктора по рафтингу, кулинары, владельцы автобусов, квадроциклов, лошадей  и проч.  Спрос на наши экскурсии в какой то момент перерос наши  физические возможности, тем более, что Юлия, имея инвалидность 1 группы (пигментная дистрофия сетчаки к сожалению, неизлечима, и потерязрения прогресирует),  не могла посвятить себя полностью подобной деятельности, и люди  просили порекомендовать кого то, кому бы мы доверяли как себе. Так, постепенно,  образовалось наше дружеское объединение. Обратите внимание, что это не туристическое агентство, а люди действительно связанные годами дружбы и взаимовыручки, профессионалы своего дела, завоевавшие отличную репутацию не одним годом работы, как среди гостей, так и среди коллег, а если брать наших знакомых из Кахетии, ансамбль песен и танцев завоевавший сердца многих стран, и часто бывающих за границей с выступлениями, и задерживающиеся там на бис, то мы особенно благодарны судьбе, что наши пути пересеклись, и мы стали друзьями. Мы отвечаем за качество и комфорт Вашего дня, обеспечиваем комфортабельным технически исправным транспортом. Ведь цель нашей команды увлечь Грузией, открыть для Вас ее новые страницы, зародить желание узнать еще больше и обязательно возвратиться!  И Вы возвращаетесь, и не единожды, а значит путь верен. Добра!
                </p>
            </div>


            <HeaderComponent title='Наши гиды — наша гордость. ' />
            <p className='w-[700px] xs:w-auto text-center mx-auto font-[600] pb-[30px] xs:pl-[20px] pr-[20px]'>Настоящий путешественник знает, как важно, когда  проводник родился и вырос на той земле, о которой рассказывает. Но наши экскурсоводы примечательны не только этим!</p>
            <div className='pt-[30px] relative w-full flex flex-col gap-[50px] justify-center items-center xs:pl-[20px] xs:pr-[20px] pb-[100px] xs:pb-[50px]'>

                {tourOperators.map((person) => {
                    return (
                        <div className='relative flex gap-[30px] items-start' key={person.id}>
                            <img className='xs:sticky top-[100px] w-[250px] xs:w-[150px] rounded-[10px]' src={person.image} alt='tour operator' />

                            <div className=''>
                                <h3 className='font-[700] text-[18px]'>{person.name}</h3>
                                <p className='w-[600px] xs:w-auto text-[14px]'>{person.description}</p>
                            </div>

                        </div>
                    )
                })}




            </div>


            <HeaderComponent title='НАШ ТРАНСПОРТ' />
            <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px] pb-[80px]'>
                <p>Ниже представлены фото далеко не всех транспортных средств, которыми мы располагаем. Потому есть возможность принять любое количество человек.</p>
                <p>У нас Вы также можете заказать  авто и водителя  без сопровождения гида. При этом водитель прекрасно сориентирует Вас на местности, что и где посмотреть,  порекомендует места для питания, а при заказе эконом-услуги "водитель-гид" ещё и расскажет базовую информацию о местах посещения. </p>
                <p>Осуществляем трансферы по всей Грузии. Цена зависит от расстояния, вида транспорта, что в свою очередь зависит от  количества человек.</p>
                <p>Обращайтесь за указанными на сайте контактами.</p>
            </div>

            <div className="flex w-full justify-center  pl-[120px] xs:pl-[20px] pr-[120px] xs:pr-[20px]">
                <SimpleGallery
                    galleryID="my-test-gallery"
                    images={[
                        {
                            largeURL:
                                `${car1}`,
                            thumbnailURL:
                                `${car1}`,
                            width: 541,
                            height: 406,
                        },
                        {
                            largeURL:
                            `${car2}`,
                            thumbnailURL:
                            `${car2}`,
                            width: 406,
                            height: 406,
                        },
                        {
                            largeURL:
                            `${car3}`,
                            thumbnailURL:
                            `${car3}`,
                            width: 541,
                            height: 362,
                        },
                        {
                            largeURL:
                            `${car4}`,
                            thumbnailURL:
                            `${car4}`,
                            width: 541,
                            height: 407,
                        },
                        {
                            largeURL:
                            `${car5}`,
                            thumbnailURL:
                            `${car5}`,
                            width: 541,
                            height: 407,
                        },
                        {
                            largeURL:
                            `${car6}`,
                            thumbnailURL:
                            `${car6}`,
                            width: 535,
                            height: 401,
                        },
                        {
                            largeURL:
                            `${car10}`,
                            thumbnailURL:
                            `${car10}`,
                            width: 535,
                            height: 401,
                        },
                        {
                            largeURL:
                            `${car11}`,
                            thumbnailURL:
                            `${car11}`,
                            width: 540,
                            height: 405,
                        },
                        {
                            largeURL:
                            `${car12}`,
                            thumbnailURL:
                            `${car12}`,
                            width: 230,
                            height: 407,
                        },
                        {
                            largeURL:
                            `${car13}`,
                            thumbnailURL:
                            `${car13}`,
                            width: 306,
                            height: 407,
                        },
                    ]}
                />
                </div>

            <HeaderComponent title='ОТЗЫВЫ О НАС' />
            <ReviewSlider />

            <div className='pt-[100px]'>
                <Footer />
            </div>

        </div>
    )
}
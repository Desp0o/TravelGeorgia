import HeaderComponent from '../../../components/HeaderComponent'
import Navbar from '../../../components/navbar/Navbar'
import StepBack from '../../stepBack'
import Footer from '../../../components/Footer/Footer'
import LittleHeader from './ManyDaysHeader'

import cover from '../../../components/images/inner/kazbegi.jpg'

export default function FiveDaysInner(){
    return(
        
        <div className="w-full">
            <Navbar homePage='*' />
            
            <div className='pt-[100px]'>
                <HeaderComponent title='Пятидневный Тур' />
            </div>

            <StepBack link='/pages/manyDays/manyDays' />

            
                <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >
                    <p><b>Тбилиси - Мцхета - Гори-пещеры Уплисцихе - Кахетия (с Сигнахи) - Казбег (или Боржоми)</b></p>
                    <br/>
                    <p><b>Цена:</b> 680$ за всю семью, от 1 до 4 Человек</p>
                    <p><b>Цена:</b> 960$ от 5 до 6 Человек </p>
                    <br/>

                    <LittleHeader title='День первый'/>
                    <p>
                    &nbsp;&nbsp;Забираем Вас от места жительства в Тбилиси и отправляемся открывать для себя столицу Грузии во всей ее красоте и многообразии. Экскурсия проводится комбинированно на авто и пешком, что сбережет нам силы и отличное настроение. Мы посмотрит ВЕСЬ Тбилиси от его старых, дышащих колоритом, узких улочек до современных улиц. Среди достопримечательностей, конечно же и такие всем известные места как кукольный театр Резо Габриадзе, древнейшяя церковь Анчисхати, мост Мира, скала Метехи, крепость Нарикала, гора Мтацминда, улочка Жана Шардени, парк Рике, дворец Президента, проспект Шота Руставели. Сухой Мост, главный кафедральный собор Самеба (105 м высотой), Авлабари… Но завезем Вас и туда, куда не каждый добирается — Тбилисское море с его незабываемым монументом на горе.<br/>
                    &nbsp;&nbsp;Продолжительность экскурсии зависит только от Вашего личного темпа осмотра, времени потраченного на фотографирование и т. п. Все наши экскурсии индивидуальны, на них присутствуете только Вы и Ваша семья или коллектив.
                    </p>
                    <br/>

                    <LittleHeader title='День второй'/>
                    <p>
                    &nbsp;&nbsp;Знакомимся с первой столицей Грузии Мцхетой (Самтавро-Светицховели-Джвари), при желании покупаем лучшие сувениры, минанкари (украшения из перегородочной эмали), пьем замечательный кофе на песке, пробуем домашнюю чачу и угощаемся мягкой свежей чурчхелой из нескольких сортов винограда, приобретаем умопомрачительно ароматные специи. И все это в соединении с древней архитектурой и глубокой духовностью пропитывающие эти святые места, а также чудесными горными видами.<br/>
                    &nbsp;&nbsp;Эта экскурсия занимает в среднем часа три, и даст Вам возможность после самостоятельно погулять и насладиться Тбилиси, ведь благодаря первому дню Вы уже будете знать, куда именно зовет Вас душа и набраться сил для завтрашнего насыщенного тура по житнице Грузии — Кахетии. <br/>
                    </p>
                    <br/>

                    <LittleHeader title='День третий'/>
                    <p>
                    &nbsp;&nbsp;Отдохнув после первых впечатлений от двух столиц, самостоятельно проведя вечер в Тбилиси по рекомендации сопровождающего гида, с утра следующего дня прямо от Вашего отеля отправляемся в новое путешествие по Алазанской долине — Кахетии, славящуюся прежде всего своими виноградникам и вином. Проезжаем крепость Уджарма (3 столетие!), поднимаемся на Гомборский перевал (1620 м над уровнем моря!) , спускаемся в г. Телави (вспоминаем «Мимино»), завтракаем и продолаем путь уже непосредственно по Алазанской долине: замок Греми, в сезон — монастырь Некреси, винный завод «Киндзмараули» (16 столетие, дегустация вин входит в цену если Вас не больше пяти человек, экскурсия по самому заводу, винный магазин с выгодными ценами и высшим качеством продукции от коньяка до вин разной марки). А после город любви Сигнахи и женский монастырь Бодбе. Жемчужины Кахетии. С головокружительными видами с горы и чудесной архитектурой разных времен. Кухня же, которую Вы попробуете в Сигнахи, настоящая домашняя грузинская не будет иметь аналогов больше ни в какой стороне Грузии. Мы не доезжаем до границы с Азербайджаном только 70 км и возвращаемся в Тбилиси, чтобы на следующий день отправиться совершенно в другую сторону!
                    </p>
                    <br/>

                    <LittleHeader title='День четвертый'/>
                    <p>
                    &nbsp;&nbsp;Сегодня нас ждет путешествие во времени в пещерах Уплисцихе (1 столетие до нашей эры!) с их красивыми видами на природу вокруг, и знакомство с городом Гори, где родился Сталин. В городе Гори Вы ознакомитесь с крепостью Горисцихе, монументом Восьми Рыцарям, проедите по его улочкам, будто застывших во времена правления Иосифа Сталина, при желании посетите музей Сталина или не менее интерестный этнографический музей. После вчерашнего насыщенного дня сегодняшний спланирован щадяще. Эта экскурсия занимает около четырех-пяти часов. Опять таки время в Ваших руках!
                    </p>
                    <br/>

                    <LittleHeader title='День пятый'/>
                    <p>
                    &nbsp;&nbsp;Пятый день опять проведем насыщенно. В сезон рекомендуем отправиться по военно-грузинской дороге к знаменитой горе Казбег, или же направление более спокойное — Боржоми (на выбор). Оба края заслуживают внимания! Боржоми доступно для путешествий круглый год. Оба занимают полный день.
                    </p>
                    <br/>
                    <br/>

                    <LittleHeader title='Экскурсия по Боржоми'/>
                    <p>
                    &nbsp;&nbsp;позволит окунуться в дивный мир природы: шум водопадов, горных рек, пение птиц. Хороший выбор для тех, кто хочет поправить свое здоровье, ведь именно в Боржоми вы сможете не только попить знаменитой минеральной воды из самого источника, но и взять ее с собой, сколько захотите, абсолютно бесплатно. А какое варенье здесь продают! Из шишек, из грецких орехов, из хвойной пыльцы и мандарин! И каждое из них имеет уникальные лечебные свойства, экологически чистые и умопомрачительно вкусные! Вы сможете перед покупкой продегустировать любое, выбрав по потребностям и вкусу.
                    <br/>
                    <br/>
                    Наш гид откроет все тайны такого знаменитого курорта. 
Прогуляемся по городскому парку Боржоми, Вы узнаете его уникальную историю и легенды. Если с вами будут дети развлекательные аттракционы и площадки, размещенные на территории парка, принесут им много радости и впечатлений. На канатке, или на авто (на Ваш выбор) мы поднимемся к церкви Серафима Саровского, потом посетим монастырь. Даже если вы не верующий вас поразит красота природы и умиротворяющие виды этой лесистой местности. не говоря уже об истории в которую мы вас посвятим. Следующим пунктом нашей остановки будет церковь Святого Георгия и женский монастырь рядом с ним, откуда открывается вид на Боржомское ущелье и склоны гор, где течет горная река Боржомула. Также мы посмотрим Эйфелевый мост, вы узнаете каким чудесным образом он попал в Грузию. Через этот мост проезжает знаменитый поезд «Кукушка» (Боржоми-Бакуриани). Нельзя обойти храм Божьей Матери, 12 века. Архитектурное решение. фрески и природа не смогут оставить равнодушными никого. Зеленый монастырь тоже приоткроет перед вами врата суровой истории и свои завораживающие виды
                    </p>
                    <br/>
                    <br/>

                    <LittleHeader title='Военно-грузинская дорога к Казбег'/>
                    <p>
                    &nbsp;&nbsp;безопасна ориентировочно с мая до середины октября. При желании Вы, конечно же, можете в сезон взять обе экскурсии, и Боржоми, и Казбег, превратив пятидневный тур в шестидневный. Для этого нужно будет доплатить к основной цене 140 евро.
                    </p>
                    <br/>
                    <li>Первая остановка — старинная крепость Ананури (16 столетие) и прекрасное Жинвальское водохранилище (невероятной красоты бирюзовая гладь среди лесистых гор. Летом можно искупаться!)</li>
                    <br/>
                    <li>Покоряем на автомобиле горы и по пути делаем остановки по требованию для фотографирования. А места — обворожительные! Чего только стоит встреча Черной и Белой Арагви или сход горных потоков по минералах, дороги вдоль обрывов и головокружительные виды скал и ущелий</li>
                    <br/>
                    <li>Остановка на смотровой площадке перевала Казбег (арка Дружбы). Возможность приобрести сувениры, настоящий горный мед нескольких видов.</li>
                    <br/>
                    <li>В Дарьяльском ущелье любуемся километровыми скалами и обителью монаха-отшельника.</li>
                    <br/>
                    <li>Проезжаем Гудаури, Степанцминда. По желанию — остановка.</li>
                    <br/>
                    <li>Конечный пункт — высокогорная церковь Святой Троицы (Самеба) в Гергети. 2170 м над уровнем моря. С интересной историей и легендами. Почитаемыми святынями, природным источником святой воды. Возможность подняться на верх как на спецтранспорте (дополнительная оплата 25 $), так и пешком (два пути — длинный и короткий).</li>
                    <br/>
                    <br/><br/>
                    <p className='font-[700] underline'>Обратите внимание! ВАРИАНТ № 2 ПЯТИ ДНЕЙ ПО ГРУЗИИ</p>
                    <p className='font-[500] text-[#D7235F]'>
                    Рекомендуемый «летний» вариант пятидневного тура (актуален с мая по октябрь):
                    </p>
                    <br/>
                    
                    <p><b>Цена:</b> 820$ за всю семью, от 1 до 4 Человек</p>
                    <p><b>Цена:</b> 990$ от 5 до 6 Человек </p>
                    <br/>
                    <LittleHeader title='день первый'/>
                    <p>Мцхета+Старый Тбилиси (5 часов)</p>

                    <LittleHeader title='день второй'/>
                    <p>Кахетия (полный день)</p>

                    <LittleHeader title='день третий'/>
                    <p>Гори-Уплисцихе (5 часов)</p>

                    <LittleHeader title='день четвертый'/>
                    <p>Казбег, по военно-грузинской дороге. (полный день)</p>

                    <LittleHeader title='день пятый'/>
                    <p>Боржоми (полный день)</p>
                </div>
            

            

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}
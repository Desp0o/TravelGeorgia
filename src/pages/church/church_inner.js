import HeaderComponent from '../../components/HeaderComponent'
import Navbar from '../../components/navbar/Navbar'
import StepBack from '../stepBack'
import Footer from '../../components/Footer/Footer'
import LittleHeader from '../manyDays/manyDays_inner/ManyDaysHeader'

import cover from '../../components/images/inner/churchInner.webp'

export default function ChurchInner() {
    return (

        <div className="w-full">
            <Navbar homePage='*' />

            <div className='pt-[100px]'>
                <HeaderComponent title='Паломнические туры' />
            </div>

            <StepBack link='/pages/manyDays/manyDays' />


            <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />

            <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >

                <br />
                <p><b>Цена:</b> 1225$ за всю семью, от 1 до 4 Человек</p>
                <br />

                <p>
                    Грузия одна из первых приняла православное христианство. Ещё в третьем веке Святая Нино вошла сюда с крестом из виноградной лозы, и после того, как царь Мириам и царица Нана поддержали принесенную ею веру, Грузия и по сей день особенно трепетно относится к своей религии. Нашу страну называют "монастырь под открытым небом", так как куда бы не ступила Ваша нога, Вы, с большой вероятностью, попадете на территорию монастырей, древних церквей. Со смелостью можно сказать, что любой из представленных на сайте туров и экскурсий, без исключений (!) может носить углубленный паломнический характер, и если Вы сделаете заявку именно на тур паломнический, для Вас будет сделан акцент на истории христианской веры нашими лучшими гидами.

                    Вы также можете высказать конкретные пожелания по посещению тех или иных мест, и они будут включены в маршрут. В одном Тбилиси столько церквей, что все их  втиснуть в один день осмотра просто невозможно, а так как наши экскурсии индивидуальные, на них присутствуете только Вы и Ваш коллектив или семья, мы с радостью подстроимся под Ваши личные интересы.
                    Ниже пример рекомендуемого нами паломнического тура на ПЯТЬ дней, который может быть сокращен до ТРЕХ дней или дополнен любым количеством дней из раздела однодневных экскурсий.
                </p><br />

                <LittleHeader title='День первый' />
                <p>
                    <b>СВЯТЫМИ МЕСТАМИ ТБИЛИСИ</b>
                </p>
                <p>
                    Здесь Вас, помимо колорита Старого Тбилиси,  ждёт древняя церковь Анчисхати, 6 ст., Метехи, 12 ст.,  возвышающаяся на скале, с красивым видом на столицу, крепость Нарикала, с  церковью Святого Георгия, пантеон на горе Мтацминда,  церковь Кашвети (19 век), и, конечно же, главный кафедральный собор Самеба (святой Троицы). А если останутся силы, время и желания любая другая церковь.
                    Продолжительность экскурсии зависит только от Вашего личного темпа осмотра, времени потраченного на осмотр,  фотографирование, обед и т. п.
                </p>
                <br />

                <LittleHeader title='День второй' />
                <p>
                    <b>МЦХЕТА - ВТОРОЙ ИЕРУСАЛИМ</b>
                </p>
                <p>
                    Мы посетим с Вами  женский монастырь Самтавро, на территории которого жила в шалаше и исцеляла Святая Нино. Куст ежевики, около которого она жила до сих пор растет, и круглый год его листья не опадают. На месте шалаша Нино построена часовня Святого Георгия. В самой церкви Самтавро мощи Святого Габриэля Ургебадзе, место упокоения царской четы Мариам и Нана.
                    Внутри церкви находятся и много других реликвий, о которых расскажут наши гиды.
                    Светицховели - кафедральный собор 12 апостолов, 11 века. Внутри него хранится хитон Господень, под животворящим столбом.
                    Церковь Джвари (в переводе - "крест"), откроет для Вас красивый вид на Мцхету с высоты птичьего полета, церковь 6 века, построена на том месте, где в свое время Нино установила крест.
                    Также посещаем монастырский комплекс Шио-Мгвиме, второй половины 6 ст.
                    Напоминаю, что каждый день тура сопровождается красивыми видами, вкусной кухней и возможностью приобрести сувениры, в том числе религиозного характера.
                </p>
                <br />

                <LittleHeader title='День третий' />
                <p>
                    <b>КАХЕТИЯ</b><br />
                    Только этот день можно разбить на три дня, превратив пятидневный тур в семидневный, или заказать только Кахетию на три дня. Так как здесь есть три интересных маршрута.
                </p>
                <p>
                    <b>Маршрут 1</b><br />
                    крепость Уджарма (3 столетие!), поднимаемся на Гомборский перевал (1620 м над уровнем моря!) , новый Шуамта, 16 век, старый монастырь Шуамта, 7 века, монастырь Икалто, 6 века, монастырский комплекс Алаверди, 6 век. Все это в прекрасной Алазанской долине, славящейся своими виноградниками.
                    <br />
                    <b>Маршрут 2</b><br />
                    Уджарма, 3 ст., г. Телави,  замок Греми с церковью Архангела Михаила и Гавриила, 16 ст., и видом на Алазанскую долину с высоты, мужской монастырь Некреси, 4 век,  по желанию - винный завод «Киндзмараули» (16 столетие, дегустация вин входит в цену если Вас не больше пяти человек, экскурсия по самому заводу, винный магазин с выгодными ценами и высшим качеством продукции от коньяка до вин разной марки). А после город любви Сигнахи и женский монастырь Бодбе, где покоится Святая Нино.
                    <br />
                    <b>Маршрут 3</b><br />
                    Ниноцминда, женский монастырь, 11 век, на месте где остановилась и проповедовала Святая Нино.
                    Мужской монастырь Давид Гареджи,  6 век, 120 км от Тбилиси, по кахетинской пустыне.

                </p>
                <br />

                <LittleHeader title='День четвертый' />
                <p>
                    <b>БОРЖОМИ</b><br />
                    Среди красивейших лесов Боржоми, вокруг знаменитого источника с минеральной водой раскинулись церкви и монастыри будто созданные для познания Бога и своей Души. Женский монастырь Серафима Саровского, женский монастырь Святого Георгия,  мужской монастырь Тимотисубани, 12 век. И, при успевании по времени, можно проведать Зелёный монастырь, 9 века.
                </p>
                <br />

                <LittleHeader title='День пятый' />
                <p>
                    <b>КАЗБЕГ</b><br />
                    По военно-грузинской дороге отправимся к церкви Святой Троицы, на Гергети, 2200 м над уровнем моря. По пути проведав комплекс Ананури, На территории цитадели расположены башня с пирамидальной крышей, существовавшая ещё до постройки крепости, храм-усыпальница местных эриставов Гвтаеба (XVI—XVII века), храм Успения (1689). Сохранились следы бассейна и бани. На территории нижнего укрепления сохранилась только однонефная церковь (XVI—XVII века) Мкурнали с колокольней.
                    <br /><b>ВНИМАНИЕ!</b>
                    Зимой этот день, из за закрытой военно-грузинской дороги, заменяем посещением Цилкани, мужского монастыря 6 века, в Мурманской долине. Также посещаем деревню Канда, где расположен мужской монастырь 13 ассирийских отцов, где псалмы поют на арамейском языке. Самтависи, женский монастырь, фундамент 5 века, постройка 10 века.

                </p>
                <br />
                <br />


            </div>




            <div className='pt-[100px]'>
                <Footer />
            </div>

        </div>
    )
}
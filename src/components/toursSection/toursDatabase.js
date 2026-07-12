import manyDaysTours from '../images/manyDaysTours.webp'
import tbilisi from '../images/oldTbilisi.webp'
import tbilisi2 from '../images/forGeorgia.webp'
import fishing from '../images/fishing.webp'
import rafting from '../images/rafting.webp'
import hiking from '../images/hiking.webp'
import church from  '../images/church.webp'
import rtveli from '../images/rtveli.webp'


export const TourDataBase =  [
    {
    id:1,
    cover: `${tbilisi}`,
    title:"Одного дня",
    description:"Сделайте свой день незабываемым, отправившись в места, не принадлежащие времени. Старинная грузинская архитектура, поражающая красотой видов природа, интересные легенды и история, вкусная кухня и вино ожидают Вас на любом выбранном маршруте!",
    redirect: '/pages/oneDayTours/oneDayTours',
    from:'от',
    price:'120$',
    noFixedPrice:'цена договорная'
    },
    {
    id:2,
    cover: `${manyDaysTours}`,
    title:"Многодневные Туры",
    description:"Три, пять, семь, десять дней в разные стороны Сакартвело с комфортом,  каждодневными выездами  от  единого Вашего  места  жительства. И никакой спешки или усталости, составляя маршрут мы учли желание отдохнуть и увидеть побольше. Индивидуальный подход. Для любой возрастной категории.",
    redirect: '/pages/manyDays/manyDays',
    from:'от',
    price:"180$",
    noFixedPrice:'цена договорная'
    },
    {
    id:3,
    cover: `${fishing}`,
    title:"Рыбалка",
    description:"'Рыбный день' среди красот Сакартвело. Горные реки, озера, водохранилища, и возможность устроить пикник. Опытный инструктор предложит не только свои знания, советы, но и необходимое снаряжение. Круглый год.",
    redirect: '/pages/fishing/fishing',
    from:'',
    price:"",
    noFixedPrice:'цена договорная'
    },
    {
    id:4,
    cover: `${rafting}`,
    title:"Рафтинг",
    description:"Активный отдых с профессиональным инструктором. Два маршрута на выбор. Для детей и взрослых, новичков и опытных. Сезон  принятия со 2 мая по 20 сентября. Возможность объеденить с экскурсией по военно-грузинской дороге.",
    redirect: '/pages/rafting/rafting_inner',
    from:'',
    price:"",
    noFixedPrice:'цена договорная'
    },
    {
    id:5,
    cover: `${hiking}`,
    title:"Походы в Горы",
    description:"Вместе с опытным проводником,  буквально живущим в горах,  посетите  уголки Грузии от красоты природы которых сердце замирает.Маршрут можете предложить сами, а можете положиться на совет инструктора,  ориентирующегося на Ваши пожелания. Самые популярные - Сванетия, Хэвсурети...",
    redirect: '/pages/hiking/hiking_inner',
    from:'',
    price:"",
    noFixedPrice:'цена договорная'
    },
    {
    id:6,
    cover: `${church}`,
    title:"Для Паломников",
    description:"Сакартвело — монастырь под открытым небом. Христианство пришло в Грузию в 3 столетии.  Каждая экскурсия — это посещение святых мест. Выбирайте любой тур, или предложите свой, — за нами компетентный в вопросах религии профессиональный экскурсовод,  возможность преклониться перед мощами святых.",
    redirect: '/pages/church/church_inner',
    from:'',
    price:"",
    noFixedPrice:'цена договорная'
    },
    {
    id:7,
    cover: `${rtveli}`,
    title:"Праздник в Грузии",
    description:"Профессиональные танцоры, незабываемое грузинское пение, музыка только для Вас. Колоритный тамада,​ лучшие блюда традиционной домашней кухни,​ вино, чача.И все это среди горной красоты Кахетии, родины вина из квеври.",
    redirect: '/pages/celebration/celebration',
    from:'',
    price:"",
    noFixedPrice:'цена договорная'
    }
]
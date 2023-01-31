import manyDaysTours from '../images/manyDaysTours.png'
import tbilisi from '../images/oldTbilisi.png'
import fishing from '../images/fishing.png'
import rafting from '../images/rafting.png'
import hiking from '../images/hiking.png'
import church from  '../images/church.png'
import rtveli from '../images/rtveli.png'


export const TourDataBase =  [
    {
    id:1,
    cover: `${tbilisi}`,
    title:"Одного дня",
    description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s is simply dummy text of the printing and typesetting industry. industry industry industry",
    redirect: '/pages/oneDayTours/oneDayTours',
    price:'120$'
    },
    {
    id:2,
    cover: `${manyDaysTours}`,
    title:"Многодневные Туры",
    description:"Три, пять, семь, десять дней в разные стороны Сакартвело с комфортом,  каждодневными выездами  от  единого Вашего  места  жительства. И никакой спешки или усталости, составляя маршрут мы учли желание отдохнуть и увидеть побольше. Индивидуальный подход. Для любой возрастной категории.",
    redirect: '/pages/manyDays/manyDays',
    price:"180$"
    },
    {
    id:3,
    cover: `${fishing}`,
    title:"Рыбалка",
    description:"'Рыбный день' среди красот Сакартвело. Горные реки, озера, водохранилища, и возможность устроить пикник. Опытный инструктор предложит не только свои знания, советы, но и необходимое снаряжение. Круглый год.",
    redirect: '/pages/fishing/fishing',
    price:"125$"
    },
    {
    id:4,
    cover: `${rafting}`,
    title:"Рафтинг",
    description:"Активный отдых с профессиональным инструктором. Два маршрута на выбор. Для детей и взрослых, новичков и опытных. Сезон  принятия со 2 мая по 20 сентября. Возможность объеденить с экскурсией по военно-грузинской дороге.",
    redirect: '/pages/rafting/rafting_inner',
    price:"40$"
    },
    {
    id:5,
    cover: `${hiking}`,
    title:"Походы в Горы",
    description:"Вместе с опытным проводником,  буквально живущим в горах,  посетите  уголки Грузии от красоты природы которых сердце замирает.Маршрут можете предложить сами, а можете положиться на совет инструктора,  ориентирующегося на Ваши пожелания. Самые популярные - Сванетия, Хэвсурети...",
    redirect: '',
    price:"750$"
    },
    {
    id:6,
    cover: `${church}`,
    title:"Для Паломников",
    description:"Сакартвело — монастырь под открытым небом. Христианство пришло в Грузию в 3 столетии.  Каждая экскурсия — это посещение святых мест. Выбирайте любой тур, или предложите свой, — за нами компетентный в вопросах религии профессиональный экскурсовод,  возможность преклониться перед мощами святых.",
    redirect: '',
    price:"1125$"
    },
    {
    id:7,
    cover: `${rtveli}`,
    title:"Праздник в Грузии",
    description:"Профессиональные танцоры, незабываемое грузинское пение, музыка только для Вас. Колоритный тамада,​ лучшие блюда традиционной домашней кухни,​ вино, чача.И все это среди горной красоты Кахетии, родины вина из квеври.",
    redirect: '',
    price:"310$"
    }
]
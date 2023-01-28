import manyDaysTours from '../images/manyDaysTours.webp'
import tbilisi from '../images/tbilisi.webp'
import fishing from '../images/fishing.webp'
import rafting from '../images/rafting.webp'
import hiking from '../images/hiking.avif'
import church from  '../images/church.webp'
import rtveli from '../images/rtveli.webp'


export const TourDataBase =  [
    {
    id:1,
    cover: `${tbilisi}`,
    title:"Одного дня",
    description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price:'120$'
    },
    {
    id:2,
    cover: `${manyDaysTours}`,
    title:"Многодневные Туры",
    description:"",
    price:"180$"
    },
    {
    id:3,
    cover: `${fishing}`,
    title:"Рыбалка",
    description:"",
    price:"125$"
    },
    {
    id:4,
    cover: `${rafting}`,
    title:"Рафтинг",
    description:"",
    price:"40$"
    },
    {
    id:5,
    cover: `${hiking}`,
    title:"Походы в Горы",
    description:"",
    price:"750$"
    },
    {
    id:6,
    cover: `${church}`,
    title:"Для Паломников",
    description:"",
    price:"1125$"
    },
    {
    id:7,
    cover: `${rtveli}`,
    title:"Праздник в Грузии",
    description:"",
    price:"310$"
    }
]
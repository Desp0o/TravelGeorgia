import { Link } from 'react-router-dom'
import tbilisi from '../images/tbilisi.webp'
import flights from '../images/Flight.png'
import ukr from '../images/icons/ukr.png'

export default function FirstScreen(){
    return(
        <div className="fisrtsection flex w-full pt-[100px] xs:pt-[100px] pb-[55px] xs:flex-col xs:gap-[50px] box-border overflow-hidden xl:justify-center">
            <div className="relative w-[600px] xs:w-full pt-[70px] pl-[140px] xs:pl-[40px] pr-[60px] flex xs:h-[310px]">
                <img  src={flights} alt='flights' className='absolute w-[329px] xs:w-[250px] top-0'/>
                <img  src={ukr} alt='flights' className='absolute w-[50px] xs:w-[50px] top-[30px] left-[370px] xs:top-[10px] xs:left-[200px]'/>

                <svg className="absolute rotate-45 w-[329px] h-[420px] xs:w-[250px] xs:h-[310px] xs:translate-x-[-50%] xs:left-[50%]" viewBox="0 0 509 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M422.532 68.196C391.035 24.3898 349.711 -2.42238 296.681 0.806346C222.818 5.30335 160.936 29.8867 112.066 73.197C61.5193 117.994 24.8943 182.826 3.33521 266.189C-16.0326 341.078 68.2447 422.431 171.312 485.57C293.894 560.663 448.648 614.358 481.634 596.406C494.444 589.434 498.712 554.096 504.077 509.677L504.088 509.58C518.4 391.089 500.843 177.114 422.532 68.196Z" fill="#E0F9FC" fillOpacity="1"/>
                </svg>

                <svg className="absolute w-[329px] h-[420px] xs:w-[250px] xs:h-[310px] xs:translate-x-[-50%] xs:left-[50%]" viewBox="0 0 509 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M422.532 68.196C391.035 24.3898 349.711 -2.42238 296.681 0.806346C222.818 5.30335 160.936 29.8867 112.066 73.197C61.5193 117.994 24.8943 182.826 3.33521 266.189C-16.0326 341.078 68.2447 422.431 171.312 485.57C293.894 560.663 448.648 614.358 481.634 596.406C494.444 589.434 498.712 554.096 504.077 509.677L504.088 509.58C518.4 391.089 500.843 177.114 422.532 68.196Z" fill="#04C4D9" fillOpacity="0.3"/>
                </svg>

                <img src={tbilisi} alt='tbilisi' className='absolute rotate-[-20deg] w-[329px] h-[420px] xs:w-[250px] xs:h-[310px] xs:translate-x-[-50%] xs:left-[50%]' />
            </div>

            <div className="flex flex-col justify-center xs:items-center gap-[30px] w-[500px] xs:w-full pt-[80px] box-border">
                <p className='font-[700] text-[24px] text-[#00A0B1] xs:hidden'>Исследуйте Грузию</p>
                <h1 className='text-[70px] xs:text-[30px] text-left xs:text-center leading-[4rem] font-[500] xs:w-[80%] xs:leading-[3rem]'>Пора в Путешествие По Грузии</h1>
                <p className='text-[16px] w-[400px] text-left xs:text-center xs:w-[95%]'>Дружеское объединение гидов из Грузии. Узнай о стране от тех, кто в ней родился и вырос!</p>
                
                <Link to='/pages/aboutUs/aboutUs'>
                    <div className="group w-[140px] h-[34px] flex justify-center items-center 
                                    rounded-[10px] bg-[#00A0B1] cursor-pointer hover:bg-[#FFD700] transition-all duration-750 ease">
                        <span className="text-center text-[#FFF] font-[600] xs:text-[12px] group group-hover:text-[#16A6B6] transition-all duration-750 ease">ПОДРОБНЕЕ</span>
                    </div>
                </Link>
            </div>
        </div>
    )
} 
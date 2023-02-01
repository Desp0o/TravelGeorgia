import rec1 from '../../components/images/Rectangle1.png'
import rec2 from '../../components/images/Rectangle2.png'
import rec3 from '../../components/images/Rectangle3.png'
import rec4 from '../../components/images/Rectangle4.png'
import Counting from './countComponent'

export default function WhyUs(){
    return(
        <div className="flex gap-[100px] pt-[50px] pb-[50px] bg-[#CBF5FA] xl:justify-center w-[100%]">

            {/* მარცხენა მხარე */}
            <div className="flex gap-[30px] pl-[140px] xs:hidden">
                <div className="flex flex-col gap-[32px]">
                    <img src={rec1} alt="whyus img" className="w-[220px] h-[240px]" />
                    <img src={rec3} alt="whyus img" className="w-[220px] h-[240px]" />
                </div>

                <div className="flex flex-col gap-[32px]">
                    <img src={rec2} alt="whyus img" className="w-[220px] h-[240px]" />
                    <img src={rec4} alt="whyus img" className="w-[220px] h-[240px]" />
                </div>
            </div>

            {/* მარჯვენა მხარე */}
            <div className='flex flex-col text-left xs:pl-[20px] xs:pr-[20px] xs:w-[100%]'>
                <h1 className='w-full text-left xs:text-center font-[600] text-[48px] xs:text-[30px]'>ППОЧЕМУ МЫ?</h1>

                <p className='my-[40px] w-[600px] max-w-[100%] xs:text-center'>Все гиды, и инструкторы, артисты и музыканты, входящие в наше дружеское объединение, коренные грузины, имеющие соответствующее своей деятельности образование, отличную репутацию, подтвержденную отзывами множества туристов из разных стран, многолетний опыт работы,  искренне любящие свою страну и желающие, чтобы Вы ее тоже, узнав, полюбили. При этом, как все грузины, гостеприимны, просты и открыты  для общения.  Язык проведения экскурсий - английский, русский, грузинский.</p>
        

                {/* რიცხვები */}
                <div className='flex gap-[30px] my-[60px] xs:my-[20px] xs:justify-center xs:items-center xs:w-[100%]'>
                    <Counting 
                        number={1000}
                        text='экскурсии'
                    />

                    <Counting 
                        number={1000}
                        text='клиенты'
                    />

                    <Counting 
                        number={10}
                        text='лет опыта'
                    />
                </div>
            </div>
        </div>
    )
}
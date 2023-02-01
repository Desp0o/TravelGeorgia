import ContactBlockFooter from '../contactBlockFooter'
import logo from '../images/icon.png'
import Social from '../social'

export default function Footer() {
    return (
        <div className="w-full bg-[#00A0B1] flex flex-col pb-[60px] gap-[30px] xs:gap-[20px]" >
            <div className='relative w-full  pl-[140px] pt-[60px]  xs:pl-[20px] xs:pr-[20px] flex xs:flex-col xs:gap-[20px] items-center xl:justify-center'>
                <img src={logo} alt='logo footer' className='w-[125px]' />

                <div className='flex gap-[50px] xs:gap-[20px] mx-[200px] xs:flex-col xs:items-left'>
                    <ContactBlockFooter
                        app='Viber'
                        number='+995 597772845'
                    />

                    <ContactBlockFooter
                        app='WatsApp'
                        number='+995 597772845'
                    />

                    <ContactBlockFooter
                        app='Telegram'
                        number='+995 597772845'
                    />

                    <ContactBlockFooter
                        app='Email'
                        number='kodageo@gmail.com'
                    />
                </div>
            </div>

            <Social fill='#FFD700' gap='gap-[50px]'/>

        </div>
    )
}
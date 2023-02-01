import ContactBlockFooter from '../contactBlockFooter'
import logo from '../images/icon.png'

export default function Footer(){
    return(
        <div className="relative w-full bg-[#00A0B1] pt-[60px] pb-[60px] pl-[140px] xs:pl-[20px] xs:pr-[20px] flex xs:flex-col xs:gap-[20px] items-center xl:justify-center">
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
    )
}
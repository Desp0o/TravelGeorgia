import ContactBlockFooter from '../contactBlockFooter'
import logo from '../images/logoFooter.png'

export default function Footer(){
    return(
        <div className="relative w-full bg-[#00A0B1] pt-[60px] pb-[60px] pl-[140px] flex items-center">
            <img src={logo} alt='logo footer' />

            <div className='flex gap-[100px] mx-[200px]'>
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
            </div>

        </div>
    )
}
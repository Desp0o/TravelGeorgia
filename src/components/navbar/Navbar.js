import { Link } from 'react-router-dom'

import logo from '../images/icon.png'

export default function Navbar(props){
    return(
        <div 
        className="absolute backdrop-blur-[15px] navbar w-full h-[80px] pl-[140px] pr-[140px] flex items-center	justify-between box-border overflow-hidden z-20">
            <img src={logo} alt='company logo' className='w-[170px]' />

            <div className='menu flex gap-[55px] items-center h-full xs:hidden font-[900] text-[#00A0B1]'>
                <Link to={props.homePage}><li className='menu_links text-[14px] cursor-pointer list-none'>ГЛАВНАЯ</li></Link>
                <Link to='/pages/allTours/allTours'><li className='menu_links text-[14px] cursor-pointer list-none'>ЭКСКУРСИИ</li></Link>
                <li className='menu_links text-[14px] cursor-pointer list-none'>ГИДЫ</li>
                <li className='menu_links text-[14px] cursor-pointer list-none'>О НАС</li>
            </div>

            <div className='btn w-[88px] h-[34px] bg-[#00A0B1] rounded-[5px] cursor-pointer flex items-center justify-center'>
                <span className='text-[#FFF] text-[14px] font-[600]'>Контакты</span>
            </div>
        </div>
    )
}
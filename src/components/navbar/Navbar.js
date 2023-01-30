import { Link } from 'react-router-dom'

import logo from '../images/icon.png'

export default function Navbar(props){
    return(
        <div 
        className="navbar w-full h-[80px] pt-[40px] pl-[140px] pr-[140px] flex items-center	justify-between box-border">
            <img src={logo} alt='company logo' className='w-[170px]' />

            <div className='menu flex gap-[55px] align-top h-full xs:hidden'>
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
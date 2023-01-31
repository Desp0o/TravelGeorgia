import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../../index.css'

import logo from '../images/icon.png'
import menuBars from '../images/icons/menuBars.png'
import menuClose from '../images/icons/close.png'

export default function Navbar(props) {
    const [burgerBars, setBurgerBars] = useState(menuBars)
    const [isOpened, setIsOpened] = useState(false)
    const [menuClass, setMenuClass] = useState('hidden xs:block w-[32px]')
    const [board, setBoard] = useState('burgerMenu_panel')

    function burgerHandler() {
        if (!isOpened) {
            setIsOpened(true)
            setBurgerBars(menuClose)
            setMenuClass('hidden xs:block w-[24px]')
            setBoard('burgerMenu_panel burgerMenu_panel_active')
        } else {
            setIsOpened(false)
            setBurgerBars(menuBars)
            setMenuClass('hidden xs:block w-[32px]')
            setBoard('burgerMenu_panel')
        }
    }

    return (
        <>
        <div
            className="absolute backdrop-blur-[15px] navbar w-full h-[80px] pl-[140px] pr-[140px] 
                   flex items-center	justify-between box-border overflow-hidden z-20
                   xs:pl-[20px] xs:pr-[20px]">
            <img src={logo} alt='company logo' className='w-[170px] xs:w-[100px]' />

            <div className='menu flex gap-[55px] items-center h-full xs:hidden font-[900] text-[#00A0B1]'>
                <Link to={props.homePage} onClick={burgerHandler}><li className='menu_links text-[14px] cursor-pointer list-none' >ГЛАВНАЯ</li></Link>
                <Link to='/pages/allTours/allTours' onClick={burgerHandler}><li className='menu_links text-[14px] cursor-pointer list-none' onClick={burgerHandler}>ЭКСКУРСИИ</li></Link>
                <li className='menu_links text-[14px] cursor-pointer list-none'>ГИДЫ</li>
                <li className='menu_links text-[14px] cursor-pointer list-none'>О НАС</li>
            </div>

            <div className='xs:hidden btn w-[88px] h-[34px] bg-[#00A0B1] rounded-[5px] cursor-pointer flex items-center justify-center'>
                <span className='text-[#FFF] text-[14px] font-[600]'>Контакты</span>
            </div>

            <img
                className={menuClass}
                alt='burgermenu'
                src={burgerBars}
                onClick={burgerHandler}
            />

        </div>

        <div className={board}>
                <Link to={props.homePage}><li className='menu_links text-[14px] cursor-pointer list-none'>ГЛАВНАЯ</li></Link>
                <Link to='/pages/allTours/allTours'><li className='menu_links text-[14px] cursor-pointer list-none'>ЭКСКУРСИИ</li></Link>
                <li className='menu_links text-[14px] cursor-pointer list-none'>ГИДЫ</li>
                <li className='menu_links text-[14px] cursor-pointer list-none'>О НАС</li>
        </div>

</>
        
    )
}
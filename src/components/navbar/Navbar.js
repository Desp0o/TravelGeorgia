import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../../index.css'

import logo from '../images/icon.png'
import menuBars from '../images/icons/menuBars.png'
import menuClose from '../images/icons/close.png'

import ukr from '../../components/images/icons/ukr.png'

export default function Navbar(props) {
    const [burgerBars, setBurgerBars] = useState(menuBars)
    const [isOpened, setIsOpened] = useState(false)
    const [menuClass, setMenuClass] = useState('hidden xs:block w-[32px]')
    const [board, setBoard] = useState('burgerMenu_panel')
    const [overlay, setOverlay] = useState('hidden w-full h-[100vh] fixed top-0 z-[18] hidden')

    function burgerHandler() {
        if (!isOpened) {
            setIsOpened(true)
            setBurgerBars(menuClose)
            setMenuClass('hidden xs:block w-[24px]')
            setBoard('burgerMenu_panel burgerMenu_panel_active')
            setOverlay('hidden xs:block w-full h-[100vh] absolute top-0 z-[18] block bg-[rgba(0,0,0,0.5)] overflow-hidden')
        } else {
            setIsOpened(false)
            setBurgerBars(menuBars)
            setMenuClass('hidden xs:block w-[32px]')
            setBoard('burgerMenu_panel')
            setOverlay('hidden w-full h-[100vh] absolute top-0 z-[18] hidden bg-[rgba(0,0,0,0.5)] overflow-hidden')
        }
    }

    return (
        <>
            <div
                className="fixed bg-[#fff] navbar w-full h-[80px] pl-[140px] pr-[140px] 
                   flex items-center	justify-between box-border overflow-hidden z-20
                   xs:pl-[20px] xs:pr-[20px] shadow-[0px_0px_20px_0.5px_rgba(0,0,0,0.3)]">

                <Link to='*'><img src={logo} alt='company logo' className='w-[100px] xs:w-[100px]' /></Link>

                <div className='menu flex gap-[55px] items-center h-full xs:hidden font-[900] text-[#00A0B1]'>

                    <Link to={props.homePage} onClick={burgerHandler}><li className='menu_links text-[16px] cursor-pointer list-none hover:text-[#FFD700] transition-all duration-750 ease' >ГЛАВНАЯ</li></Link>

                    <Link to='/pages/allTours/allTours' onClick={burgerHandler}><li className='menu_links text-[16px] cursor-pointer list-none hover:text-[#FFD700] transition-all duration-750 ease' onClick={burgerHandler}>ЭКСКУРСИИ</li></Link>

                    <Link to='/pages/uslugi/uslugi'><li className='menu_links text-[16px] cursor-pointer list-none uppercase hover:text-[#FFD700] transition-all duration-750 ease'>Услуги</li></Link>

                    {/* <Link to='/pages/aboutUs/aboutUs'><li className='menu_links text-[16px] cursor-pointer list-none uppercase hover:text-[#FFD700] transition-all duration-750 ease'>О НАС</li></Link> */}
                </div>

                <Link to='/pages/aboutUs/aboutUs'>
                    <div className='group xs:hidden btn w-[88px] h-[34px] bg-[#00A0B1] hover:bg-[#FFD700] rounded-[5px] 
                                cursor-pointer flex items-center justify-center transition-all duration-750 ease'>
                        <span className='text-[#FFF] group-hover:text-[#16A6B6] text-[14px] font-[600] transition-all duration-750 ease'>О НАС</span>
                    </div>
                </Link>

                {/* <img src={ukr} className='w-[50px]'/> */}

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
                <Link to='/pages/uslugi/uslugi'><li className='menu_links text-[14px] cursor-pointer list-none uppercase'>Услуги</li></Link>
                <Link to='/pages/aboutUs/aboutUs'><li className='menu_links text-[14px] cursor-pointer list-none'>О НАС</li></Link>
            </div>

            <div className={overlay} onClick={burgerHandler}></div>

        </>

    )
}
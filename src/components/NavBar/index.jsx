import logo from '/Logo.png'
import HamburgerIcon from '../../Icons/HamburgerIcon'
import { useState } from 'react'
import CloseIcon from '../../Icons/CloseIcon'

export default function NavBar(){
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    function showMenu(){
        setShowMobileMenu(true)
    }

    function closeMenu(){
        setShowMobileMenu(false)
    }


    return(
        <div className='md:w-[90%]  m-auto mt-6 mb-6 rounded-xl bg-[url("/lalanda-nav-bg.jpeg")] bg-center'>
            <div className='flex justify-between rounded-xl p-4 items-center bg-[#0008] '>
                <a href="/">
                    <img className="md:hidden" src={logo} />
                    <img className="hidden md:block" src="/Logo-white.png" />
                </a>
                
                <div>
                    <ul className='hidden md:flex items-center gap-4'>
                        <a href='/'><li className={`text-[#FFF]`}>Home</li></a>
                        <a href='#about'><li className={`text-[#FFF]`}>About Us</li></a>
                        <a href='#team'><li className={`text-[#FFF]`}>Our Team</li></a>
                        <a href='#blog'><li className={`text-[#FFF]`}>Blog</li></a>
                        <a href='#support'><li className={`text-[#FFF]`}>Contact</li></a>
                        <a href='/register'><div className='text-[#FFF] p-2 bg-text-green rounded-lg'> Sign up </div></a>
                    </ul>
                </div>
                <div onClick={showMenu} className='md:hidden'>
                    <HamburgerIcon />
                </div>
            </div>

            <div className={`${showMobileMenu === false && 'hidden'} fixed w-full h-[100vh] bg-bg-primary top-0 left-0 bg-mm`}>
                <div className='p-4'>
                    <div onClick={closeMenu} className='flex py-4 justify-end'>
                        <CloseIcon />
                    </div>
                    <div>
                        <ul className='flex flex-col items-center gap-4'>
                            <a onClick={closeMenu} href='/'><li className={`text-[#FFF]`}>Home</li></a>
                            <a onClick={closeMenu} href='#about'><li className={`text-[#FFF]`}>About Us</li></a>
                            <a onClick={closeMenu} href='#team'><li className={`text-[#FFF]`}>Our Team</li></a>
                            <a onClick={closeMenu} href='#blog'><li className={`text-[#FFF]`}>Blog</li></a>
                            <a onClick={closeMenu} href='#support'><li className={`text-[#FFF]`}>Contact</li></a>
                            <a onClick={closeMenu} href='/register'><div className='text-[#FFF] p-2 bg-text-green rounded-lg'> Sign up </div></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
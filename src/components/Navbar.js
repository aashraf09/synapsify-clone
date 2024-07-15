import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)

    const showAndhideNav = () => {
        setToggleNav(!toggleNav)
    }

    useEffect(() => {
        if (toggleNav) {
            document.getElementById('nav-links-list').classList.remove('hidden')
            document.getElementById('nav-links-list').classList.add('flex')
        } else {
            document.getElementById('nav-links-list').classList.remove('flex')
            document.getElementById('nav-links-list').classList.add('hidden')
        }
    }, [toggleNav])

    return (
        <nav className='border-b px-5 lg:px-20 z-50 flex flex-row items-center justify-between gap-5 min-h-[72px] w-full sticky top-0 bg-[#fff]'>
            <a href={'/'} style={{ color: 'var(--primary-btn-bg-color)' }}>
                <img src={logo} alt="logo" className='w-[200px] h-auto' />
            </a>
            <ul id='nav-links-list' style={{ backgroundColor: 'var(--bg-color)' }} className="secondary-text flex-col z-50 lg:flex-row absolute top-[72px] px-5 py-8 lg:px-0 lg:py-0 left-0 h-auto w-full lg:w-auto hidden lg:flex lg:relative lg:top-0 items-start lg:items-center justify-start lg:justify-between gap-5">
                <li><a href={'/'} className='hover:text-black hover:underline underline-offset-4'>GPU Instances</a></li>
                <li><a href={'/'} className='hover:text-black hover:underline underline-offset-4'>Clusters</a></li>
                <li><a href={'/'} className='hover:text-black hover:underline underline-offset-4'>Inference</a></li>
                <li><a href={'/'} className='hover:text-black hover:underline underline-offset-4'>Blog</a></li>
                <li><a href={'/'} className='hover:text-black hover:underline underline-offset-4'>API</a></li>
                <li><a href={'/'} className='hover:text-black hover:underline underline-offset-4'>Docs</a></li>
                <li className="lg:hidden flex flex-row items-center justify-center w-full gap-5 mt-5">
                    <a href={'/'} className='btn secondary-text'>
                        Login
                    </a>
                    <a href={'/'} className='btn text-white' style={{ backgroundColor: 'var(--primary-btn-bg-color)' }}>
                        Sign up
                    </a>
                </li>
            </ul>
            <div id='action-buttons' className="hidden lg:flex flex-row items-center justify-between gap-5">
                <a href={'/'} className='btn secondary-text'>
                    Login
                </a>
                <a href={'/'} className='btn text-white' style={{ backgroundColor: 'var(--primary-btn-bg-color)' }}>
                    Sign up
                </a>
            </div>
            <button className='block lg:hidden' onClick={showAndhideNav}>
                {
                    toggleNav ? (
                        <FontAwesomeIcon className='h-6 w-6' size='xl' icon={faXmark} style={{ color: 'var(--primary-btn-bg-color)' }}></FontAwesomeIcon>
                    ) : (
                        <FontAwesomeIcon className='h-6 w-6' size='xl' icon={faBars} style={{ color: 'var(--primary-btn-bg-color)' }}></FontAwesomeIcon>
                    )
                }
            </button>
        </nav>
    )
}

export default Navbar

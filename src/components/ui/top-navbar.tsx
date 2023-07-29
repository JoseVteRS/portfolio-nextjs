'use client'

import React from 'react'
import { NAV_LINKS } from '@/config'
// import Link from 'next/link'

import { Link, animateScroll as scroll } from 'react-scroll'

export const TopNavbar = () => {
    return (
        <nav className='bg-pearl-600 p-3 px-12'>
            <ul className='text-white flex gap-5 items-center justify-end'>
                {
                    NAV_LINKS.map((link) => (
                        <li key={link.path}>
                            <Link
                                activeClass='active'
                                to={link.path}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={300}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
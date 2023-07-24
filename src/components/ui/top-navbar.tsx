import React from 'react'
import { NAV_LINKS } from '@/config'
import Link from 'next/link'

export const TopNavbar = () => {
    return (
        <nav className='bg-sky-600 p-3 px-12'>
            <ul className='text-white flex gap-5 items-center justify-end'>
                {
                    NAV_LINKS.map((link) => (
                        <li key={link.path}>
                            <Link href={link.path}>{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

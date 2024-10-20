'use client'
import Image from 'next/image'
import logo from '../assets/ARABY.png'
import { FC } from 'react'
import PrimaryHeaderProps from '../types/header'
import React, { useState } from 'react';
import Link from 'next/link'

const PrimaryHeader: FC<PrimaryHeaderProps> = ({ pages }) => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleActive = () => {
      setIsActive(!isActive);
    };

  return (
    <header className='flex justify-between items-center h-28'>
        <Link href="/">
            <Image src={logo} width={190} height={70} alt='araby logo' />
        </Link>
        <nav className={`mobile-nav-screen ${isActive ? 'active-menu' : ''}`}>
            <ul className='flex justify-between gap-6 items-center'>
                {pages?.map((e) => (
                    <li key={e.pageName}>
                        <a href={e.pageUrl} className='animated-link text-gray-500 text-2xl hover:text-blue-950'>{e.pageName}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <div className='hidden max-md:block'>
            <svg
            className={`ham hamRotate ham1 ${isActive ? 'active' : ''}`}
            viewBox="0 0 100 100"
            width="80"
            onClick={toggleActive}
            >
            <path
                className="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path
                className="line middle"
                d="m 30,50 h 40"
            />
            <path
                className="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
            </svg>
        </div>
    </header>
  )
}

export default PrimaryHeader
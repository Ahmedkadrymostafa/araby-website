import React from 'react'
import { FaEye } from 'react-icons/fa'
import { DCard } from '../types/dCard'
import { BiSolidLike } from 'react-icons/bi'

const DalilCard = (props: DCard) => {
  return (
    <div className='dalil-card relative p-2 main-border text-right'>
        <p className='second-color text-base mb-2'>{props.date}</p>
        <a href={`/${props.pageUrl}/${props.id}`}><h1 className='main-color font-bold text-xl mb-3 max-line'>{props.name}</h1></a>
        <p className='second-color text-lg max-line'>{props.address}</p>
        <div className='flex justify-between items-center absolute w-full left-0 bottom-3 px-4'>
            <div className="flex justify-between items-center gap-1">
                <FaEye className='main-color' />
                <p className='second-color'>{props.views}</p>
            </div>
            <div className="flex justify-between items-center gap-1">
                <BiSolidLike className='main-color' />
                <p className='second-color'>{props.likes}</p>
            </div>
        </div>
    </div>
  )
}

export default DalilCard
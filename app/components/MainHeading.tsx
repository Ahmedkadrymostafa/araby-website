import React from 'react'
import { IMainHeading } from '../types/mainHeading'

const MainHeading = (props: IMainHeading) => {
  return (
    <div className='text-center px-4'>
        <h1 className='main-color text-3xl mb-2'>{props.title}</h1>
        <p className='second-color text-lg'>{props.description}</p>
    </div>
  )
}

export default MainHeading
import React from 'react'
import { IMainCountryHeading } from '../types/mainHeading'

const MainCountryHeading = (props: IMainCountryHeading) => {
  return (
    <div>
        <a href={`/${props.pageUrl}`}>
            <h1 className='text-4xl main-color font-bold text-center my-8'>{props.heading}</h1>
        </a>
    </div>
  )
}

export default MainCountryHeading
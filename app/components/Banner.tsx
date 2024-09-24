import React from 'react'

type Banner = {
    heading: string,
    description: string,
    image: string
}

const Banner = (props: Banner) => {
  return (
    <div className={`${props.image} flex justify-center items-center h-[350px]`}>
        <div className='px-5 text-center'>
            <h2 className='font-black text-white mb-4 text-3xl'>{props.heading}</h2>
            <p className='text-white text-xl'>{props.description}</p>
        </div>
    </div>
  )
}

export default Banner
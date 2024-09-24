import React, { FC } from 'react'
import MainHeading from './MainHeading'
import PaginatedList from './PaginatedList'
import { IDalilCountrySection } from '../types/dalilCountrySection'


const DalilCountry: FC<IDalilCountrySection> = ({ title, description, data, }) => {
  return (
    <div className='my-14'>
        <MainHeading title={title} description={description} />
        <PaginatedList data={data} />
      </div>
  )
}

export default DalilCountry
import React from 'react'
import DalilScrollingComponent from '../components/DalilScrollingComponent'

const page = () => {
  return (
    <div>
      <DalilScrollingComponent firestoreQuery='saudi/dalil/data' limitOfItems={7} pageUrl='saudi' />
    </div>
  )
}

export default page
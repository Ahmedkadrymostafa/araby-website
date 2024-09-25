import DalilScrollingComponent from '@/app/components/DalilScrollingComponent'
import React from 'react'

const page = () => {
    const includedProps = {
        firstoreQuery: "egypt/dalil/data",
        limitOfItems: 25,
        pageUrl: "guide",
        countryNameInArabic: "مصر"
      }
  return (
    <div>
        <DalilScrollingComponent firestoreQuery={includedProps.firstoreQuery} limitOfItems={includedProps.limitOfItems} pageUrl={includedProps.pageUrl} />
    </div>
  )
}

export default page
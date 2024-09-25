import React from 'react'
import DalilScrollingComponent from '../components/DalilScrollingComponent'
import DalilSearchComponent from '../components/DalilSearchComponent'

const page = () => {
  const includedProps = {
    firstoreQuery: "egypt/dalil/data",
    limitOfItems: 25,
    pageUrl: "egypt/guide",
    countryNameInArabic: "مصر"
  }
  return (
    <div>
      <DalilSearchComponent firestoreQuery={includedProps.firstoreQuery} pageUrl={includedProps.pageUrl} countryNameInArabic={includedProps.countryNameInArabic} />
      <DalilScrollingComponent firestoreQuery={includedProps.firstoreQuery} limitOfItems={includedProps.limitOfItems} pageUrl={includedProps.pageUrl} />
    </div>
  )
}

export default page
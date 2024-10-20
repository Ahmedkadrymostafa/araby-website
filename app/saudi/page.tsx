import React from 'react'
import DalilScrollingComponent from '../components/DalilScrollingComponent'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'السعودية',
  description: 'مرحبًا بكم في السعودية، موطن التراث العريق والتطور السريع. اكتشفوا معالم هذا البلد الذي يجمع بين التاريخ العميق والحاضر المشرق. من مكة المكرمة والمدينة المنورة، إلى معالمها التاريخية مثل مدائن صالح وحي الطريف في الدرعية، تأخذكم السعودية في رحلة إلى قلب الحضارة الإسلامية'
}

const page = () => {
  const includedProps = {
    firstoreQuery: "saudi/dalil/data",
    limitOfItems: 25,
    pageUrl: "saudi/guide",
    countryNameInArabic: "السعودية",
    source: "saudi"
  }
  return (
    <div>
      <DalilScrollingComponent source={includedProps.source} firestoreQuery={includedProps.firstoreQuery} limitOfItems={includedProps.limitOfItems} pageUrl={includedProps.pageUrl} />
    </div>
  )
}

export default page
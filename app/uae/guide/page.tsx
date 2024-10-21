import DalilScrollingComponent from '@/app/components/DalilScrollingComponent'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل الامارات',
  description: 'مرحبًا بكم في دليل الإمارات، دليلكم المتكامل لاستكشاف كل ما تقدمه الإمارات السبع. من معالم دبي الشهيرة مثل برج خليفة وجزيرة النخلة، إلى الهدوء والسكينة في واحات العين وصحراء ليوا، يأخذكم دليل الإمارات في رحلة لاستكشاف التنوع المذهل لهذه الدولة الفريدة. اكتشفوا أفضل المطاعم، الفنادق الفاخرة، وأماكن التسوق العالمية'
}
const page = () => {
    const includedProps = {
        firstoreQuery: "uae/dalil/data",
        limitOfItems: 25,
        pageUrl: "uae/guide",
        countryNameInArabic: "الامارات",
        source: "uae"
      }
  return (
    <div>
        <DalilScrollingComponent firestoreQuery={includedProps.firstoreQuery} limitOfItems={includedProps.limitOfItems} pageUrl={includedProps.pageUrl} source={includedProps.source} />
    </div>
  )
}

export default page
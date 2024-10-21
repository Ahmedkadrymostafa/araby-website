import React from 'react'
import DalilScrollingComponent from '../components/DalilScrollingComponent'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'الامارات',
  description: 'الإمارات، الوجهة التي تجمع بين حداثة المستقبل وجمال التقاليد. تعد الإمارات واحدة من أكثر الدول ابتكارًا وتقدمًا في العالم، مع مدن حديثة مثل دبي وأبوظبي التي تحتضن أطول الأبراج وأرقى المراكز التجارية، ومعالم تاريخية تعكس التراث العربي الأصيل'
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
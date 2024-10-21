import React from 'react'
import DalilScrollingComponent from '../components/DalilScrollingComponent'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'الكويت',
  description: ' تُعد الكويت واحدة من أكثر الدول تميزاً بتنوعها الثقافي والتاريخي، مع مزيج فريد من المعالم الحديثة والتقاليد الأصيلة. استكشفوا أبراج الكويت الشهيرة، والأسواق التراثية التي تعكس عبق الماضي، والمراكز التجارية الراقية التي تجسد نبض الحياة العصرية'
}



const page = () => {
  const includedProps = {
    firstoreQuery: "kuwait/dalil/data",
    limitOfItems: 25,
    pageUrl: "kuwait/guide",
    countryNameInArabic: "الكويت",
    source: "kuwait"
  }
  return (
    <div>
      <DalilScrollingComponent firestoreQuery={includedProps.firstoreQuery} limitOfItems={includedProps.limitOfItems} pageUrl={includedProps.pageUrl} source={includedProps.source} />
    </div>
  )
}

export default page
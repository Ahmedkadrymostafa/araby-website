import React from 'react'
import DalilScrollingComponent from '../components/DalilScrollingComponent'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'مصر',
  description: 'مرحبًا بكم في دليل مصر، أرض الفراعنة وأقدم حضارات العالم. تعد مصر وجهة لا مثيل لها لمحبي التاريخ والثقافة، حيث تمتزج فيها العراقة بالحاضر. استكشفوا معالمها الأثرية الشهيرة مثل أهرامات الجيزة وأبو الهول ومعابد الأقصر وأسوان، واكتشفوا سحر نهر النيل العظيم'
}



const page = () => {
  const includedProps = {
    firstoreQuery: "egypt/dalil/data",
    limitOfItems: 25,
    pageUrl: "egypt/guide",
    countryNameInArabic: "مصر",
    source: "egypt"
  }
  return (
    <div>
      <DalilScrollingComponent firestoreQuery={includedProps.firstoreQuery} limitOfItems={includedProps.limitOfItems} pageUrl={includedProps.pageUrl} source={includedProps.source} />
    </div>
  )
}

export default page
import DalilScrollingComponent from '@/app/components/DalilScrollingComponent'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل السعودية',
  description: 'مرحباً بكم في دليل السعودية، دليلكم الشامل لاكتشاف أفضل الوجهات والمعالم في قلب المملكة. تأخذكم السعودية في رحلة مدهشة بين الماضي العريق والمستقبل الواعد. اكتشفوا الأماكن التاريخية التي تشهد على حضارة ضاربة في القدم، من المواقع الأثرية في العلا إلى الحي الطريف المدرج ضمن التراث العالمي'
}

const page = () => {
    const includedProps = {
        firstoreQuery: "saudi/dalil/data",
        limitOfItems: 25,
        pageUrl: "guide",
        source: "saudi"
      }
  return (
    <div>
        <DalilScrollingComponent source={includedProps.source} firestoreQuery={includedProps.firstoreQuery} limitOfItems={includedProps.limitOfItems} pageUrl={includedProps.pageUrl} />
    </div>
  )
}

export default page
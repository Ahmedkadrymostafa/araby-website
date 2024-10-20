import DalilScrollingComponent from '@/app/components/DalilScrollingComponent'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل مصر',
  description: 'مرحباً بكم في دليل مصر، بوابتكم لاستكشاف أهم وأروع الأماكن في أرض الكنانة. من الأهرامات الشامخة التي تعانق السماء إلى شواطئ البحر الأحمر الخلابة، يقدم لكم دليل مصر نظرة شاملة على كل ما يجعل هذا البلد وجهة لا غنى عنها'
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
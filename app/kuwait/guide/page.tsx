import DalilScrollingComponent from '@/app/components/DalilScrollingComponent'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل الكويت',
  description: 'دليل الكويت، بوابتكم لاستكشاف أفضل الأماكن والوجهات في هذا البلد الفريد. سواء كنتم تبحثون عن معالم سياحية حديثة أو ترغبون في اكتشاف الجوانب الثقافية والتراثية العريقة، فإن الكويت تقدم لكم مزيجًا رائعًا يلبي جميع الأذواق'
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
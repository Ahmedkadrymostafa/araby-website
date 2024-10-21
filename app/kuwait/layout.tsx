// import SecondaryHeader from "../components/SecondryHeader"
import Banner from "../components/Banner"
import DalilSearchComponent from "../components/DalilSearchComponent"
import GoBack from "../components/GoBack"
export default function EgyptLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    

      const includedProps = {
        firstoreQuery: "kuwait/dalil/data",
        limitOfItems: 25,
        pageUrl: "kuwait/guide",
        countryNameInArabic: "الكويت",
        source: "kuwait"
      }
    return (
      <div>
        <Banner image="kuwait-banner-image" heading="الكويت لؤلؤة الخليج العربي" description=" تُعد الكويت واحدة من أكثر الدول تميزاً بتنوعها الثقافي والتاريخي، مع مزيج فريد من المعالم الحديثة والتقاليد الأصيلة. استكشفوا أبراج الكويت الشهيرة، والأسواق التراثية التي تعكس عبق الماضي، والمراكز التجارية الراقية التي تجسد نبض الحياة العصرية" />
        <GoBack />
        <hr />
        <DalilSearchComponent source={includedProps.source} firestoreQuery={includedProps.firstoreQuery} pageUrl={includedProps.pageUrl} countryNameInArabic={includedProps.countryNameInArabic} />
        {children}
      </div>
    )
  }
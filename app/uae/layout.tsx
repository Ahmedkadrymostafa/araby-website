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
        firstoreQuery: "uae/dalil/data",
        limitOfItems: 25,
        pageUrl: "uae/guide",
        countryNameInArabic: "الامارات",
        source: "uae"
      }
    return (
      <div>
        <Banner image="uae-banner-image" heading="اكتشف أفضل الاماكن في الامارات" description="الإمارات، الوجهة التي تجمع بين حداثة المستقبل وجمال التقاليد. تعد الإمارات واحدة من أكثر الدول ابتكارًا وتقدمًا في العالم، مع مدن حديثة مثل دبي وأبوظبي التي تحتضن أطول الأبراج وأرقى المراكز التجارية، ومعالم تاريخية تعكس التراث العربي الأصيل" />
        <GoBack />
        <hr />
        <DalilSearchComponent source={includedProps.source} firestoreQuery={includedProps.firstoreQuery} pageUrl={includedProps.pageUrl} countryNameInArabic={includedProps.countryNameInArabic} />
        {children}
      </div>
    )
  }
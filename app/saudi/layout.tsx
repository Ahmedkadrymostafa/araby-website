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
        firstoreQuery: "saudi/dalil/data",
        limitOfItems: 25,
        pageUrl: "saudi/guide",
        countryNameInArabic: "السعودية",
        source: "saudi"
      }
    return (
      <div>
        <Banner image="saudi-banner-image" heading="اكتشف أفضل الوجهات في الوطن العربي" description="استمتع بمقالات حصرية ودليل شامل لأهم الأماكن والمعالم في دولنا العربية. اكتشف الجمال المخفي والمغامرات التي تنتظرك في كل زاوية من وطننا العربي" />
        <GoBack />
        <hr />
        <DalilSearchComponent source={includedProps.source} firestoreQuery={includedProps.firstoreQuery} pageUrl={includedProps.pageUrl} countryNameInArabic={includedProps.countryNameInArabic} />
        {children}
      </div>
    )
  }
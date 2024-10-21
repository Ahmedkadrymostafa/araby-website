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
        firstoreQuery: "egypt/dalil/data",
        limitOfItems: 25,
        pageUrl: "egypt/guide",
        countryNameInArabic: "مصر",
        source: "egypt"
      }
    return (
      <div>
        <Banner image="egypt-banner-image" heading="اكتشف أفضل الاماكن في مصر" description="استمتع بمقالات حصرية ودليل شامل لأهم الأماكن والمعالم في مصر. اكتشف الجمال المخفي والمغامرات التي تنتظرك في كل زاوية من وطننا العربي" />
        <GoBack />
        <hr />
        <DalilSearchComponent source={includedProps.source} firestoreQuery={includedProps.firstoreQuery} pageUrl={includedProps.pageUrl} countryNameInArabic={includedProps.countryNameInArabic} />
        {children}
      </div>
    )
  }
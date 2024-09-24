// import SecondaryHeader from "../components/SecondryHeader"
import Banner from "../components/Banner"
import PrimaryHeader from "../components/PrimaryHeader"
export default function EgyptLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pages = [
        {
          pageName: "دليل الاماكن و الوجهات المصرية",
          pageUrl: "/dalil"
        },
        
      ]
    return (
      <div>
        <PrimaryHeader pages={pages} />
        <Banner image="egypt-banner-image" heading="اكتشف أفضل الوجهات في الوطن العربي" description="استمتع بمقالات حصرية ودليل شامل لأهم الأماكن والمعالم في دولنا العربية. اكتشف الجمال المخفي والمغامرات التي تنتظرك في كل زاوية من وطننا العربي" />
        <hr />
        {children}
      </div>
    )
  }
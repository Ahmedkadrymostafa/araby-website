// import { Suspense } from "react";
import Banner from "./components/Banner";
import DalilCountry from "./components/DalilCountry";
import MainCountryHeading from "./components/MainCountryHeading";
import PrimaryHeader from "./components/PrimaryHeader";
import { GetDalilLimited } from './controllers/GetDalil'
// import LoadingSkeleton from "./components/LoadingSkeleton";
// import dynamic from "next/dynamic";

// Dynamically import DalilCountry


export default async function Home() {
  const dalilEgyptLimited = await GetDalilLimited({ query:"egypt/dalil/data", limit:25, pageUrl:"egypt/guide" });
  const dalilSaudiLimited = await GetDalilLimited({ query:"saudi/dalil/data", limit:25, pageUrl:"saudi" });

  const pages = [
    {
      pageName: "مصر",
      pageUrl: "/egypt"
    },
    {
      pageName: "السعودية",
      pageUrl: "/egypt"
    },
    {
      pageName: "الامارات",
      pageUrl: "/egypt"
    },
    {
      pageName: "الكويت",
      pageUrl: "/egypt"
    },
  ]
  return (
    <>
      <PrimaryHeader pages={pages} />
      <Banner image="main-banner-image" heading="اكتشف أفضل الوجهات في الوطن العربي" description="استمتع بمقالات حصرية ودليل شامل لأهم الأماكن والمعالم في دولنا العربية. اكتشف الجمال المخفي والمغامرات التي تنتظرك في كل زاوية من وطننا العربي" />
      <hr />
      <MainCountryHeading heading="جمهورية مصر العربية" pageUrl="egypt" />
      <DalilCountry 
        data={dalilEgyptLimited} 
        pageUrl="egypt/guide" 
        title='اكتشف مصر بسهولة' 
        description='هل تبحث عن مكان معين في مصر؟ دليلنا الشامل يوفر لك كل المعلومات التي تحتاجها، من العناوين وأرقام الهواتف. اكتشف مصر بسهولة ويسر' 
      />
      <hr />
      <MainCountryHeading heading="المملكة العربية السعودية" pageUrl="saudi" />
      <DalilCountry 
        data={dalilSaudiLimited} 
        pageUrl="saudi" 
        title='اكتشف الاماكن و الوجهات السعودية' 
        description='هل تبحث عن مكان معين في مصر؟ دليلنا الشامل يوفر لك كل المعلومات التي تحتاجها، من العناوين وأرقام الهواتف. اكتشف مصر بسهولة ويسر' 
      />
    </>
  );
}

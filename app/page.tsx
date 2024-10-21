import Banner from "./components/Banner";
import DalilCountry from "./components/DalilCountry";
import MainCountryHeading from "./components/MainCountryHeading";
import { GetDalilLimited } from './controllers/GetDalil'


export default async function Home() {
  const dalilEgyptLimited = await GetDalilLimited({ query:"egypt/dalil/data", limit:25, pageUrl:"egypt/guide", source:"egypt" });
  const dalilSaudiLimited = await GetDalilLimited({ query:"saudi/dalil/data", limit:25, pageUrl:"saudi/guide", source:"saudi" });
  const dalilKuwaitLimited = await GetDalilLimited({ query:"kuwait/dalil/data", limit:25, pageUrl:"kuwait/guide", source:"kuwait" });
  const dalilUaeLimited = await GetDalilLimited({ query:"uae/dalil/data", limit:25, pageUrl:"uae/guide", source:"uae" });

  
  return (
    <>
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
        pageUrl="saudi/guide" 
        title='استكشف الاماكن داخل المملكة' 
        description='اكتشف سحر وتنوع المملكة العربية السعودية مع دليل الأماكن والوجهات. من معالم تاريخية عظيمة مثل مدائن صالح وحي الطريف، إلى المناظر الطبيعية الخلابة' 
      />
      <hr />
      <MainCountryHeading heading="الامارات العربية المتحدة" pageUrl="uae" />
      <DalilCountry 
        data={dalilUaeLimited} 
        pageUrl="uae/guide" 
        title='اكتشف الامارات مع دليل الاماكن و الوجهات' 
        description='انطلق في رحلة لاكتشاف الإمارات العربية المتحدة مع دليل الأماكن والوجهات. استمتع بتجربة عالمية في دبي وأبوظبي من خلال أبراجها العالية وجزرها الصناعية' 
      />
      <hr />
      <MainCountryHeading heading="الكويت" pageUrl="kuwait" />
      <DalilCountry 
        data={dalilKuwaitLimited} 
        pageUrl="kuwait/guide" 
        title='دليل الأماكن والوجهات في الكويت لؤلؤة الخليج العربي' 
        description='اكتشف الكويت وأهم الوجهات التي تعكس تاريخها العريق. من الأسواق التراثية مثل سوق المباركية إلى معالمها الحديثة مثل أبراج الكويت. دليل الكويت يأخذك في رحلة لاستكشاف أفضل الأماكن' 
      />
    </>
  );
}

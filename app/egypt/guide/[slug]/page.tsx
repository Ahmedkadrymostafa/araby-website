import { GetDalilById } from '@/app/controllers/GetDalil'
import React from 'react'
import Map from '@/app/components/Map';
import { FaEarthAfrica, FaLocationDot, FaPhone } from 'react-icons/fa6';
import LikeButton from '@/app/components/LikeButton';

const page = async ( { params }: { params: { slug: string } } ) => {
  
    const data = await GetDalilById({ query: "egypt/dalil/data", id: decodeURIComponent(params.slug) });
    console.log(data)

    const mapDetails = { mapUrl: data?.googleMapUrl };
    const url = mapDetails.mapUrl || "https://www.google.com/maps"; // Default URL

  return (
    <div>

      <div>
        <div>
            <h1 className='second-color text-base text-right mb-4'>{data?.date}</h1>
            <LikeButton docId={data?.id} initialLikes={data?.likes} initialViews={data?.views} />
        </div>
        <hr />
        <h1 className='main-color text-2xl text-center mt-7 font-black'>هاتف و عنوان</h1>
        <h1 className='main-color text-2xl text-center mb-6 font-black'>{data?.name}</h1>
        <div className='flex flex-col gap-10 my-16 rtl'>
          <div className='flex items-center gap-3 ml-auto flex-row-reverse'>
            <p className='text-black text-xl'>{data?.address}</p>
            <p className='flex items-center gap-3 font-bold text-xl'>
              <FaLocationDot />
              عنوان:
            </p>
          </div>
          {data?.phone && (
            <div className='flex items-center gap-3 ml-auto flex-row-reverse'>
              <a href={`tel:${data?.phone}`} className='text-black text-xl'>{data?.phone}</a>
              <p className='flex items-center gap-3 font-bold text-xl'>
                <FaPhone />
                الهاتف:
              </p>
            </div>
          )}
            <div className='flex items-center gap-3 ml-auto flex-row-reverse'>
              <p className='flex items-center gap-3 font-bold text-xl'>
                {/* {`رابط ${data?.name} على جوجل ماب`} */}
                <FaEarthAfrica />
                <a href={data?.googleMapUrl} className='text-black text-xl'>{`رابط ${data?.name} على جوجل ماب`}</a>
              </p>
            </div>
        </div>
      </div>
      <hr />
      <Map mapUrl={url} name={data?.name} />
    </div>
    
  )
}

export default page
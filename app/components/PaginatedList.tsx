'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FC } from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


import { Grid, Pagination } from 'swiper/modules';

import DalilCard from './DalilCard';
import DCardData from '../types/dCard';

const PaginatedList: FC<DCardData> = ({ data }) => {
    return (
        <Swiper
        slidesPerView={1}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  grid: {
                    rows: 2,
                  }
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  grid: {
                    rows: 2,
                  }
                },
                1115: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                  grid: {
                    rows: 2,
                  }
                }
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
              
            >
              {
                  data?.map((e) => (
                      <SwiperSlide key={e.id}>
                          <DalilCard
                              id={e.id} 
                              name={e.name} 
                              address={e.address} 
                              views={e.views} 
                              likes={e.likes}
                              date={e.date} 
                              pageUrl={e.pageUrl}
                              source={e.source}  
                          />
                      </SwiperSlide>
                  ))
              }
              
            </Swiper>
        
      );
};

export default PaginatedList;

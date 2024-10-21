'use client'
import { useState, useEffect, FC } from 'react';
import { getDocs, collection, query, limit, startAfter, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '..//firebase'; // Import your Firebase config
import { DCard } from '../types/dCard';
import InfiniteScroll from "react-infinite-scroll-component";
import DalilCard from './DalilCard';
import LoadingSkeleton from './LoadingSkeleton';
import { IDalilScrolling } from '../types/dalilScrolling';

const DalilScrollingComponent: FC<IDalilScrolling> = ({ firestoreQuery, limitOfItems, pageUrl, source }) => {

    const [data, setData] = useState<DCard[]>([]);
    const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
    const [hasMore, setHasMore] = useState(true);
  
    useEffect(() => {
      fetchData(); // Fetch data when the component mounts
    }, []);
  
    const fetchData = async () => {
      try {
        // Build the query with pagination
        let q = query(collection(db, firestoreQuery), limit(limitOfItems));
    
        if (lastDoc) {
          q = query(collection(db, firestoreQuery), startAfter(lastDoc), limit(limitOfItems));
        }
    
        const snapshot = await getDocs(q);
    
        if (!snapshot.empty) {
          const newItems: DCard[] = snapshot.docs
            .map(doc => {
              const data = doc.data();
              
              // Check if the status is 'published'
              if (data.status === "published") {
                const timestamp = data.date?.toDate(); // Convert Firestore Timestamp to JS Date
                const formattedDate = timestamp
                  ? timestamp.toLocaleDateString('ar-EG', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })
                  : null;
    
                return {
                  id: doc.id,
                  name: data.name || '',
                  address: data.address || '',
                  phone: data.phone || '',
                  views: data.views || 0,
                  likes: data.likes || 0,
                  date: formattedDate || '',
                  pageUrl: pageUrl,
                  source: source
                };
              }
              return null; // Return null if status is not 'published'
            })
            .filter(item => item !== null); // Filter out null values
    
          // Only update if new items exist and are different
          setData(prevData => [...prevData, ...newItems.filter(item => !prevData.find(prevItem => prevItem.id === item.id))]);
    
          // Update lastDoc for pagination
          setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    
          if (newItems.length < limitOfItems) {
            setHasMore(false); // Stop loading if no more documents
          }
        } else {
          setHasMore(false); // No more documents to fetch
        }
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
        setHasMore(false); // Stop loading if an error occurs
      }
    };
    


  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<LoadingSkeleton />}
      
    >
        <div className='flex justify-between gap-8 flex-wrap my-10'>
            {data.map((e) => {
                return (
                    <DalilCard
                        key={e.id}
                        id={e.id} 
                        name={e.name} 
                        address={e.address} 
                        views={e.views} 
                        likes={e.likes}
                        date={e.date} 
                        pageUrl={e.pageUrl} 
                        source={e.source}
                    />
                );
                })}
        </div>
    </InfiniteScroll>
  )
}

export default DalilScrollingComponent
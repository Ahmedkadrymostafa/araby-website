'use client'
import { useState, useEffect, FC } from 'react';
import { getDocs, collection, query, limit, startAfter, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '..//firebase'; // Import your Firebase config
import { DCard } from '../types/dCard';
import InfiniteScroll from "react-infinite-scroll-component";
import DalilCard from './DalilCard';
import LoadingSkeleton from './LoadingSkeleton';
import { IDalilScrolling } from '../types/dalilScrolling';

const DalilScrollingComponent: FC<IDalilScrolling> = ({ firestoreQuery, limitOfItems, pageUrl }) => {

    // const [data, setData] = useState<DCard[]>([]);
    // const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null); // Updated typing
    // const [hasMore, setHasMore] = useState(true);
  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    // const fetchData = async () => {
    //   try {
    //     let q = query(collection(db, firestoreQuery), limit(limitOfItems));
  
    //     // Check if we have a last document for pagination
    //     if (lastDoc) {
    //       q = query(collection(db, firestoreQuery), startAfter(lastDoc), limit(limitOfItems));
    //     }
  
    //     const snapshot = await getDocs(q);
  
    //     if (!snapshot.empty) {
    //       const items: DCard[] = snapshot.docs.map(doc => {
    //         const data = doc.data();

    //         const timestamp = data.date?.toDate(); // Convert Firestore Timestamp to JS Date
    //         const formattedDate = timestamp
    //         ? timestamp.toLocaleDateString('ar-EG', { // Use Arabic locale
    //             weekday: 'long', // Full name of the weekday
    //             day: 'numeric', // Day of the month
    //             month: 'long', // Full name of the month
    //             year: 'numeric' // Full numeric year
    //             })
    //         : null; // Default to null if date is missing

    //         return {
    //           id: doc.id,
    //           name: data.name || '', // Default value if name is missing
    //           address: data.address || '',
    //           phone: data.phone || '',
    //           views: data.views || 0, // Default to 0 if views are missing
    //           likes: data.likes || 0, // Default to 0 if likes are missing
    //           date: formattedDate || '',
    //           pageUrl: pageUrl,
    //         };
    //       });
  
    //       setData(prevData => [...prevData, ...items]);
    //       setLastDoc(snapshot.docs[snapshot.docs.length - 1]); // Set the last document for pagination
    //       console.log(data)
    //     } else {
    //       setHasMore(false); // No more documents
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data from Firestore:", error);
    //     setHasMore(false); // Stop loading if an error occurs
    //   }
    // };


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
          const newItems: DCard[] = snapshot.docs.map(doc => {
            const data = doc.data();
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
            };
          });
  
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
                    />
                );
                })}
        </div>
    </InfiniteScroll>
  )
}

export default DalilScrollingComponent
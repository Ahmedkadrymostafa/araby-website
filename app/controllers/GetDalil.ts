import { db } from '../firebase'; 
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"; 
import { DCard } from '../types/dCard';

type Data = {
  query: string,
  pageUrl: string,
}
type DataLimited = Data & {
  limit: number
}

export const GetDalil = async (props: Data) => {
  try {
    const snapshot = await getDocs(collection(db, props.query));

    // const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    
    const items: DCard[] = snapshot.docs.map(doc => {
      const data = doc.data();

      const timestamp = data.date?.toDate(); 
      const formattedDate = timestamp
        ? timestamp.toLocaleDateString('ar-EG', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })
        : null; 

      return {
        id: doc.id,
        name: data.name , 
        address: data.address,
        phone: data.phone , 
        views: data.views, 
        likes: data.likes, 
        date: formattedDate,
        pageUrl: props.pageUrl
      };
    });

    console.log(items); 

    return items;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw new Error('Failed to fetch data');
  }
};

export const GetDalilLimited = async (props: DataLimited) => {
  try {
    const q = query(collection(db, props.query), orderBy('date', 'desc'), limit(props.limit));

    const snapshot = await getDocs(q);

    const items = snapshot.docs.map(doc => {
      const data = doc.data();

      const timestamp = data.date?.toDate(); 
      const formattedDate = timestamp
        ? timestamp.toLocaleDateString('ar-EG', { 
            weekday: 'long',
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })
        : null; 

      return {
        id: doc.id,
        name: data.name || '', 
        address: data.address || '', 
        // phone: data.phone || '', 
        views: data.views || 0,
        likes: data.likes || 0,
        date: formattedDate,
        pageUrl: props.pageUrl
      };
    });

    // console.log(items); 

    return items; 
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw new Error('Failed to fetch data');
  }
};

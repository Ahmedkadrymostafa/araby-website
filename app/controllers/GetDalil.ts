import { db } from '../firebase'; // Adjust the path to your Firebase config
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"; 
import { DCard } from '../types/dCard';

type Data = {
  query: string,
  pageUrl: string,
}
type DataLimited = Data & {
  limit: number
}

// Function to get data from Firestore
export const GetDalil = async (props: Data) => {
  try {
    const snapshot = await getDocs(collection(db, props.query));

    // const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    
    const items: DCard[] = snapshot.docs.map(doc => {
      const data = doc.data();

      const timestamp = data.date?.toDate(); // Convert Firestore Timestamp to JS Date
      const formattedDate = timestamp
        ? timestamp.toLocaleDateString('ar-EG', { // Use Arabic locale
            weekday: 'long', // Full name of the weekday
            day: 'numeric', // Day of the month
            month: 'long', // Full name of the month
            year: 'numeric' // Full numeric year
          })
        : null; // Default to null if date is missing

      return {
        id: doc.id,
        name: data.name , // Default value if name is missing
        address: data.address,
        phone: data.phone , // Default value if address is missing
        views: data.views, // Default to 0 views if missing
        likes: data.likes, // Default to 0 likes if missing
        date: formattedDate,
        pageUrl: props.pageUrl
      };
    });

    console.log(items); // Log the results

    return items; // Return the results
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw new Error('Failed to fetch data');
  }
};

export const GetDalilLimited = async (props: DataLimited) => {
  try {
    // Query to get the last 25 published items, ordered by date in descending order
    const q = query(collection(db, props.query), orderBy('date', 'desc'), limit(props.limit));

    // Get the documents
    const snapshot = await getDocs(q);

    // Map the documents into an array of objects
    const items = snapshot.docs.map(doc => {
      const data = doc.data();

      // Convert Firestore timestamp to human-readable format (similar to September 21, 2024 at 7:10:37 PM UTC+3)
      const timestamp = data.date?.toDate(); // Convert Firestore Timestamp to JS Date
      const formattedDate = timestamp
        ? timestamp.toLocaleDateString('ar-EG', { // Use Arabic locale
            weekday: 'long', // Full name of the weekday
            day: 'numeric', // Day of the month
            month: 'long', // Full name of the month
            year: 'numeric' // Full numeric year
          })
        : null; // Default to null if date is missing

      return {
        id: doc.id,
        name: data.name || '', // Default value if name is missing
        address: data.address || '', // Default value if address is missing
        // phone: data.phone || '', // Default value if phone is missing
        views: data.views || 0, // Default to 0 views if missing
        likes: data.likes || 0, // Default to 0 likes if missing
        date: formattedDate,
        pageUrl: props.pageUrl // Use the formatted date
      };
    });

    // console.log(items); // Log the results

    return items; // Return the results
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw new Error('Failed to fetch data');
  }
};

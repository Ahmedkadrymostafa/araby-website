import { doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const incrementLikes = async (docId: string): Promise<void> => {
    try {
      // Create a reference to the specific document in Firestore
      const docRef = doc(db, 'egypt/dalil/data', docId);
  
      // Increment the 'likes' field by 1
      await updateDoc(docRef, {
        likes: increment(1),
      });
  
      console.log(`Likes incremented for document ID: ${docId}`);
    } catch (error) {
      console.error("Error updating likes:", error);
      throw new Error('Failed to update likes');
    }
};


export const incrementViews = async (docId: string): Promise<void> => {
    try {
        // Create a reference to the specific document in Firestore
        const docRef = doc(db, 'egypt/dalil/data', docId);

        // Increment the 'views' field by 1
        await updateDoc(docRef, {
            views: increment(1),
        });

        console.log(`Views incremented for document ID: ${docId}`);
    } catch (error) {
        console.error("Error updating views:", error);
        throw new Error('Failed to update views');
    }
};
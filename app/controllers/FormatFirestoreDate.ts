import firebase from "firebase/compat/app";

const formatFirestoreDate = (timestamp: firebase.firestore.Timestamp | undefined | null): string | undefined => {
    if (!timestamp) return undefined; // Return undefined if timestamp is missing
  
    const date = timestamp.toDate(); // Convert Firestore Timestamp to JS Date
    return date.toLocaleDateString('ar-EG', { // Use Arabic locale for formatting
      weekday: 'long',    // Full name of the weekday
      day: 'numeric',     // Day of the month
      month: 'long',      // Full name of the month
      year: 'numeric',    // Full numeric year
    });
  };
export default formatFirestoreDate;
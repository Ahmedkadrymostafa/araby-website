import firebase from "firebase/compat/app";

const formatFirestoreDate = (timestamp: firebase.firestore.Timestamp | undefined | null): string | undefined => {
    if (!timestamp) return undefined; 
  
    const date = timestamp.toDate(); 
    return date.toLocaleDateString('ar-EG', { 
      weekday: 'long',   
      day: 'numeric',    
      month: 'long',     
      year: 'numeric',   
    });
  };
export default formatFirestoreDate;
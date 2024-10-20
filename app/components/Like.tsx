'use client';
import { AiFillLike } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { incrementLikes } from '../controllers/EditDalil'; // Import your Firestore update function

interface LikeButtonProps {
  docId?: string;  // Document ID for the Firestore entry
  source?: string
  initialLikes?: number;  // Initial number of likes to display
}

const Like: React.FC<LikeButtonProps> = ({ docId, source, initialLikes = 0, }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  
  // Check local storage for liked state on mount
  useEffect(() => {
    if (docId) {
      const likedItems = JSON.parse(localStorage.getItem('likedItems') || '[]');
      if (likedItems.includes(docId)) {
        setLiked(true);
      }

    }
  }, [docId]);


  // Function to handle the like button click
  const handleLike = async () => {
    if (!docId) {
      console.error('Document ID is required but not provided.');
      return;
    }

    if (!liked) { // Ensure the user can't like again
      try {
        // Increment likes in the Firestore document
        await incrementLikes(docId, source);

        // Update local state
        setLikes(likes + 1);
        setLiked(true);

        // Store the liked state in local storage
        const likedItems = JSON.parse(localStorage.getItem('likedItems') || '[]');
        likedItems.push(docId);
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
      } catch (error) {
        console.error('Failed to increment likes:', error);
      }
    }
  };

  return (
    <div className='flex items-center justify-between'>
        <p className='second-color font-black text-sm'>{likes}</p>
        <div className={`text-2xl  flex items-center gap-1
            ${liked ? 'text-green-500' : 'main-color cursor-pointer'}`}
            onClick={handleLike}>
            <AiFillLike />        
        </div>
    </div>
  );
};

export default Like;

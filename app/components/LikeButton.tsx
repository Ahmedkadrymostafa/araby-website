'use client';
import { AiFillLike } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { incrementLikes } from '../controllers/EditDalil'; // Import your Firestore update function
import { incrementViews } from '../controllers/EditDalil'; // Import your Firestore view increment function

interface LikeButtonProps {
  docId?: string;  // Document ID for the Firestore entry
  source?: string
  initialLikes?: number;  // Initial number of likes to display
  initialViews?: number;   // Initial number of views to display
}

const LikeButton: React.FC<LikeButtonProps> = ({ docId, source, initialLikes = 0, initialViews = 0 }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [views, setViews] = useState(initialViews);
  
  // Check local storage for liked state on mount
  useEffect(() => {
    if (docId) {
      const likedItems = JSON.parse(localStorage.getItem('likedItems') || '[]');
      if (likedItems.includes(docId)) {
        setLiked(true);
      }

      // Check local storage for viewed state
      const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '[]');
      if (!viewedItems.includes(docId)) {
        // If not viewed, increment views and update local storage
        incrementViewCount();
        viewedItems.push(docId);
        localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
      }
    }
  }, [docId]);

  // Function to increment views
  const incrementViewCount = async () => {
    if (!docId) {
      console.error('Document ID is required but not provided.');
      return;
    }
    try {
      await incrementViews(docId, source); // Call the function to increment views in Firestore
      setViews(views + 1); // Update local state
    } catch (error) {
      console.error('Failed to increment views:', error);
    }
  };

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
      <div className={`text-2xl  flex items-center gap-1
        ${liked ? 'text-green-500' : 'main-color cursor-pointer'}`}
        onClick={handleLike}>
        <AiFillLike />
        <p>اعجبني</p>
      </div>

      <div>
        <div className='flex items-center gap-2 justify-end mb-2'>
            <p className='second-color font-black text-sm'>{views}</p>
            <p className='text-base font-black main-color'>المشاهدات</p>
        </div>
        <div className='flex items-center gap-2 justify-end'>
            <p className='second-color font-black text-sm'>{likes}</p>
            <p className='text-base font-black main-color'>اعجاب</p>
        </div>
      </div>
    </div>
  );
};

export default LikeButton;

'use client'
import React, { FC, useState } from "react";
import { collection, query, getDocs, orderBy, startAt, endAt } from "firebase/firestore";
import { db } from "../firebase";
import { DCard } from "../types/dCard";
import DalilCard from "./DalilCard";
import formatFirestoreDate from "../controllers/FormatFirestoreDate";
import { FaSearch } from "react-icons/fa";
import SearchLoading from "./SearchLoading";

interface DalilSearch {
  firestoreQuery: string,
  pageUrl: string,
  countryNameInArabic: string
}

const DalilSearchComponent: FC<DalilSearch> = ({ firestoreQuery, pageUrl, countryNameInArabic }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<DCard[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [noResult, setNoResult] = useState(false)

const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)

    if (searchTerm === "") {
      setResults([]);
      setIsLoading(false) 
      return;
    }
  
    try {
      const searchResults: DCard[] = [];
  
      // Search by name
      const nameQuery = query(
        collection(db, firestoreQuery),
        orderBy("name"),
        startAt(searchTerm),
        endAt(searchTerm + "\uf8ff") // This is to perform a "starts with" query
      );
  
      const nameQuerySnapshot = await getDocs(nameQuery);
      nameQuerySnapshot.forEach((doc) => {
        const data = doc.data();
        searchResults.push({ id: doc.id, name: data.name, address: data.address, views: data.views, likes: data.likes, date: formatFirestoreDate(data.date), pageUrl: pageUrl});
      });
  
      // Search by address
      const addressQuery = query(
        collection(db, firestoreQuery),
        orderBy("address"),
        startAt(searchTerm),
        endAt(searchTerm + "\uf8ff")
      );
  
      const addressQuerySnapshot = await getDocs(addressQuery);
      addressQuerySnapshot.forEach((doc) => {
        const data = doc.data();
        searchResults.push({ id: doc.id, name: data.name, address: data.address, views: data.views, likes: data.likes, date: data.date, pageUrl: pageUrl});
      });
  
      // Remove duplicates (in case the same document is found in both name and address search)
      const uniqueResults = searchResults.filter((value, index, self) =>
        index === self.findIndex((t) => t.id === value.id)
      );
      
      if (uniqueResults.length === 0) {
        setNoResult(true);
      }else {
        setNoResult(false);
      }
      setResults(uniqueResults); // Set the merged and unique results
    } catch (error) {
      console.error("Error searching Firestore:", error);
    } finally {
        setIsLoading(false);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSearch} className="flex justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`ابحث عن عنوان او اسم مكان فى ${countryNameInArabic}`}
          className="border p-2 text-xl rtl w-[70%] max-sm:w-72"
        />
        <button type="submit" className="main-color-bg text-white p-2 ml-2 h-[42px] w-12 flex justify-center items-center">
            {isLoading ? 
            <SearchLoading />
            : 
            <FaSearch className="text-2xl" />
            }
        </button>
      </form>

      <div className="mt-4 text-center">
        {results.length > 0 && 
            <div>
                <h1 className="main-color font-bold text-2xl">نتائج البحث</h1>
                <div className='flex justify-between gap-8 flex-wrap my-10'>
                    {results.map((e) => {
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
            </div>
        }
        {noResult && <p>لا توجد نتائج حالية</p>}
      </div>
      <hr />
    </div>
  );
};

export default DalilSearchComponent;

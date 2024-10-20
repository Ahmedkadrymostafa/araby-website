import { MetadataRoute } from "next";
import { db } from './firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
    const egyptRef = query(collection(db, "egypt/dalil/data"), where("status", "==", "published"));
    const egyptDocs = await getDocs(egyptRef);

    const egyptEntries = egyptDocs.docs.map((doc) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/egypt/guide/${doc.id}`,
        lastModified: new Date()
    }));
    
    const saudiRef = query(collection(db, "saudi/dalil/data"), where("status", "==", "published"));
    const saudiDocs = await getDocs(saudiRef);

    const saudiEntries = saudiDocs.docs.map((doc) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/saudi/guide/${doc.id}`,
        lastModified: new Date()
    }));


    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/egypt`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/egypt/guide`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/saudi`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/saudi/guide`,
            lastModified: new Date()
        },
        ...egyptEntries,
        ...saudiEntries
    ]
}        
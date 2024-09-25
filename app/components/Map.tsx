'use client'
import { FC } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

interface MapProps {
    mapUrl: string,
    name?: string // Ensure this is a string type
}

function getLocationFromUrl(url: string) {
    try {
        const parsedUrl = new URL(url);
        const params = new URLSearchParams(parsedUrl.search);
        
        // Extracting the 'q' parameter value
        const location = params.get('q');
        
        if (location) {
            const [latitude, longitude] = location.split(',').map(coord => parseFloat(coord.trim()));
            return { latitude, longitude };
        } else {
            throw new Error("Location not found in the URL");
        }
    } catch (error) {
        console.error("Invalid URL or error extracting location:", error);
        return null; // or you could return { latitude: null, longitude: null }
    }
}



const Map: FC<MapProps> = ({ mapUrl, name }) => {
    const location = getLocationFromUrl(mapUrl);
    console.log(location); // { latitude: 31.19578, longitude: 29.9224 }
    return (
        <div className="mt-9">
            <h1 className="text-xl main-color font-semibold text-center mb-3 flex justify-center items-center gap-2 max-sm:flex-col-reverse">
                <MdOutlineKeyboardDoubleArrowDown className="text-3xl font-black" />
                {`عنوان ${name} على خرائط جوجل`}
            </h1>
            <iframe
                height="350"
                loading="lazy"
                className="my-6 w-full"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${location?.latitude},${location?.longitude}
            `}>
            </iframe>
        </div>
    )
    
};

export default Map;

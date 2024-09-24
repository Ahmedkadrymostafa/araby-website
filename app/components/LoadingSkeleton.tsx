import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-8 my-10">
        <div className="w-60">
            <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
            {/* <div className="h-48 bg-gray-300"></div> */}
            <div className="px-6 py-4 flex justify-end flex-col">
                <div className="h-4 bg-gray-300 w-2/3 mb-3 ml-auto"></div>
                <div className="h-6 bg-gray-300 mb-3"></div>
                <div className="h-4 bg-gray-300 mb-2"></div>
                <div className="h-4 bg-gray-300 w-1/3 ml-auto"></div>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
                <div className="h-4 bg-gray-300 w-8 mb-2 rounded-xl"></div>
                <div className="h-4 bg-gray-300 w-8 rounded-xl"></div>
            </div>
            </div>
        </div>
        <div className="w-60">
            <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
            {/* <div className="h-48 bg-gray-300"></div> */}
            <div className="px-6 py-4 flex justify-end flex-col">
                <div className="h-4 bg-gray-300 w-2/3 mb-3 ml-auto"></div>
                <div className="h-6 bg-gray-300 mb-3"></div>
                <div className="h-4 bg-gray-300 mb-2"></div>
                <div className="h-4 bg-gray-300 w-1/3 ml-auto"></div>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
                <div className="h-4 bg-gray-300 w-8 mb-2 rounded-xl"></div>
                <div className="h-4 bg-gray-300 w-8 rounded-xl"></div>
            </div>
            </div>
        </div>
        <div className="w-60">
            <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
            {/* <div className="h-48 bg-gray-300"></div> */}
            <div className="px-6 py-4 flex justify-end flex-col">
                <div className="h-4 bg-gray-300 w-2/3 mb-3 ml-auto"></div>
                <div className="h-6 bg-gray-300 mb-3"></div>
                <div className="h-4 bg-gray-300 mb-2"></div>
                <div className="h-4 bg-gray-300 w-1/3 ml-auto"></div>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
                <div className="h-4 bg-gray-300 w-8 mb-2 rounded-xl"></div>
                <div className="h-4 bg-gray-300 w-8 rounded-xl"></div>
            </div>
            </div>
        </div>
        <div className="w-60">
            <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
            {/* <div className="h-48 bg-gray-300"></div> */}
            <div className="px-6 py-4 flex justify-end flex-col">
                <div className="h-4 bg-gray-300 w-2/3 mb-3 ml-auto"></div>
                <div className="h-6 bg-gray-300 mb-3"></div>
                <div className="h-4 bg-gray-300 mb-2"></div>
                <div className="h-4 bg-gray-300 w-1/3 ml-auto"></div>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
                <div className="h-4 bg-gray-300 w-8 mb-2 rounded-xl"></div>
                <div className="h-4 bg-gray-300 w-8 rounded-xl"></div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default LoadingSkeleton
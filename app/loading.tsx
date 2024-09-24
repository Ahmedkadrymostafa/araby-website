export default function Loading() {
  return (
     <div className="fixed h-screen w-screen top-0 left-0 bg-white z-[300]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="loader"></div> 
        </div>
     </div>
  )
}

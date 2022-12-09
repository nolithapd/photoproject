import { useState, useEffect } from "react"
import Image from "../Image"

export default function Wallpapers()
{
    const [wallpapers,setWallpapers]=useState([])

    useEffect(() => {
        const fetchWallpapers = async() => {
            const results = await fetch(
                `https://api.unsplash.com/topics/wallpapers/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            const data = await results.json()
            setWallpapers(data)
            console.log(data)
        }

        fetchWallpapers()
    }, [])
   

    return(
        <>
           {!wallpapers ? (
           <h1 className="flex items-center justify-center h-screen font-bold text-4xl
           text-center text-slate-800">Loading....</h1>):(
            <section className="px-5 container mx-auto">
              
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {wallpapers.map((image) =>(
                        <Image key={image.id} {...image}  />
                    ))}
                </div>
           </section>
           )}
           
        </>
    )
}
import { useState, useEffect } from "react"
import Image from "./Image"

export default function GetPhotos()
{
    const [photos,setPhotos]=useState([])

    useEffect(() => {
        const fetchPhotos = async() => {
            const results = await fetch(
                `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            const data = await results.json()
            setPhotos(data)
            console.log(data)
        }

        fetchPhotos()
    }, [])
    const ImageClicked  = event => {
        console.log("clicked")
    }

    return(
        <>
           {!photos ? (
           <h1 className="flex items-center justify-center h-screen font-bold text-4xl
           text-center text-slate-800">Loading....</h1>):(
            <section className="px-5 container mx-auto">
                <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl
                my-10 lg:mt-20 lg:mb-16">Your choices</h2>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {photos.map((image) =>(
                        <Image key={image.id} {...image}  />
                    ))}
                </div>
           </section>
           )}
           
        </>
    )
}
import { useState, useEffect } from "react"
import Image from "../Image"

export default function Travel()
{
    const [travel,setTravel]=useState([])

    useEffect(() => {
        const fetchTravel = async() => {
            const results = await fetch(
                `https://api.unsplash.com/topics/travel/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            const data = await results.json()
            setTravel(data)
            console.log(data)
        }

        fetchTravel()
    }, [])
   

    return(
        <>
           {!travel ? (
           <h1 className="flex items-center justify-center h-screen font-bold text-4xl
           text-center text-slate-800">Loading....</h1>):(
            <section className="px-5 container mx-auto">
              
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {travel.map((image) =>(
                        <Image key={image.id} {...image}  />
                    ))}
                </div>
           </section>
           )}
           
        </>
    )
}
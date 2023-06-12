import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "./Card"
const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/popularClass")
        .then(res => {
            setPopularClass(res.data)
        })
    },[])
  return (
    <div>
        <h1 className="my-6 text-center text-3xl sm:text-4xl uppercase font-medium">Popular class</h1>
       {
        popularClass.length > 0 && Array.isArray(popularClass) ?<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
                popularClass.map(popular => <Card key={popular._id} popular={popular}/>)
            }
        </div>:<p>No data found</p>
       }
    </div>
  )
}

export default PopularClass
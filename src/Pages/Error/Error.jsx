import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Lottie from "lottie-react";
import errorImg from '../../assets/FormImg/error.json'


const Error = () => {
    const {error, status} = useRouteError()
   
   return (
     <div>
       <div className="py-4">
        <h1 className='text-center text-6xl font-bold text-red-500'>{status}</h1>
         <p className="text-center text-4xl mb-3">{error.message}</p>

         <Link to='/' className='py-2 px-4 bg-teal-500 text-white'>Back to Home</Link>
       </div>
       <Lottie animationData={errorImg} size={10} />
     </div>
   );
}

export default Error
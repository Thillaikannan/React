import React from 'react'
import { useState,useEffect } from 'react';

const Traffic = () => {
    const[light,setLight] = useState('red');
    const[timer,setTimer] = useState({
        red: 10,
        yellow: 6,
        green: 15
    })
    const[timeLeft, setTimeLeft] = useState(timer[light]);
    
    const nextLight = () => {
        if(light === 'red') return 'green';
        if(light === 'green') return 'yellow';
        return red;
    };

    const switchLight = () => {
        const next = nextLight();
        setLight(next);
    };

     useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if(prev === 1){
                    switchLight();
                    return timer[nextLight];
                }
                return prev - 1;
            })

        }, 1000)
        return () => clearInterval(interval)
     }, [light, timer])   

     useEffect(() => {
        const timeout = setTimeout(() => {
            setTimer({
            red: 20,
            green: 30,
            yellow: 10
          })
        }, 60000)
        return () => clearTimeout(timeout);
     }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-20 h-60 bg-black flex flex-col justify-around items-center p-2 rounded-lg shadow-lg">
        <div className={`w-12 h-12 rounded-full ${light === 'red' ? 'bg-red-600' : 'bg-gray-400'}`} />
        <div className={`w-12 h-12 rounded-full ${light === 'yellow' ? 'bg-yellow-400' : 'bg-gray-400'}`} />
        <div className={`w-12 h-12 rounded-full ${light === 'green' ? 'bg-green-600' : 'bg-gray-400'}`} />
      </div>

      <div className="mt-6 text-center">
        <p className="text-xl font-bold">Current Light: <span className="capitalize">{light}</span></p>
        <p className="text-lg">Time Left: {timeLeft} seconds</p>

        {/* {message && (
          <p className="mt-4 text-blue-600 font-semibold">{message}</p>
        )} */}
      </div>
    </div>
  )
}

export default Traffic

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const Data = () => {
    const [user, setuser] = useState([]);
    const [isloading , setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(()=>{
    setTimeout(() => {
         let fetchData = async () =>{
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok) throw new Error("Network response was not ok");
            let data = await response.json();
            if(!data) throw new Error("No Data Found!!")
            setuser(data)
            setIsLoading(false)
        }catch(e){
            console.error("Error fetching data:", e);
            setError("Failed to fetch data");
            setIsLoading(false)
        }
    }
    fetchData();
    },1000)
  }, [])


  return (
    <div>
      <h2>Data</h2>
      {isloading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      {!isloading && !error && (
        <ul>
          {user.map((item) => (
            <li key={item.id} style={{listStyle: 'none'}}>
              {item.username} - {item.name} - {item.email}

            </li>
          ))}
        </ul>
      )}
       
    </div>
  )
}

export default Data

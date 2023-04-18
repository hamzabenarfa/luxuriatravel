import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import './Home.css'

export default function Home() {



const [user, setUser] = React.useState("");
   
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:8000/api/user');
      setUser(res.data)
    };

    getUser();
  }, []);
console.log("user:"+user)
  return (
    <div>
        {
            user && user.map((users) =>{
                return(
                    <div key={users.id}>
                         <h1>{users.username}</h1>
                         
                    </div>
                )
            })
        }

    </div>

  )
}

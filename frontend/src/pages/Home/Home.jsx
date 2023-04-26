import React from 'react'
import './Home.css'
import useAxios from '../../hooks/useAxios';
import useFetch from '../../hooks/useFetch';

export default function Home() {

  const { data } = useAxios(
    "https://localhost:8000/api/user","get"
  );
  console.log(data);



  return (
    <div>
        {
            data && data.map((users) =>{
                return(
                    <div key={users.id}>
                         <h1>{users.nom}</h1>
                         
                    </div>
                )
            })
        }

    </div>

  )
}

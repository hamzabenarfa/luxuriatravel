import React from 'react'
import './Home.css'
import useAxios from '../../hooks/useAxios';
import useFetch from '../../hooks/useFetch';

export default function Home() {
  const url = "https://localhost:8000/api";
  const { data } = useAxios(
   `${url}/user` ,'get'
  );
  console.log(data);



  return (
    <div>
        {
            data && data.map((users) =>{
                return(
                    <div key={users.id}>*user
                         <h1>{users.nom}</h1>mail
                      <h1>{users.mail}</h1>

                    </div>
                )
            })
        }

    </div>

  )
}

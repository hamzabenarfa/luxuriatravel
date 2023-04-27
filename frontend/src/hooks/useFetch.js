import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(true);
    
    useEffect(() => {
        
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setData(data);
                    setLoading(false);
                }
                catch(error){
                    setError(error);
                    setLoading(false);
                }
            }
            
            
        fetchData();
    }, [url]);
    
    return { data, Loading, error };

}

export  default useFetch;
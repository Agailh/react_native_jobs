import { useState, useEffect } from "react";
import axios from "axios";


// const RapidAPIKey =  RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


   


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '4e03450d69msha1598d9aa566394p130b51jsn066662dad5a1',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          ...query
        },
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            alert('there is an error')
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(()=> {
        fetchData();
      }, []);

      const refetch = ()=> {
        setIsLoading(true)
        fetchData();
      }
      return { data, isLoading, error, refetch}
}

export default useFetch
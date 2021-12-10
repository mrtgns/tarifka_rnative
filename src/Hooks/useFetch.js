import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [data, setdata] = useState([]);
 

  async function fetchData() {
    try {
      const {data: responsedata} = await axios.get(url);
      setdata(responsedata);
    } catch (error) {
      seterror(error);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading,data};
}

export default useFetch;
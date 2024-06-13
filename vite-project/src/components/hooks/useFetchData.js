import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState();
  const [loading,setIsLoading]=useState(true);
  
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data,loading };
};

export default useFetchData;
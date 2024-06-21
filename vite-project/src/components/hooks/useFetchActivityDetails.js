import { useEffect, useState } from "react";

export const useFetchActivityDetails = (id) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost/calenderbackend/public/api/activities/activity/details/"+id);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data
  };
};
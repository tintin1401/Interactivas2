import { useEffect, useState } from "react";

export const useFetchActivities = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost/calendar/calenderbackend/public/api/activities/all");
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
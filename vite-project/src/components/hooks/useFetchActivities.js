// import { useEffect, useState } from "react";

// export const useFetchActivities = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     try {
//       const response = await fetch("http://localhost/calenderbackend/public/api/activities/all");
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return {
//     data
//   };
// };


import { useState, useEffect } from "react";

export const useFetchActivities = (url) => {
  const [data, setData] = useState();
  const [loading,setIsLoading]=useState(true);
  
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data,loading };
};

export default useFetchActivities;
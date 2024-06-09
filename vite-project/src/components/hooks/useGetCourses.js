import { useState, useEffect } from "react";

export const useGetCourses = (url) => {
  const [courses, setCourses] = useState();
  const [loading,setIsLoading]=useState(true);
  
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCourses(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { courses,loading };
};

export default useGetCourses;
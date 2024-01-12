import React, { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable 
        setCourses(output.data);
        console.log("courses value updated");
        console.log(courses);
      }
      catch (error) {
        toast.error("Something went wrong");
      }
    }
    fetchData();
  }, [courses]);

  return (
    <div>
      <Navbar />

      <Filter
        filterData={filterData}
      />

      <Cards courses={courses} />
    </div>
  );
};

export default App;

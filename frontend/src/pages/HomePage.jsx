import React from "react";
import { useEffect, useState } from "react";

const HomePage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:5000/api/users/get");
        // console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;

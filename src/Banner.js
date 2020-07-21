import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
      //   Math.floor(Math.random() * requests.data.results.length - 1)
      //grabs random number within data set that dictates whats displayed by the banner
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header>
      {/** title */}
      {/** div > 2 buttons */}
      {/** description */}
    </header>
  );
}

export default Banner;

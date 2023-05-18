import React, { useEffect, useState } from "react";
import SongCard from "../Components/SongCard";
import axios from "axios";
const TopCharts = () => {
  const [topSongs, setTopSongs] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://shazam.p.rapidapi.com/charts/track",
      params: {
        locale: "en-US",
        pageSize: "20",
        startFrom: "0",
      },
      headers: {
        "X-RapidAPI-Key": "9e604c4724msh5626ea1a7adc77bp1304f3jsn04c3b63e0ace",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    }).then((response) => {
      console.log(response.data.tracks);
      setTopSongs(response.data.tracks);
    });
  }, []);

 
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {topSongs.map((track, i) => (
          <SongCard key={track.key} track={track} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;

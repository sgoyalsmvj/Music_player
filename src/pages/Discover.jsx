import axios from "axios";
import React, { useEffect, useState } from "react";
import SongCard from "../Components/SongCard";
import { genres } from "../assets/constants";

const Discover = () => {
  const [songData, setSongData] = useState([]);
  const genreTitle = "Pop";
  const [fetchCounter, setFetchCounter] = useState(0);

  useEffect(() => {
    if (fetchCounter < 2) {
      axios({
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: {
          locale: 'en-US',
          pageSize: '20',
          startFrom: '0'
        },
        headers: {
          'X-RapidAPI-Key': '9e604c4724msh5626ea1a7adc77bp1304f3jsn04c3b63e0ace',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        },
      }).then((response) => {
        console.log(response.data.tracks);
        setSongData(response.data.tracks);
        setFetchCounter((prevCounter) => prevCounter + 1);
      });
    }
  }, [fetchCounter]);

  return (
    <div className="flex flex-col ">
      <div className=" flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="fond-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songData.map((track, i) => (
          <SongCard key={track.key} track={track} index={i} />
        ))}
      </div>

    </div>
  );
};

export default Discover;

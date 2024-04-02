"use client"
import React, { useState } from "react";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import SongCard from "../ui/SongCard";

// import { Error, Loader, SongCard } from '../components';
// import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  //   const { data, isFetching, error } = useGetTopChartsQuery();
  //   const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [data, setData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [activeSong, setActiveSong] = useState("");
  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;

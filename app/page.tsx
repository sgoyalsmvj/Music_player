"use client";
import Image from "next/image";
import Sidebar from "./ui/Sidebar";
import { genres } from "@/public/constants";
import SongCard from "./ui/SongCard";
import Loader from "./ui/Loader";
import { useState } from "react";
import Error from "./ui/Error";
export default function Home() {
  // const { genreListId } = useSelector((state) => state.player);
  // const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
  const [genreListId, setGenreListId] = useState("pop");
  const [activeSong, setActiveSong] = useState("");
  const [data, setData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <main className="">
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <h2 className="font-bold text-3xl text-white text-left">
            Discover {genreTitle}
          </h2>

          <select
            onChange={(e) => setGenreListId(e.target.value)}
            value={genreListId || "pop"}
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data?.map((song, i) => (
            <SongCard
              key={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

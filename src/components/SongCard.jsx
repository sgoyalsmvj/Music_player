import React from "react";
import { Link } from "react-router-dom";

const SongCard = ({ track, i }) => {
  return (
    <div className="flex flex-col w-[200px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-46 group">
        <img
          alt="song_img"
          src={track.images.coverart}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <Link >
          <p className="font-semibold text-lg text-white truncate">
            {track.title}
          </p>
        </Link>
        <Link>
          <p className="text-sm truncate text-gray-300 mt-1">
            {track.subtitle}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SongCard;

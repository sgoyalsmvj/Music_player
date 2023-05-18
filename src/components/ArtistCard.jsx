import React from "react";

const ArtistCard = ({ track }) => {
  return (
    <div
      className="flex flex-col w-[200px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    //   onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="song_img"
        src={track?.images?.background}
        className="w-full h-46 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;

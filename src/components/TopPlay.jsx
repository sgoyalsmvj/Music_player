import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import axios from "axios";
import { Link } from "react-router-dom";

const TopChartCard = ({ track, i }) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e] 
      bg-transparent py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={track?.images?.coverart}
        alt={track?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <p className="text-xl font-bold text-white">{track?.title}</p>
        <p className="text-base text-gray-300 mt-1">{track?.subtitle}</p>
      </div>
    </div>
  </div>
);

const TopPlay = () => {
  const [topPlay, setTopPlay] = useState([]);
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
      setTopPlay(response.data.tracks.slice(0, 5));
    });
  }, []);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to='/top-charts'>
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlay?.map((track, i) => (
            <TopChartCard key={track.key} track={track} i={i} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to='/top-artists'>
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlay?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <img
                src={artist?.images?.background}
                alt="Name"
                className="rounded-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;

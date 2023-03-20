import { useEffect,useRef } from "react"

import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import {Swiper,SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css'
import 'swiper/css/free-mode'

import PlayPause from './PlayPause'

import {playPause,setActiveSong} from '../redux/features/playerSlice';
import {useGetTopChartsQuery, useTopChartsQuery} from '../redux/services/shazamCore';



const TopPlay = () => {
  useEffect(()=>{
    divRef.current.scrollIntoView({behavior:'smooth'});
  });
  const dispatch = useDispatch();
  const {activeSong,isPlaying} = useSelector((state)=>state.player);

  const {data}  = useGetTopChartsQuery();
  const divRef = useRef(null);
  const topPlays = data?.slice(0,5);
  const handlePauseClick = ()=>{

  }
  const handlePlayClick = ()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(false));
  }
  return (
    <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-0  mb-6 flex-1 xl:max-w-500px max-w-full flex flex-col'>
      <div className=""></div>
    </div>
  )
}

export default TopPlay
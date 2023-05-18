import "./App.css";
import Discover from "./Pages/Discover";
import SideBar from "./Components/SideBar";
import TopArtists from "./Pages/TopArtists";
import TopCharts from "./Pages/TopCharts";
import SongDetails from "./Pages/SongDetails";
import ArtistDetails from "./Pages/ArtistDetails";
import Search from "./Pages/Search";
import TopPlay from "./Components/TopPlay";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="relative flex">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Search />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
          <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

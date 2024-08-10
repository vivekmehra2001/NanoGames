
import React from "react";
import MainSlider from "./sliders/MainSlider";
import FirstSlider from "./sliders/FirstSlider";
import SecondSlider from "./sliders/SecondSlider";
import ThirdSlider from "./sliders/ThirdSlider";
import FourthSlider from "./sliders/FourthSlider";
import MenuButtons from "./MenuButtons";
import BestSlots from "./BestSlots";
import FeatureSlots from "./FeatureSlots";
import GameProvider from "./GameProvider";
import LiveGames from "./LiveGames";
import BiggestWinner from "./BiggestWinner";
import LatestTable from "./LatestTable";

function Home() {
  return (
    <div className="p-4 md:ml-64">
      {/* Main Slider */}
      <div className="mb-4">
        <MainSlider />
      </div>

      {/* Sliders Section */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#181a1d] rounded-2xl p-4">
        {/* First Slider */}
        <div className="flex items-center justify-center">
          <FirstSlider />
        </div>

        {/* Second Slider */}
        <div className="flex items-center justify-center">
          <SecondSlider />
        </div>

        {/* Third Slider - hidden on screens smaller than md */}
        <div className="hidden md:flex items-center justify-center">
          <ThirdSlider />
        </div>

        {/* Fourth Slider - hidden on screens smaller than lg */}
        <div className="hidden lg:flex items-center justify-center">
          <FourthSlider />
        </div>
      </div>

      {/* Menu Buttons */}
      <div className="my-2">
        <MenuButtons />
      </div>

      {/* BestSlots Component */}
      <div className="my-4">
        <BestSlots />
      </div>

      {/* FeatureSlots Component */}
      <div className="my-4">
        <FeatureSlots />
      </div>

      {/* Game Provider Component */}
      <div className="my-4">
        <GameProvider />
      </div>

      {/* Live Games Component */}
      <div className="my-4">
        <LiveGames />
      </div>

      {/* Biggest Winner Component */}
      <div className="my-4">
        <BiggestWinner />
      </div>

      {/* Latest Table Component */}
      <div className="my-4">
        <LatestTable />
      </div>
    </div>
  );
}

export default Home;

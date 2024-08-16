
import React, { useState } from 'react';
import { betsData, contestData } from '../data/BetsData';  // Adjust the path as necessary
import { IoDice } from "react-icons/io5";

const LatestTable = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='mt-24 px-4'>
      {/* <div className='flex w-60  justify-center bg-[#303238] font-semibold text-white rounded-full '>
        <button
          className={`w-1/2 text-center hover:text-white rounded-full py-2 px-4 transition-colors duration-300 ${activeTab === 'latest' ? 'bg-[#63656b]' : ''}`}
          onClick={() => handleTabClick('latest')}
        >
          Latest bets
        </button>
        <button
          className={`w-1/2 text-center hover:text-white rounded-full py-2 px-4 transition-colors duration-300 ${activeTab === 'contest' ? 'bg-[#63656b]' : ''}`}
          onClick={() => handleTabClick('contest')}
        >
          Contest
        </button>
      </div> */}
       <div className="flex flex-row overflow-hidden md:flex-row w-auto  max-w-sm  bg-[#303238] font-semibold text-white rounded-full">
      <button
        className={`w-full md:w-1/2 text-center hover:text-white rounded-full py-2 px-4 transition-colors duration-300 ${activeTab === 'latest' ? 'bg-[#63656b]' : 'bg-[#303238], text-gray-400'}`}
        onClick={() => handleTabClick('latest')}
      >
        Latest bets
      </button>
      <button
        className={`w-full md:w-1/2 text-center hover:text-white rounded-full py-2 px-4 transition-colors duration-300 ${activeTab === 'contest' ? 'bg-[#63656b]' : 'bg-[#303238],  text-gray-400'}`}
        onClick={() => handleTabClick('contest')}
      >
        Contest
      </button>
    </div>

      {activeTab === 'latest' ? (
        <div className='w-full h-full rounded-3xl mt-3 p-6 bg-[#181a1d] overflow-x-auto'>
          <div className='grid grid-cols-5 gap-4 font-medium text-gray-600 min-w-[700px]'>
            <div className='text-center'>Game</div>
            <div className='text-center'>Player</div>
            <div className='text-center'>Bet ID</div>
            <div className='text-center'>Payout</div>
            <div className='text-center'>Profit</div>
          </div>
          {betsData.map((bet, index) => (
            <div key={index} className='grid grid-cols-5 font-bold gap-4 py-2 mt-2 text-gray-400 min-w-[700px]'>
              <div className='flex justify-center items-center gap-2'>
                <div >
                <IoDice className='text-yellow-400 ' />
                </div>
                {bet.game}
              </div>
              <div className='text-center'>{bet.player}</div>
              <div className='text-center'>{bet.betId}</div>
              <div className='text-center'>{bet.payout}</div>
              <div className='text-center text-[rgb(67,169,9)]'>+{bet.profit}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full h-full rounded-3xl mt-3 p-6 bg-[#181a1d] overflow-x-auto'>
          <div className='grid grid-cols-3 gap-4 font-medium text-gray-600 min-w-[500px]'>
            <div className='text-center'>Contest Name</div>
            <div className='text-center'>Participants</div>
            <div className='text-center'>Prize</div>
          </div>
          {contestData.map((contest, index) => (
            <div key={index} className='grid grid-cols-3 font-bold gap-4 py-2 mt-2 text-gray-400 min-w-[500px]'>
              <div className='text-center'>{contest.name}</div>
              <div className='text-center'>{contest.participants}</div>
              <div className='text-center text-[rgb(67,169,9)]'>{contest.prize}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestTable;

import React, { useState } from 'react';
import Shower from '../homework/shower';
import SideBar from '../navBar/sideBar';

const LeaderBoard = () => {
  const ranks = [1, 2, 5, 0, 4, 8, 9, 3, 6, 7];
  const names = [
    { name: 'a', rank: 0, data: 'Improve Yourself' },
    { name: 'b', rank: 1, data: 'Keep Learning' },
    { name: 'c', rank: 2, data: 'Stay Focused' },
    { name: 'd', rank: 4, data: 'Be Determined' },
    { name: 'e', rank: 5, data: 'Embrace Challenges' },
    { name: 'f', rank: 6, data: 'Think Positively' },
    { name: 'g', rank: 7, data: 'Strive for Success' },
    { name: 'h', rank: 8, data: 'Believe in Yourself' },
    { name: 'i', rank: 9, data: 'Dream Big' },
  ];


  const [search, setSearch] = useState('');

  const filteredNames = names
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-6">
      <div className="flex flex-col p-6 rounded-lg max-w-full w-full sm:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leaderboard</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by Name"
          className="w-full max-w-full p-4 border-2 border-gray-300 rounded-lg mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* List of items */}
        <div className="max-h-[400px] ">
          <ul className="space-y-4">
            {filteredNames.length === 0 ? (
              <li className="text-center text-gray-500">No items match your search.</li>
            ) : (
              filteredNames.map((item, index) => (
                <li
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-semibold text-gray-700">#{index + 1}</h3>
                  <p className="text-gray-600">Name: {item.name}</p>
                  <p className="text-gray-500">Rank: {item.rank}</p>  
                  <Shower data={item.data} />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <SideBar/>
    </div>
  );
};

export default LeaderBoard;
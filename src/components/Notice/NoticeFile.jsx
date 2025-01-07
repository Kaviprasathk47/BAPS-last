import React from 'react';
import Popup from '../PopUp-Components/Shower.jsx';

const LeaderBoard = () => {
  const Notice = [
    { name: 'a', rank: 0, data: 'Improve Yourself' },
    { name: 'b', rank: 1, data: 'Keep Learning' },
    { name: 'c', rank: 0, data: 'Stay Focused' },
    { name: 'd', rank: 0, data: 'Be Determined' },
    { name: 'e', rank: 1, data: 'Embrace Challenges' },
    { name: 'f', rank: 6, data: 'Think Positively' },
    { name: 'g', rank: 0, data: 'Strive for Success' },
    { name: 'h', rank: 8, data: 'Believe in Yourself' },
    { name: 'i', rank: 1, data: 'Dream Big' },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-6">
      <div className=" p-6 rounded-lg max-w-full w-full sm:w-3/4 lg:w-1/2">
      <div><h2 className="text-2xl font-semibold text-gray-800 mb-4">Noice File</h2></div>
      <div>
        

        {/* List of items */}
        <div className="max-h-[400px] ">
          <ul className="space-y-4">
            {Notice.length === 0 ? (
              <li className="text-center text-gray-500">No items match your search.</li>
            ) : (
              Notice.map((item, index) => (
                <li
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  {item.rank === 1 ? (
                    <div>
                      
                      <h3 className="font-semibold text-gray-700">#{index + 1}</h3>
                      <p className="text-gray-600">Name: {item.name}</p>
                    
                      <Popup data={item.data} />
                    </div>
                  ) : (
                    <div>
                      
                      <h3 className="font-semibold text-gray-700">#{index + 1}</h3>
                      <p className="text-gray-600">Name: {item.name}</p>
                      <Popup data={item.data} />
                    </div>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LeaderBoard;

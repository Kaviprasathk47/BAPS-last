import Shower from './Shower';
import { useState } from 'react';

const HomeWork = () => {
  const [search, setSearch] = useState('');
  const homework = [
    {
      id: 1,
      title: 'Maths',
      description: 'Solve all the questions from page 1 to 10',
      dueDate: '2021-10-10',
      data: 'many items',
    },
    {
      id: 2,
      title: 'Science',
      description: 'Complete the experiment 1 and 2',
      dueDate: '2021-10-12',
      data: 'many items',
    },
    {
      id: 3,
      title: 'English',
      description: 'Write a paragraph on your favorite book',
      dueDate: '2021-10-14',
      data: 'many items',
    },
    {
      id: 4,
      title: 'English',
      description: 'Write a paragraph on your favorite book',
      dueDate: '2021-10-14',
      data: 'many items',
    },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredValue = homework.filter((work) => {
    return (
      work.title.toLowerCase().includes(search.toLowerCase()) ||
      work.dueDate.includes(search)
    );
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-6">
      <div className="flex flex-col p-6 rounded-lg max-w-full w-full sm:w-3/4 lg:w-1/2 ">
        <h2 className="text-2xl font-semibold text-gray-800">Home Work</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search the HomeWork Here"
          className="w-full max-w-full p-4 border-2 border-gray-300 rounded-lg mb-4"
          value={search}
          onChange={handleSearch}
        />

        {/* List of homework items */}
        <div className=" max-h-[400px]">
          <ul className="mt-8 space-y-6">
            {filteredValue.length === 0 ? (
              <li className="flex justify-center items-center text-center text-gray-500 w-full h-full">
                No items match your search.
              </li>
            ) : (
              filteredValue.map((work) => (
                <li
                  key={work.id}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-semibold text-gray-700">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
                  <p className="text-gray-500">Due Date: {work.dueDate}</p>
                  {/* Passing the 'data' prop to the Shower component */}
                  <Shower data={work.data} />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeWork;

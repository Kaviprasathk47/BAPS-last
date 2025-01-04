import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';

const EnhancedStaffSearch = () => {
  const [search, setSearch] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [afterShow, setAfterShow] = useState(false);

  const staffMembers = [
    {
      id: 1,
      thumb: "/api/placeholder/112/112",
      name: 'Linda Smith',
      email: 'linda.smith@company.com',
      status: 'Busy',
      statusColor: 'red',
      role: 'Senior Developer',
      department: 'Engineering'
    },
    {
      id: 2,
      thumb: "/api/placeholder/112/112",
      name: 'James Wilson',
      email: 'james.wilson@company.com',
      status: 'Available',
      statusColor: 'green',
      role: 'Product Manager',
      department: 'Product'
    },
    {
      id: 3,
      thumb: "/api/placeholder/112/112",
      name: 'Sarah Parker',
      email: 'sarah.parker@company.com',
      status: 'In Meeting',
      statusColor: 'yellow',
      role: 'UX Designer',
      department: 'Design'
    },
    {
      id: 4,
      thumb: "/api/placeholder/112/112",
      name: 'Michael Brown',
      email: 'michael.brown@company.com',
      status: 'Available',
      statusColor: 'green',
      role: 'Software Engineer',
      department: 'Engineering'
    }
  ];

  const [filteredStaff, setFilteredStaff] = useState(staffMembers);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    const filtered = staffMembers.filter(staff => 
      staff.name.toLowerCase().includes(searchTerm) ||
      staff.email.toLowerCase().includes(searchTerm) ||
      staff.department.toLowerCase().includes(searchTerm)
    );
    setFilteredStaff(filtered);
  };

  const handleStaffSelect = (staff) => {
    setSelectedStaff(staff);
    setShowPopup(true);
    setAfterShow(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
            Staff Directory
          </h1>
          <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name, email, or department..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((staff) => (
            <div
              key={staff.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={() => handleStaffSelect(staff)}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={staff.thumb}
                    alt={staff.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div 
                    className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white bg-${staff.statusColor}-500`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold text-gray-900 truncate">
                    {staff.name}
                  </h2>
                  <p className="text-sm text-gray-500 truncate">{staff.email}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-medium text-gray-500">
                      {staff.role} • {staff.department}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedStaff.thumb}
                  alt={selectedStaff.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedStaff.name}</h2>
                  <p className="text-gray-500">{selectedStaff.role}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setAfterShow(false);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="font-medium">{selectedStaff.department}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">{selectedStaff.status}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{selectedStaff.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedStaffSearch;
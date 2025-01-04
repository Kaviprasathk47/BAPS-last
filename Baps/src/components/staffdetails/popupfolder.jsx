import React, { useState } from 'react';

const StaffPopupDemo = () => {
  const [show, setShow] = useState(false);
  const [afterShow, setAfterShow] = useState(true);

  // Sample data
  const sampleData = {
    thumb: "/api/placeholder/96/96",
    name: "John Doe",
    email: "john.doe@company.com",
    status: "Active",
    Dateofbirth: "1990-05-15",
    BloodGroup: "O+",
    AadhaarNumber: "XXXX-XXXX-1234",
    StaffNumber: "EMP001",
    FatherName: "Robert Doe",
    Gender: "Male",
    MotherName: "Sarah Doe",
    Pincode: "560001"
  };

  const togglePopup = () => {
    setAfterShow(true);
    setShow(false);
  };

  return (
    <div className="p-8">
      <button 
        onClick={togglePopup}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Staff Info
      </button>

      {/* Popup Component */}
      <div className="relative">
        {!show && afterShow && (
          <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-4 transition transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl border border-spacing-10 border-blue-200 hover:border-blue-50">
            <div className="text-right">
              <button 
                type="button" 
                onClick={() => {
                  setAfterShow(false);
                  setShow(true);
                }}
                className="text-gray-200 bg-gray-600 h-6 w-6 rounded-full hover:transition hover:transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-gray-200 mx-auto mb-4">
              <img src={sampleData.thumb} alt={`${sampleData.name}'s thumbnail`} className="h-full" />
            </div>
            
            <table className="min-w-full bg-gray-50">
              <tbody>
                {Object.entries(sampleData).map(([key, value], index) => 
                  key !== 'thumb' && (
                    <tr key={key} className={`pb-2 ${index % 2 === 0 ? 'bg-white' : ''}`}>
                      <td className="font-semibold pl-16">{
                        key === 'Dateofbirth' ? 'Date of Birth' :
                        key === 'BloodGroup' ? 'Blood Group' :
                        key === 'AadhaarNumber' ? 'Aadhaar Number' :
                        key === 'StaffNumber' ? 'Staff Number' :
                        key === 'FatherName' ? "Father's Name" :
                        key === 'MotherName' ? "Mother's Name" :
                        key
                      }</td>
                      <td className="p-2">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffPopupDemo;
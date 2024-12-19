import { useState } from "react";
import "./MainPage.css";

export default function App() {
  const [PassWordValue, SetPassWordValue] = useState("");

  const handlePassWord = (event) => {
    SetPassWordValue(event.target.value);
  };

  return (
    <div className="parent-container">
     
      <div className="h-screen flex justify-center items-center backround-cover">
        {/* Centered white container */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 grid-flow-row ">
          <div className=" bg-white rounded-lg shadow-lg overflow-x-auto ">
            {/* left Side - Login Form */}
            <div className="flex-1 flex justify-center items-center p-20 ">
              <form className="flex flex-col w-96 max-w-full overflow-auto">
                <label className="font-semibold text-center mb-6 text-2xl text-gray-400">
                  Welocome Back!.
                </label>

                <div className="mb-4">
                  <legend className="text-gray-500 font-semibold capitalize tracking-wider">Username</legend>
                  <input
                    type="text"
                    name="text"
                    placeholder="Username"
                    className="mt-1 p-3 w-full border border-gray-400 rounded-md   focus:outline-customBlue"
                  />
                </div>

                <div className="mb-4 ">
                <legend className="text-gray-500 font-semibold capitalize tracking-wider">Password</legend>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={PassWordValue}
                    onChange={handlePassWord}
                    className="mt-1 p-3 w-full border border-gray-400 rounded-md  focus:outline-customBlue"
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <button className="p-3 bg-customBlue text-white rounded-md w-full ">
                    Login
                  </button>
                </div>
                <label className="text-center mt-2 mb-2 font-semibold text-gray-400">
                  Or
                </label>
                <div className="flex justify-center">
                  <button className="p-3 bg-customBlue text-white rounded-md w-full mb-4 ">
                    Sign-In with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
         {/*right side*/}
          <div className="background-Image"></div>
        </div>
      </div>
      <div className="circle"></div>
      
    </div>
  );
}

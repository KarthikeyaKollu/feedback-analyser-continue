import React, { useState } from "react";
export const Modal = ({ isOpen, onClose,getInputData }) => {
    const [inputValue, setInputValue] = useState("");
  
    const handleSubmit = () => {
      // Handle form submission logic here
      console.log("Submitted:", inputValue);
      // Close the modal
      getInputData(inputValue)
      setInputValue("")
      onClose();
    };
  
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
      >
        <div className="relative w-96 mx-auto my-6">
          <div className="bg-white rounded-lg shadow-lg relative flex flex-col p-8">
            <button
              className="absolute top-0 right-0 p-2 bg-gray-200 rounded-full"
              onClick={onClose}
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h3 className="text-xl font-semibold mb-4">Modal Title</h3>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              placeholder="Enter something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  
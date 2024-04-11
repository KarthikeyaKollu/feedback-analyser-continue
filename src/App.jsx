import React, { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { Modal } from './components/Modal'
const App = () => {

  const [cards, setCards] = useState(["good"])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState("");


  const openModal = () => {
    setIsModalOpen(true);
  };
  const getInputData = (input) => {
    setInputData(input);
    setCards((prev) => ([...prev, input]))
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
    const handleClose = (itemToRemove) => {
      setCards(prevCards => prevCards.filter(item => item !== itemToRemove));
    };
  

  return (

    <div className='bg-black h-screen'>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-10'>


        {cards.map((item) => (
        <div class="bg-gray-200 p-4 rounded-lg relative">
           <div className='absolute right-0 -top-6'
           onClick={()=>handleClose(item)}
           >
           <svg
                className="h-6 w-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
           </div>
          <Card title={item} />
        </div>))}

        <div  className='flex items-center p-4   h-96 justify-center'><span onClick={openModal} className='text-white text-5xl cursor-pointer'>+</span></div>

        <Modal isOpen={isModalOpen} onClose={closeModal} getInputData={getInputData} />

      </div>


    </div>
  )
}

export default App



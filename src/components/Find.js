import React from 'react'
// import med from '../image/medsym.png'
import med2 from '../image/pngegg.png'

const Find = () => {
  return (
    <div name ="Find" className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black" >
       <form
            
            className=" flex flex-col w-full md:w-1/2"
          >
             <p className="text-8xl font-bold border-b-4 border-gray-500 p-2 inline">
        <h1 className="flex justify-between">Find A doctor <img className=" h-20"src={med2} alt="" />
        </h1>
      </p>Location
            <input
              type="text"
              name="name"
              placeholder="Whats your location?"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            Specialist
            <input
              type="text"
              name="Specialist"
              placeholder="Are you looking for a specialist?"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            Insurance Carrier
            <input
              type="text"
              name="Insurance"
              placeholder="Enter your Insurance Carrier"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Find Dr
            </button>
          </form>  
    </div>
  )
}

export default Find

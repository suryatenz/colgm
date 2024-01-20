import React, { useState } from "react";

const Seting = () => {
  const[color,setcolor] = useState('white')
  return (
    <>
    <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl'>
          <button 
          onClick={()=>setcolor('red')}
          className='outline-none justify-center shadow-lg rounded-full px-3 py-2' style={{backgroundColor:'red'}}>red
          </button>
          <button 
          onClick={()=>setcolor('green')}
          className='outline-none justify-center shadow-lg rounded-full px-3 py-2' style={{backgroundColor:'green'}}>green
          </button>
          <button 
          onClick={()=>setcolor('orange')}
          className='outline-none justify-center shadow-lg rounded-full px-3 py-2' style={{backgroundColor:'orange'}}>orange
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
export default Seting;

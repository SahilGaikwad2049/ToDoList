import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container mx-auto bg-cyan-500 my-5 text-white rounded-xl p-5 min-h-[80vh]">
        <div className="add">
          <h2 className='text-xl font-extrabold'>Add a Task</h2>
          <input type="text" />
          <button className='bg-blue-700 p-3 font-bold rounded-md py-1 mx-6 text-sm'>Add</button>
        </div>
        <h2 className='text-xl font-bold'>ToDo's</h2>
        <div className='todo flex'>
          <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, molestiae.</div>
          <div className="buttons">
          <button className='bg-blue-700 p-3 font-bold rounded-md py-1 mx-3 text-sm'>Edit</button>
          <button className='bg-blue-700 p-3 font-bold rounded-md py-1 text-sm'>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import React from 'react'

const TaskNumbers = () => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
      <div className='rounded-xl px-9 py-6 bg-red-400 w-[45%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='rounded-xl px-9 py-6 bg-blue-400 w-[45%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='rounded-xl px-9 py-6 bg-green-400 w-[45%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='rounded-xl px-9 py-6 bg-yellow-400 w-[45%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskNumbers

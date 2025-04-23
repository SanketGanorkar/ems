import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form className=' flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input type="text" placeholder='Make a UI ' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3>Date</h3>
                            <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3>Assign to</h3>
                            <input type="text" placeholder='employee name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3>Category</h3>
                            <input type="text" placeholder='design , dev , etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea name="" id="" cols="30" rows="30" className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                        <button className='w-full mt-4 text-sm rounded px-5 hover:bg-emerald-600 bg-emerald-500 py-3'>Create Task</button>
                    </div>


                </form>
            </div>
  )
}

export default CreateTask

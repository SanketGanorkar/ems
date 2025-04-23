import React from 'react'

const TaskList = () => {
    return (
        <div id="tasklist" className=' overflow-x-auto h-[55%] py-5 w-full mt-10 flex items-center justify-start gap-5 flex-nowrap'>
            <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>    
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a YT video</h2>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Ea veniam in perferendis est?</p>
            </div>
            <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>    
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a YT video</h2>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Ea veniam in perferendis est?</p>
            </div>
            <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>    
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a YT video</h2>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Ea veniam in perferendis est?</p>
            </div>
            <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2025</h4>    
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a YT video</h2>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Ea veniam in perferendis est?</p>
            </div>
            
        </div>
    )
}

export default TaskList

import React from 'react'

export default function SideBar() {
  return (
    <div className='bg-white px-[10%] pt-[14px] rounded '>
      
      <div><h1>SideBar</h1></div>
      <div className="flex-grow bg-gray-100">
        <div className="flex flex-col justify-center items-center h-full">
          <a href="#" className="p-4 bg-blue-500 text-white rounded-lg">Link 1</a>
          <a href="#" className="p-4 bg-green-500 text-white rounded-lg mt-4">Link 2</a>
          <a href="#" className="p-4 bg-red-500 text-white rounded-lg mt-4">Link 3</a>
        </div>
      </div>
      <div className="flex-none p-4 bg-gray-200">
        <div className="flex items-center gap-2">
          <img
            src="avatar.jpg"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </div>
  )
}

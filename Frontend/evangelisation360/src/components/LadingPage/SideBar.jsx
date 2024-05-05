import React, { useState, useEffect } from 'react';
import appIcon from "../../assets/images/icones/appIcon.svg"
import avatar from "../../assets/images/avatars/cnn.png"

const Sidebar = () => {

  return (
    <div className= "bg-white h-full w-64 p-2" >
      <div>
<div className='flex'>
  <img src={appIcon} alt="Icone de l'application" />
  <h2>EVANGELISATION 360°</h2>
</div>
      </div>
      <div>

      </div>
      <div>

      </div>
      <ul className="space-y-4">
        <li className="hover:bg-gray-300 rounded">Accueil</li>
        <li className="p-3 bg-white-500 text-black rounded-lg mt-4 hover:bg-gray-300">1HPJ</li>
        <li className="hover:bg-gray-300">Conseiller Spirituel</li>
        <li className="hover:bg-gray-300">Equipe</li>
        <li className="hover:bg-gray-300">Finances</li>
        <li className="hover:bg-gray-300">Calendrier</li>
        <li className="hover:bg-gray-300">Notifications</li>
        <hr className="my-4 border-t" />
        <li className="hover:bg-gray-300">Assistance</li>
        <li className="hover:bg-gray-300">Paramètres</li>
        <li className="hover:bg-gray-300">Se déconnecter</li>
      </ul>
      <div className="mt-auto flex items-center">
        <img className="h-8 rounded-full mr-2"  src={avatar} alt="" />
        <span>Don Nathanaël</span>
      </div>
    </div>
  );
}

export default Sidebar;



// import React from 'react'

// export default function SideBar() {
//   return (
//     <div className='bg-white px-[10%] pt-[14px] rounded '>
      
//       <div><h1>SideBar</h1></div>
//       <div className="flex-grow bg-gray-100">
//         <div className="flex flex-col justify-center items-center h-full">
//           <a href="#" className="p-4 bg-blue-500 text-white rounded-lg">Link 1</a>
//           <a href="#" className="p-4 bg-green-500 text-white rounded-lg mt-4">Link 2</a>
//           <a href="#" className="p-4 bg-red-500 text-white rounded-lg mt-4">Link 3</a>
//         </div>
//       </div>
//       <div className="flex-none p-4 bg-gray-200">
//         <div className="flex items-center gap-2">
//           <img
//             src="avatar.jpg"
//             alt="User avatar"
//             className="w-8 h-8 rounded-full"
//           />
//           <span className="text-sm font-medium">John Doe</span>
//         </div>
//       </div>
//     </div>
//   )
// }

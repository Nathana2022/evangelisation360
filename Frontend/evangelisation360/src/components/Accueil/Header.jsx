// components/Header.js
import React from "react";
import LogoApp from "../../assets/images/LogoApp.svg"

const Header = () => {
  return (
    <header className="w-1519,2 h-136,6 ml-189.6 mr-189.6 pl-15 pr-15 ">
      <div className="bg-[#f4f4f4] w-1519,2 h-50 text-white flex justify-center items-center space-x-4">
        <span className="text-base text-teal-500 font-open-sans font-sans">+243 (0) 82 80 500 18</span>
        <span className="text-base text-teal-500 font-open-sans font-sans">info@360Evangelisation.com</span>
        <span className="text-base text-teal-500 font-open-sans font-sans">www.360Evangelisation.com</span>
      </div>
      <div className="flex justify-center items-center z-1001 hover:z-50">
      <div>
        
      <img
          src={LogoApp}
          alt="Logo"
          className="h-8 mr-4"
        />
      </div>
      <div>
      <nav>
        <ul className="flex text-teal-500">
          <li className="ml-4">Fonctionnalités</li>
          <li className="ml-4">Appli pour l'Eglise</li>
          <li className="ml-4">Tarifs</li>
          <li className="ml-4">Diocèse Aide / Ressources</li>
        </ul>
      </nav>
      </div>
      <div className="flex">
        <button className="bg-blue-500 text-white px-4 py-2 ml-4">
          CONNEXION
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 ml-4">
          INSCRIPTION
        </button>
      </div>
      </div>
    </header>
  );
};

export default Header;

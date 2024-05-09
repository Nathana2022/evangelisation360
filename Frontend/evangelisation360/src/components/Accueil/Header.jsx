// components/Header.js
import React from "react";
import LogoApp from "../../assets/images/LogoApp.svg";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import SignUpForm from "../signUpForm/SignUpForm";

const Header = () => {
  return (
    <header className="">
      <div className="bg-[#f4f4f4] flex justify-center justify-around">
        <p className="text-base text-teal-500 font-open-sans font-sans">
          +243 (0) 82 80 500 18
        </p>
        <p className="text-base text-teal-500 font-open-sans font-sans">
          info@360Evangelisation.com
        </p>
        <p className="text-base text-teal-500 font-open-sans font-sans">
          www.360Evangelisation.com
        </p>
      </div>
      <div className="flex justify-center justify-around items-center">
        <div>
          <img src={LogoApp} alt="Logo" className="h-auto w-auto" />
        </div>

        <div>
          <nav>
            <ul className="flex text-teal-500 justify-center ">
              <li className="ml-4">Fonctionnalités</li>
              <li className="ml-4">Appli pour l'Eglise</li>
              <li className="ml-4">Tarifs</li>
              <li className="ml-4">Eglise Aide / Ressources</li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-3">
          <Link to={"Login"}>
            <button className="bg-teal-500 text-white px-4 py-2 ml-4">
              CONNEXION
            </button>
          </Link>

          <Link to={"SignUpForm"}>
            <button className="bg-teal-500 text-white px-4 py-2 ml-4">
              INSCRIPTION
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

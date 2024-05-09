import React from "react";
import imgSectionTop from "../../../assets/images/sectionTop/img.png";
import { Link } from "react-router-dom";

const sectionTop = () => {
  return (
    <div className="flex items-center justify-around">

      <div className="flex flex-col">

        <h2 className="text-3xl font-bold m-4">
          Le Logiciel de Gestion <br/> d'Église le plus Recommandé, <br/> Convivial et
          Abordable
        </h2>

        <p className="text-lg m-4">
          Approuvé par plus de 5000 ministères, <br/> églises et diocèses partout dans
          le monde
        </p>
        
        <div className="flex flex-col items-center">
          <Link to={"SignUpForm"} >
          <button className="bg-teal-500 text-white rounded-full m-4">Commencer maintenant</button>
          </Link>
        
        <p className="text-l italic">*Aucune carte bancaire requise</p>
        </div>
 
      </div>

      <div className="">
        <img src={imgSectionTop} alt="Church Management Software" />
      </div>
    </div>
  );
};

export default sectionTop;

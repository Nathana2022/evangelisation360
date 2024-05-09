import React from "react";
import img1 from "../../../assets/images/SectionSO/img1.jpg";

const section4 = () => {
  return (
    <div className="bg-gray-100 p-8 flex">
      <div className="w-1/2">
        <img src={img1} alt="" />
      </div>

      <div className="w-1/2 p-8">
        {/* Contenu à droite */}
        <h2 className="text-2xl font-bold m-4">
          Suivre et Organiser Efficacement des Membres et des Groupes
        </h2>
        <p>
          Peu importe la taille de votre église, ChMeetings vous aide à suivre
          et à stocker les données de vos groupes et de vos membres
          efficacement. Notre fonctionnalité de recherche avancée vous permet
          d’accéder facilement aux données et de les transformer en rapport
          activable à n’importe quel moment.
        </p>
        <a href="#" className="text-teal-500 hover:underline">
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default section4;

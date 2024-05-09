import React from 'react';

const ChurchAdminSection = () => {
  return (
    <div className=" p-8">

      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold">Une Administration de l'Église Simplifiée</h2>
        <p className="text-lg">avec un Logiciel de Gestion d'Église Convivial</p>
        <p>Une application facile et professionnelle pour organiser des membres, évènements, suivis et plus encore.</p>
        <p>Notre logiciel de gestion d'église est utilisé pour la gestion de plus de 5000 églises et ministères.</p>
      </div>

      <div className=" flex mt-8 align-center">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4 w-40 mx-auto">Découvrir nos tarifs</button>
      </div>
    </div>
  );
};

export default ChurchAdminSection;

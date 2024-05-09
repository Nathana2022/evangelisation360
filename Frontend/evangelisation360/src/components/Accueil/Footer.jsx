import React from 'react';
import LogoApp from "../../assets/images/LogoApp.svg"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex justify-center">
        <img src={LogoApp} alt="Evangélisation 360° Logo" className="w-40 h-20 mr-2" />
      </div>
      
      {/* <div className="mt-4 flex justify-center">
        <a href="#" className="mr-4">Download on the App Store</a>
        <a href="#">ANDROID APP ON Google Play</a>
      </div> */}

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div>
          <h3>LIENS DIRECTS</h3>
          <ul>
            <li><a href="#">Se Connecter</a></li>
            <li><a href="#">S'Inscrire</a></li>
            <li><a href="#">À Propos</a></li>
            <li><a href="#">Politique des Cookies</a></li>
            <li><a href="#">Conformité au RGPD</a></li>
          </ul>
        </div>

        <div>
          <h3>AIDE ET ASSISTANCE</h3>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Notes de Version</a></li>
            <li><a href="#">Contactez-Nous</a></li>
            <li><a href="#">Conditions d'Utilisation</a></li>
            <li><a href="#">Politique de Confidentialité</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>Capterra 4.8</p>
        <p>Copyright @ 2024 Evangélisation 360°</p>
      </div>
    </footer>
  );
};

export default Footer;

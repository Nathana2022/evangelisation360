import React from "react";
import Login from "./components/login/Login";
import Accueil from "./Pages/Accueil";
import SignUpForm from "./components/signUpForm/SignUpForm";




const App = () => {
  
  return(
    <div className="App">
      <Accueil/>
      {/* <Login/> */}
      {/* <SignUpForm/> */}
    </div>
  );
};

export default App;
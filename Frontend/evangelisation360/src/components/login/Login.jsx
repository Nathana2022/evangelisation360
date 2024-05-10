import React, { useState } from "react";
import { useForm } from "react-hook-form";
import imageLogin from "../../assets/images/login/image.svg";
import loginIconeGoogle from "../../assets/images/icones/google-icone.png";
import { Link } from "react-router-dom";
import "../login/styles.css";
import SignUpForm from "../signUpForm/SignUpForm";
import LadingPage from "../../Pages/LadingPage";
import HelpPage from "../../Pages/HelpPage";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    telephone :"",
    password : ""
  });
  

  const {register, handleSubmit, formState :{errors}, reset } = useForm({
    defaultValues:formData
  });
  const onSubmit =  async (data) => {
      try {
        const res = await axios.post("http://localhost:3000/auth/login", {
          telephone: data.telephone,
          password: data.password
        });

        if (res.status === 200) {
          localStorage.setItem("tokenUser", JSON.stringify(res.data));
          alert("Utilisateur connecté avec succès");
          window.location.href ="/LadingPage" ; // Utilisez history.push pour rediriger l'utilisateur
        }

        console.log(res.data); // Afficher les données retournées par le serveur en cas de succès
      } catch (error) {
        console.error("Erreur lors de la requête:", error);

        if (error.response) {
          // Erreur provenant du serveur
          console.error("Erreur:", error.response.data);
        } else if (error.request) {
          // Erreur lors de l'envoi de la requête
          console.error("Erreur lors de la requête:", error.request);
        } else {
          // Autres erreurs
          console.error("Erreur:", error.message);
        }
      }
    }
  ;

  return (
    <div className="login-page">
      <div className="image-container" style={{ width: "60%" }}>
        <img src={imageLogin} alt="Image lOgin" className="imageLogin" />
      </div>
      <div className="login-container" style={{ width: "40%" }}>
        <div className="help-link">
          <Link to={"HelpPage"}>Besoin d'aide?</Link>
        </div>
        <div className="login-form">
          <div className="login-title-container">
            <h2 className="login-title">EVANGELISATION 360°</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Téléphone"
              onChange={(e) => console.log(e)}
              {...register("telephone", { required: true })}
            />
            {errors.telephone && <p>Le numéro de téléphone est obligatoire</p>}
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
              {...register("password", { required: true })}
            />
            {errors.password && <p>Veillez saisir votre mot de passe</p>}
            <label>
              <input type="checkbox" {...register("rememberMe")} />
              Se souvenir de moi
            </label>

            <div><button type="submit">Se connecter</button></div>
            <div className="Mdpso-block">
              <div className="Mdpso-blockA">
                <Link className="Mdpso-body" href="#">
                  Mot de passe oublié?
                </Link>
              </div>
            </div>
            <div className="SignInBlock">
              <div className="SignInBlock-Member">
                <p className="SignInBlock-Member-p">Nouveau membre?</p>
              </div>
              <div className="SignInBlock-link">
                <Link
                  to="/SignUpForm"
                  component={SignUpForm}
                  className="Link-SignUp"
                >
                  S'INSCRIRE
                </Link>
              </div>
            </div>
            <div className="line-block">
              <div className="line-A"></div>
              <div className="line-AA">
                <div className="text-ou">Ou se connecter avec</div>
              </div>
              <div className="line-A"></div>
            </div>
            <div className="register-buttons">
              <img
                src={loginIconeGoogle}
                alt="Google"
                className="google-icon"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

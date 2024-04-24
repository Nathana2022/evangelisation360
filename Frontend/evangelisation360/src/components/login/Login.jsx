import React, { useState } from "react";
import { useForm } from "react-hook-form";
import imageLogin from "../../assets/images/login/imageLogin.png";
import loginIconeGoogle from "../../assets/images/icones/google-icone.png";
import  {Link} from "react-router-dom";
import "../login/styles.css";
import SignUpForm from "../signUpForm/SignUpForm";
import useHistory from "use-history";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory;
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleSignIn = () => {
    if (phoneNumber === "0123456789" && password === "motdepasse") {
      //Authentification réussie, rediriger vers la page principale
      history.push("/LandigPage");
    } else {
      //Authentification échouée, afficher un message d'erreur
      alert("Numéro de téléphone ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-page">
      <div className="image-container" style={{ width: "60%" }}>
        <img src={imageLogin} alt="Image lOgin" className="imageLogin" />
      </div>
      <div className="login-container" style={{ width: "40%" }}>
        <div className="help-link">
          <Link>Besoin d'aide?</Link>
        </div>
        <div className="login-form">
          <div className="login-title-container">
            <h2 className="login-title">EVANGELISATION 360°</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Téléphone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              {...register("telephone", { required: true })}
            />
            {errors.telephone && <p>Le numéro de téléphone est obligatoire</p>}
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              {...register("password", { required: true })}
            />
            {errors.password && <p>Veillez saisir votre mot de passe</p>}
            <label>
              <input type="checkbox" {...register("rememberMe")} />
              Se souvenir de moi
            </label>
            <button className="text-button" type="submit" onClick={handleSignIn}>
              S'identifier
            </button>
            <div></div>
            <div className="Mdpso-block">
              <div className="Mdpso-blockA">
                <a className="Mdpso-body" href="#">
                  Mot de passe oublié?
                </a>
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

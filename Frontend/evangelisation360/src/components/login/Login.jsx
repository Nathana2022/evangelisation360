import React, { useState } from "react";
import { useForm } from "react-hook-form";
import imageLogin from "../../assets/images/login/image.svg";
import loginIconeGoogle from "../../assets/images/icones/google-icone.png";
import  {Link} from "react-router-dom";
import "../login/styles.css";
import SignUpForm from "../signUpForm/SignUpForm";
import useHistory from "use-history";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("abc");
  const [password, setPassword] = useState("");
  const history = useHistory;

  // const saveAuth = useMutation({
  //   mutationFn: async (data) => {
  //     console.log(data);
  //     const res = await axios.post("http://localhost:3000/auth/login");
  //   }
  // });

  const saveAuth = useMutation({
    mutationFn: async (data) => {
      try {
        // Effectuer la requête POST vers votre backend pour la connexion
        const res = await axios.post("http://localhost:3000/auth/login", data);
        
        // Gérer la réponse du serveur
        if (res.status === 200) {
          // Authentification réussie, rediriger l'utilisateur ou prendre d'autres actions
          console.log('Authentification réussie');
          console.log(res.data); // Afficher les données retournées par le serveur, comme un token d'authentification
        } else {
          // Authentification échouée, afficher un message d'erreur
          console.error('Erreur lors de l\'authentification:', res.data.message);
        }
      } catch (error) {
        console.error('Erreur lors de la requête:', error);
      }
    }
  });
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    saveAuth.mutateAsync(data)
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

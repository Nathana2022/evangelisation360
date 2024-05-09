// SignUpForm.js

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import Button from "./Button";
import Checkbox from "./Checkbox";

import "../signUpForm/styles.css";
import ImageSignUpForm from "../../assets/images/signUpForm/image.svg";
import loginIconeGoogle from "../../assets/images/icones/google-icone.png";
import Login from "../login/Login";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [formaData, setFormData] = useState({
    nom: "",
    prenom: "",
    genre: "masculin",
    trancheAge: "40-50",
    telephone: "0897736503",
    password: "J3m5@2025",
    adresse: "16, Avenue MULUMBA KATSHI",
    role: "Public",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  return (
    <div className="login-page flex flex-center">
      <div className="image-container" style={{ width: "60%" }}>
        <img src={ImageSignUpForm} alt="Image lOgin" className="imageLogin" />
      </div>
      <div className="login-container" style={{ width: "40%" }}>
        <div className="login-form">
          <div className="login-title-container">
            <h2 className="login-title">Inscription</h2>
            <p className="desciption-title">Créer un compte en un clic 😉</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Nom"
              {...register("nom", { required: true, minLength: 5 })}
            />
            {errors.nom && errors.nom.type === "required" && (
              <p>Le nom est obligatoire</p>
            )}
            {errors.nom && errors.nom.type === "minLength" && (
              <span>Le nom doit avoir au moins 5 caractères</span>
            )}

            <input
              type="text"
              placeholder="Prénom"
              {...register("prenom", { required: true, minLength: 5 })}
            />
            {errors.prenom && errors.prenom.type === "required" && (
              <p>Le prénom est obligatoire</p>
            )}
            {errors.prenom && errors.prenom.type === "minLength" && (
              <span>Le prénom doit avoir au moins 5 caractères</span>
            )}

            <input
              type="text"
              placeholder="Prénom"
              {...register("prenom", { required: true, minLength: 5 })}
            />
            {errors.prenom && errors.prenom.type === "required" && (
              <p>Le prénom est obligatoire</p>
            )}
            {errors.prenom && errors.prenom.type === "minLength" && (
              <span>Le prénom doit avoir au moins 5 caractères</span>
            )}

            <input
              type="text"
              placeholder="Nom"
              {...register("nom", { required: true })}
            />
            {errors.nom && <p>Le nom est obligatoire</p>}

            <input
              type="text"
              placeholder="Téléphone"
              {...register("telephone", {
                required: true,
                pattern: /^0[1-9]{8}$/,
              })}
            />
            {errors.telephone && errors.telephone.type === "required" && (
              <p>Le numéro de téléphone est obligatoire</p>
            )}
            {errors.telephone && errors.telephone.type === "pattern" && (
              <p>
                Le téléphone doit être composé de 10 chiffres et commencer par
                0.
              </p>
            )}

            <input
              type="password"
              placeholder="Veillez créer votre mot de passe"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <span>Le mot de passe est requis</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span>Le mot de passe doit avoir au moins 8 caractères.</span>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <span>
                Le mot de passe doit contenir au moins une majuscule, un
                caractère spécial, un chiffre.
              </span>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Veillez confirmer votre mot de passe"
              {...register("password", {
                required: true,
                validate: (value) => value === password,
              })}
            />
            {errors.confirmPassword &&
              errors.confirmPassword.type === "required" && (
                <span>La confirmation de mot de passe est requise.</span>
              )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === "validate" && (
                <span>
                  La confirmation de mot de passe doit correspondre au mot de
                  passe.
                </span>
              )}

            <label>
              <input type="checkbox" {...register("Terms&Conditions")} />
              Accepter les conditions d'utilisation
            </label>
            <button type="submit">S'enregistrer</button>
            <div className="SignInBlock">
              <div className="SignInBlock-Member">
                <p className="SignInBlock-Member-p">Déjà membre?</p>{" "}
                <Link to="/" className="Link-SignUp">
                  <p> SE CONNECTER</p>
                </Link>
              </div>
              <div className="SignInBlock-link"></div>
            </div>
            <div className="line-block">
              <div className="line-A"></div>
              <div className="line-AA">
                <div className="text-ou">Ou continuer avec</div>
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

export default SignUpForm;

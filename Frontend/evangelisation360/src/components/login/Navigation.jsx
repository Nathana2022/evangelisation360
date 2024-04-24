
<div className="login-container">
<div className="header" >
<Link href="#" class="help-link" >Besoin d'aide?</Link>
</div>
<div>
<form onSubmit={handleSubmit((data) => console.log(data))}>
  <input
    {...register("telephone", { required: true })}
    placeholder="Téléphone"
  />
  <input
    {...register("motDePasse", { required: true })}
    placeholder="Mot de passe"
  />
  
  {errors.motDePasse && <p>Please enter number for mot de pass.</p>}
  <input type="submit" />
</form>
</div>
</div>

const inscriptionData = {
    nom: "Nom de l'utilisateur",
    prenom: "Prénom de l'utilisateur",
    adresse: "Adresse de l'utilisateur",
    telephone: "Numéro de téléphone de l'utilisateur",
    email: "Email de l'utilisateur"
};

fetch('https://votreapi.com/inscription', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(inscriptionData)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erreur lors de la requête.');
    }
    return response.json();
})
.then(data => {
    console.log('Inscription réussie:', data);
    // Traitez la réponse du serveur si nécessaire
})
.catch(error => {
    console.error('Erreur:', error);
    // Gérez les erreurs si nécessaire
});

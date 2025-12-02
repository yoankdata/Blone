// Ceci est le code JavaScript qui s'exécute dans le navigateur.

console.log("✅ Le script main.js est chargé et fonctionne correctement !");

// Sélectionne l'élément HTML avec l'ID 'app'
const appContainer = document.querySelector('#app');

// Injecte du contenu dynamique dans l'élément 'app'
appContainer.innerHTML = `
    <h2 class="text-xl font-semibold text-blue-600 mb-2">Statut du Projet</h2>
    <p class="text-sm text-gray-500">
        Si vous voyez ce message, cela signifie que votre serveur de développement (Vite)
        fonctionne et que votre JavaScript a été chargé avec succès.
    </p>
    <p class="mt-2 text-green-500 font-medium">Prêt à coder !</p>
`;

// Vous pouvez commencer à ajouter votre propre logique ici !
// Exemple: appContainer.addEventListener('click', () => alert('Clic détecté!'));
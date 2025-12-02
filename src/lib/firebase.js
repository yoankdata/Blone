import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuration Firebase récupérée depuis les variables d'environnement (.env)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// 1. Initialisation de l'application Firebase
const app = initializeApp(firebaseConfig);

// 2. Initialisation et export des services Auth et Firestore
// Ces lignes manquaient probablement dans votre version actuelle
const auth = getAuth(app);
const db = getFirestore(app);

// Connexion anonyme automatique au chargement
signInAnonymously(auth).catch((error) => {
    console.error("Erreur d'authentification anonyme:", error);
});

// Nom de la collection Firestore
const COLLECTION_NAME = 'contacts';

/**
 * Envoie les données du formulaire à Firebase Firestore.
 */
export const submitContactForm = async (formData) => {
    // Promesse pour s'assurer que l'utilisateur est authentifié avant d'écrire
    const ensureAuth = new Promise((resolve, reject) => {
        if (auth.currentUser) {
            resolve(auth.currentUser);
        } else {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                if (user) resolve(user);
                else {
                    signInAnonymously(auth).then(({ user }) => resolve(user)).catch(reject);
                }
            });
        }
    });

    try {
        const user = await ensureAuth;

        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...formData,
            timestamp: new Date().toISOString(),
            userId: user.uid
        });
        console.log("Document écrit avec succès, ID: ", docRef.id);
        return { success: true, docId: docRef.id };
    } catch (e) {
        console.error("Erreur lors de l'ajout du document: ", e);
        throw new Error("Erreur lors de l'envoi. Veuillez vérifier votre connexion et réessayer.");
    }
};

// Export des instances pour les utiliser ailleurs si besoin
export { auth, db };
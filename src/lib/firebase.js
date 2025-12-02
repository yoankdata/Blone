import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign in anonymously immediately
signInAnonymously(auth).catch((error) => {
    console.error("Error signing in anonymously:", error);
});

// App ID for collection path (defaulting if not set)
const appId = import.meta.env.VITE_APP_ID || 'default-app-id';

const getContactCollectionPath = (currentAppId) => `/artifacts/${currentAppId}/public/data/contacts`;

/**
 * Envoie les données du formulaire à Firebase Firestore.
 * @param {object} formData - Les données du formulaire.
 */
export const submitContactForm = async (formData) => {
    if (!auth.currentUser) {
        // Wait a bit or try to sign in again? 
        // For simplicity, we assume auth is ready or will be ready.
        // If strictly needed, we could await a promise here.
        console.warn("User not authenticated yet, attempting to wait...");
        // In a real app, we might want to handle this more robustly.
    }

    try {
        const collectionPath = getContactCollectionPath(appId);

        // Ensure user is signed in before writing
        if (!auth.currentUser) {
            await signInAnonymously(auth);
        }

        const docRef = await addDoc(collection(db, collectionPath), {
            ...formData,
            timestamp: new Date().toISOString(),
            userId: auth.currentUser?.uid || 'anonymous'
        });
        console.log("Document successfully written with ID: ", docRef.id);
        return { success: true, docId: docRef.id };
    } catch (e) {
        console.error("Error adding document: ", e);
        throw new Error("Erreur lors de l'envoi. Veuillez réessayer. Détails : " + e.message);
    }
};

export { auth, db };

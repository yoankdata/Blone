import React, { useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- FIREBASE IMPORTS ---
import { submitContactForm } from './lib/firebase';

// --- COMPONENTS & PAGES ---
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// --- MAIN APPLICATION COMPONENT ---

const App = () => {
    const location = useLocation();

    // Gestion du formulaire au niveau global (pour le HomeView)
    const [formStatus, setFormStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    // 2. GESTIONNAIRE DE SOUMISSION DU FORMULAIRE
    const submitHandler = useCallback(async (formData, setFormData) => {
        setFormStatus({ loading: true, success: false, error: null });

        try {
            await submitContactForm(formData);
            setFormStatus({ loading: false, success: true, error: null });

            // Réinitialiser le formulaire après succès
            setFormData({
                name: '',
                email: '',
                service: 'Site Web Premium',
                message: ''
            });

            // Optionnel : Scroller vers le haut du formulaire pour voir le message de succès
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

        } catch (error) {
            console.error(error);
            setFormStatus({ loading: false, success: false, error: error.message || "Une erreur inconnue est survenue." });
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#0A1A2F] text-white font-inter">
            {/* Configuration globale pour le font Inter (si non pris en charge globalement) */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');`}</style>

            <Navigation />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <Home
                            submitHandler={submitHandler}
                            isReady={true} // Always true as we handle auth internally in lib/firebase
                            formStatus={formStatus}
                        />
                    } />
                    <Route path="/realisations/:slug" element={<ProjectDetail />} />
                </Routes>
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default App;

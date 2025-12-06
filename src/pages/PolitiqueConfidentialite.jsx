import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PolitiqueConfidentialite = () => {
    return (
        <div className="min-h-screen bg-[#0A1A2F] text-white font-inter">
            <Navigation />

            <main className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Politique de Confidentialité</h1>

                <div className="space-y-12 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Collecte des données</h2>
                        <p>
                            Nous collectons les informations suivantes lorsque vous utilisez notre formulaire de contact :
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Nom complet</li>
                            <li>Adresse email</li>
                            <li>Informations sur votre projet</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Utilisation des données</h2>
                        <p>
                            Vos données sont utilisées uniquement pour :
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Répondre à vos demandes de devis ou d'information.</li>
                            <li>Vous recontacter dans le cadre de votre projet.</li>
                            <li>Améliorer nos services.</li>
                        </ul>
                        <p className="mt-4">
                            Nous ne vendons, n'échangeons et ne transférons aucune information personnelle identifiable à des tiers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Sécurité</h2>
                        <p>
                            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.
                            Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne (via Firebase et HTTPS).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
                        <p>
                            Notre site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez choisir de désactiver les cookies via les options de votre navigateur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Consentement</h2>
                        <p>
                            En utilisant notre site, vous consentez à notre politique de confidentialité.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PolitiqueConfidentialite;

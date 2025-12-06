import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MentionsLegales = () => {
    return (
        <div className="min-h-screen bg-[#0A1A2F] text-white font-inter">
            <Navigation />

            <main className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Mentions Légales</h1>

                <div className="space-y-12 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
                        <p>
                            Le site <strong>Blone Agency</strong> est édité par l'agence Blone Agency.<br />
                            <strong>Email :</strong> contact@kademya-ci.com<br />
                            <strong>Téléphone :</strong> +33 6 66 29 13 53
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Hébergement</h2>
                        <p>
                            Ce site est hébergé par :<br />
                            <strong>Vercel Inc.</strong><br />
                            340 S Lemon Ave #4133<br />
                            Walnut, CA 91789<br />
                            États-Unis
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Données personnelles</h2>
                        <p>
                            Les informations recueillies via le formulaire de contact sont destinées exclusivement à Blone Agency pour le traitement de votre demande.
                            Conformément à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de modification et de suppression de vos données.
                            Pour l'exercer, contactez-nous à : contact@kademya-ci.com.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MentionsLegales;

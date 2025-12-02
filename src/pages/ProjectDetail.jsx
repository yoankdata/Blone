import React from 'react';
import { ArrowLeft, Zap, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/content';
import Footer from '../components/Footer';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Glass card base styles
const glassCardDark = "bg-[#0A1A2F]/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]";

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.slug === slug);

    if (!project) return <div className="text-white">Projet introuvable</div>;

    const onStartSimilar = () => {
        navigate('/', { state: { scrollTo: 'contact' } });
    };

    return (
        <div className="bg-[#050D18] min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Helmet>
                <title>{project.title} | Blone Agency</title>
                <meta name="description" content={project.context} />
            </Helmet>
            <div className="fixed inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(https://placehold.co/1920x1080/050D18/FFF?text=Placeholder+Image)" }}></div>
            <div className="container mx-auto px-6 py-24 relative z-10">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-white/70 hover:text-[#1C7EF2] transition-colors mb-12 text-sm font-semibold w-fit"
                >
                    <ArrowLeft className="w-4 h-4" /> Retour aux projets
                </Link>

                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <h1 className="text-5xl font-bold text-white mb-3 tracking-tighter">{project.title}</h1>
                        <p className="text-2xl text-gray-400 mb-8 font-light">{project.subtitle}</p>

                        <div className={`w-full h-80 rounded-xl mb-12 shadow-2xl bg-gradient-to-br ${project.color} flex items-center justify-center p-12`}>
                            <Zap className="w-12 h-12 text-white/50 animate-pulse" />
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">Le Contexte</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-12">{project.context}</p>

                        <h2 className="text-3xl font-bold text-white mb-6">Les Résultats</h2>
                        <div className="text-white text-xl font-medium p-6 border-l-4 border-[#1C7EF2] bg-[#1C7EF2]/10 rounded-r-lg shadow-lg">
                            "{project.results}"
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-10">
                        <div className={`${glassCardDark} p-6 rounded-xl border-white/5`}>
                            <h3 className="text-xl font-bold text-white mb-4">Détails Techniques</h3>
                            <div className="space-y-3">
                                {project.technos.map((tech, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`${glassCardDark} p-6 rounded-xl border-white/5`}>
                            <h3 className="text-xl font-bold text-white mb-4">Fonctionnalités Clés</h3>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-2">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={onStartSimilar}
                            className="w-full group relative px-8 py-4 bg-white/5 hover:bg-[#1C7EF2] rounded-xl font-bold text-lg text-white shadow-[0_0_20px_-10px_rgba(28,126,242,0.5)] transition-all overflow-hidden border border-white/10 hover:border-transparent"
                        >
                            <span className="relative z-10">Démarrer un projet similaire</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetail;

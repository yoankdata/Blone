import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Loader2,
    Send,
    X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services, pricing, projects } from '../data/content';
import { SpotlightCard } from '../components/SpotlightCard';
import PageTransition from '../components/PageTransition';

// Premium gradient text class
const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-300";
// Glass card base styles
const glassCardDark = "bg-[#0A1A2F]/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
};

const Home = ({ submitHandler, isReady, formStatus }) => {
    // Gestion du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Site Web Premium',
        message: ''
    });
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitHandler(formData, setFormData);
    };


    return (
        <PageTransition>
            {/* HERO SECTION */}
            <section id="hero" className="relative pt-40 pb-32 lg:pt-52 lg:pb-40 bg-[#0A1A2F] overflow-hidden min-h-screen flex items-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#1C7EF2]/20 rounded-full blur-[120px] animate-pulse duration-[4000ms]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]"></div>

                <motion.div
                    className="container relative mx-auto px-6 text-center z-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                        <Sparkles className="w-3 h-3 text-[#1C7EF2]" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Agence Digitale Premium</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Web, Data, <br className="hidden md:block" />
                        <span className={gradientText}>Automatisation.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Des solutions qui accélèrent votre activité. Sites performants et dashboards intelligents pour les entreprises modernes.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-4 bg-[#1C7EF2] hover:bg-blue-600 rounded-xl font-bold text-lg text-white shadow-[0_0_40px_-10px_rgba(28,126,242,0.5)] transition-all hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            Demander un devis
                        </button>

                        <button
                            onClick={() => document.getElementById('projets').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/10 hover:bg-white/5 backdrop-blur-sm transition-all flex items-center gap-2 group hover:border-white/20"
                        >
                            Voir nos projets
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="relative py-32 bg-[#080F1D]">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                        <div className="max-w-xl">
                            <h2 className={`text-4xl font-bold tracking-tight mb-4 text-white`}>Nos Services</h2>
                            <p className="text-gray-400 text-lg">Expertise technique et design soigné pour une croissance durable.</p>
                        </div>
                        <div className="h-[1px] bg-white/10 flex-1 ml-12 hidden md:block"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <SpotlightCard key={i} className="p-8 h-full">
                                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#1C7EF2] group-hover:text-white group-hover:border-[#1C7EF2] transition-all duration-500 shadow-lg">
                                    <s.icon className="text-[#1C7EF2] group-hover:text-white w-7 h-7 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{s.description}</p>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALUE PROPOSITION */}
            <section className="py-24 bg-[#0A1A2F] relative overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 bg-[#1C7EF2]/5"></div>
                <div className="container mx-auto px-6 relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {["Rapidité", "Qualité pro", "Prix accessibles", "Suivi dédié"].map((val, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group">
                                <div className="w-16 h-16 rounded-full bg-[#0A1A2F] border border-white/10 flex items-center justify-center text-[#1C7EF2] shadow-[0_0_20px_rgba(28,126,242,0.1)] group-hover:scale-110 group-hover:border-[#1C7EF2] transition-all duration-500">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-gray-300 text-lg tracking-tight">{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section id="tarifs" className="py-32 bg-[#F8FAFC] relative">
                {/* Subtle background mesh for light mode */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-96 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-[#0A1A2F] tracking-tight mb-4">Tarifs Transparents</h2>
                        <p className="text-gray-500 text-lg">Investissement clair, retour mesurable.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                        {pricing.map((p, i) => (
                            <div key={i} className={`relative p-8 rounded-3xl transition-all duration-500 ${p.featured ? 'bg-white shadow-[0_20px_40px_-15px_rgba(28,126,242,0.2)] border border-blue-100 scale-105 z-10' : 'bg-white/50 backdrop-blur-md border border-gray-200 hover:bg-white hover:shadow-xl'}`}>
                                {p.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1C7EF2] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wider uppercase">
                                        Recommandé
                                    </div>
                                )}
                                <span className="text-gray-400 font-semibold mb-2 uppercase tracking-widest text-[10px] block">{p.type}</span>
                                <h3 className="text-2xl font-bold text-[#0A1A2F] mb-6">{p.title}</h3>
                                <div className="text-4xl font-bold text-[#1C7EF2] mb-8 tracking-tighter">{p.price}</div>

                                <div className="space-y-4 mb-8">
                                    {['Paiement sécurisé', 'Support inclus', 'Qualité premium'].map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-3 h-3 text-[#1C7EF2]" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                    className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all ${p.featured ? 'bg-[#0A1A2F] text-white hover:bg-[#1C7EF2] hover:shadow-lg hover:shadow-blue-500/30' : 'bg-gray-100 text-[#0A1A2F] hover:bg-gray-200'}`}
                                >
                                    Choisir cette offre
                                </button>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 mt-12 text-sm">Devis personnalisé possible selon vos besoins spécifiques.</p>
                </div>
            </section>

            {/* PORTFOLIO GRID */}
            <section id="projets" className="py-32 bg-[#050D18]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Réalisations</h2>
                            <p className="text-gray-400 text-lg">Nos derniers projets livrés.</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-12 h-1 bg-[#1C7EF2] rounded-full"></div>
                            <div className="w-4 h-1 bg-white/20 rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.map((p) => (
                            <motion.div
                                key={p.slug}
                                whileHover={{ y: -10 }}
                                className="group relative h-[400px] cursor-pointer rounded-2xl overflow-hidden border border-white/5 transition-colors hover:border-white/20 block"
                            >
                                <Link to={'/realisations/' + p.slug} className="block h-full w-full">
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-80 transition-opacity duration-700`}></div>

                                    {/* Hover Reveal Image/Effect */}
                                    <div className="absolute inset-0 bg-[#0A1A2F] opacity-0 group-hover:opacity-90 transition-opacity duration-500 backdrop-blur-sm"></div>

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2 group-hover:text-[#1C7EF2] transition-colors">{p.technos[0]}</span>
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-y-[-4px] transition-transform duration-300">{p.title}</h3>
                                        <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
                                            {p.subtitle}
                                        </p>

                                        <div className="mt-6 inline-flex items-center text-sm font-bold text-white gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-150">
                                            Découvrir <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section id="contact" className="py-32 bg-[#0A1A2F] relative overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1C7EF2]/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto bg-[#0A1A2F]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)]">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Parlons de votre projet</h2>
                            <p className="text-gray-400">Remplissez le formulaire ci-dessous, nous répondons en 24h.</p>
                        </div>

                        {/* MESSAGE DE STATUS */}
                        {!isReady && (
                            <div className="bg-gray-600/20 border border-gray-500/50 text-gray-300 p-4 rounded-xl mb-6 flex items-center gap-3 animate-in fade-in">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Préparation de la connexion à la base de données...</span>
                            </div>
                        )}
                        {formStatus.success && (
                            <div className="bg-green-600/20 border border-green-500/50 text-green-300 p-4 rounded-xl mb-6 flex items-center gap-3 animate-in fade-in">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Merci ! Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement.</span>
                            </div>
                        )}
                        {formStatus.error && (
                            <div className="bg-red-600/20 border border-red-500/50 text-red-300 p-4 rounded-xl mb-6 flex items-center gap-3 animate-in fade-in">
                                <X className="w-5 h-5" />
                                <span>Erreur : {formStatus.error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Nom complet</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full p-4 bg-white/5 rounded-xl border border-white/10 text-white focus:border-[#1C7EF2] focus:ring-1 focus:ring-[#1C7EF2] outline-none transition-all placeholder:text-gray-600"
                                        placeholder="John Doe"
                                        disabled={formStatus.loading || !isReady}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email professionnel</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-4 bg-white/5 rounded-xl border border-white/10 text-white focus:border-[#1C7EF2] focus:ring-1 focus:ring-[#1C7EF2] outline-none transition-all placeholder:text-gray-600"
                                        placeholder="john@company.com"
                                        disabled={formStatus.loading || !isReady}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Service souhaité</label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full p-4 bg-white/5 rounded-xl border border-white/10 text-white focus:border-[#1C7EF2] focus:ring-1 focus:ring-[#1C7EF2] outline-none transition-all appearance-none cursor-pointer"
                                        disabled={formStatus.loading || !isReady}
                                    >
                                        <option className="bg-[#0A1A2F]">Site Web Premium</option>
                                        <option className="bg-[#0A1A2F]">Dashboard Business Intelligence</option>
                                        <option className="bg-[#0A1A2F]">Automatisation</option>
                                        <option className="bg-[#0A1A2F]">Autre demande</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ArrowRight className="w-4 h-4 rotate-90" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full p-4 bg-white/5 rounded-xl border border-white/10 text-white focus:border-[#1C7EF2] focus:ring-1 focus:ring-[#1C7EF2] outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Décrivez vos besoins..."
                                    disabled={formStatus.loading || !isReady}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1C7EF2] hover:bg-blue-500 text-white font-bold py-5 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(28,126,242,0.4)] hover:shadow-[0_0_50px_-5px_rgba(28,126,242,0.6)] hover:-translate-y-1 mt-4 disabled:opacity-50 disabled:hover:-translate-y-0 disabled:shadow-none"
                                disabled={formStatus.loading || !isReady}
                            >
                                {formStatus.loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <Send className="w-5 h-5" /> Envoyer ma demande
                                    </span>
                                )}
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-white/5 text-center">
                            <a
                                href="https://wa.me/33666291353"
                                className="inline-flex items-center gap-3 text-white/70 hover:text-green-400 transition-colors group"
                            >
                                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-400/10 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                </span>
                                <span className="text-sm font-semibold">Ou discutez directement sur WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Home;

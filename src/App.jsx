import React, { useState, useEffect, useCallback } from 'react';
import {
    Monitor,
    BarChart3,
    Workflow,
    ArrowRight,
    CheckCircle2,
    Menu,
    X,
    ArrowLeft,
    Sparkles,
    Zap,
    Loader2,
    Send
} from 'lucide-react';

// --- FIREBASE IMPORTS ---
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, collection, addDoc, setLogLevel } from 'firebase/firestore';

// Récupération des variables sécurisées fournies par l'environnement (Canvas/Antigravity)
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;


// --- DATA & CONTENT ---

const projects = [
    {
        slug: "kademya",
        title: "Kademya",
        subtitle: "Plateforme éducative en ligne",
        context: "Kademya souhaitait moderniser son approche pédagogique en rendant ses ressources accessibles via une plateforme web intuitive.",
        technos: ["Next.js", "Node.js", "Stripe API"],
        features: ["Système de gestion de cours", "Paiements sécurisés", "Espace étudiant"],
        results: "Augmentation de 40% des inscriptions en 3 mois et simplification de la gestion administrative.",
        color: "from-blue-600 to-indigo-900"
    },
    {
        slug: "rize",
        title: "RIZE",
        subtitle: "Application mobile & Web",
        context: "Une startup fintech ayant besoin d'une landing page haute conversion pour son lancement.",
        technos: ["React", "Tailwind CSS", "Framer Motion"],
        features: ["Animations fluides", "Formulaire de lead capture", "Intégration CRM"],
        results: "2000+ inscrits sur la liste d'attente avant le lancement officiel.",
        color: "from-purple-600 to-indigo-900"
    },
    {
        slug: "vincent-marillier",
        title: "VincentMarillier.com",
        subtitle: "Portfolio Photographe",
        context: "Refonte du portfolio d'un photographe professionnel pour mettre en valeur ses clichés haute définition.",
        technos: ["Next.js", "Image Optimization", "Sanity CMS"],
        features: ["Galerie masonry", "Chargement progressif", "SEO optimisé pour l'art"],
        results: "Temps de chargement divisé par 3, meilleure visibilité sur Google.",
        color: "from-stone-700 to-stone-900"
    },
    {
        slug: "dashboard-cafe-luma",
        title: "Dashboard BI – Café Luma",
        subtitle: "Business Intelligence",
        context: "Café Luma avait besoin de visibilité sur ses pics de fréquentation et ses marges par produit.",
        technos: ["Power BI", "Excel Automation", "SQL"],
        features: ["Suivi des ventes temps réel", "Analyse des coûts", "Rapports automatisés"],
        results: "Optimisation des stocks réduisant le gaspillage de 15%.",
        color: "from-orange-500 to-red-900"
    }
];

const services = [
    {
        title: "Sites Web rapides et premium",
        description: "Un site vitrine moderne, responsive et professionnel — livré en 48 à 72 heures. Design soigné, navigation fluide, compatibilité mobile et SEO de base.",
        icon: Monitor
    },
    {
        title: "Data & Business Intelligence",
        description: "Dashboards clairs et intuitifs sous Power BI ou Looker Studio pour suivre vos ventes, votre fréquentation, votre performance. Visualisation simple et exploitable pour prendre de bonnes décisions, rapidement.",
        icon: BarChart3
    },
    {
        title: "Automatisations essentielles",
        description: "Automatisez vos processus : formulaires → WhatsApp / email, suivis clients, notifications, etc. Moins de tâches manuelles = plus de temps pour ce qui compte vraiment.",
        icon: Workflow
    }
];

const pricing = [
    { title: "Automatisation simple", price: "60 000 FCFA", type: "Processus" },
    { title: "Site vitrine", price: "120 000 FCFA", type: "Web", featured: true },
    { title: "Dashboard BI", price: "150 000 FCFA", type: "Data" },
];

// --- UTILS & STYLES ---

// Premium gradient text class
const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-300";
// Glass card base styles
const glassCardDark = "bg-[#0A1A2F]/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]";

// --- COMPONENTS ---

const Navigation = ({ activeView, onViewChange }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClass = "relative text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer group";

    const scrollTo = (id) => {
        setMobileMenuOpen(false);
        if (activeView !== 'home') {
            onViewChange('home');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'bg-[#0A1A2F]/70 backdrop-blur-xl border-b border-white/5 shadow-2xl py-2' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div
                    onClick={() => scrollTo('hero')}
                    className="text-2xl font-bold tracking-tighter text-white cursor-pointer flex items-center gap-1 group"
                >
                    Blone Agency
                    <span className="w-2 h-2 rounded-full bg-[#1C7EF2] shadow-[0_0_10px_#1C7EF2] group-hover:scale-150 transition-transform duration-300"></span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {['Services', 'Projets', 'Tarifs'].map((item) => (
                        <span key={item} onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))} className={navLinkClass}>
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1C7EF2] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    ))}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="group relative px-6 py-2.5 rounded-full overflow-hidden bg-white/5 border border-white/10 hover:border-[#1C7EF2]/50 transition-all duration-300"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1C7EF2]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative text-sm font-semibold text-white group-hover:text-blue-200 transition-colors">Contact</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white p-2 rounded-lg bg-white/5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#0A1A2F]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top-2">
                    {['Services', 'Projets', 'Tarifs'].map((item) => (
                        <span key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-gray-300 text-lg font-medium tracking-tight">{item}</span>
                    ))}
                    <button onClick={() => scrollTo('contact')} className="bg-[#1C7EF2] text-white py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(28,126,242,0.3)]">
                        Demander un devis
                    </button>
                </div>
            )}
        </nav>
    );
};

const Footer = () => (
    <footer className="relative bg-[#050D18] border-t border-white/5 pt-24 pb-12 text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1C7EF2]/10 rounded-full blur-[128px]"></div>

        <div className="container relative mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                <div className="mb-8 md:mb-0 max-w-sm">
                    <span className="text-3xl font-bold tracking-tighter text-white block mb-4">Blone Agency.</span>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Solutions digitales premium pour entreprises ambitieuses. <br />
                        Web · Data · Automation
                    </p>
                </div>
                <a href="mailto:contact@bloneagency.fr" className="group flex items-center gap-3 text-xl font-light hover:text-[#1C7EF2] transition-colors">
                    <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1C7EF2] transition-colors">
                        <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                    </span>
                    contact@bloneagency.fr
                </a>
            </div>
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Blone Agency.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <span className="hover:text-white cursor-pointer transition-colors">Mentions légales</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Confidentialité</span>
                </div>
            </div>
        </div>
    </footer>
);

// --- FORM SUBMISSION LOGIC ---

// Définit le chemin de la collection Firestore pour les contacts (Collection publique)
const getContactCollectionPath = (currentAppId) => `/artifacts/${currentAppId}/public/data/contacts`;

/**
 * Envoie les données du formulaire à Firebase Firestore.
 * @param {object} formData - Les données du formulaire.
 * @param {object} dbInstance - L'instance Firestore initialisée.
 * @param {object} authInstance - L'instance Auth initialisée.
 */
const submitContactForm = async (formData, dbInstance, authInstance) => {
    if (!dbInstance) {
        console.error("Firestore DB is not initialized.");
        throw new Error("Base de données non initialisée. Veuillez réessayer.");
    }
    if (!authInstance || !authInstance.currentUser) {
        console.error("User is not authenticated for Firestore write.");
        throw new Error("Erreur d'authentification. Impossible d'envoyer les données.");
    }

    try {
        const collectionPath = getContactCollectionPath(appId);

        const docRef = await addDoc(collection(dbInstance, collectionPath), {
            ...formData,
            timestamp: new Date().toISOString(),
            userId: authInstance.currentUser.uid // Utilise l'UID de l'utilisateur authentifié
        });
        console.log("Document successfully written with ID: ", docRef.id);
        return { success: true, docId: docRef.id };
    } catch (e) {
        console.error("Error adding document: ", e);
        throw new Error("Erreur lors de l'envoi. Veuillez réessayer. Détails : " + e.message);
    }
};

// --- PAGES ---

const ProjectDetailView = ({ slug, onBack, onStartSimilar }) => {
    const project = projects.find(p => p.slug === slug);

    if (!project) return <div className="text-white">Projet introuvable</div>;

    return (
        <div className="bg-[#050D18] min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="fixed inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(https://placehold.co/1920x1080/050D18/FFF?text=Placeholder+Image)" }}></div>
            <div className="container mx-auto px-6 py-24 relative z-10">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/70 hover:text-[#1C7EF2] transition-colors mb-12 text-sm font-semibold"
                >
                    <ArrowLeft className="w-4 h-4" /> Retour aux projets
                </button>

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
                            onClick={() => onStartSimilar(project.title)}
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

const HomeView = ({ setView, submitHandler, isReady, formStatus }) => {
    // Gestion du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Site Web Premium',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitHandler(formData, setFormData);
    };


    return (
        <>
            {/* HERO SECTION */}
            <section id="hero" className="relative pt-40 pb-32 lg:pt-52 lg:pb-40 bg-[#0A1A2F] overflow-hidden min-h-screen flex items-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#1C7EF2]/20 rounded-full blur-[120px] animate-pulse duration-[4000ms]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]"></div>

                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-3 h-3 text-[#1C7EF2]" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Agence Digitale Premium</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        Web, Data, <br className="hidden md:block" />
                        <span className={gradientText}>Automatisation.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Des solutions qui accélèrent votre activité. Sites performants et dashboards intelligents pour les entreprises modernes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
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
                    </div>
                </div>
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
                            <div key={i} className={`${glassCardDark} p-8 rounded-2xl group hover:border-[#1C7EF2]/30 transition-all duration-500 hover:-translate-y-2`}>
                                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#1C7EF2] group-hover:text-white group-hover:border-[#1C7EF2] transition-all duration-500 shadow-lg">
                                    <s.icon className="text-[#1C7EF2] group-hover:text-white w-7 h-7 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{s.description}</p>
                            </div>
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
                            <div
                                key={p.slug}
                                onClick={() => setView(p.slug)}
                                className="group relative h-[400px] cursor-pointer rounded-2xl overflow-hidden border border-white/5 transition-all hover:border-white/20"
                            >
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
                            </div>
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
                                href="#"
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
        </>
    );
};

// --- MAIN APPLICATION COMPONENT ---

const App = () => {
    const [activeView, setActiveView] = useState('home');
    const [projectSlug, setProjectSlug] = useState(null);

    // États pour Firebase
    const [dbInstance, setDbInstance] = useState(null);
    const [authInstance, setAuthInstance] = useState(null);
    const [isFirebaseReady, setIsFirebaseReady] = useState(false);

    // Gestion du formulaire au niveau global (pour le HomeView)
    const [formStatus, setFormStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    // 1. INITIALISATION DE FIREBASE & AUTHENTIFICATION
    useEffect(() => {
        const initializeFirebase = async () => {
            try {
                if (!Object.keys(firebaseConfig).length) {
                    console.error("Firebase Config is missing or empty.");
                    return;
                }

                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);
                const auth = getAuth(app);

                setLogLevel('debug'); // Active les logs de Firebase

                // Authentification
                if (initialAuthToken) {
                    await signInWithCustomToken(auth, initialAuthToken);
                } else {
                    await signInAnonymously(auth);
                }

                // Mise à jour des états une fois la connexion établie
                setDbInstance(db);
                setAuthInstance(auth);
                setIsFirebaseReady(true);
                console.log(`Firebase Initialized. Current User ID: ${auth.currentUser?.uid || 'anonymous'}`);

            } catch (error) {
                console.error("Firebase initialization or sign-in failed:", error);
                // Si l'initialisation échoue, on empêche l'envoi de formulaire
                setIsFirebaseReady(false);
                setFormStatus(prev => ({ ...prev, error: "Erreur de connexion à la base de données. Formulaire désactivé." }));
            }
        };
        initializeFirebase();
    }, []); // Exécuté une seule fois au montage du composant

    // 2. GESTIONNAIRE DE SOUMISSION DU FORMULAIRE
    const submitHandler = useCallback(async (formData, setFormData) => {
        if (!isFirebaseReady) {
            setFormStatus({ loading: false, success: false, error: "Base de données non prête. Veuillez attendre." });
            return;
        }

        setFormStatus({ loading: true, success: false, error: null });

        try {
            await submitContactForm(formData, dbInstance, authInstance);
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
    }, [isFirebaseReady, dbInstance, authInstance]); // Dépendances pour s'assurer que les instances sont prêtes

    // Navigation
    const handleViewChange = (newView) => {
        if (projects.some(p => p.slug === newView)) {
            setProjectSlug(newView);
            setActiveView('detail');
        } else if (newView === 'home') {
            setActiveView('home');
            setProjectSlug(null);
        }
    };

    const handleStartSimilar = (projectTitle) => {
        handleViewChange('home');
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            // Pour un vrai formulaire, on pourrait pré-remplir le champ 'service'
        }, 100);
    }

    return (
        <div className="min-h-screen bg-[#0A1A2F] text-white font-inter">
            {/* Configuration globale pour le font Inter (si non pris en charge globalement) */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');`}</style>

            <Navigation activeView={activeView} onViewChange={handleViewChange} />

            {activeView === 'home' && (
                <HomeView
                    setView={handleViewChange}
                    submitHandler={submitHandler}
                    isReady={isFirebaseReady}
                    formStatus={formStatus}
                />
            )}

            {activeView === 'detail' && projectSlug && (
                <ProjectDetailView
                    slug={projectSlug}
                    onBack={() => handleViewChange('home')}
                    onStartSimilar={handleStartSimilar}
                />
            )}

            {activeView === 'home' && <Footer />}
        </div>
    );
};

export default App;

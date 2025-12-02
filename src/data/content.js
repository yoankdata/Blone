import {
    Monitor,
    BarChart3,
    Workflow
} from 'lucide-react';

export const projects = [
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

export const services = [
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

export const pricing = [
    { title: "Automatisation simple", price: "60 000 FCFA", type: "Processus" },
    { title: "Site vitrine", price: "120 000 FCFA", type: "Web", featured: true },
    { title: "Dashboard BI", price: "150 000 FCFA", type: "Data" },
];

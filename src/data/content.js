import {
    Monitor,
    BarChart3,
    Workflow
} from 'lucide-react';

export const projects = [
    {
        slug: "kademya",
        title: "Kademya",
        link: "https://www.kademya-ci.com/",
        subtitle: "La référence du soutien scolaire à domicile en Côte d'Ivoire.",
        client: "Kademya (Abidjan, Côte d'Ivoire)",
        service: "Développement Fullstack, Intégration Paiement, Automatisation",
        role: "Création d'une plateforme performante connectant parents et professeurs via un catalogue intuitif et un modèle d'abonnement pour les enseignants.",
        context: {
            problem: "Le marché du soutien scolaire à Abidjan manque de structure. Les parents peinent à trouver des profils fiables, et les professeurs qualifiés manquent de visibilité.",
            issues: [
                { title: "Visibilité", desc: "Difficulté pour les professeurs de se faire connaître." },
                { title: "Confiance", desc: "Besoin de profils vérifiés manuellement par l'équipe." },
                { title: "Modèle Éco", desc: "Nécessité d'un revenu récurrent pour la plateforme via abonnements." }
            ],
            request: "Kademya avait besoin d'une solution robuste pour gérer son catalogue de professeurs et automatiser la souscription aux abonnements, sans complexité inutile."
        },
        objectives: [
            { title: "Catalogue Intuitif", desc: "Navigation simple par matière, niveau et commune." },
            { title: "Monétisation", desc: "Intégration fluide des abonnements professeurs (Stripe & Mobile Money)." },
            { title: "Performance", desc: "Une stack moderne pour une rapidité exemplaire sur mobile." },
            { title: "Scalabilité", desc: "Architecture prête pour accueillir des centaines de profils." }
        ],
        solution: {
            ux: [
                { title: "Identité", desc: "Palette premium et rassurante : Anthracite, Vert Menthe et Doré pour une image institutionnelle et moderne." },
                { title: "Recherche", desc: "Catalogue épuré avec filtres efficaces (Matière, Niveau, Ville) pour un accès direct aux profils pertinents." },
                { title: "Confiance", desc: "Fiches professeurs détaillées mettant en avant l'expérience et la pédagogie, sans artifices." }
            ],
            features: [
                { title: "Abonnements Professeurs", desc: "Paiement sécurisé via Stripe et Mobile Money pour l'accès à la plateforme." },
                { title: "Candidature Simplifiée", desc: "Formulaire d'inscription optimisé pour l'onboarding des enseignants." },
                { title: "Mise en relation", desc: "Contact direct via WhatsApp ou formulaire pour fluidifier les échanges." }
            ]
        },
        stack: {
            frontend: "Next.js (App Router) pour une performance native et un SEO optimisé.",
            styling: "Tailwind CSS pour une interface sur-mesure, propre et responsive.",
            backend: "Supabase pour l'authentification et la base de données temps réel.",
            payment: "Stripe & Agrégateur Mobile Money pour les souscriptions enseignants."
        },
        process: [
            "Développement Itératif : Conception directe dans Next.js pour un rendu immédiat.",
            "Intégration Backend : Configuration de Supabase et des flux de données.",
            "Paiement & Sécurité : Mise en place des webhooks Stripe et sécurisation des routes.",
            "Optimisation : Ajustements UX/UI finaux et tests mobile."
        ],
        results: "Une plateforme prête pour le lancement, offrant une infrastructure solide pour la croissance de Kademya. L'expérience est fluide, professionnelle et parfaitement adaptée au marché ivoirien.",
        gallery: [
            { title: "Homepage", desc: "Vue d'ensemble claire et institutionnelle.", image: "https://placehold.co/1920x1080/111827/FFF?text=Kademya+Homepage" },
            { title: "Catalogue Professeurs", desc: "Liste filtrable des enseignants disponibles.", image: "https://placehold.co/1920x1080/111827/FFF?text=Catalogue" },
            { title: "Fiche Professeur", desc: "Détails du profil, expérience et tarifs.", image: "https://placehold.co/1920x1080/111827/FFF?text=Fiche+Professeur" },
            { title: "Version Mobile", desc: "Interface optimisée pour une utilisation sur smartphone.", image: "https://placehold.co/1080x1920/111827/FFF?text=Mobile+Version" }
        ],
        technos: ["Next.js", "Supabase", "Stripe"],
        features: ["Catalogue Professeurs", "Abonnements", "Supabase Auth"],
        color: "from-gray-900 to-emerald-900"
    },
    {
        slug: "rize",
        title: "RIZE",
        link: "https://www.rizebygeden.com/",
        subtitle: "Un espace où les idées prennent vie.",
        client: "RIZE by Geden",
        service: "Développement Webflow, Automatisations, Intégration Paiement",
        role: "Digitalisation complète de l'expérience événementielle : du site vitrine immersif à la gestion automatisée de la billetterie.",
        context: {
            problem: "Le collectif gérait ses événements manuellement. Il manquait une plateforme centrale pour présenter l'univers de marque et simplifier les inscriptions.",
            issues: [
                { title: "Identité", desc: "Besoin d'un site 'pixel-perfect' respectant une charte graphique audacieuse." },
                { title: "Billetterie", desc: "Gestion lourde des inscrits et des paiements." },
                { title: "Check-in", desc: "Aucun système fluide pour l'entrée aux événements." }
            ],
            request: "Un site Webflow impactant couplé à un système de billetterie automatisé (Paiement + QR Code)."
        },
        objectives: [
            { title: "Immersion Visuelle", desc: "Retranscrire l'énergie du collectif (Orange #F15712, Noir, Typo Noir Pro)." },
            { title: "Automatisation", desc: "Zéro gestion manuelle : Inscription -> Paiement -> Envoi QR Code." },
            { title: "Flexibilité", desc: "Un CMS simple (Webflow) pour que l'équipe mette à jour les événements." },
            { title: "Expérience", desc: "Un parcours fluide pour l'utilisateur, du site à l'entrée de l'événement." }
        ],
        solution: {
            ux: [
                { title: "Direction Artistique", desc: "Univers fort : Orange vibrant (#F15712), Beige sable et Noir profond. Typographies 'Noir Pro' et 'Montserrat'." },
                { title: "Navigation", desc: "Structure claire mettant en avant les concepts phares : LOUDER et RIZE UP." },
                { title: "Interactivité", desc: "Mise en page dynamique type 'Magazine' pour valoriser les visuels." }
            ],
            features: [
                { title: "Billetterie Automatisée", desc: "Formulaires Tally connectés à Stripe pour le paiement." },
                { title: "Génération QR Code", desc: "Envoi automatique d'un billet avec QR Code unique après paiement." },
                { title: "CMS Événements", desc: "Gestion autonome des dates et des contenus via Webflow." }
            ]
        },
        stack: {
            frontend: "Webflow pour un développement visuel rapide et des animations fluides.",
            styling: "Respect strict de la charte : Noir Pro, Orange #F15712, Beige #F4F0EB.",
            backend: "Tally Forms couplé à une automatisation (Zapier/Make) pour la logique métier.",
            payment: "Stripe intégré aux formulaires pour des transactions sécurisées."
        },
        process: [
            "Intégration Webflow : Développement des pages selon les maquettes et la charte.",
            "Configuration Tally : Création des formulaires de billetterie complexes.",
            "Workflow d'Automation : Connexion Tally -> Stripe -> Générateur QR -> Email.",
            "Recettage : Tests complets du flux d'inscription et de scan des QR codes."
        ],
        results: {
            impact: "Une expérience 'sans couture' pour les participants et un gain de temps massif pour l'équipe organisatrice. L'identité visuelle forte a renforcé l'image de marque du collectif.",
            quote: "Le système de QR Code a tout changé pour nos entrées. Et le site est exactement comme on l'imaginait : audacieux et pro."
        },
        gallery: [
            { title: "Homepage", desc: "Design impactant avec la charte Orange & Noir.", image: "https://placehold.co/1920x1080/000000/F15712?text=RIZE+Webflow" },
            { title: "Billetterie Tally", desc: "Formulaire de paiement intégré et stylisé.", image: "https://placehold.co/1920x1080/F4F0EB/000000?text=Billetterie+Tally" },
            { title: "Billet QR Code", desc: "Exemple de billet reçu par email.", image: "https://placehold.co/1080x1920/F15712/FFF?text=Ticket+QR+Code" },
            { title: "CMS Événement", desc: "Page de détail d'un événement LOUDER.", image: "https://placehold.co/1920x1080/000000/FFF?text=Event+Page" }
        ],
        technos: ["Webflow", "Tally", "Stripe", "Zapier"],
        features: ["Webflow CMS", "QR Code Auto", "Paiement Stripe"],
        color: "from-orange-600 to-amber-900"
    },
    {
        slug: "vincent-marillier",
        title: "Vincent Marillier",
        link: "https://www.vincentmarillier.com/",
        subtitle: "Expert en Art & Estimation",
        client: "Vincent Marillier",
        service: "Site Webflow, Formulaire d'Estimation, Conformité RGPD",
        role: "Création d'un site institutionnel sobre et prestigieux pour un expert membre de la Chambre Européenne.",
        context: {
            problem: "Vincent Marillier avait besoin d'un outil digital pour crédibiliser son expertise et faciliter la réception de demandes d'estimation, souvent freinées par la distance ou la méconnaissance du processus.",
            issues: [
                { title: "Confiance", desc: "Inspirer un sérieux immédiat, crucial dans le marché de l'art." },
                { title: "Accessibilité", desc: "Une navigation simple pour un public parfois peu digitalisé (50+ ans)." },
                { title: "Conversion", desc: "Transformer les visiteurs en prospects qualifiés via un formulaire complet." }
            ],
            request: "Un site vitrine complet, conforme et élégant, avec un espace dédié aux estimations en ligne."
        },
        objectives: [
            { title: "Prestige", desc: "Une esthétique intemporelle (Bordeaux/Ivoire) reflétant la tradition et l'expertise." },
            { title: "Ergonomie", desc: "Navigation intuitive : Biographie, Expertises, Estimation, Contact." },
            { title: "Fonctionnalité", desc: "Un formulaire d'estimation détaillé (photos, dimensions, époque) mais simple à utiliser." },
            { title: "Visibilité", desc: "Préparer le terrain pour le référencement naturel sur les mots-clés d'expertise." }
        ],
        solution: {
            ux: [
                { title: "Identité Visuelle", desc: "Palette Bordeaux & Ivoire, typographie élégante et mise en page classique inspirée des galeries." },
                { title: "Architecture", desc: "Structure claire pour guider l'utilisateur vers l'estimation ou la prise de contact." },
                { title: "Mobile Friendly", desc: "Interface parfaitement lisible sur smartphone avec des sections aérées." }
            ],
            features: [
                { title: "Formulaire d'Estimation", desc: "Outil complet avec upload de photos et champs guidés pour qualifier la demande." },
                { title: "Pages Expertises", desc: "Présentation détaillée des spécialités (Peintures XVI-XXe, Sculptures)." },
                { title: "Conformité", desc: "Intégration rigoureuse des Mentions Légales et CGU pour rassurer." }
            ]
        },
        stack: {
            frontend: "Webflow pour un design sur-mesure et une gestion de contenu autonome.",
            styling: "Styles globaux Webflow pour une cohérence parfaite (Couleurs, Typos).",
            backend: "Gestion native des formulaires Webflow avec notifications email.",
            payment: "N/A (Site vitrine et prise de contact)."
        },
        process: [
            "Direction Artistique : Choix des codes couleurs et typographiques du luxe/art.",
            "Prototypage : Définition de l'arborescence et des parcours utilisateurs.",
            "Développement Webflow : Intégration pixel-perfect et configuration du CMS.",
            "Recettage : Vérification des formulaires et de la conformité mobile."
        ],
        results: {
            impact: "Le site positionne Vincent Marillier comme une référence crédible. Le formulaire est devenu un canal d'acquisition principal, simplifiant le premier contact pour les vendeurs.",
            quote: "Blone Agency a su parfaitement saisir l'esprit de mon métier. Le site est clair, rigoureux et professionnel — exactement ce dont j'avais besoin."
        },
        gallery: [
            { title: "Homepage", desc: "Accueil sobre mettant en valeur l'expertise.", image: "https://placehold.co/1920x1080/2C0B0E/F5F5DC?text=Vincent+Marillier+Home" },
            { title: "Page Biographie", desc: "Présentation du parcours de l'expert.", image: "https://placehold.co/1920x1080/F5F5DC/2C0B0E?text=Biographie" },
            { title: "Formulaire Estimation", desc: "Interface de dépôt de demande d'expertise.", image: "https://placehold.co/1920x1080/2C0B0E/FFF?text=Estimation+En+Ligne" },
            { title: "Mobile", desc: "Adaptation ergonomique sur petit écran.", image: "https://placehold.co/1080x1920/2C0B0E/F5F5DC?text=Mobile+Version" }
        ],
        technos: ["Webflow", "CMS", "Formulaires"],
        features: ["Estimation en ligne", "Portfolio Expert", "RGPD"],
        color: "from-rose-950 to-stone-900"
    },
    {
        slug: "dashboard-cafe-luma",
        title: "Cafés Luma",
        link: "#",
        subtitle: "Pilotage de la performance commerciale",
        client: "Cafés Luma (Lyon)",
        service: "Business Intelligence, Data Analysis, Power BI",
        role: "Consultant BI : De la modélisation des données à la restitution stratégique pour la direction.",
        context: {
            problem: "Malgré une hausse du CA, l'entreprise constatait une érosion des marges et une forte disparité de rentabilité entre ses canaux (B2B, Boutiques, E-commerce).",
            issues: [
                { title: "Visibilité", desc: "Manque de vision consolidée sur les stocks et les ventes multi-canal." },
                { title: "Rentabilité", desc: "Difficulté à identifier les produits et canaux les plus performants." },
                { title: "Décision", desc: "Besoin d'un outil de pilotage dynamique pour orienter la stratégie." }
            ],
            request: "Concevoir un tableau de bord Power BI complet pour piloter la performance et identifier les leviers de rentabilité."
        },
        objectives: [
            { title: "Centralisation", desc: "Unifier les données de ventes, produits, clients et stocks." },
            { title: "Analyse", desc: "Calculer précisément les marges, volumes et coûts par canal." },
            { title: "Pilotage", desc: "Offrir une vision synthétique et dynamique de la rentabilité mensuelle." },
            { title: "Action", desc: "Identifier les produits et campagnes marketing les plus rentables." }
        ],
        solution: {
            ux: [
                { title: "Vue Exécutive", desc: "KPIs macro (CA, Marge, Résultat) pour une prise de décision rapide." },
                { title: "Analyse Granulaire", desc: "Focus par produit et canal pour comprendre les leviers de performance." },
                { title: "Fidélisation", desc: "Analyse des comportements clients (Panier moyen, Fréquence) pour le marketing." }
            ],
            features: [
                { title: "Modélisation en Étoile", desc: "Architecture de données optimisée pour des performances d'analyse maximales." },
                { title: "Mesures DAX Avancées", desc: "Calculs dynamiques : Marge Brute, ROI Marketing, Panier Moyen, Ruptures." },
                { title: "Interactivité", desc: "Filtres dynamiques (Période, Canal, Client) et interactions croisées." }
            ]
        },
        stack: {
            frontend: "Power BI Desktop pour la visualisation et l'interactivité.",
            styling: "Thème sobre et professionnel (Bleu, Vert, Gris) favorisant la lecture des données.",
            backend: "Power Query pour l'ETL (Nettoyage et transformation des données sources).",
            payment: "N/A (Projet décisionnel interne)."
        },
        stackLabels: {
            frontend: "Visualisation",
            styling: "Design",
            backend: "Data Processing",
            payment: "Reporting"
        },
        process: [
            "Préparation : Nettoyage et uniformisation de 6 tables sources via Power Query.",
            "Modélisation : Création d'un modèle en étoile et d'une table Calendrier.",
            "Calculs : Développement des indicateurs clés (DAX) pour l'analyse financière.",
            "Restitution : Design du dashboard et analyse stratégique des résultats."
        ],
        results: {
            impact: "Mise en lumière de la faible marge B2B vs la rentabilité E-commerce. Recommandation stratégique : Réduire les remises B2B et booster l'acquisition en ligne. Optimisation des stocks réduisant le gaspillage.",
            quote: "Ce projet illustre une maîtrise complète de la chaîne de valeur BI : de la donnée brute à la décision stratégique."
        },
        gallery: [
            { title: "Vue Exécutive", desc: "Tableau de bord de synthèse pour la direction.", image: "https://placehold.co/1920x1080/0f172a/64748b?text=Dashboard+Executive" },
            { title: "Analyse Produits", desc: "Détail des marges par origine et canal.", image: "https://placehold.co/1920x1080/0f172a/64748b?text=Analyse+Produits" },
            { title: "Clients & Fidélité", desc: "Segmentation et comportement d'achat.", image: "https://placehold.co/1920x1080/0f172a/64748b?text=Clients+Fidelite" },
            { title: "Modèle de Données", desc: "Architecture en étoile et relations.", image: "https://placehold.co/1920x1080/0f172a/64748b?text=Modele+Donnees" }
        ],
        technos: ["Power BI", "DAX", "Power Query", "Excel"],
        features: ["Dashboard Interactif", "Analyse Financière", "ETL"],
        color: "from-slate-800 to-emerald-900"
    },
    {
        slug: "analyse-reussite-scolaire-dgrs",
        title: "Analyse Réussite Scolaire",
        link: "https://public.tableau.com/views/AnalysedelaRussiteScolaireDGRS/DashboardVueExcutive?:language=fr-FR&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        subtitle: "DGRS - Direction Générale de la Réussite Scolaire",
        client: "DGRS (Abidjan)",
        service: "Business Intelligence, Data Analysis",
        role: "Consultant BI : Transformation de données brutes en tableaux de bord décisionnels.",
        context: {
            problem: "La DGRS souhaitait identifier les facteurs déterminants de la réussite académique à partir d'un jeu de données brut de 1000 élèves.",
            issues: [
                { title: "Facteurs", desc: "Quels sont les éléments qui influencent la performance scolaire ?" },
                { title: "Impact", desc: "Quel est l'apport réel des cours de soutien sur les résultats ?" },
                { title: "Risques", desc: "Comment détecter précocement les élèves en difficulté ?" }
            ],
            request: "Transformer les données en outils décisionnels pour éclairer les politiques éducatives."
        },
        objectives: [
            { title: "Analyse", desc: "Identifier les facteurs clés de succès (Genre, Éducation parents)." },
            { title: "Mesure", desc: "Quantifier l'impact des cours de soutien (Uplift)." },
            { title: "Prévention", desc: "Détecter les élèves à risque pour agir tôt." },
            { title: "Outil", desc: "Fournir des tableaux de bord interactifs pour la DGRS." }
        ],
        solution: {
            ux: [
                { title: "Vue Exécutive", desc: "KPIs globaux et leviers de réussite pour les décideurs." },
                { title: "Équité & Risques", desc: "Focus sur les inégalités et identification des élèves vulnérables." },
                { title: "Rapport PDF", desc: "Synthèse narrative générée automatiquement pour diffusion." }
            ],
            features: [
                { title: "Nettoyage Python", desc: "Traitement et enrichissement du dataset (Pandas, suppression doublons)." },
                { title: "Modèle en Étoile", desc: "Structure de données optimisée pour l'analyse multidimensionnelle." },
                { title: "KPIs Calculés", desc: "Moyenne, Taux de réussite, Uplift, Score de risque." }
            ]
        },
        stack: {
            frontend: "Tableau Desktop pour la visualisation interactive.",
            styling: "Design épuré et institutionnel (Vert DGRS, Beige).",
            backend: "Python (Pandas) pour le nettoyage et l'enrichissement.",
            payment: "ReportLab pour la génération automatique de rapports PDF."
        },
        stackLabels: {
            frontend: "Visualisation",
            styling: "Design",
            backend: "Data Processing",
            payment: "Reporting"
        },
        process: [
            "Nettoyage : Traitement Python et création de variables (Uplift, Risque).",
            "Modélisation : Création du schéma en étoile et des relations.",
            "Visualisation : Conception des graphiques clés sous Tableau.",
            "Restitution : Assemblage des dashboards et rédaction du rapport exécutif."
        ],
        results: {
            impact: "Identification d'un uplift de +7.6 pts grâce au soutien scolaire. Mise en évidence des inégalités liées au niveau d'éducation parental.",
            quote: "L'intelligence des données n'est pas dans les chiffres, mais dans les décisions qu'ils inspirent."
        },
        gallery: [
            { title: "Vue Exécutive", desc: "KPIs et leviers de réussite.", image: "https://placehold.co/1920x1080/1E8540/F5F5DC?text=Vue+Executive" },
            { title: "Analyse Équité", desc: "Focus sur les inégalités.", image: "https://placehold.co/1920x1080/1E8540/F5F5DC?text=Analyse+Equite" },
            { title: "Rapport PDF", desc: "Synthèse narrative.", image: "https://placehold.co/1920x1080/F5F5DC/1E8540?text=Rapport+PDF" },
            { title: "Modèle de Données", desc: "Schéma en étoile.", image: "https://placehold.co/1920x1080/000000/FFF?text=Modele+Donnees" }
        ],
        technos: ["Tableau", "Python", "Pandas", "ReportLab"],
        features: ["Dashboards", "Analyse Statistique", "Rapport PDF"],
        color: "from-green-800 to-amber-700"
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

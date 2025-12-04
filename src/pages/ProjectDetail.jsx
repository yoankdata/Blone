import React from 'react';
import {
    ArrowLeft,
    Zap,
    CheckCircle2,
    Globe,
    Layout,
    Database,
    CreditCard,
    Smartphone,
    Search,
    UserCheck,
    Calendar,
    Target,
    Cpu,
    BarChart,
    ExternalLink
} from 'lucide-react';
import { projects } from '../data/content';

import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';

// Glass card base styles
const glassCardDark = "bg-[#0A1A2F]/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]";

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.slug === slug);

    if (!project) return <div className="text-white pt-32 text-center">Projet introuvable</div>;

    const onStartSimilar = () => {
        navigate('/', { state: { scrollTo: 'contact' } });
    };

    return (
        <PageTransition>
            <div className="bg-[#050D18] min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700">
                <Helmet>
                    <title>{project.title} | Blone Agency</title>
                    <meta name="description" content={typeof project.context === 'string' ? project.context : project.context.problem} />
                </Helmet>

                {/* Hero Background */}
                <div className="fixed inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: "url(https://grainy-gradients.vercel.app/noise.svg)" }}></div>
                <div className={`fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b ${project.color} opacity-20 blur-[100px] pointer-events-none`}></div>

                <div className="container mx-auto px-6 py-24 relative z-10">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/70 hover:text-[#1C7EF2] transition-colors mb-12 text-sm font-semibold w-fit"
                    >
                        <ArrowLeft className="w-4 h-4" /> Retour aux projets
                    </Link>

                    {/* HERO SECTION */}
                    <div className="max-w-4xl mb-20">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">{project.title}</h1>
                        <p className="text-2xl md:text-3xl text-gray-400 mb-8 font-light leading-tight">{project.subtitle}</p>

                        {project.role && (
                            <div className="p-6 bg-white/5 border-l-4 border-[#1C7EF2] rounded-r-xl mb-8">
                                <p className="text-gray-300 text-lg italic">"{project.role}"</p>
                            </div>
                        )}

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C7EF2] hover:bg-[#1565C0] text-white hover:text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                            >
                                Voir le projet <ExternalLink className="w-4 h-4" />
                            </a>
                        )}

                        {/* Project Meta Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-white/10 pt-8">
                            {project.client && (
                                <div>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Client</span>
                                    <span className="text-white font-medium">{project.client}</span>
                                </div>
                            )}
                            {project.service && (
                                <div>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Service</span>
                                    <span className="text-white font-medium">{project.service}</span>
                                </div>
                            )}
                            <div>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Stack</span>
                                <div className="flex flex-wrap gap-2">
                                    {project.technos.slice(0, 3).map((t, i) => (
                                        <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-white">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-20">

                            {/* CONTEXTE & ENJEUX */}
                            <section>
                                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Target className="w-8 h-8 text-[#1C7EF2]" /> Contexte & Enjeux
                                </h2>
                                {typeof project.context === 'string' ? (
                                    <p className="text-gray-300 text-lg leading-relaxed">{project.context}</p>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="bg-[#0A1A2F]/50 p-8 rounded-2xl border border-white/5">
                                            <h3 className="text-xl font-bold text-white mb-4">Le Problème</h3>
                                            <p className="text-gray-300 leading-relaxed">{project.context.problem}</p>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            {project.context.issues.map((issue, i) => (
                                                <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                                    <h4 className="text-white font-bold mb-2 text-lg">{issue.title}</h4>
                                                    <p className="text-gray-400 text-sm">{issue.desc}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pl-6 border-l-2 border-gray-700">
                                            <h3 className="text-xl font-bold text-white mb-2">La Demande</h3>
                                            <p className="text-gray-400 italic">{project.context.request}</p>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* OBJECTIFS */}
                            {project.objectives && (
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-8">Objectifs du Projet</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {project.objectives.map((obj, i) => (
                                            <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                                                <div className="w-10 h-10 rounded-full bg-[#1C7EF2]/20 flex items-center justify-center shrink-0 text-[#1C7EF2] font-bold">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold mb-2">{obj.title}</h3>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{obj.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* SOLUTION */}
                            {project.solution && (
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                        <Layout className="w-8 h-8 text-[#1C7EF2]" /> La Solution Blone
                                    </h2>

                                    <div className="mb-12">
                                        <h3 className="text-xl font-bold text-white mb-6">Expérience Utilisateur (UX/UI)</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {project.solution.ux.map((item, i) => (
                                                <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-blue-900/40 to-transparent border border-blue-500/20">
                                                    <h4 className="text-blue-300 font-bold mb-2">{item.title}</h4>
                                                    <p className="text-sm text-gray-300">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-6">Fonctionnalités Clés</h3>
                                        <div className="space-y-4">
                                            {project.solution.features.map((feat, i) => (
                                                <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-xl">
                                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                                    <div>
                                                        <h4 className="text-white font-bold">{feat.title}</h4>
                                                        <p className="text-gray-400 text-sm">{feat.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* STACK & PROCESS */}
                            {project.stack && (
                                <section>
                                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                        <Cpu className="w-8 h-8 text-[#1C7EF2]" /> Stack Technique
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">
                                                    {project.stackLabels?.frontend || "Frontend"}
                                                </h4>
                                                <p className="text-white border-l-2 border-[#1C7EF2] pl-4">{project.stack.frontend}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">
                                                    {project.stackLabels?.backend || "Backend"}
                                                </h4>
                                                <p className="text-white border-l-2 border-green-500 pl-4">{project.stack.backend}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">
                                                    {project.stackLabels?.styling || "Styling"}
                                                </h4>
                                                <p className="text-white border-l-2 border-purple-500 pl-4">{project.stack.styling}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">
                                                    {project.stackLabels?.payment || "Paiement"}
                                                </h4>
                                                <p className="text-white border-l-2 border-yellow-500 pl-4">{project.stack.payment}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {project.process && (
                                        <div className="bg-white/5 rounded-2xl p-8">
                                            <h3 className="text-xl font-bold text-white mb-6">Notre Processus</h3>
                                            <div className="space-y-4">
                                                {project.process.map((step, i) => (
                                                    <div key={i} className="flex items-center gap-4">
                                                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white">{i + 1}</span>
                                                        <p className="text-gray-300">{step}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </section>
                            )}

                            {/* RESULTATS */}
                            <section>
                                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <BarChart className="w-8 h-8 text-[#1C7EF2]" /> Résultats & Impact
                                </h2>

                                {typeof project.results === 'string' ? (
                                    <div className="text-white text-xl font-medium p-6 border-l-4 border-[#1C7EF2] bg-[#1C7EF2]/10 rounded-r-lg shadow-lg">
                                        "{project.results}"
                                    </div>
                                ) : (
                                    <>
                                        {project.results.stats && (
                                            <div className="grid grid-cols-2 gap-6 mb-8">
                                                {project.results.stats.map((stat, i) => (
                                                    <div key={i} className="bg-[#1C7EF2]/10 border border-[#1C7EF2]/20 p-8 rounded-2xl text-center">
                                                        <div className="text-4xl md:text-5xl font-bold text-[#1C7EF2] mb-2">{stat.value}</div>
                                                        <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {project.results.impact && (
                                            <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.results.impact}</p>
                                        )}
                                        {project.results.quote && (
                                            <blockquote className="border-l-4 border-[#1C7EF2] pl-6 py-2 italic text-xl text-white/80">
                                                "{project.results.quote}"
                                            </blockquote>
                                        )}
                                    </>
                                )}
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-10">
                            <div className={`${glassCardDark} p-6 rounded-xl border-white/5 sticky top-32`}>
                                <div className={`w-full h-48 rounded-xl mb-8 shadow-2xl bg-gradient-to-br ${project.color} flex items-center justify-center p-8`}>
                                    <Zap className="w-12 h-12 text-white/50 animate-pulse" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">Détails Techniques</h3>
                                <div className="space-y-3 mb-8">
                                    {project.technos.map((tech, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">Fonctionnalités</h3>
                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-2 mb-8">
                                    {/* Handle both string array and object array for features */}
                                    {project.solution ? (
                                        project.solution.features.map((f, i) => <li key={i}>{f.title}</li>)
                                    ) : (
                                        project.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))
                                    )}
                                </ul>

                                <button
                                    onClick={onStartSimilar}
                                    className="w-full group relative px-8 py-4 bg-white/5 hover:bg-[#1C7EF2] rounded-xl font-bold text-lg text-white shadow-[0_0_20px_-10px_rgba(28,126,242,0.5)] transition-all overflow-hidden border border-white/10 hover:border-transparent"
                                >
                                    <span className="relative z-10">Démarrer un projet similaire</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </PageTransition>
    );
};

export default ProjectDetail;

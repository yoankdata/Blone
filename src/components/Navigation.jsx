import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClass = "relative text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer group";

    const scrollTo = (id) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
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
                <button
                    className="md:hidden text-white p-2 rounded-lg bg-white/5"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
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

export default Navigation;

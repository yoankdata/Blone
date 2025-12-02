import React from 'react';
import { ArrowRight } from 'lucide-react';

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

export default Footer;

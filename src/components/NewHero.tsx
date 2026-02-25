"use client";

import LightPillar from './LightPillar';
import { Github, Mail, MapPin } from 'lucide-react';

const NewHero = () => {
  return (
    <div className="relative w-[100vw] h-screen overflow-hidden flex items-center justify-center">
      <LightPillar
        topColor="#33d17a"
        bottomColor="#1c71d8"
        intensity={1}
        rotationSpeed={0.3}
        glowAmount={0.002}
        pillarWidth={3}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />

      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 text-foreground/75">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">Entre Folhas, MG</span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-foreground"
        >
          Raul de Oliveira<br/>Gonçalves
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light"
        >
          <span className="text-primary font-medium">Desenvolvedor Full Stack</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/raulntjj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/raulntjj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="mailto:raulntjj@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>Contato</span>
          </a>
        </div>

        {/* Scroll indicator */}
        {/* <button
          onClick={scrollToAbout}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button> */}
      </div>
    </div>
  );
};

export default NewHero;
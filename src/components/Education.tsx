import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  'Arquitetura de Microsserviços e RabbitMQ com .NET – Alura',
  'ASP.Net Core: crie aplicações com C#, .NET, Entity Framework e LINQ – Alura',
  'Laravel: crie aplicações web em PHP – Alura',
  'Aprofunde em PHP com Escalabilidade e Arquitetura de Sistemas – Alura',
  'Next.js: autenticação e gestão de sessão – Alura',
  'Next.js e Tailwind: construindo um design system – Alura',
  'PHP 7 – COD3R',
];

const currentStudies = ['HyperF', 'Event Sourcing', 'CQRS', 'Mensageria em PHP e C#'];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, scale: 0.9, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="section-padding relative">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary border border-primary/30 mb-4">
            Formação
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Educação & Certificações
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Degree */}
          <div className="p-8 rounded-2xl glass gradient-border hover:glow-primary transition-all duration-500 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Bacharelado
            </h3>
            <p className="text-primary font-medium mb-1">Ciência da Computação</p>
            <p className="text-sm text-muted-foreground">Faculdades Doctum</p>
          </div>

          {/* Certifications */}
          <div className="group p-8 rounded-2xl glass gradient-border hover:glow-accent transition-all duration-500 cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center">
              Certificações
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className={`text-sm text-muted-foreground flex items-start gap-2 transition-all duration-300 ${
                    index >= 2 
                      ? 'opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-10' 
                      : 'opacity-100 max-h-10'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-4 text-xs text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <span className="group-hover:hidden">Passe o mouse para ver mais certificações</span>
              <span className="hidden group-hover:inline">Todas as certificações</span>
            </div>
          </div>

          {/* Current Studies */}
          <div className="p-8 rounded-2xl glass gradient-border hover:glow-primary transition-all duration-500 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Estudos Atuais
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {currentStudies.map((study, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {study}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

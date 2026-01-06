import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Rocket, Server, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  // {
  //   icon: Server,
  //   title: 'Arquitetura Multitenancy',
  //   description: 'Gestão de 50+ instâncias com isolamento completo de dados',
  // },
  {
    icon: Code2,
    title: 'Modernização de Sistemas',
    description: 'Migração de monolitos para arquiteturas desacopladas',
  },
  {
    icon: Rocket,
    title: 'DevOps & Cloud',
    description: 'AWS, Docker, GitHub Actions e infraestrutura escalável',
  },
  {
    icon: Sparkles,
    title: 'IA & Inovação',
    description: 'Microsserviços com processamento inteligente de documentos',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
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

      // Text animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.2)',
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
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary border border-primary/30 mb-4">
            Sobre Mim
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Transformando Ideias em Código
          </h2>
        </div>

        <p
          ref={textRef}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Desenvolvedor Full Stack com sólida experiência em desenvolvimento de APIs, 
          interfaces responsivas e modernização de sistemas legados. Proficiência em 
          <span className="text-primary"> PHP</span> com histórico comprovado em transições 
          de monolitos para arquiteturas desacopladas.
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass gradient-border hover:glow-primary transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

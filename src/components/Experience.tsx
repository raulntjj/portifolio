import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Desenvolvedor Pleno Full Stack',
    company: 'VERSA SAÚDE',
    period: 'Dez 2025 – Atual',
    description:
      'Desenvolvimento de soluções para Consórcios de Saúde, lidando com alta disponibilidade em arquiteturas multitenancy.',
    current: true,
  },
  {
    role: 'Desenvolvedor Pleno Full Stack',
    company: 'MORAR LEGAL',
    period: 'Ago 2024 – Dez 2025',
    description:
      'Desenvolvimento do MVP Matrícula Legal com microsserviços, modernização de sistemas legados migrando frontends Blade para Next.js, experiência com arquitetura multitenancy, participação full-cycle dos produtos do ecossistema.',
    current: false,
  },
  {
    role: 'Desenvolvedor Junior Full Stack',
    company: 'VERSA TEC',
    period: 'Mai 2024 – Ago 2024',
    description:
      'Desenvolvimento e participação full-cycle de APIs REST robustas em Laravel com documentação Swagger/OpenAPI. Construção de dashboards administrativos dinâmicos com Next.js aplicando métodos ágeis Kanban.',
    current: false,
  },
  {
    role: 'Desenvolvedor Freelance & Projetos Próprios',
    company: 'Autônomo',
    period: 'Dez 2023 – Atual',
    description:
      'Desenvolvimento do Planning App (eedja.com), Hub-BI (bi.superglobo.com.br) e multitenancy-api. Soluções completas e customizadas como SaaS e Landing pages.',
    current: false,
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      // Timeline line animation
      const line = timelineRef.current?.querySelector('.timeline-line');
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Timeline items animation
      const items = timelineRef.current?.querySelectorAll('.timeline-item');
      items?.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary border border-primary/30 mb-4">
            Trajetória
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Experiência Profissional
          </h2>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div
            className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30 origin-top"
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="p-6 rounded-2xl glass gradient-border hover:glow-primary transition-all duration-500">
                    <div
                      className={`flex items-center gap-2 mb-3 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          Atual
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>

                    <div
                      className={`flex items-center gap-2 mb-3 text-primary ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

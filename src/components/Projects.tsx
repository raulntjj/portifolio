import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Lock, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Planning App',
    description: 'SaaS completo para gestão de planejamento escolar com arquitetura Lumen/Next.js.',
    stack: ['Lumen', 'Next.js'],
    link: 'https://eedja.com',
    github: null,
    status: 'live',
    gradient: 'from-primary to-accent',
  },
  {
    title: 'Hub-BI',
    description: 'Plataforma de Business Intelligence customizada para a SuperGlobo.',
    stack: ['Next.js'],
    link: 'https://bi.superglobo.com.br',
    github: null,
    status: 'live',
    gradient: 'from-accent to-primary',
  },
  {
    title: 'Multitenancy API',
    description: 'Arquitetura para suporte a múltiplos inquilinos (SaaS) com isolamento de dados.',
    stack: ['PHP', 'Laravel'],
    link: null,
    github: 'https://github.com/raulntjj/multitenancy-api',
    status: 'opensource',
    gradient: 'from-primary via-accent to-primary',
  },
  {
    title: 'Auth Service .NET',
    description: 'Serviço de autenticação/autorização com JWT e Identity.',
    stack: ['.NET', 'C#'],
    link: null,
    github: 'https://github.com/raulntjj/auth-api',
    status: 'opensource',
    gradient: 'from-accent via-primary to-accent',
  },
  {
    title: 'BeatFlow',
    description: 'Frontend de rede social desenvolvido em colaboração acadêmica.',
    stack: ['Next.js', 'React'],
    link: null,
    github: 'https://github.com/raulntjj/beatflow-app',
    status: 'opensource',
    gradient: 'from-primary to-accent',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      // Projects animation
      const projects = projectsRef.current?.children;
      if (projects) {
        gsap.fromTo(
          projects,
          { opacity: 0, y: 80, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsRef.current,
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
    <section id="projects" ref={sectionRef} className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-accent border border-accent/30 mb-4">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Projetos em Destaque
          </h2>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: '1000px' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden glass gradient-border hover:glow-accent transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient header */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {project.status === 'live' ? (
                      <div className="flex items-center gap-1.5 text-primary text-xs font-medium">
                        <Globe className="w-3.5 h-3.5" />
                        <span>No Ar</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-accent text-xs font-medium">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Open Source</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Lock, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Aurora SaaS',
    description: 'Plataforma para gestão e planejamento escolar.',
    stack: ['Lumen', 'Redis', 'Next.js', 'PostgreSQL', 'Docker'],
    link: 'https://eedja.com',
    github: null,
    status: 'live',
    gradient: 'from-primary to-accent',
  },
  {
    title: 'Hub-BI',
    description: 'Dashboard corporativo de Business Intelligence para análise de dados estratégicos e tomada de decisão em tempo real.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Docker'],
    link: 'https://bi.superglobo.com.br',
    github: null,
    status: 'live',
    gradient: 'from-accent to-primary',
  },
  {
    title: 'Subscription Tracker',
    description: 'Monorepo com submódulos para gestão de assinaturas, integrando mensageria e processamento assíncrono de rotinas.',
    stack: ['Laravel Octane', 'Redis', 'RabbitMQ', 'Next.js', 'MySQL', 'Docker', 'DDD', 'CQS', 'i18n', 'Grafana', 'Prometheus'],
    link: null,
    github: 'https://github.com/raulntjj/subscription-tracker',
    status: 'opensource',
    gradient: 'from-accent via-primary to-accent',
  },
  {
    title: 'Multitenancy API',
    description: 'Core API estruturada com isolamento de dados (Database-per-tenant), aplicando princípios avançados de design de software.',
    stack: ['PHP', 'Lumen', 'Docker', 'MySQL'],
    link: null,
    github: 'https://github.com/raulntjj/multitenancy-api',
    status: 'opensource',
    gradient: 'from-primary via-accent to-primary',
  },
  {
    title: 'Identity Auth Service',
    description: 'Microsserviço de Autenticação e Autorização robusto utilizando arquitetura limpa, Identity e JWT.',
    stack: ['.NET', 'C#'],
    link: null,
    github: 'https://github.com/raulntjj/auth-api',
    status: 'opensource',
    gradient: 'from-accent via-primary to-accent',
  },
  // {
  //   title: 'BeatFlow Api',
  //   description: 'API REST para rede social de músicos, construída com foco em performance e escalabilidade, utilizando Laravel Lumen e Redis para caching.',
  //   stack: ['Laravel', 'MySQL'],
  //   link: null,
  //   github: 'https://github.com/raulntjj/beatflow-api',
  //   status: 'opensource',
  //   gradient: 'from-primary to-accent',
  // },
  // {
  //   title: 'BeatFlow App',
  //   description: 'Projeto de rede social para músicos, para um trabalho acadêmico com consumo eficiente de APIs REST.',
  //   stack: ['Next.js', 'React'],
  //   link: null,
  //   github: 'https://github.com/raulntjj/beatflow-app',
  //   status: 'opensource',
  //   gradient: 'from-primary to-accent',
  // },
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
    <section id="projects" ref={sectionRef} className="section-padding relative">
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
              className="group relative rounded-2xl overflow-hidden bg-muted/25 transition-all duration-500 hover:-translate-y-2"
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

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Backend',
    color: 'primary',
    skills: ['PHP (Laravel, Lumen, HyperF)', 'C# (.NET)', 'Node.js (Express, Fastify)', 'PHPUnit'],
  },
  {
    title: 'Frontend & Mobile',
    color: 'accent',
    skills: ['JavaScript/TypeScript', 'Next.js', 'React', 'Vue.js', 'Jest', 'Blade (Laravel)', 'React Native'],
  },
  {
    title: 'Bancos & Armazenamento',
    color: 'primary',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud, DevOps & Infra',
    color: 'accent',
    skills: ['AWS (ECS, Lambda, EC2, S3)', 'Docker', 'GitHub Actions', 'Swagger/OpenAPI', 'RabbitMQ'],
  },
  {
    title: 'Gestão & Metodologias',
    color: 'primary',
    skills: ['Scrum', 'Kanban', 'Jira', 'Ritos Ágeis'],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

      // Categories animation
      const categories = categoriesRef.current?.querySelectorAll('.skill-category');
      categories?.forEach((category, index) => {
        gsap.fromTo(
          category,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: category,
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
    <section id="skills" ref={sectionRef} className="section-padding relative bg-secondary/20">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-accent border border-accent/30 mb-4">
            Competências
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Stack Técnica
          </h2>
        </div>

        <div ref={categoriesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category p-6 rounded-2xl glass"
            >
              <h3
                className={`font-display text-xl font-semibold mb-6 ${
                  category.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-tag px-3 py-1.5 rounded-lg text-sm font-medium border ${
                      category.color === 'primary'
                        ? 'bg-primary/10 text-primary border-primary/30'
                        : 'bg-accent/10 text-accent border-accent/30'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

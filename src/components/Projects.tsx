
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink, Github, Layers } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with admin dashboard, payment integration, and real-time inventory tracking.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: '#',
    githubLink: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team coordination features.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    demoLink: '#',
    githubLink: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that creates marketing copy, blog posts, and social media content based on user inputs.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    demoLink: '#',
    githubLink: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Health Tracking Dashboard',
    description: 'A comprehensive health analytics dashboard that visualizes fitness data, nutrition info, and wellness metrics.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    demoLink: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Real Estate Marketplace',
    description: 'A property listing platform with advanced search, virtual tours, and mortgage calculator features.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    tags: ['Angular', 'Node.js', 'MongoDB', 'Express'],
    demoLink: '#',
    githubLink: '#',
    featured: false,
  },
];

const Projects = () => {
  const [active, setActive] = useState<'all' | 'featured'>('featured');

  const filteredProjects = active === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            My Work
          </span>
        </motion.div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText 
              text="Featured Projects" 
              className="text-balance"
              speed={0.03}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of my recent work showcasing my skills and experience in software development.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg border border-border p-1 bg-muted/30">
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                active === 'featured' 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActive('featured')}
            >
              Featured
            </button>
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                active === 'all' 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActive('all')}
            >
              All Projects
            </button>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden glass h-full flex flex-col transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 z-20">
                        {project.featured && (
                          <span className="px-2 py-1 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs rounded-full flex items-center">
                            <Layers className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-border">
                        <div className="flex space-x-3">
                          <a 
                            href={project.githubLink} 
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`View ${project.title} GitHub repository`}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                          <a 
                            href={project.demoLink} 
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </div>
                        <a 
                          href={project.demoLink} 
                          className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                        >
                          View Project
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

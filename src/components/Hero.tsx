
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './ui/AnimatedText';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect on mousemove
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const shapes = containerRef.current.querySelectorAll('.shape');
      const x = e.clientX;
      const y = e.clientY;
      shapes.forEach((shape: Element) => {
        const speed = (shape as HTMLElement).dataset.speed || '1';
        const moveX = (x - window.innerWidth / 2) * Number(speed) * 0.01;
        const moveY = (y - window.innerHeight / 2) * Number(speed) * 0.01;
        (shape as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-24" ref={containerRef}>
      {/* Background shapes - absolute positioned */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="shape absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-primary/5 animate-float" data-speed="-2"></div>
        <div className="shape absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-primary/10 animate-float" style={{
        animationDelay: '1s'
      }} data-speed="3"></div>
        <div className="shape absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-400/5 animate-float" style={{
        animationDelay: '0.5s'
      }} data-speed="-1"></div>
        <div className="shape absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-blue-500/5 animate-float" style={{
        animationDelay: '1.5s'
      }} data-speed="2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 whitespace-nowrap">
              Software Engineer
            </span>
          </motion.div>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">
            Mithil Reddy K
          </motion.h1>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-center">
            <AnimatedText text="Crafting Digital Solutions with Code" className="text-balance whitespace-nowrap" speed={0.03} />
          </h2>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto text-balance">
            Building innovative software solutions that combine elegant design with robust functionality.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="rounded-full w-full sm:w-auto">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
              Download Resume
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.7
        }} className="mt-10 flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.5
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors">
        <a href="#about" className="flex flex-col items-center animate-float">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </motion.div>
    </section>;
};
export default Hero;

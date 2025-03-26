
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import AnimatedText from './ui/AnimatedText';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600')] bg-cover bg-center mix-blend-overlay"></div>
                  </div>
                </div>
                <div className="absolute -z-10 inset-0 blur-3xl bg-primary/20 opacity-50 rounded-full scale-150"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-xl border border-border rotate-12"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-muted rounded-xl border border-border -rotate-12"></div>
              </div>
            </motion.div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <motion.div
                className="mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  About Me
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <AnimatedText 
                  text="Passionate Software Engineer with an Eye for Detail" 
                  className="text-balance"
                  speed={0.03}
                />
              </h2>

              <motion.p 
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I'm a software engineer with a passion for creating elegant, efficient, and user-centered digital experiences. With a strong foundation in both frontend and backend technologies, I bring a holistic approach to software development.
              </motion.p>

              <motion.p 
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                My journey in technology began with a curiosity about how digital systems work, which evolved into a career building robust applications that solve real-world problems. I believe in clean, maintainable code and collaborative development practices.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {[
                  { label: "Name", value: "John Doe" },
                  { label: "Email", value: "john@example.com" },
                  { label: "Location", value: "San Francisco, CA" },
                  { label: "Experience", value: "5+ Years" },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="p-4 rounded-xl glass">
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "h-11 px-6"
                  )}
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

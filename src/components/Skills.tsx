
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import AnimatedText from './ui/AnimatedText';
import { CheckCircle2, Cloud, Code, Code2, Database, Globe, Layout, Layers, PenTool, Server, Smartphone } from 'lucide-react';

// Skill categories with skills
const skillCategories = [
  {
    name: 'Cloud & DevOps',
    icon: <Cloud className="h-5 w-5" />,
    skills: ['Azure Cloud', 'Azure AI', 'AWS Lightsail', 'DevOps', 'CI/CD', 'Git', 'GitHub Actions', 'Docker']
  },
  {
    name: 'Salesforce',
    icon: <Code className="h-5 w-5" />,
    skills: ['Salesforce Development', 'Apex', 'Lightning Web Components', 'Salesforce Administration', 'Integration', 'Customization', 'Flow Builder', 'SOQL']
  },
  {
    name: 'Database',
    icon: <Database className="h-5 w-5" />,
    skills: ['MongoDB', 'Firebase', 'NoSQL', 'Data Modeling', 'Real-time Database', 'Firebase Authentication', 'MongoDB Atlas', 'Firestore']
  }
];

const Skills = () => {
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
    <section id="skills" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            My Expertise
          </span>
        </motion.div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText 
              text="Skills & Technologies" 
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
            A comprehensive overview of my technical skills and the technologies I work with.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['Salesforce', 'Azure AI', 'Azure Cloud', 'AWS Lightsail', 'DevOps', 'MongoDB', 'Firebase'].map((lang, i) => (
              <div 
                key={i} 
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm"
              >
                {lang}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

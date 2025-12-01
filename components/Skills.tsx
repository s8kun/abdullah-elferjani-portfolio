import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Layout,
  GitBranch,
  Terminal,
  Brain,
  Users,
  MessageCircle
} from 'lucide-react';

const Skills: React.FC = () => {
  const techSkills = [
    { name: 'React.js', icon: Code, color: 'text-blue-400' },
    { name: 'Next.js', icon: Layout, color: 'text-white' },
    { name: 'JavaScript (ES6+)', icon: Terminal, color: 'text-yellow-400' },
    { name: 'PHP', icon: Server, color: 'text-purple-400' },
    { name: 'Laravel', icon: Database, color: 'text-red-500' },
    { name: 'Tailwind CSS', icon: Layout, color: 'text-cyan-400' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'text-orange-500' },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Brain, desc: 'Logical approach to challenges' },
    { name: 'Teamwork', icon: Users, desc: 'Collaborative and supportive' },
    { name: 'Communication', icon: MessageCircle, desc: 'Clear and effective' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 relative">
       {/* Decorative bg */}
       <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">A mix of technical expertise and professional attributes.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tech Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-blue-500 pl-4">
              Technical Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-3 shadow-lg group cursor-default"
                >
                  <skill.icon size={32} className={`${skill.color} transition-transform group-hover:rotate-12 duration-300`} />
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
             <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-green-500 pl-4">
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-6 hover:bg-slate-750 transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-blue-400">
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                    <p className="text-sm text-gray-400">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
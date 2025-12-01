import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone, BookOpen, Globe } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <User size={24} /> Personal Details
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-4">
                <span className="font-semibold w-24 text-gray-400">
                  Full Name:
                </span>
                <span>Abdullah Elferjani</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold w-24 text-gray-400">Age:</span>
                <span>19 Years</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold w-24 text-gray-400">
                  Location:
                </span>
                <span>Benghazi, Libya</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold w-24 text-gray-400">Email:</span>
                <span className="break-all">elferjnai7@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold w-24 text-gray-400">Phone:</span>
                <span>0917779372</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold w-24 text-gray-400">
                  Languages:
                </span>
                <span>Arabic, English</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-semibold w-24 text-gray-400">
                  Education:
                </span>
                <span>University of Benghazi (Student)</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              My Journey & Goals
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am a dedicated and ambitious developer who enjoys solving
              problems and building real-world applications. At just 19, I've
              cultivated a strong passion for backend development with{" "}
              <span className="text-blue-400 font-semibold">PHP & Laravel</span>{" "}
              and frontend development using{" "}
              <span className="text-blue-400 font-semibold">
                React and Next.js
              </span>
              .
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Currently pursuing my studies at the University of Benghazi, I
              dedicate my free time to coding and learning the latest web
              standards. I am always looking to improve skills, explore new
              technologies, and deliver high-quality work that makes a
              difference.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
                <span className="block text-2xl font-bold text-white mb-1">
                  2+
                </span>
                <span className="text-sm text-gray-400">Years Coding</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500">
                <span className="block text-2xl font-bold text-white mb-1">
                  5+
                </span>
                <span className="text-sm text-gray-400">Projects Built</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

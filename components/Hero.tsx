import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import BlurText from "./animation/BlurText";
import Aurora from "./animation/Aurora";
import TextType from "./animation/textType";
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 pt-16"
    >
      <Aurora
        colorStops={["#3A29FF", "#000000", "#07115a"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      {/* Background decoration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-sans">
            Hi, I'm{" "}
            <BlurText
              text="Abdullah Elferjani"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl md:text-7xl font-bold flex justify-center items-center"
            />
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 font-medium mb-6 leading-relaxed flex justify-center items-center">
            <TextType
              text={[
                "Full Stack Developer",
                "React.js & Next.js",
                "PHP & Laravel",
              ]}
              typingSpeed={30}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#" // Placeholder for CV download
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500"
        >
          <a href="#about">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

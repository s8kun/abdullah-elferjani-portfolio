import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your message!");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            Have a project in mind? Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:elferjnai7@gmail.com"
                  className="flex items-start gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium break-all">
                      elferjnai7@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/218917779372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-green-600 transition-colors">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp / Phone</p>
                    <p className="font-medium">091 777 9372</p>
                  </div>
                </a>

                <a
                  href="https://github.com/s8kun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="font-medium">github.com/s8kun</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Send Me a Message
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                      placeholder="your.email@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

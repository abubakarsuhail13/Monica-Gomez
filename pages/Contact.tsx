
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 6000);
  };

  return (
    <div className="pb-32 overflow-hidden">
      {/* Header */}
      <section className="bg-slate-50 py-32 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-9xl font-black text-navy-900 tracking-tighter">Let's <span className="text-blue-600">Sync</span></h1>
            <p className="text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
              Approachable. Strategic. Direct. Reach out to start a conversation about your next organizational leap.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-start">
        {/* Contact Form Container */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-blue-100 rounded-[3.5rem] rotate-2 opacity-30"></div>
          <div className="relative bg-white p-10 md:p-16 rounded-[3rem] shadow-3xl border border-slate-50 overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-24 space-y-10"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-5xl shadow-2xl animate-pulse">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-black text-navy-900 uppercase tracking-tighter">Message Received</h2>
                    <p className="text-slate-500 text-lg font-light">Monica will be in touch shortly to discuss details.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-navy-900 uppercase tracking-[0.2em] ml-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Michael Chen" 
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-[1.5rem] px-8 py-5 transition-all outline-none text-lg"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-navy-900 uppercase tracking-[0.2em] ml-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="e.g. michael@venture.com" 
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-[1.5rem] px-8 py-5 transition-all outline-none text-lg"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-navy-900 uppercase tracking-[0.2em] ml-2">Organization</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Acme Tech Solutions" 
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-[1.5rem] px-8 py-5 transition-all outline-none text-lg"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-navy-900 uppercase tracking-[0.2em] ml-2">Inquiry Details</label>
                    <textarea 
                      required
                      rows={5} 
                      placeholder="Briefly describe your hiring goals or career objectives..." 
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-[1.5rem] px-8 py-5 transition-all outline-none resize-none text-lg"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white font-black py-6 rounded-[1.5rem] hover:bg-navy-900 transition-all shadow-2xl hover:shadow-blue-500/30 text-xl tracking-wide flex items-center justify-center group"
                  >
                    Initiate Contact
                    <i className="fas fa-paper-plane ml-4 group-hover:translate-x-2 transition-transform"></i>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Global Reach Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-20 py-10"
        >
          <div className="space-y-12">
            <h2 className="text-4xl font-black text-navy-900 tracking-tight">Direct Channels</h2>
            <div className="space-y-10">
              <div className="flex items-start space-x-8 group">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[1.8rem] flex items-center justify-center flex-shrink-0 text-3xl shadow-lg transition-transform group-hover:rotate-6">
                  <i className="fas fa-at"></i>
                </div>
                <div>
                  <h4 className="font-black text-navy-900 mb-2 text-2xl">Digital</h4>
                  <a href="mailto:link2test@gmail.com" className="text-slate-500 text-xl hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 font-light">link2test@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-8 group">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[1.8rem] flex items-center justify-center flex-shrink-0 text-3xl shadow-lg transition-transform group-hover:-rotate-6">
                  <i className="fas fa-mobile-screen-button"></i>
                </div>
                <div>
                  <h4 className="font-black text-navy-900 mb-2 text-2xl">Voice</h4>
                  <p className="text-slate-500 text-xl font-light">600-700-4000</p>
                </div>
              </div>
              {/* Fix for reported error on line 193: ensuring clean tag closure and attributes */}
              <div className="flex items-start space-x-8 group">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[1.8rem] flex items-center justify-center flex-shrink-0 text-3xl shadow-lg transition-transform group-hover:rotate-3">
                  <i className="fas fa-map-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-black text-navy-900 mb-2 text-2xl">Operations</h4>
                  <p className="text-slate-500 text-xl font-light">
                    San Diego, California <br />
                    <span className="text-blue-500 font-bold text-sm tracking-widest uppercase mt-1 block">Nationwide Service Capacity</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-navy-900 p-12 rounded-[3.5rem] shadow-3xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-bl-full opacity-20 -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-black mb-8 border-b border-slate-700 pb-4">Strategic Advantage</h3>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <i className="fas fa-shield-halved text-blue-500 text-xl"></i>
                <span className="text-lg text-slate-300 font-light">Exclusive access to passive talent pools</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-bolt text-blue-500 text-xl"></i>
                <span className="text-lg text-slate-300 font-light">Rapid identification of high-fit profiles</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-handshake text-blue-500 text-xl"></i>
                <span className="text-lg text-slate-300 font-light">Full-cycle negotiation and closing mastery</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

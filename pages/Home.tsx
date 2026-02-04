
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES, INDUSTRIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Bilingual Strategic Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-navy-900 leading-[1.1] tracking-tight">
              Connecting <span className="text-blue-600 italic font-serif">Great Talent</span> with Right Opportunities
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              10+ years of high-impact recruiting, helping Fortune 500s and startups build the foundations of their success through exceptional talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="group bg-navy-900 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-600 transition-all shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center">
                Hire Talent
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link to="/about" className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-md transform hover:-translate-y-1 flex items-center justify-center">
                My Story
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block relative"
          >
             <div className="absolute -inset-6 bg-blue-100/50 rounded-[3rem] -rotate-3 z-0"></div>
             <div className="absolute -inset-2 bg-white rounded-[3rem] z-10 shadow-xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=776" 
               alt="Monica Gomez Professional Headshot" 
               className="relative z-20 w-full aspect-[4/5] rounded-[2.5rem] shadow-2xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute bottom-8 -right-8 z-30 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-bounce-slow">
               <div className="flex items-center space-x-3">
                 <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                   <i className="fas fa-check-double"></i>
                 </div>
                 <div>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Success Rate</p>
                   <p className="text-2xl font-black text-navy-900">98%</p>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">Recruiting is about Relationships</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            I don't just "fill seats." I partner with leadership to understand the DNA of their organization. My approach is rooted in strategy, human psychology, and a decade of specialized industry knowledge.
          </p>
        </motion.div>
      </section>

      {/* Services Grid Preview */}
      <section className="bg-slate-100/50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900">Expert Solutions</h2>
              <p className="text-slate-600 max-w-md text-lg">Sophisticated talent strategies for an evolving market.</p>
            </motion.div>
            <Link to="/services" className="group text-blue-600 font-bold text-lg hover:text-blue-700 flex items-center">
              Explore All Services <i className="fas fa-arrow-right-long ml-3 group-hover:translate-x-2 transition-transform"></i>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[1.5rem] flex items-center justify-center mb-8 text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Banner */}
      <section className="max-w-7xl mx-auto px-6 overflow-hidden">
        <h3 className="text-center text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-16">Global Expertise • Diverse Industries • Proven Results</h3>
        <div className="relative group">
           <motion.div 
             animate={{ x: [0, -100, 0] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="flex flex-wrap justify-center gap-x-16 gap-y-10"
           >
            {INDUSTRIES.map((industry, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black text-slate-200 hover:text-blue-500/30 transition-colors cursor-default select-none whitespace-nowrap">
                {industry}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <i className="fas fa-quote-left text-7xl text-blue-600/30 mb-8 block"></i>
            <blockquote className="text-3xl md:text-5xl font-light italic leading-[1.3] mb-12 max-w-3xl mx-auto relative z-10">
              “Most successful people find opportunities not when they’re looking, but when they <span className="text-blue-500 font-bold not-italic">answer the knock</span>.”
            </blockquote>
            <div className="flex flex-col items-center relative z-10">
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>
              <p className="text-xl font-medium tracking-wide">MONICA GOMEZ</p>
              <p className="text-blue-400 text-sm font-bold tracking-[0.2em] mt-2">STRATEGIC RECRUITING PARTNER</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

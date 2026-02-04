
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, INDUSTRIES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-navy-900 py-32 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400 rounded-full blur-[120px] opacity-10 -ml-32 -mb-32"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Talent <span className="text-blue-500">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Bespoke recruiting architecture designed for scale, precision, and long-term organizational health.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-50 flex flex-col items-start transition-all duration-500 hover:border-blue-200 group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.5rem] flex items-center justify-center mb-10 text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-blue-500/30">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-3xl font-bold text-navy-900 mb-6 leading-tight">{service.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 flex-grow">{service.description}</p>
              <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                Learn More <i className="fas fa-arrow-right-long ml-3"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[4rem] p-12 md:p-24 shadow-inner"
        >
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-8 leading-[1.1]">
                Mastery Across <br/><span className="text-blue-600">The Vertical Spectrum</span>
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light">
                Recruiting is not one-size-fits-all. I specialize in deep-dive headhunting for technical roles and high-volume orchestration for rapidly growing divisions.
              </p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                {INDUSTRIES.map((industry, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-navy-900 font-bold text-lg group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                      <i className="fas fa-check"></i>
                    </div>
                    <span>{industry}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                 className="absolute -inset-10 border-2 border-dashed border-blue-200 rounded-full opacity-50 pointer-events-none"
               ></motion.div>
               <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-6">
                  <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400" className="rounded-[2.5rem] shadow-2xl w-full h-80 object-cover" />
                  <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" className="rounded-[2.5rem] shadow-2xl w-full h-52 object-cover" />
                </div>
                <div className="space-y-6 pt-12">
                  <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=400" className="rounded-[2.5rem] shadow-2xl w-full h-52 object-cover" />
                  <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=400" className="rounded-[2.5rem] shadow-2xl w-full h-80 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* High-Contrast CTA */}
      <section className="max-w-7xl mx-auto px-6 text-center py-20">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-blue-600 text-white p-16 md:p-24 rounded-[4rem] shadow-3xl flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-10 max-w-4xl mx-auto leading-tight">Ready to elevate your talent strategy?</h2>
          <a href="#/contact" className="inline-flex items-center bg-white text-blue-600 px-12 py-6 rounded-[2rem] text-2xl font-black hover:bg-navy-900 hover:text-white transition-all duration-500 shadow-2xl transform hover:-translate-y-2">
            Let's Talk Business <i className="fas fa-paper-plane ml-4"></i>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

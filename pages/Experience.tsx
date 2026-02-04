
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_HIGHLIGHTS } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="pb-32 overflow-hidden">
      {/* Header */}
      <section className="bg-slate-50 py-32 px-6 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-black text-navy-900 tracking-tighter">Career <br/><span className="text-blue-600 italic">Timeline</span></h1>
            <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed font-light">
              Over a decade of orchestrating success for high-growth organizations, from skilled trades to Fortune 500 giants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="max-w-5xl mx-auto px-6 py-32 relative">
        {/* Central Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/50 via-slate-200 to-transparent"></div>

        <div className="space-y-24">
          {EXPERIENCE_HIGHLIGHTS.map((exp, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-[3px] md:left-1/2 top-10 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-xl group-hover:scale-150 transition-transform"></div>
              </div>

              {/* Experience Card */}
              <div className={`w-full md:w-[45%] bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 hover:border-blue-200 transition-all group ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="flex flex-col space-y-4 mb-8">
                  <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest w-fit">
                    Career Highlight
                  </div>
                  <h3 className="text-3xl font-black text-navy-900 leading-tight">{exp.role}</h3>
                  <p className="text-blue-600 font-bold text-xl">{exp.company}</p>
                </div>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="bg-slate-50 text-slate-500 px-4 py-2 rounded-xl text-xs font-bold border border-slate-100 uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Stats Dashboard */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-navy-900 rounded-[5rem] p-16 md:p-32 relative overflow-hidden shadow-3xl"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 relative z-10 text-center">
            <div className="space-y-4">
              <motion.span whileHover={{ scale: 1.1 }} className="text-6xl md:text-8xl font-black text-blue-500 block">10+</motion.span>
              <p className="text-slate-400 text-sm uppercase font-black tracking-[0.3em]">Years Growth</p>
            </div>
            <div className="space-y-4">
              <motion.span whileHover={{ scale: 1.1 }} className="text-6xl md:text-8xl font-black text-white block">50+</motion.span>
              <p className="text-slate-400 text-sm uppercase font-black tracking-[0.3em]">Cities Scaled</p>
            </div>
            <div className="space-y-4">
              <motion.span whileHover={{ scale: 1.1 }} className="text-6xl md:text-8xl font-black text-blue-500 block">1K+</motion.span>
              <p className="text-slate-400 text-sm uppercase font-black tracking-[0.3em]">High Impact Placements</p>
            </div>
            <div className="space-y-4">
              <motion.span whileHover={{ scale: 1.1 }} className="text-6xl md:text-8xl font-black text-white block">BI</motion.span>
              <p className="text-slate-400 text-sm uppercase font-black tracking-[0.3em]">Bilingual Mastery</p>
            </div>
          </div>
          <div className="mt-20 pt-20 border-t border-slate-800 text-center">
             <p className="text-slate-400 text-xl font-light italic max-w-2xl mx-auto">
               "Building partnerships that endure, across every state and industry vertical."
             </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;

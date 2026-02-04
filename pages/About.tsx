
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pb-24 overflow-hidden">
      {/* Header */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-navy-900 tracking-tight">The Person <br/><span className="text-blue-600">Behind the Search</span></h1>
            <p className="text-2xl text-slate-500 max-w-2xl leading-relaxed font-light">
              Strategic thinker. Relationship builder. Proud Niners fan. Your recruiting partner for the next generation of growth.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-20 items-start">
        {/* Bio Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-navy-900 flex items-center">
              <span className="w-12 h-1 bg-blue-600 rounded-full mr-4"></span>
              Professional Summary
            </h2>
            <div className="space-y-6 text-xl text-slate-700 leading-[1.6]">
              <p>
                Monica Gomez is a results-driven recruiter with over a decade of experience in corporate and agency recruiting. She partners with <span className="font-bold text-navy-900">Fortune 500 companies</span>, startups, and growing businesses to attract, engage, and retain top talent.
              </p>
              <p>
                Known for integrity, quality, and relationship-building, Monica specializes in full-cycle recruiting across Contingent, Direct Hire, and RPO models, including VMS and MSP environments.
              </p>
              <p className="bg-blue-50 p-8 rounded-[2rem] border-l-8 border-blue-600 italic">
                "Her mission is to help professionals find careers they can call home—not just another job—while helping employers build strong, reliable teams."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-navy-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <i className="fas fa-brain text-8xl"></i>
              </div>
              <h3 className="font-bold text-2xl mb-6 flex items-center text-blue-400">
                CliftonStrengths
              </h3>
              <ul className="space-y-3 text-lg font-light text-slate-300">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> Intellectual</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> Maximizer</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> Relator</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> Deliberative</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> Ideation</li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-[3rem] text-slate-800 shadow-xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-2xl mb-6 flex items-center text-navy-900">
                  Enneagram Type 5
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed font-light mb-8">
                  Curious, analytical, and strategic thinker. Monica seeks to understand the deeper architecture of organizational needs.
                </p>
              </div>
              <div className="bg-blue-600 text-white px-6 py-3 rounded-2xl inline-block font-bold text-sm tracking-widest text-center uppercase">
                Analytical Mindset
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sidebar / Fun Facts */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            <h2 className="text-3xl font-bold text-navy-900 mb-10 relative z-10">Beyond Business</h2>
            <div className="space-y-10 relative z-10">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl transform rotate-3 shadow-lg group-hover:rotate-0 transition-transform">
                  <i className="fas fa-football"></i>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-xl">Niners Fan</h4>
                  <p className="text-slate-500 text-base leading-relaxed mt-1">Die-hard San Francisco 49ers supporter. Faithfulness is non-negotiable.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl transform -rotate-3 shadow-lg group-hover:rotate-0 transition-transform">
                  <i className="fas fa-music"></i>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-xl">80s & 90s Music</h4>
                  <p className="text-slate-500 text-base leading-relaxed mt-1">Loves the classics. From synth-pop beats to the raw energy of 90s grunge.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl transform rotate-6 shadow-lg group-hover:rotate-0 transition-transform">
                  <i className="fas fa-gamepad"></i>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-xl">Classic Gaming</h4>
                  <p className="text-slate-500 text-base leading-relaxed mt-1">Enjoys the strategic nostalgia of retro video games and arcade legends.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-1 rounded-[3rem] bg-gradient-to-br from-blue-500 to-navy-900 shadow-2xl"
          >
            <div className="bg-white rounded-[2.8rem] p-10 text-center">
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
              <h3 className="text-2xl font-black text-navy-900 mb-4 tracking-tight uppercase">Bilingual Advantage</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Fluent in English and Spanish, enabling seamless connection across diverse global teams and candidates.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

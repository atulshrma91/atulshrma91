"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { resumeData } from "@/app/data";
import { 
  Code, Database, Server, Layout, Box, Globe, Terminal, Cloud, Trello, Mail, Github 
} from "lucide-react";
import { UpworkLogo } from "@/components/UpworkLogo";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [0.8, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 selection:bg-teal-500 selection:text-white overflow-x-hidden">
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-[100]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-teal-50 transition-colors"></span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Expertise</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a 
              href="https://www.upwork.com/freelancers/~01e89351d6e10619b8" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-teal-500/10 text-teal-400 font-medium border border-teal-500/20 hover:bg-teal-500 hover:text-white transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-20">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl text-center space-y-8 backdrop-blur-sm p-8 rounded-3xl border border-white/5 bg-white/5 shadow-2xl"
        >
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-light text-teal-400 tracking-wider uppercase">
              Hello, I&apos;m
            </h2>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-teal-200">
              {resumeData.name}
            </h1>
          </div>
          
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full" />
          
          <h2 className="text-3xl md:text-4xl font-semibold text-white/90">
            {resumeData.title}
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            {resumeData.summary}
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#contact" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-10 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Get in Touch
            </a>
            <a 
              href="#skills" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-slate-800/50 px-10 text-base font-semibold text-white transition-all hover:bg-slate-700/50 hover:scale-105 border border-white/10 backdrop-blur-md"
            >
              View Skills
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-slate-900/50 skew-y-3 origin-top-left -z-10 h-full w-full" />
        
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Technical Expertise
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit honed over a decade of delivering high-performance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard title="Backend Frameworks" icon={<Server className="w-6 h-6" />} skills={resumeData.skills.backend} color="from-blue-500/20 to-cyan-500/20" />
            <SkillCard title="Frontend Frameworks" icon={<Layout className="w-6 h-6" />} skills={resumeData.skills.frontend} color="from-purple-500/20 to-pink-500/20" />
            <SkillCard title="Headless CMS" icon={<Box className="w-6 h-6" />} skills={resumeData.skills.headlessCms} color="from-orange-500/20 to-red-500/20" />
            <SkillCard title="AI Automation" icon={<Code className="w-6 h-6" />} skills={resumeData.skills.aiAutomation} color="from-green-500/20 to-emerald-500/20" />
            <SkillCard title="Database" icon={<Database className="w-6 h-6" />} skills={resumeData.skills.database} color="from-yellow-500/20 to-amber-500/20" />
            <SkillCard title="Web Services & API" icon={<Globe className="w-6 h-6" />} skills={[...resumeData.skills.webServices, ...resumeData.skills.api.payment]} color="from-teal-500/20 to-cyan-500/20" />
            <SkillCard title="DevOps & Cloud" icon={<Cloud className="w-6 h-6" />} skills={[...resumeData.skills.devOps, ...resumeData.skills.hosting]} color="from-indigo-500/20 to-blue-500/20" />
            <SkillCard title="Tools & Testing" icon={<Terminal className="w-6 h-6" />} skills={[...resumeData.skills.testing, ...resumeData.skills.versioning]} color="from-gray-500/20 to-slate-500/20" />
            <SkillCard title="Agile & Management" icon={<Trello className="w-6 h-6" />} skills={resumeData.skills.agile} color="from-rose-500/20 to-pink-500/20" />
          </div>
          
          {/* Detailed API List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-32 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             
             <h4 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
               <Globe className="w-6 h-6" />
               Extensive API Integrations
             </h4>
             <div className="flex flex-wrap gap-3">
               {resumeData.skills.api.services.map((skill, idx) => (
                 <span key={idx} className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 text-sm font-medium border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800 transition-colors cursor-default">
                   {skill}
                 </span>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-teal-950/20" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-10 relative z-10 bg-slate-900/40 p-12 rounded-3xl border border-white/5 backdrop-blur-sm"
        >
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white">Let&apos;s Collaborate</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I&apos;m confident I can deliver exactly what you need. Feel free to message me or send an invitation for a quick chat.
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
             <a 
               href="https://www.upwork.com/freelancers/~01e89351d6e10619b8" 
               target="_blank"
               rel="noopener noreferrer"
               className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 transition-all text-white font-semibold text-lg shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1"
             >
               <Mail className="w-6 h-6 group-hover:animate-bounce" />
               <span>Hire Me on Upwork</span>
             </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>

          <div className="flex gap-4">
            <SocialLink href="https://www.upwork.com/freelancers/~01e89351d6e10619b8" icon={<UpworkLogo className="w-6 h-6" />} />
            <SocialLink href="https://github.com/atulshrma91" icon={<Github className="w-6 h-6" />} />
          </div>
        </div>
      </footer>
    </main>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="p-2 rounded-full bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-teal-400 transition-all border border-slate-800"
    >
      {icon}
    </a>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
      {children}
    </a>
  );
}

function SkillCard({ title, icon, skills, color }: { title: string, icon: React.ReactNode, skills: string[], color?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/30 transition-all group relative overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color || 'from-slate-800/50 to-slate-900/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5 text-teal-400 group-hover:text-teal-300 transition-colors">
          <div className="p-2 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
            {icon}
          </div>
          <h4 className="text-lg font-bold text-white tracking-wide">{title}</h4>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1.5 rounded-md bg-slate-950/50 text-slate-300 text-xs font-medium border border-slate-700/50 group-hover:border-teal-500/20 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

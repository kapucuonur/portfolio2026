import React, { useState } from 'react';
import { Code, Mail, Github, Linkedin, ExternalLink, ChevronDown, Menu, X, Smartphone, Watch, Monitor, Terminal, Server, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Hotel Booking System",
      description: "Production-ready hotel management platform with real-time availability tracking, secure payments, Docker containerization, and Cloudflare Tunnels for secure external access. Self-hosted on Raspberry Pi 5.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Nginx", "Cloudflare"],
      link: "https://github.com/kapucuonur",
      github: "https://github.com/kapucuonur",
      features: ["Real-time Availability", "Docker", "Self-hosted"],
      color: "from-violet-500 to-purple-600",
      type: "Full-Stack Platform"
    },
    {
      title: "CoachOnur AI",
      description: "Production AI coaching platform for athletes with real-time Garmin OAuth2 data sync (HRV, Sleep, Activity), AI-generated training decisions via Google Gemini, Stripe subscriptions, and comprehensive analytics.",
      tech: ["FastAPI", "React", "PostgreSQL", "Stripe", "Garmin API", "Google Gemini"],
      link: "https://coachonurai.com",
      github: "https://github.com/kapucuonur",
      features: ["Garmin Sync", "AI Coaching", "Stripe Payments"],
      color: "from-emerald-400 to-teal-500",
      type: "AI SaaS Platform"
    },
    {
      title: "WatchToMac",
      description: "Native macOS utility solving the critical Garmin file transfer issue on Apple Silicon (M1/M2/M3) with low-level USB/MTP protocol implementation. Solves a compatibility issue affecting 100K+ users.",
      tech: ["Swift", "SwiftUI", "AppKit", "System Programming", "USB/MTP"],
      link: "https://2236586809450.gumroad.com/l/kdrbne",
      github: "https://github.com/kapucuonur",
      features: ["Native App", "M1/M2/M3 Optimized", "Plug & Play"],
      color: "from-orange-500 to-red-500",
      type: "macOS App"
    },
    {
      title: "Learn-Finnish.fi",
      description: "AI-powered SaaS platform generating personalized Finnish lessons via Google Gemini, serving 100+ active paying subscribers with Stripe payment integration and Firebase backend.",
      tech: ["Next.js", "React", "Google Gemini API", "Stripe", "Firebase"],
      link: "https://learn-finnish.fi",
      github: "https://github.com/kapucuonur",
      features: ["AI Tutor", "100+ Subscribers", "Stripe Payments"],
      color: "from-indigo-500 to-purple-500",
      type: "AI SaaS Platform"
    },
    {
      title: "Ice Bath Tracker",
      description: "Cold plunge monitoring wearable app published on Garmin Connect IQ Store, with real-time skin temperature, heart rate adaptation tracking, and recovery analytics for global users.",
      tech: ["Monkey C", "Garmin CIQ SDK", "Wearable Sensor APIs"],
      link: "https://apps.garmin.com/apps/9d9633a0-51a9-48c3-8fad-44de0e4277fc",
      github: "https://github.com/kapucuonur",
      features: ["Biometric Tracking", "Global Store", "Recovery Analytics"],
      color: "from-blue-400 to-cyan-300",
      type: "Wearable App"
    }
  ];

  const skills = {
    "Mobile & Native": ["Swift", "SwiftUI", "AppKit", "Flutter", "Dart", "React Native", "Monkey C (Garmin)"],
    "Frontend": ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Redux", "Material-UI"],
    "Backend": ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "REST APIs", "WebSockets"],
    "DevOps & Infrastructure": ["Docker", "Docker Compose", "Nginx", "Cloudflare Tunnels", "Raspberry Pi", "CI/CD", "Git"],
    "Databases": ["PostgreSQL", "MongoDB", "Firebase", "SQLite"],
    "AI & Cloud": ["Google Gemini API", "OpenAI API", "Groq API", "TensorFlow", "RLHF", "Azure", "Vercel"],
  };

  const experiences = [
    {
      role: "Founder & Software Engineer",
      company: "TriHonor",
      companyUrl: "https://trihonor.com",
      period: "Nov 2022 – Present",
      location: "Tampere, Finland",
      color: "border-cyan-400",
      highlights: [
        "Founded registered Finnish software company (Y-tunnus: 3131622-7) with 30+ shipped projects",
        "Architected self-hosted production stack on Raspberry Pi 5 with Docker, Nginx, PostgreSQL & Cloudflare Tunnels",
        "Engineered CoachOnur AI — real-time athlete coaching platform with Garmin OAuth2, Google Gemini & Stripe",
        "Built Learn-Finnish.fi serving 100+ active paying subscribers with AI-generated personalized lessons",
        "Published native macOS utility (WatchToMac) & Garmin wearable app on Connect IQ Store"
      ]
    },
    {
      role: "Freelance Software Engineer & Nordic Market Lead",
      company: "METIQ Solutions",
      companyUrl: null,
      period: "Nov 2025 – Apr 2026",
      location: "Remote",
      color: "border-purple-400",
      highlights: [
        "Built Garmin Connect IQ smart home control apps integrating with openHAB IoT platform",
        "Designed AI-powered smart home solutions for Nordic & Baltic markets (Finland, Estonia, Latvia, Lithuania)",
        "Led B2B partnerships with 10+ targets including Bisly, HUUM, Smart Control OÜ, and Volantra Grupp",
        "Collaborated with engineering teams in Bratislava & Zagreb on AI-driven feature development"
      ]
    },
    {
      role: "AI Training Specialist",
      company: "Outlier AI",
      companyUrl: null,
      period: "2024",
      location: "Remote",
      color: "border-green-400",
      highlights: [
        "Optimized internal AI workflows by building custom dashboards using Flask and Groq API",
        "Increased team productivity by 25% through automation and tooling",
        "Contributed to RLHF pipelines improving LLM code generation accuracy for production deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Onur Kapucu
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'products', 'tech stack', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.replace(' ', ''))}
                  className="hover:text-cyan-400 transition-colors text-gray-300 capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-gray-900 border-t border-gray-800">
              {['home', 'about', 'experience', 'products', 'techstack', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-800 rounded transition-colors capitalize text-gray-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 mx-auto shadow-xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                 <span className="text-4xl font-bold text-white">OK</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Software Engineer <span className="text-cyan-400">&</span><br />
            Founder @ <a href="https://trihonor.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors underline decoration-cyan-400/30">TriHonor</a>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Engineer specializing in <span className="text-white font-semibold">AI-integrated products</span>, <span className="text-white font-semibold">self-hosted infrastructure</span>, and cross-platform development across <span className="text-white font-semibold">Web, Mobile & Native Systems</span>.
          </p>
          <p className="text-lg text-cyan-500/80 mb-10 font-medium">
            📍 Tampere, Finland | 🐧 Raspberry Pi 5 Self-Hosted | 🚀 Shipping Real Products
          </p>

          <div className="flex justify-center space-x-5 mb-12">
            <a href="https://github.com/kapucuonur" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/onur-kapucu/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:onur@trihonor.com" className="p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#products" onClick={() => scrollToSection('products')} className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full text-lg font-bold hover:shadow-lg hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1">
              View My Products
            </a>
            <a href="/Onur_Kapucu_Resume_2026_Updated.pdf" download className="px-8 py-3 rounded-full text-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all">
              Download CV
            </a>
          </div>

          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Full-Stack. AI-Integrated. Self-Hosted.
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Versatile Software Engineer with <strong>3+ years</strong> delivering production-grade applications across <strong>Web, Mobile, and Hardware</strong> ecosystems. I architect and deploy full-stack systems using React, FastAPI, Node.js, and modern DevOps infrastructure.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Self-hosted infrastructure specialist running <strong>multiple production apps on Raspberry Pi 5</strong> with Docker, Nginx, and Cloudflare Tunnels — zero unplanned downtime. Proven track record shipping AI-integrated products with real users and revenue.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                  <h4 className="font-bold text-white mb-1">Self-Hosted Infra</h4>
                  <p className="text-sm text-gray-400">Raspberry Pi 5 + Docker + Cloudflare</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-white mb-1">Wearable & Native</h4>
                  <p className="text-sm text-gray-400">Swift macOS & Garmin Monkey C</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-bold text-white mb-1">AI Integration</h4>
                  <p className="text-sm text-gray-400">Google Gemini, OpenAI, Groq API</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-bold text-white mb-1">Registered Company</h4>
                  <p className="text-sm text-gray-400">TriHonor Y-tunnus: 3131622-7</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
               {/* Stats Cards */}
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center hover:border-cyan-500/50 transition-colors">
                    <Monitor className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">30+</div>
                    <div className="text-sm text-gray-400">Ships Projects</div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center hover:border-purple-500/50 transition-colors">
                    <Server className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">0</div>
                    <div className="text-sm text-gray-400">Unplanned Downtime</div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center hover:border-green-500/50 transition-colors">
                    <Smartphone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center hover:border-orange-500/50 transition-colors">
                    <Code className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-sm text-gray-400">Active Subscribers</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Professional roles and impact delivered.</p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`bg-gray-800/50 rounded-2xl p-8 border border-gray-700 border-l-4 ${exp.color} hover:bg-gray-800 transition-colors`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">{exp.company}</a>
                      ) : (
                        <span className="text-cyan-400 font-semibold">{exp.company}</span>
                      )}
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-400 bg-gray-900 px-4 py-1.5 rounded-full border border-gray-700 whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Live applications solving real-world problems.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-gray-500 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
                <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                     <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-900 text-gray-300 border border-gray-700">
                        {project.type}
                     </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-4 leading-relaxed flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium bg-gray-900/80 px-3 py-1.5 rounded text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700 mt-auto">
                    <div className="flex space-x-4">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors font-medium">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Product</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com/kapucuonur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              <span>View 30+ more projects on GitHub</span>
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-colors hover:bg-gray-900">
                <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center">
                   <span className="w-2 h-8 bg-cyan-500 rounded-full mr-3"></span>
                   {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300 border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Build Something <br />
            <span className="text-cyan-400">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently available for full-time opportunities. Whether you need a native macOS app, a wearable solution, or a scalable web platform.
          </p>
          
          <a href="mailto:onur@trihonor.com" className="inline-flex items-center space-x-3 bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-white/10 hover:shadow-cyan-400/20">
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
          </a>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <a href="https://github.com/kapucuonur" className="flex flex-col items-center group">
               <div className="p-4 bg-gray-800 rounded-full group-hover:bg-cyan-500 transition-colors mb-3">
                 <Github className="w-6 h-6 text-white" />
               </div>
               <span className="text-sm text-gray-500 group-hover:text-cyan-400">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/onur-kapucu/" className="flex flex-col items-center group">
               <div className="p-4 bg-gray-800 rounded-full group-hover:bg-blue-600 transition-colors mb-3">
                 <Linkedin className="w-6 h-6 text-white" />
               </div>
               <span className="text-sm text-gray-500 group-hover:text-blue-500">LinkedIn</span>
            </a>
            <a href="mailto:onur@trihonor.com" className="flex flex-col items-center group">
               <div className="p-4 bg-gray-800 rounded-full group-hover:bg-purple-500 transition-colors mb-3">
                 <Mail className="w-6 h-6 text-white" />
               </div>
               <span className="text-sm text-gray-500 group-hover:text-purple-400">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-medium">
            © 2026 Onur Kapucu | <a href="https://trihonor.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">TriHonor</a>. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2 flex items-center justify-center">
            Built with React & Tailwind • Deployed in Finland 🇫🇮
          </p>
        </div>
      </footer>
    </div>
  );
}
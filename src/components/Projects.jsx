const projects = [
  { 
    title: "Student Evaluation UI", 

    desc: "A C++ evaluation engine built for manual memory management and event-driven GUI architecture. Features an 'Amethyst' QSS theme and hardened validation.", 

    tech: ["C++", "Qt6", "qmake"] 
  },
  { 
    title: "Arch Linux Setup", 

    desc: "Custom Hyprland & GNOME dotfiles optimized for performance and tiling-window workflows.", 

    tech: ["Lua", "Bash", "Arch"] 
  },
  { 
    title: "Router-on-a-Stick Lab", 

    desc: "Enterprise network simulation focusing on VLAN encapsulation and inter-VLAN routing logic.", 

    tech: ["Cisco", "Networking"] 
  },
  {
    title: "Arch Linux Unified Package Architect | C++",

    desc: "Compiled C++ utility unifying Arch and AUR package management. Implements system calls and selection logic to streamline complex terminal workflows.",

    tech: [ "C++", "Linux Systems API", "Bash Integration", "Pacman/ALPM", "AUR (Yay)"]
  }
];

const Projects = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="py-40 px-6 max-w-6xl mx-auto">
      <div className="mb-20">
        <div className="font-mono text-violet-500 text-xs mb-3 tracking-[0.5em] font-bold uppercase">
          [ 0x03_PROJECT_MODULES ]
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase flex items-center gap-6">
          WORK_LOG 
          <div className="h-px grow bg-violet-900/20"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-[#07021a]/40 border border-violet-900/20 p-8 flex flex-col transition-all hover:border-violet-500/50 hover:bg-[#0c052e]/60">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-violet-500/30 group-hover:border-violet-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-violet-500/30 group-hover:border-violet-400"></div>

            <span className="font-mono text-[9px] text-violet-500/40 uppercase tracking-widest">
              id:0x0{index+1}
            </span>
            
            <h3 className="text-xl font-bold text-white mt-3 mb-4 font-mono group-hover:text-violet-400 transition-colors">
              {project.title.toUpperCase()}
            </h3>
            
            {/* The Fix: Dynamic height with min-height */}
            <p className="text-slate-400 text-sm leading-relaxed mb-auto min-h-[80px] font-sans">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tag, i) => (
                <span key={i} className="text-[10px] font-mono border border-violet-900/40 px-2 py-0.5 text-slate-300 bg-violet-950/20 hover:border-violet-500/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Progress Bar Animation */}
            <div className="mt-8 h-[1px] w-full bg-violet-900/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-violet-500/50 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
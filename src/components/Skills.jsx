const Skills = ({ sectionRef }) => {
  const skillSet = [
    { 
      category: "SYSTEM_RESOURCES", 
      items: [
        { name: "C++", level: "90%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C Language", level: "85%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Arch Linux", level: "95%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      ]
    },
    { 
      category: "WEB_SUBSYSTEMS", 
      items: [
        { name: "React", level: "70%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Python", level: "75%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", level: "65%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <div className="font-mono text-violet-500 text-[10px] mb-2 tracking-[0.5em] font-bold uppercase">[ 0x04_SKILLS_MANIFEST ]</div>
        <h2 className="text-4xl font-black text-white uppercase">Resources</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillSet.map((group, idx) => (
          <div key={idx} className="border border-violet-900/30 bg-[#07021a]/60 p-8">
            <h3 className="font-mono text-xs text-violet-400 mb-10 border-b border-violet-900/30 pb-2 uppercase tracking-widest">{group.category}</h3>
            <div className="space-y-8">
              {group.items.map((skill, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between font-mono text-[11px] mb-2 uppercase">
                    <div className="flex items-center gap-3">
                      <img src={skill.icon} alt={skill.name} className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all" />
                      <span className="text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                    <span className="text-violet-500">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-900/50 rounded-full overflow-hidden border border-violet-900/20">
                    <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-1000" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
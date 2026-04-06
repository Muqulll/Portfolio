const About = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto">
      {/* 0x02 HEADER */}
      <div className="mb-12 flex items-end justify-between border-b border-violet-900/20 pb-4">
        <div>
          <div className="font-mono text-violet-500 text-[10px] mb-2 tracking-[0.5em] font-bold uppercase">
            [ 0x02_IDENTITY_FETCH ]
          </div>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic">System_Bio</h2>
        </div>
        <div className="hidden md:block font-mono text-[9px] text-slate-600 text-right">
          STATUS: AUTHORIZED<br/>
          SESSION: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* MAIN TILING LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* LEFT PANEL: The Neofetch Window */}
        <div className="md:col-span-7 border border-violet-500/30 bg-[#07021a]/80 backdrop-blur-xl p-8 relative group hover:border-violet-500/60 transition-all">
          <div className="absolute top-2 right-4 font-mono text-[8px] text-violet-500/40 tracking-widest uppercase">window:fetch</div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* ASCII Column */}
            <div className="font-mono text-violet-500 opacity-90 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]">
              <pre className="text-[11px] leading-tight">
{`      ___           ___     
     /  /\\         /  /\\    
    /  /::\\       /  /::\\   
   /  /:/\\:\\     /  /:/\\:\\  
  /  /:/  \\:\\   /  /:/  \\:\\ 
 /__/:/ \\__\\:\\ /__/:/ \\__\\:\\
 \\  \\:\\ /  /:/ \\  \\:\\ /  /:/
  \\  \\:\\  /:/   \\  \\:\\  /:/ 
   \\  \\:\\/:/     \\  \\:\\/:/  
    \\  \\::/       \\  \\::/   
     \\__\\/         \\__\\/    `}
              </pre>
            </div>

            {/* Fetch Data Column */}
            <div className="font-mono space-y-3 w-full">
              <div className="flex gap-2 text-sm border-b border-violet-900/20 pb-2 mb-4">
                <span className="text-green-500 font-bold">muqulll</span>
                <span className="text-slate-500">@</span>
                <span className="text-violet-400 font-bold">tosh-arch</span>
              </div>
              <div className="space-y-1.5 text-[12px]">
                <p><span className="text-violet-500">OS:</span> BSCS @ Semester_04</p>
                <p><span className="text-violet-500">Host:</span> Toshiba Portégé X30</p>
                <p><span className="text-violet-500">Kernel:</span> C++ / Low-Level Logic</p>
                <p><span className="text-violet-500">Uptime:</span> 18 Years of Runtime</p>
                <p><span className="text-violet-500">Shell:</span> Moving toward AI/ML</p>
                <p><span className="text-violet-500">WM:</span> Hyprland / GNOME</p>
              </div>
              {/* Terminal Palette */}
              <div className="flex gap-1.5 pt-4">
                {[ 'bg-slate-800', 'bg-red-900', 'bg-green-900', 'bg-yellow-900', 'bg-violet-900', 'bg-fuchsia-900', 'bg-cyan-900', 'bg-white' ].map((c, i) => (
                  <div key={i} className={`w-3.5 h-3.5 ${c} rounded-sm`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL TOP: The "Brain Activity" Grid (The Creative Surprise) */}
        <div className="md:col-span-5 border border-violet-900/30 bg-[#07021a]/40 p-6 relative overflow-hidden">
          <div className="absolute top-2 right-4 font-mono text-[8px] text-violet-500/40 tracking-widest uppercase">sys:activity_log</div>
          <h4 className="font-mono text-[10px] text-violet-400 mb-4 uppercase tracking-widest italic">Learning_Pulse</h4>
          
          {/* Simulated Contribution Grid */}
          <div className="grid grid-cols-10 gap-1.5">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className={`h-2 w-2 rounded-sm ${
                  i % 7 === 0 ? 'bg-fuchsia-500 shadow-[0_0_5px_rgba(217,70,239,0.5)]' : 
                  i % 3 === 0 ? 'bg-violet-700' : 'bg-slate-900'
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-4 font-mono text-[9px] text-slate-500 flex justify-between uppercase">
            <span>less_focused</span>
            <span>highly_optimized</span>
          </div>
          
          <div className="mt-6 pt-4 border-t border-violet-900/20">
            <p className="text-[11px] font-mono text-slate-400 leading-relaxed italic">
              Currently compiling: <span className="text-violet-400">Linear_Algebra_V1.0</span><br/>
              Optimizing: <span className="text-violet-400">ML_Fundamentals</span>
            </p>
          </div>
        </div>

        {/* RIGHT PANEL BOTTOM: System Quote / Philosophy */}
        <div className="md:col-span-5 border border-violet-900/30 bg-gradient-to-br from-violet-950/10 to-transparent p-6">
          <div className="flex items-center gap-3 mb-3">
             <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
             <span className="font-mono text-[10px] text-violet-300 uppercase tracking-widest font-bold">Root_Philosophy</span>
          </div>
          <p className="font-mono text-xs text-slate-400 leading-relaxed">
            "I believe in building muscle memory for concepts, not just syntax. Whether it's the logic of a C++ pointer or the weights of a neural network, it's all about what's under the hood."
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
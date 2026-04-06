import { useState, useEffect } from 'react';

const Hero = ({ onScrollClick }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20">
      <div className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: MAIN TERMINAL */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block px-3 py-1 border border-violet-500/30 bg-violet-500/10 rounded-full">
            <span className="font-mono text-[10px] text-violet-400 tracking-widest uppercase animate-pulse">
              ● Kernel_Loaded
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
            Muq<span className="text-violet-600">ulll</span>
          </h1>
          <p className="font-mono text-slate-400 text-sm max-w-md leading-relaxed">
            Architecting low-level systems and high-level intelligence. 
            Currently optimizing 4th-semester logic.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* MAIN EXECUTE BUTTON */}
            <button 
              onClick={onScrollClick}
              className="group relative px-8 py-3 bg-violet-600 text-white font-mono text-xs tracking-widest uppercase hover:bg-violet-500 transition-all overflow-hidden"
            >
              <span className="relative z-10">Execute_Binaries</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </button>

            {/* NEW GITHUB BUTTON */}
            <a 
              href="https://github.com/Muqulll" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-violet-500/30 bg-white/5 text-violet-400 font-mono text-xs tracking-widest uppercase hover:bg-violet-500/10 hover:text-white transition-all"
            >
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>Source_Code</span>
            </a>
          </div>
        </div>

        {/* RIGHT: THE MALLOC MONITOR (REMAINS THE SAME) */}
        <div className="lg:col-span-5 border border-violet-900/30 bg-[#07021a]/60 backdrop-blur-md p-6 font-mono relative">
          <div className="flex gap-1.5 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
            <span className="ml-auto text-[9px] text-violet-500/50 uppercase tracking-tighter">Mem_Manager_v1.0</span>
          </div>

          <div className="space-y-4 text-[11px]">
            <div className="space-y-1">
              <div className="flex justify-between border-b border-violet-900/10 pb-1">
                <span className="text-slate-500">SYS_TIME:</span>
                <span className="text-violet-400">{time}</span>
              </div>
              <div className="flex justify-between border-b border-violet-900/10 pb-1">
                <span className="text-slate-500">UPTIME_VAL:</span>
                <span className="text-violet-400">{uptime}s</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-500 text-[9px]">void* heap_ptr = malloc(sizeof(brain));</span>
                  <span className="text-green-500 text-[9px]">[SUCCESS]</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-violet-900/20">
                  <div className="h-full bg-violet-600 w-[78%] animate-pulse"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-500 text-[9px]">if (ptr == NULL) return -1;</span>
                  <span className="text-violet-400 text-[9px]">PASSED</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-violet-900/20">
                  <div className="h-full bg-fuchsia-600 w-[94%]"></div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-3 bg-black/40 border border-violet-900/30 font-mono">
              <div className="flex gap-2 items-center mb-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <p className="text-[9px] text-green-500/70 uppercase">Garbage_Collector: OFF</p>
              </div>
              <p className="text-[10px] text-violet-300 leading-tight break-all">
                0x7ffc1d9b4: 48 89 e5 48 83 ec 10 
                0x7ffc1d9b5: 89 7d fc 48 89 75 f0
              </p>
              <p className="text-[9px] text-slate-600 mt-2 uppercase tracking-tighter">
                Manual_Free() required to prevent leak
              </p>
            </div>
          </div>

          <div className="absolute -bottom-2 -right-2 text-[40px] font-black text-violet-500/5 pointer-events-none select-none">
            0x01
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
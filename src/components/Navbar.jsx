const Navbar = ({ onAboutClick, onProjectsClick, onSkillsClick }) => {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-violet-900/30 bg-[#050110]/80 backdrop-blur-lg px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LOGO_PROMPT */}
        <h1 className="font-mono text-xs flex items-center gap-2">
          <span className="text-green-500 font-bold">muqulll</span>
          <span className="text-slate-500">@</span>
          <span className="text-violet-400 font-bold tracking-tight">tosh-arch</span>
          <span className="animate-pulse w-1.5 h-3.5 bg-violet-500 ml-1"></span>
        </h1>
        
        {/* NAV_LINKS */}
        <ul className="hidden md:flex gap-8 font-mono text-[10px] tracking-[0.2em] uppercase text-slate-500">
          <li 
            onClick={onAboutClick} 
            className="hover:text-violet-400 cursor-pointer transition-colors border-b border-transparent hover:border-violet-500"
          >
            ./ABOUT
          </li>
          <li 
            onClick={onProjectsClick} 
            className="hover:text-violet-400 cursor-pointer transition-colors border-b border-transparent hover:border-violet-500"
          >
            ./PROJECTS
          </li>
          <li 
            onClick={onSkillsClick} 
            className="hover:text-violet-400 cursor-pointer transition-colors border-b border-transparent hover:border-violet-500"
          >
            ./SKILLS
          </li>
          <li className="hover:text-violet-400 cursor-pointer transition-colors border-b border-transparent hover:border-violet-500">
            ./CONTACT
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
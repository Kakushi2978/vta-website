import { Facebook, Instagram } from 'lucide-react';
import Branches from './Branches.jsx';
import Achievements from "./Achievements.jsx";
import EnrollmentForm from './EnrollmentForm.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white selection:bg-red-600 selection:text-white">
      
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-red-600 text-white text-xs font-semibold py-2 px-4 flex justify-between items-center tracking-wide w-full">
        {/* Hidden left spacer maintains perfect centering for the text on large screens */}
        <div className="hidden sm:block w-16"></div>
        
        <div className="flex-grow text-center pr-2 sm:pr-0">
          📢 NOW ENROLLING: Join our Milo Summer Taekwondo Clinics & Regular Classes across Capiz!
        </div>
        
        {/* Right-aligned functional social links */}
        <div className="flex items-center gap-3 w-16 justify-end">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="hover:opacity-80 hover:scale-110 transition-all duration-200"
          >
            <Facebook size={16} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="hover:opacity-80 hover:scale-110 transition-all duration-200"
          >
            <Instagram size={16} />
          </a>
        </div>
      </div>

      {/* 2. NAVIGATION HEADER */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl tracking-tighter">V</div>
          <span className="font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">VTA</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#branches" className="hover:text-red-500 transition">Branches</a>
          <a href="#achievements" className="hover:text-red-500 transition">Achievements</a>
          <a href="#register" className="hover:text-red-500 transition">Enroll Now</a>
        </div>
      </nav>

      {/* 3. WELCOMING PRESENTATION */}
      <header className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-32 md:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-10">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6">
            <span className="bg-blue-600/10 text-blue-400 border border-blue-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Official PTA Affiliate
            </span>
            <span className="text-gray-500 text-xs font-medium">| Capiz Province</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-6">
            Build Discipline. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Forge Champions.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Welcome to <strong className="text-white font-semibold">Venancio Taekwondo Academy</strong>. 
            We empower beginners, kids, and elite athletes across Capiz with premier martial arts training, building character that lasts a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a href="#register" className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/20 transition">
              Start Free Trial Class
            </a>
            <a href="#branches" className="w-full sm:w-auto text-center bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold px-8 py-4 rounded-xl border border-gray-800 transition">
              View Class Schedules
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute w-72 h-72 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
          <div className="w-full max-w-sm aspect-[4/5] bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="h-6 w-24 bg-gray-800 rounded"></div>
              <div className="h-4 w-full bg-gray-900 rounded"></div>
            </div>
            <div className="bg-gray-950/80 border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-xs text-blue-400 font-bold tracking-wider uppercase mb-1">Featured Venue Today</p>
              <h3 className="text-sm font-bold text-white">Robinsons Place Roxas</h3>
              <p className="text-xs text-gray-500 mt-1">2nd Floor Activity Center • 4:00 PM onwards</p>
            </div>
          </div>
        </div>
      </header>

      {/* 4. INTERACTIVE BRANCHES SELECTION */}
      <Branches />

      {/* 5. ACHIEVEMENTS PANEL */}
      <Achievements />

      {/* 6. ONLINE ENROLLMENT FORM */}
      <EnrollmentForm />

    </div>
  );
};

export default App;

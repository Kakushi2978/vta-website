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
        
        {/* Right-aligned functional social links (Pure SVGs bypass package build errors) */}
        <div className="flex items-center gap-3 w-16 justify-end">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="hover:opacity-80 hover:scale-110 transition-all duration-200"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="hover:opacity-80 hover:scale-110 transition-all duration-200"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="20" x="20" y="2" rx="5" ry="5" transform="translate(-18)" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
            </svg>
          </a>
        </div>
      </div>

      {/* 2. NAVIGATION HEADER */}
    
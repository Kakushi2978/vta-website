import { useState } from 'react';

const awardsData = [
  { event: "WVRAA Meet (Poomsae)", gold: 4, silver: 2, bronze: 1, year: "2026", note: "Overall Champion Track" },
  { event: "WVPRISAA Championships", gold: 3, silver: 3, bronze: 0, year: "2025", note: "Elite Varsity Division" },
  { event: "Capiz Provincial Meet", gold: 8, silver: 4, bronze: 2, year: "2025", note: "Dominant Regional Delegation" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-900">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          Championship Record
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-4">
          Forging Regional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Champions</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Our athletes consistently excel at regional and national levels, representing Venancio Taekwondo Academy with elite discipline and skill.
        </p>
      </div>

      {/* Tally Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {awardsData.map((award, index) => (
          <div key={index} className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between hover:border-amber-500/20 transition duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase bg-gray-950 px-2.5 py-1 rounded-md border border-gray-800 text-gray-400">
                  {award.year} Season
                </span>
                <span className="text-xs text-amber-400 font-medium">{award.note}</span>
              </div>
              <h3 className="text-lg font-black text-white mb-6 tracking-tight">{award.event}</h3>
            </div>

            {/* Medals Counter Sub-grid */}
            <div className="grid grid-cols-3 gap-3 bg-gray-950/60 p-4 rounded-xl border border-gray-900 text-center">
              <div>
                <p className="text-3xl font-black text-amber-400">{award.gold}</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Gold</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-300">{award.silver}</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Silver</p>
              </div>
              <div>
                <p className="text-3xl font-black text-amber-700">{award.bronze}</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Bronze</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

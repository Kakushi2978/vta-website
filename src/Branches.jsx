import { useState } from 'react';

const branchData = [
  {
    id: 'roxas-central',
    name: 'Roxas City Central Branches',
    venues: [
      { name: 'Robinsons Place Roxas', details: '2nd Floor Activity Center', schedule: '4:00 PM onwards' },
      { name: 'SM City Roxas', details: 'Arnaldo Boulevard Main Wing', schedule: 'Weekend Morning Slots' },
      { name: 'CityMall Arnaldo Blvd.', details: 'Activity Hall Area', schedule: 'Regular Afternoon Slots' },
      { name: 'Villareal Stadium', details: 'Side Gate 5 / Atienza Area', schedule: 'Elite Varsity Training Days' },
    ]
  },
  {
    id: 'pres-roxas',
    name: 'President Roxas Branch',
    venues: [
      { name: 'Public Plaza Venue', details: 'Upper Building of 7/11 Store (Right beside the Public Plaza)', schedule: 'Mon / Wed / Fri • 4:30 PM' }
    ]
  },
  {
    id: 'mambusao',
    name: 'Mambusao Branch',
    venues: [
      { name: 'Mambusao Public Terminal', details: '2nd Floor Commercial Unit', schedule: 'Tue / Thu / Sat Classes' }
    ]
  },
  {
    id: 'tapaz',
    name: 'Tapaz Branch',
    venues: [
      { name: 'Tapaz Civic Center', details: 'Main Indoor Gym Court', schedule: 'Special Weekend Intensive Clinics' }
    ]
  }
];

export default function Branches() {
  const [activeTab, setActiveTab] = useState('roxas-central');

  const selectedBranch = branchData.find(b => b.id === activeTab);

  return (
    <section id="branches" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-900">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
          Our Training <span className="text-vta-red">Venues & Branches</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Find a Venancio Taekwondo Academy class nearest to you across Capiz Province. Select a branch below to view active locations.
        </p>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 bg-gray-900/50 p-2 rounded-2xl max-w-3xl mx-auto border border-gray-800/60">
        {branchData.map((branch) => (
          <button
            key={branch.id}
            onClick={() => setActiveTab(branch.id)}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide transition-all duration-200 cursor-pointer ${
              activeTab === branch.id
                ? 'bg-vta-red text-white shadow-md shadow-vta-red/20'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {branch.name.replace(' Branches', '').replace(' Branch', '')}
          </button>
        ))}
      </div>

      {/* Dynamic Results Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {selectedBranch?.venues.map((venue, idx) => (
          <div 
            key={idx}
            className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800/80 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-vta-red/30 transition-all duration-300"
          >
            <div>
              <div className="h-2 w-12 bg-vta-blue rounded mb-4"></div>
              <h3 className="text-lg font-extrabold text-white mb-2">{venue.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{venue.details}</p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-800/60 flex justify-between items-center bg-gray-950/40 p-3 rounded-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-vta-blue">Schedule</span>
              <span className="text-xs font-medium text-gray-300">{venue.schedule}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState } from 'react';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    parentContact: '',
    preferredBranch: 'Roxas City (Robinsons Place)',
    experience: 'Beginner'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Using standard robust concatenation to prevent backtick mismatch typos completely
    const message = "Hello Coach! I would like to enroll my child at Venancio Taekwondo Academy.%0A%0A" +
                    "• Student Name: " + formData.studentName + "%0A" +
                    "• Age: " + formData.age + " years old%0A" +
                    "• Parent Contact: " + formData.parentContact + "%0A" +
                    "• Branch Venue: " + formData.preferredBranch + "%0A" +
                    "• Experience Level: " + formData.experience;

    // Direct, cleanly structured Messenger redirection URL link
    const messengerUrl = "https://m.me" + message;
    
    // Safe redirection tab action trigger
    window.open(messengerUrl, '_blank');
  };

  return (
    <section id="register" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-900">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="bg-red-600/10 text-red-400 border border-red-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          Quick Registration
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-4">
          Online Student <span className="text-blue-400">Enrollment Portal</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Fill out the personal information fields below. Submitting will securely open up Facebook Messenger to instantly transmit your registration details directly to our head coach.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Student Full Name</label>
            <input 
              type="text" 
              name="studentName"
              required
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Juan Dela Cruz" 
              className="bg-gray-950 border border-gray-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-red-600 transition"
            />
          </div>

          {/* Student Age */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Age</label>
            <input 
              type="number" 
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g. 8" 
              className="bg-gray-950 border border-gray-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-red-600 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parent Mobile Number */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Parent / Guardian Contact Number</label>
            <input 
              type="tel" 
              name="parentContact"
              required
              value={formData.parentContact}
              onChange={handleChange}
              placeholder="e.g. 09171234567" 
              className="bg-gray-950 border border-gray-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-red-600 transition"
            />
          </div>

          {/* Training Branch Destination Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Preferred Training Branch</label>
            <select 
              name="preferredBranch"
              value={formData.preferredBranch}
              onChange={handleChange}
              className="bg-gray-950 border border-gray-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-red-600 transition appearance-none cursor-pointer"
            >
              <option value="Roxas City (Robinsons Place)">Roxas City (Robinsons Place)</option>
              <option value="Roxas City (SM City)">Roxas City (SM City)</option>
              <option value="Roxas City (Villareal Stadium)">Roxas City (Villareal Stadium)</option>
              <option value="President Roxas Branch">President Roxas Branch</option>
              <option value="Mambusao Branch">Mambusao Branch</option>
              <option value="Tapaz Branch">Tapaz Branch</option>
            </select>
          </div>
        </div>

        {/* Experience Selector */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Current Martial Arts Experience</label>
          <div className="grid grid-cols-2 gap-4">
            {['Beginner', 'Transferee / With Experience'].map((exp) => (
              <label 
                key={exp}
                className={`border rounded-xl p-4 flex items-center gap-3 cursor-pointer select-none transition ${
                  formData.experience === exp 
                    ? 'bg-red-600/10 border-red-600 text-white font-semibold' 
                    : 'bg-gray-950 border-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <input 
                  type="radio" 
                  name="experience" 
                  value={exp}
                  checked={formData.experience === exp}
                  onChange={handleChange}
                  className="accent-red-600 h-4 w-4"
                />
                <span className="text-sm">{exp}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-600/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-center block text-sm tracking-wide"
          >
            Submit & Open Messenger Setup
          </button>
        </div>

      </form>
    </section>
  );
}

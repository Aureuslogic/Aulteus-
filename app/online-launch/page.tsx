export default function AureusLogicLaunch() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="mb-16">
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Following the in-person launch at 22 Bishopsgate in the City of London in January this year, 
            we are now opening Aureus Logic to a wider audience through an exclusive online launch.
          </p>
          <p className="text-zinc-800 leading-relaxed mb-6">
            Aureus Logic is an Agentic AI decision framework designed to help traders understand and 
            navigate the capital markets with greater clarity, structure, and discipline.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            In a marketplace defined by speed and noise, Aureus Logic provides a structured way to 
            interpret real-time liquidity and market behaviour, reducing emotional bias and supporting 
            more consistent decision making. It is built for those who prioritise precision, reasoning, 
            and agentic execution over guesswork.
          </p>
        </div>

        {/* What to Expect */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-8" style={{ color: '#c5a059' }}>
            What to Expect
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-2 pl-6" style={{ borderColor: '#c5a059' }}>
              <h3 className="text-lg font-medium mb-2 text-zinc-900">Fireside Conversation</h3>
              <p className="text-zinc-600">
                A strategic discussion on the decision logic required to trade effectively in 2026.
              </p>
            </div>

            <div className="border-l-2 pl-6" style={{ borderColor: '#c5a059' }}>
              <h3 className="text-lg font-medium mb-2 text-zinc-900">Live Demonstration</h3>
              <p className="text-zinc-600">
                A practical walkthrough showing how Aureus Logic interprets market conditions in real time.
              </p>
            </div>

            <div className="border-l-2 pl-6" style={{ borderColor: '#c5a059' }}>
              <h3 className="text-lg font-medium mb-2 text-zinc-900">Live Insights</h3>
              <p className="text-zinc-600">
                Reflections from early users on how decision clarity is changing the way they trade.
              </p>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-8" style={{ color: '#c5a059' }}>
            Event Details
          </h2>
          
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-8">
            <div className="grid gap-4">
              <div>
                <span className="text-zinc-500 text-sm">Date</span>
                <p className="text-zinc-900 text-lg">Thursday, 26 February 2026</p>
              </div>
              <div>
                <span className="text-zinc-500 text-sm">Time</span>
                <p className="text-zinc-900 text-lg">7:00 PM to 8:30 PM</p>
              </div>
              <div>
                <span className="text-zinc-500 text-sm">Venue</span>
                <p className="text-zinc-900 text-lg">Zoom</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#c5a059' }}>
            Registration
          </h2>
          
          <p className="text-zinc-700 mb-8 leading-relaxed">
            This session is designed for traders and operators focused on the highest standards of performance.
          </p>
          
          <a 
            href="https://zoom.us/meeting/register/f6fdgUolQBO57cTqOnBxQw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: '#c5a059', color: '#fff' }}
          >
            Register Here
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-zinc-400 text-sm">© 2026 Aureus Logic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
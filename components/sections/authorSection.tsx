export default function AuthorSection() {
  return (
    <section id="author" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="w-48 h-48 bg-gray-200 rounded-full mb-6 overflow-hidden border-4 border-aureus-gold shadow-xl">
            {/* Placeholder for Sam's Image */}
            <div className="w-full h-full aureus-dark-bg flex items-center justify-center text-white">
              <span className="text-4xl font-serif">SO</span>
            </div>
          </div>
          <h3 className="font-serif font-bold text-2xl">Sam Onigbanjo</h3>
          <p className="text-xs tracking-widest uppercase text-aureus-gold mt-2 font-bold">
            Author of Aureus Logic
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Creator of &quot;The Banker&apos;s Code&quot;
          </p>
        </div>

        <div className="md:col-span-8">
          <h2 className="text-3xl font-serif font-bold mb-6">
            From the Author
          </h2>
          <div className="prose prose-lg text-aureus-dark">
            <p className="italic mb-6">
              &quot;I did not create Aureus Logic to trade for people. I
              authored it to govern decision making under uncertainty.&quot;
            </p>
            <p className="mb-4">
              After years in corporate strategy and capital markets I observed
              the same pattern repeatedly. Intelligent people making poor
              decisions under pressure. Not because they lacked knowledge. But
              because they lacked a decision asset.
            </p>
            <p className="mb-4 font-bold">Systems beat luck every time.</p>
            <p className="mb-6">
              Aureus Logic is the non linear decision framework I wished existed
              earlier in my career.
            </p>
            <div className="p-4 bg-aureus-bg border-l-4 border-aureus-gold">
              <p className="font-bold text-aureus-dark">The Real Edge</p>
              <p className="text-sm">
                Most AI accelerates action. Aureus Logic governs it. That
                difference is where capital survives long enough to compound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
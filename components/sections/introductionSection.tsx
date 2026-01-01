import { XCircle, CheckCircle } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section
      id="framework"
      className="py-20 aureus-dark-bg text-white relative overflow-hidden"
    >
      {/* Abstract background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 rounded-l-full translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
          Introducing <span className="aureus-gold">Aureus Logic</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
          <div className="p-6 border border-white/10 rounded bg-white/5 backdrop-blur-sm">
             <XCircle className="w-8 h-8 text-red-400 mb-4" />
            <p className="font-bold text-lg mb-2">Not a Trading Bot</p>
            <p className="text-gray-400 text-sm">
              It does not automate execution or place orders for you.
            </p>
          </div>
          <div className="p-6 border border-white/10 rounded bg-white/5 backdrop-blur-sm">
             <XCircle className="w-8 h-8 text-red-400 mb-4" />
            <p className="font-bold text-lg mb-2">Not a Platform</p>
            <p className="text-gray-400 text-sm">
              It is not execution software or a broker interface.
            </p>
          </div>
          <div className="p-6 border border-aureus-gold rounded bg-aureus-gold/10 backdrop-blur-sm">
           <CheckCircle className="w-8 h-8 aureus-gold mb-4" />
            <p className="font-bold text-lg mb-2 aureus-gold">
              It Governs Judgement
            </p>
            <p className="text-gray-300 text-sm">
              A non linear decision asset framework, expressed through Agentic
              AI.
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
          "Aureus Logic continuously evaluates market conditions and determines
          whether any action is justified at all. Sometimes the appropriate
          outcome is a position.{" "}
          <span className="aureus-gold font-medium">
            Often the appropriate outcome is no action.
          </span>{" "}
          That distinction preserves capital."
        </p>
      </div>
    </section>
  );
}

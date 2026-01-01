export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-20 bg-white border-y border-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Decision Governance{' '}
          <span className="text-gold-gradient">Over Speculation.</span>
        </h2>

        <div className="space-y-6 text-lg text-aureus-dark leading-relaxed">
          <p>
            Most traders are not failing because they lack information. <br />
            <strong>They are failing because they lack a decision framework.</strong>
          </p>
          <p className="text-aureus-muted italic">
            Charts are abundant. Indicators are endless. Opinions are constant.
          </p>
          <p>
            Yet decision quality continues to deteriorate. This is the paradox of
            modern trading: Linear tools operating in non linear environments.
          </p>

          <div className="my-10 h-px w-24 bg-aureus-gold mx-auto"></div>

          <p className="font-serif text-2xl">
            Aureus Logic exists to resolve this mismatch.
          </p>
          <p>
            Not by adding more signals. <br />
            But by introducing{' '}
            <strong>Institutional Decision Governance.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
export default function LogicEngineSection() {
  const features = [
    {
      title: 'Multi Timeframe Structure',
      description:
        'Integrating market structure across fractals to ensure alignment.',
    },
    {
      title: 'Institutional Volume',
      description: 'Analysing liquidity conditions to avoid retail traps.',
    },
    {
      title: 'Volatility Regimes',
      description: 'Assessing risk asymmetry before opportunity validation.',
    },
    {
      title: 'Macro Economics',
      description:
        'Filtering for macroeconomic releases and geopolitical friction.',
    },
    {
      title: 'Instrument Relationships',
      description: 'Measuring strength and weakness dynamics across assets.',
    },
    {
      title: 'The Output',
      description:
        'Clear decision guidance. Reduction of cognitive load. Enforced discipline.',
      highlight: true,
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          The Logic Engine
        </h2>
        <p className="text-aureus-muted">
          A bounded autonomous decision asset.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${
              feature.highlight ? 'bg-gray-50' : 'bg-white'
            } p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-aureus-gold`}
          >
            <h4
              className={`font-bold text-lg mb-3 ${
                feature.highlight ? 'text-aureus-dark' : ''
              }`}
            >
              {feature.title}
            </h4>
            <p
              className={`text-sm ${
                feature.highlight
                  ? 'text-aureus-dark font-medium'
                  : 'text-aureus-muted'
              }`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
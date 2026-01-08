interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function LegalSection({
  title,
  children,
  className = '',
}: LegalSectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-serif font-bold text-aureus-dark mb-4 border-aureus-gold pb-2">
        {title}
      </h2>
      <div className="text-aureus-dark leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}
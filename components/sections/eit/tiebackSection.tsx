import Link from 'next/link';

export default function TiebackSection() {
  return (
    <section className="tieback-section section" aria-labelledby="tieback-heading">
      <div className="section-inner" style={{ maxWidth: '780px', margin: '0 auto' }}>
        <p className="eyebrow" style={{ textAlign: 'center' }}>How it fits</p>
        <h2 className="section-h" id="tieback-heading" style={{ textAlign: 'center', margin: '0 auto' }}>
          Five layers govern the market. <span>Six protocols govern you.</span>
        </h2>
        <p className="section-p" style={{ textAlign: 'center', margin: '1.5rem auto 0' }}>
          EIT is the fifth layer of the Aulteus Logic forex framework, expanded into a
          system of its own. The other four read the market. This one reads you.
        </p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/#framework" className="btn-outline">See the five layers</Link>
        </div>
      </div>
    </section>
  );
}

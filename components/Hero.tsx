export function Hero() {
  return (
    <>
      <section className="section hero">
        <div className="container hero__grid">
          <div>
            <h1>Less time marking.<br />Better outcomes for every student.</h1>
            <p className="lead">Markr helps K–12 teachers create curriculum-aligned assessments, mark responses automatically, and surface useful student insights.</p>
            <div className="button-row">
              <a className="button" href="#subscribe">Join Waitlist</a>
              <a className="button button--secondary" href="#how-it-works">See how it works</a>
            </div>
          </div>
          <img className="hero__image" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1080&q=80" alt="Teacher working with students in a classroom" />
        </div>
      </section>
      <section className="metrics" aria-label="Markr results">
        <div className="container metrics__grid">
          {[["6 hrs", "Saved per teacher per week"], ["80%", "Reduction in reporting admin"], ["99%", "Rubric consistency"], ["40+", "Australian schools in beta"]].map(([value, label]) => (
            <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>
    </>
  );
}

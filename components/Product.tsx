const steps = [
  { number: "01", title: "Create", description: "Design assessments that align with the Australian Curriculum. Start from scratch or use a template.", bullets: ["Curriculum-aligned rubrics generated instantly", "Customisable assessment criteria", "Export to printable formats"], image: "/images/create-assessment.jpg", imageAlt: "Teacher creating an assessment at a desk" },
  { number: "02", title: "Mark", description: "Upload student responses and let Markr suggest grades and feedback based on your rubric.", bullets: ["Scans handwritten and digital submissions", "Applies rubrics consistently across cohorts", "Teachers review and approve all marks", "Generates specific student feedback"], image: "https://images.unsplash.com/photo-1635859890085-ec8cb5466806?auto=format&fit=crop&w=1080&q=80", imageAlt: "Teacher reviewing student work" },
  { number: "03", title: "Analyse", description: "See class performance, identify knowledge gaps, and export useful reporting data.", bullets: ["Instant cohort performance insights", "Identify students requiring intervention", "Export to school management systems", "Generate parent-ready progress reports"], image: "/images/analyse-progress.jpg", imageAlt: "Teacher analysing student progress data" }
];

export function Product() {
  return (
    <>
      <section className="section overview">
        <div className="container narrow centered">
          <h2>A smarter way to assess student learning</h2>
          <p className="lead">Markr is designed for school leaders and teachers who want to reduce administrative burden without sacrificing educational quality. It streamlines the entire assessment workflow in one simple platform.</p>
          <div className="overview__points">
            {["Create assessments", "Mark consistently", "Understand student progress"].map(item => <div key={item}><i>✓</i><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>
      <section className="section section--muted" id="how-it-works">
        <div className="container">
          <div className="narrow centered section-heading"><h2>How it works</h2><p className="lead">A simple, effective process designed around a teacher&apos;s natural workflow.</p></div>
          <div className="steps">
            {steps.map((step, index) => (
              <article className={`step${index === 1 ? " step--reverse" : ""}`} key={step.number}>
                <div className="step__copy"><span className="eyebrow">{step.number}</span><h3>{step.title}</h3><p className="lead">{step.description}</p>
                  <ul>{step.bullets.map(item => <li key={item}><i>✓</i>{item}</li>)}</ul>
                </div>
                {step.image ? <img className="step__visual" src={step.image} alt={step.imageAlt} /> : <div className="step__visual placeholder">Illustration placeholder</div>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

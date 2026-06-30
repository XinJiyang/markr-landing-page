const features = [
  ["Planning", "Curriculum Alignment", "Map assessments to Australian Curriculum standards and capabilities."],
  ["Marking", "Automatic Marking", "Provide consistent marking suggestions that teachers can review and adjust."],
  ["Insights", "Progress Analytics", "Surface cohort trends, knowledge gaps, and individual student progress."],
  ["Efficiency", "Reduced Teacher Workload", "Reduce repetitive assessment admin so teachers can spend more time teaching."],
  ["Security", "Australian Data Residency", "Store student data securely in Australian data centres."],
  ["Reporting", "Ready-Made Reports", "Generate parent updates, leadership summaries, and reporting comments."]
];
const outcomes = [
  ["Less teacher administration", "Reclaim time from repetitive marking and reporting tasks."],
  ["Faster identification of at-risk students", "Immediate performance visibility helps educators intervene early."],
  ["More consistent marking", "Support fair grading aligned with rubrics across classes and teachers."],
  ["Better leadership and parent reporting", "Create clear reports that make student progress easier to understand."]
];

export function Features() {
  return (
    <>
      <section className="section" id="features"><div className="container">
        <div className="section-heading"><h2>Core capabilities</h2><p className="lead">Everything your staff needs to manage assessments efficiently, structured for simplicity.</p></div>
        <div className="feature-grid">{features.map(([category, title, description]) => <article className="feature" key={title}><span className="eyebrow">{category}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>
      <section className="section outcomes"><div className="container outcomes__grid">
        <div><h2>Built for school leadership</h2><p className="lead">Markr delivers measurable improvements across the whole school.</p></div>
        <div className="outcome-grid">{outcomes.map(([title, description]) => <article key={title}><i></i><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>
    </>
  );
}

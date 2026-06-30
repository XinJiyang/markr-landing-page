const questions = [
  ["Is Markr aligned to the Australian Curriculum?", "Markr is designed for Australian K–12 schools, with assessment criteria mapped to Australian Curriculum standards."],
  ["How does automatic marking work?", "Markr compares uploaded responses against your rubric and suggests a grade and feedback. Teachers retain the final decision."],
  ["Can teachers override AI-generated marks?", "Yes. Teachers review, adjust and approve every suggested mark before it is finalised."],
  ["Where is student data stored?", "Markr is designed around Australian data residency and school privacy expectations."],
  ["Can school leaders access whole-school data?", "Leaders can view aggregated cohort and subject trends to support planning and intervention."],
  ["How do we get started?", "Subscribe below to receive product updates and hear when the next early-access cohort opens."]
];
export function FAQ() {
  return <section className="section section--muted" id="faq"><div className="container narrow"><div className="centered section-heading"><h2>Frequently asked questions</h2></div><div className="faq">{questions.map(([q,a], i) => <details key={q} open={i === 0}><summary>{q}<span>⌄</span></summary><p>{a}</p></details>)}</div></div></section>;
}

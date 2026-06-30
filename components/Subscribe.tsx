import { FormEvent, useState } from "react";
export function Subscribe() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <section className="section" id="subscribe"><div className="subscribe">
    {submitted ? <div className="centered success" role="status"><i>✓</i><h2>You&apos;re on the list!</h2><p>Thank you for your interest. We&apos;ll be in touch with updates.</p><button className="button button--secondary" onClick={() => setSubmitted(false)}>Submit another</button></div> :
    <><div className="centered"><h2>Join the waitlist</h2><p>Subscribe to product updates and hear when Markr expands to more schools.</p></div><form onSubmit={submit}>
      <label>Name<input name="name" autoComplete="name" required placeholder="Jane Doe" /></label>
      <label>School name<input name="school" autoComplete="organization" required placeholder="Springfield High School" /></label>
      <label>Work email<input name="email" type="email" autoComplete="email" required placeholder="jane.doe@school.edu.au" /></label>
      <button className="button" type="submit">Join Waitlist</button><small>No spam. Monthly product updates. Unsubscribe any time.</small>
    </form></>}
  </div></section>;
}

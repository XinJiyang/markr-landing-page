import { Logo } from "./Header";
export function Footer() {
  return <footer className="footer"><div className="container footer__grid"><div><Logo inverse /><p>An AI-powered student assessment platform for Australian K–12 schools. Less time marking. Better outcomes.</p></div><div><h3>Product</h3><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#faq">FAQ</a></div><div><h3>Company</h3><span>About us</span><span>Privacy policy</span><span>Terms of service</span></div></div><div className="container footer__bottom">© {new Date().getFullYear()} Markr Education. All rights reserved.</div></footer>;
}

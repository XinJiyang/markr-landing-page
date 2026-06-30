export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`logo${inverse ? " logo--inverse" : ""}`} href="#" aria-label="Markr home">
      <span className="logo__mark">M</span><span>Markr</span>
    </a>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav className="nav" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button" href="#subscribe">Join Waitlist</a>
      </div>
    </header>
  );
}

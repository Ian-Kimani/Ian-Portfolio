import React from "react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          Ian Wabacha Kimani &middot; Nairobi, Kenya
        </p>
        <div className="site-footer__links">
          <a href="https://github.com/Ian-Kimani" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/iankimani" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/iankimani" target="_blank" rel="noreferrer">
            X
          </a>
          <a href="mailto:kimaniian273@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

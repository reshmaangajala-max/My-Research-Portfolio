export function Footer() {
  return (
    <footer className="w-full bg-[var(--bg)] border-t border-[var(--border)] py-10 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Contact links row */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-accent text-[13px] text-[var(--text-secondary)] tracking-wide mb-3">
          <a
            id="footer-email-link"
            href="mailto:reshmaangajala@gmail.com"
            className="hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline"
          >
            reshmaangajala@gmail.com
          </a>
          <span className="text-[var(--border)]">·</span>
          <a
            id="footer-phone-link"
            href="tel:+917008762566"
            className="hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline"
          >
            +91 7008762566
          </a>
          <span className="text-[var(--border)]">·</span>
          <a
            id="footer-linkedin-link"
            href="https://linkedin.com/in/reshma-angajala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 focus:outline-none focus:underline"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Copyright notice */}
        <p className="font-accent text-[11px] text-[var(--text-secondary)] opacity-60">
          © 2025 Reshma Angajala
        </p>
      </div>
    </footer>
  );
}

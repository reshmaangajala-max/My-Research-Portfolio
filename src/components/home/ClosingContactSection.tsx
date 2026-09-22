import React from 'react';

export function ClosingContactSection() {
  return (
    <section id="contact" aria-label="Closing and Contact" className="w-full pt-16 sm:pt-24 pb-12 text-center flex flex-col items-center scroll-mt-24">
      {/* Centred. Fraunces 600 italic, clamp(32px, 5vw, 56px): "Got a problem worth dreaming about?" */}
      <h2 className="font-fraunces font-semibold italic text-[clamp(32px,5vw,56px)] text-[#3B2A20] leading-tight max-w-2xl">
        Got a problem worth dreaming about?
      </h2>

      {/* Below it, Plus Jakarta Sans 500, 20px: "Let's talk." */}
      <p className="mt-3 sm:mt-4 font-jakarta font-medium text-[20px] text-[#3B2A20]">
        Let&apos;s talk.
      </p>

      {/* Two buttons: "Email me" (amethyst, cream text) and "Resume" (cream, walnut border) */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:reshmaangajala@gmail.com"
          className="px-8 py-3.5 rounded-full bg-[#9570C6] text-[#F6F1EA] hover:bg-[#835db6] font-jakarta font-medium text-[16px] transition-all duration-200 shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1EA] focus-visible:outline-none active:scale-[0.98]"
        >
          Email me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full bg-[#F6F1EA] text-[#3B2A20] border border-[#3B2A20] hover:bg-[#EDE5D8] font-jakarta font-medium text-[16px] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1EA] focus-visible:outline-none active:scale-[0.98]"
        >
          Resume
        </a>
      </div>

      {/* A row of text links: LinkedIn · Email · Resume */}
      <div className="mt-10 sm:mt-12 flex items-center justify-center gap-3 font-jakarta font-medium text-[15px] text-[#3B2A20]/65">
        <a
          href="https://www.linkedin.com/in/reshma-angajala"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9570C6] transition-colors focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none rounded-sm px-1"
        >
          LinkedIn
        </a>
        <span className="text-[#3B2A20]/40 select-none" aria-hidden="true">
          ·
        </span>
        <a
          href="mailto:reshmaangajala@gmail.com"
          className="hover:text-[#9570C6] transition-colors focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none rounded-sm px-1"
        >
          Email
        </a>
        <span className="text-[#3B2A20]/40 select-none" aria-hidden="true">
          ·
        </span>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9570C6] transition-colors focus-visible:ring-2 focus-visible:ring-[#9570C6] focus-visible:outline-none rounded-sm px-1"
        >
          Resume
        </a>
      </div>

      {/* Footer, small, 65% opacity: "© 2026 Reshma Angajala" */}
      <footer className="mt-14 sm:mt-16 text-[13px] font-jakarta text-[#3B2A20]/65">
        © 2026 Reshma Angajala
      </footer>
    </section>
  );
}

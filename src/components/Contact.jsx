import { FiMail, FiPhone } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { profile } from '../data/resume'
import Reveal from './Reveal'
import Section from './Section'

const socials = [
  { href: profile.links.linkedin, label: 'LinkedIn', icon: FaLinkedinIn },
  { href: profile.links.github, label: 'GitHub', icon: FaGithub },
  { href: profile.links.twitter, label: 'X (Twitter)', icon: FaXTwitter },
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Say hello" title="Get in touch">
      <Reveal>
        <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
          <p className="mx-auto max-w-lg text-base leading-relaxed text-text">
            I'm always open to talking about interesting engineering work,
            collaborations, or new opportunities. The fastest way to reach me is
            email.
          </p>

          {/* max-w-full + break-all: the address is wider than a 320px
              viewport, so the pill has to be allowed to wrap. */}
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex max-w-full items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold break-all text-white transition-colors hover:bg-primary-hover dark:text-[#04140e]"
          >
            <FiMail size={16} />
            {profile.email}
          </a>

          <p className="mt-4">
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              <FiPhone size={14} />
              {profile.phone}
            </a>
          </p>

          <ul className="mt-8 flex items-center justify-center gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-text-strong transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

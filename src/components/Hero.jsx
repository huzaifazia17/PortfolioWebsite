import Typewriter from 'typewriter-effect'
import { FiArrowRight, FiDownload, FiMail, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/resume'
import avatar from '../assets/avatar.jpg'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* Soft emerald wash behind the fold. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-96 bg-gradient-to-b from-surface-2 to-transparent"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 px-5 sm:px-8 md:flex-row md:justify-between md:gap-14">
        <Reveal className="flex-1 text-center md:text-left">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted">
            <FiMapPin size={13} />
            {profile.location}
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-text-strong sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">{profile.name}</span>
          </h1>

          <div className="mt-3 flex justify-center text-xl font-semibold text-text sm:text-2xl md:justify-start">
            <Typewriter
              options={{
                strings: profile.roles,
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 30,
                wrapperClassName: 'text-text',
                cursorClassName: 'text-primary',
              }}
            />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text md:mx-0">
            Software engineer building full-stack web applications, AI-powered
            tools, and the data platforms that make messy information useful.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover dark:text-[#04140e]"
            >
              View my work
              <FiArrowRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-text-strong transition-colors hover:border-primary hover:text-primary"
            >
              <FiDownload size={16} />
              Download resume
            </a>
          </div>

          <ul className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            {[
              {
                href: profile.links.github,
                label: 'GitHub',
                icon: <FaGithub size={18} />,
              },
              {
                href: profile.links.linkedin,
                label: 'LinkedIn',
                icon: <FaLinkedinIn size={18} />,
              },
              {
                href: `mailto:${profile.email}`,
                label: 'Email',
                icon: <FiMail size={18} />,
              },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text-strong transition-colors hover:border-primary hover:text-primary"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="shrink-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-primary/15 blur-2xl"
            />
            <img
              src={avatar}
              alt={`Portrait of ${profile.name}`}
              width={288}
              height={288}
              className="relative h-44 w-44 rounded-full border-4 border-primary/60 object-cover shadow-xl sm:h-56 sm:w-56 lg:h-72 lg:w-72"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { FiExternalLink } from 'react-icons/fi'
import { experience } from '../data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <ol className="relative">
        {/* Timeline rail — hidden on phones where the indent would waste width. */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] hidden w-px bg-border sm:block"
        />

        {experience.map((job, index) => (
          <li key={job.id} className="relative sm:pl-10">
            <Reveal delay={index * 0.06}>
              <span
                aria-hidden="true"
                className={`absolute top-2 left-0 hidden h-[15px] w-[15px] rounded-full border-2 sm:block ${
                  job.current
                    ? 'border-primary bg-primary'
                    : 'border-border bg-bg'
                }`}
              />

              <div className="mb-10 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-bold text-text-strong">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-text-muted">
                    {job.period}
                  </p>
                </div>

                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    {job.company}
                    <FiExternalLink size={12} />
                  </a>
                  <span className="text-text-muted">
                    · {job.team} · {job.location}
                  </span>
                </p>

                {job.note && (
                  <p className="mt-3 inline-block rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-muted">
                    {job.note}
                  </p>
                )}

                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-3 text-sm leading-relaxed text-text"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

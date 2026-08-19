import { FiBookOpen } from 'react-icons/fi'
import { about, education } from '../data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About me">
      <div className="grid gap-8 md:grid-cols-5 md:gap-10">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-text">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <FiBookOpen size={18} />
              <h3 className="text-sm font-semibold tracking-widest uppercase">
                Education
              </h3>
            </div>

            <p className="font-semibold text-text-strong">{education.degree}</p>
            <p className="mt-1 text-sm text-text">{education.school}</p>
            <p className="mt-0.5 text-sm text-text-muted">
              {education.location} · {education.period}
            </p>

            <p className="mt-5 mb-2 text-xs font-semibold tracking-widest text-text-muted uppercase">
              Relevant coursework
            </p>
            <ul className="flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <li
                  key={course}
                  className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

import { skills } from '../data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills & tools">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50">
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm font-medium text-text-strong"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

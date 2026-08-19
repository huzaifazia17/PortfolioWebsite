import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import { profile, projects } from '../data/resume'
import Reveal from './Reveal'
import Section from './Section'

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-text-strong">{project.name}</h3>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary uppercase">
            Featured
          </span>
        )}
      </div>

      <p className="flex-1 text-sm leading-relaxed text-text">
        {project.blurb}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-strong transition-colors hover:text-primary"
          >
            <FiGithub size={15} />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-strong transition-colors hover:text-primary"
          >
            <FiExternalLink size={15} />
            Live demo
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="What I've built" title="Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 text-center text-sm text-text">
          More on{' '}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            GitHub
            <FiArrowUpRight size={14} />
          </a>
        </p>
      </Reveal>
    </Section>
  )
}

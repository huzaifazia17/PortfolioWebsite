import Reveal from './Reveal'

/** Shared section shell: anchor id, eyebrow + heading, consistent rhythm. */
export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 sm:mb-14">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-extrabold tracking-tight text-text-strong sm:text-4xl">
              {title}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

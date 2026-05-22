export function FeatureCard({ title, description, actionLabel, onAction }) {
  return (
    <article className="card-feature">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden>
          <path
            d="M0,100 C20,80 40,90 60,70 C80,50 100,60 100,0 L100,100 Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h4 className="type-headline-lg mb-2 text-white">{title}</h4>
          <p className="card-feature-copy">{description}</p>
        </div>
        <button type="button" className="btn-inverse self-start md:self-center" onClick={onAction}>
          {actionLabel}
        </button>
      </div>
    </article>
  );
}

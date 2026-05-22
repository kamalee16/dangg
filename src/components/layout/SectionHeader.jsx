export function SectionHeader({ title, children, className = '' }) {
  return (
    <div className={`mb-6 flex items-center justify-between ${className}`.trim()}>
      <h3 className="type-headline-lg">{title}</h3>
      {children}
    </div>
  );
}

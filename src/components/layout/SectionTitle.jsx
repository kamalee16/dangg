export function SectionTitle({ children, className = '' }) {
  return (
    <h3 className={`type-headline-lg mb-6 text-on-surface ${className}`.trim()}>{children}</h3>
  );
}

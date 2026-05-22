export function Divider({ className = '' }) {
  return <div className={`h-6 w-[1px] bg-outline-variant ${className}`.trim()} role="separator" />;
}

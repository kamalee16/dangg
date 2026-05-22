export function MaterialIcon({ name, fill = false, className = '', size }) {
  const sizeClass = size === 'lg' ? 'text-[120px]' : size === 'sm' ? 'text-[14px]' : '';
  return (
    <span
      className={`material-symbols-outlined ${fill ? 'fill' : ''} ${sizeClass} ${className}`.trim()}
      aria-hidden={true}
    >
      {name}
    </span>
  );
}

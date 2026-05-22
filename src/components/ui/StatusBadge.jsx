const VARIANTS = {
  'trend-up': 'badge-trend-up',
  'trend-down': 'badge-trend-down',
  stable: 'badge-status-stable',
  growing: 'badge-status-growing',
  health: 'flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded',
  pending: 'badge-payout-pending',
  approved: 'badge-payout-approved',
  completed: 'badge-payout-completed',
  rejected: 'badge-payout-rejected',
  processing: 'badge-payout-processing',
  male: 'badge-gender-male',
  female: 'badge-gender-female',
};

export function StatusBadge({ variant, children, icon }) {
  const className = VARIANTS[variant] ?? VARIANTS['trend-up'];
  if (variant === 'health') {
    return (
      <span className={className}>
        {icon}
        {children}
      </span>
    );
  }
  return <span className={className}>{children}</span>;
}

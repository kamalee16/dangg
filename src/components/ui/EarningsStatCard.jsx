import { motion } from 'framer-motion';
import { AnimatedCounter } from '../animation';
import { formatCurrency } from '../../utils/formatters';

const VALUE_TONES = {
  default: 'text-on-surface',
  primary: 'text-primary',
  tertiary: 'text-tertiary',
  muted: 'text-on-surface-variant',
};

export function EarningsStatCard({
  label,
  value,
  variant = 'default',
  valueTone = 'default',
  badge,
}) {
  const className =
    variant === 'highlight'
      ? 'earnings-card-highlight'
      : variant === 'accent'
        ? 'earnings-card earnings-card-accent'
        : 'earnings-card';

  const valueClass =
    variant === 'accent' ? 'text-primary' : variant === 'highlight' ? '' : VALUE_TONES[valueTone];

  return (
    <motion.article 
      whileHover={{ scale: 1.02, boxShadow: '0 8px 16px -4px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <p
        className={`mb-1 font-label-sm text-label-sm normal-case ${
          variant === 'highlight' ? 'opacity-80' : 'text-on-surface-variant'
        }`}
      >
        {label}
      </p>
      <p className={`type-headline-lg ${valueClass}`}>
        <AnimatedCounter 
          value={value} 
          formatter={formatCurrency} 
        />
      </p>
      {badge && <span className="earnings-highlight-badge">{badge}</span>}
    </motion.article>
  );
}

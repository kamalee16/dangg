import { motion } from 'framer-motion';
import { MaterialIcon } from './MaterialIcon';
import { StatusBadge } from './StatusBadge';
import { AnimatedCounter, AnimatedProgressBar } from '../animation';
import { formatCurrency } from '../../utils/formatters';

const WELL_CLASSES = {
  primary: 'icon-well-primary',
  secondary: 'icon-well-secondary',
  tertiary: 'icon-well-tertiary',
};

export function StatCard({
  label,
  value,
  icon,
  trend,
  trendDirection = 'up',
  accent = 'primary',
  progress = 75,
}) {
  const well = WELL_CLASSES[accent] ?? WELL_CLASSES.primary;

  return (
    <motion.article 
      whileHover={{ y: -4, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="card-interactive card-pad"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className={well}>
          <MaterialIcon name={icon} />
        </div>
        <StatusBadge variant={trendDirection === 'down' ? 'trend-down' : 'trend-up'}>
          {trend}
        </StatusBadge>
      </div>
      <p className="type-label-md mb-1 normal-case">{label}</p>
      <h4 className="type-headline-lg text-on-surface">
        <AnimatedCounter 
          value={value} 
          formatter={formatCurrency} 
        />
      </h4>
      <AnimatedProgressBar value={progress} color={accent} className="mt-4" />
    </motion.article>
  );
}

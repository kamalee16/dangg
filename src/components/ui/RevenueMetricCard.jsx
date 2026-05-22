import { motion } from 'framer-motion';
import { MaterialIcon } from './MaterialIcon';
import { AnimatedCounter } from '../animation';
import { formatCurrency } from '../../utils/formatters';

const ICON_WELLS = {
  primary: 'metric-icon-well-primary',
  secondary: 'metric-icon-well-secondary',
  tertiary: 'metric-icon-well-tertiary',
  error: 'icon-well-alert',
};

export function RevenueMetricCard({ label, value, icon, accent = 'primary', badge }) {
  const well = ICON_WELLS[accent] ?? ICON_WELLS.primary;

  return (
    <motion.article 
      whileHover={{ y: -4, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="card-interactive card-pad group flex h-full flex-col justify-between overflow-hidden"
    >
      <div>
        <div className="mb-4 flex items-start justify-between gap-2">
          <div className={`${well} shrink-0`}>
            <MaterialIcon name={icon} />
          </div>
          <div className="min-w-0 shrink">
            {badge}
          </div>
        </div>
        <p className="type-label-md mb-1 truncate normal-case tracking-tight" title={label}>
          {label}
        </p>
      </div>
      <h4 className="type-display truncate">
        <AnimatedCounter 
          value={value} 
          formatter={formatCurrency} 
        />
      </h4>
    </motion.article>
  );
}

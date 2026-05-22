import { MaterialIcon } from './MaterialIcon';

const WELL_CLASSES = {
  primary: 'icon-well-primary',
  secondary: 'icon-well-secondary',
  tertiary: 'icon-well-tertiary',
};

const ROUNDED = {
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export function IconWell({ icon, accent = 'primary', rounded = 'lg', className = '' }) {
  const well = WELL_CLASSES[accent] ?? WELL_CLASSES.primary;
  const round = rounded === 'full' ? `w-12 h-12 flex items-center justify-center mx-auto ${ROUNDED.full}` : well;

  return (
    <div className={`${round} ${className}`.trim()}>
      <MaterialIcon name={icon} />
    </div>
  );
}

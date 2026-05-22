import { MaterialIcon } from './MaterialIcon';

const ICON_TONES = {
  star: 'text-amber-500',
  thumb_up: 'text-emerald-600',
  thumb_down: 'text-error',
  favorite: 'text-rose-600',
};

export function RatingStatCard({ icon, value, label, fill = false }) {
  const tone = ICON_TONES[icon] ?? 'text-primary';

  return (
    <article className="rating-stat-card">
      <MaterialIcon name={icon} fill={fill} className={`mb-2 ${tone}`} />
      <p className="type-headline-md text-on-surface">{value}</p>
      <p className="font-label-sm text-label-sm normal-case text-on-surface-variant">{label}</p>
    </article>
  );
}

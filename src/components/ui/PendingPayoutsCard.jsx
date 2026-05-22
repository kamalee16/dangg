import { MaterialIcon } from './MaterialIcon';

export function PendingPayoutsCard({
  count = 12,
  title = 'Pending Requests',
  subtitle = 'Awaiting approval for disbursement',
  actionLabel = 'Review All Requests',
  onAction,
}) {
  return (
    <article className="card-pending flex flex-1 flex-col">
      <div className="card-pending-header">
        <div>
          <h5 className="type-headline-md">{title}</h5>
          <p className="type-body-md mt-0">{subtitle}</p>
        </div>
        <div className="icon-well-alert">
          <MaterialIcon name="schedule" fill />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <span className="mb-2 text-[64px] font-bold leading-none text-on-surface">{count}</span>
        <p className="type-label-md mb-6 tracking-[0.2em]">Total Pending Payouts</p>
        <button type="button" className="btn-primary w-full rounded-lg" onClick={onAction}>
          {actionLabel}
        </button>
      </div>
    </article>
  );
}

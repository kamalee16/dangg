import { MaterialIcon } from './MaterialIcon';

export function VerificationRequestCard({
  id,
  name,
  phone,
  imageUrl,
  imageAlt = '',
  onApprove,
  onReject,
}) {
  return (
    <article className="verification-card group">
      <div className="verification-photo-wrap">
        <img src={imageUrl} alt={imageAlt} className="verification-photo" />
        <span className="verification-id-badge">ID: #{id}</span>
      </div>
      <div className="mb-6 space-y-1">
        <h3 className="type-headline-md text-on-surface">{name}</h3>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <MaterialIcon name="phone" className="text-[18px]" />
          <p className="type-body-md normal-case">{phone}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button type="button" className="btn-verify-approve" onClick={onApprove}>
          <MaterialIcon name="check" className="text-[18px]" />
          Approve
        </button>
        <button type="button" className="btn-verify-reject" onClick={onReject}>
          <MaterialIcon name="close" className="text-[18px]" />
          Reject
        </button>
      </div>
    </article>
  );
}

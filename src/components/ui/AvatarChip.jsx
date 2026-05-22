export function AvatarChip({ initials, name, role }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary">
        {initials}
      </div>
      <div>
        <p className="text-sm font-bold text-on-surface">{name}</p>
        <p className="text-xs text-on-surface-variant">{role}</p>
      </div>
    </div>
  );
}

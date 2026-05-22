export function AdminTableCard({ title, toolbar, footer, children }) {
  return (
    <article className="table-shell">
      <div className="table-toolbar">
        <h3 className="type-headline-md text-on-surface">{title}</h3>
        {toolbar}
      </div>
      <div className="overflow-x-auto">{children}</div>
      {footer && <div className="table-footer">{footer}</div>}
    </article>
  );
}

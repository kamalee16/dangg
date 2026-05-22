export function AppShell({ sidebar, header, children, compactHeader = false }) {
  const mainClass = compactHeader ? 'shell-main-compact' : 'shell-main';
  return (
    <div className="min-h-screen">
      {sidebar}
      {header}
      <main className={mainClass}>{children}</main>
    </div>
  );
}

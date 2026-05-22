export function FilterTabBar({ tabs, activeId, onChange }) {
  return (
    <div className="filter-tabs" role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={isActive ? 'filter-tab-active' : 'filter-tab'}
            onClick={() => onChange?.(tab.id)}
          >
            {tab.label}
            {tab.count != null && <span className="filter-tab-count">{tab.count}</span>}
          </button>
        );
      })}
    </div>
  );
}

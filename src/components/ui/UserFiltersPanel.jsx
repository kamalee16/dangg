import { useState } from 'react';
import { FilterTabBar } from './FilterTabBar';
import { SearchField } from './SearchField';
import { MaterialIcon } from './MaterialIcon';

const DEFAULT_TABS = [
  { id: 'all', label: 'All', count: 850 },
  { id: 'male', label: 'Male', count: 450 },
  { id: 'female', label: 'Female', count: 400 },
];

export function UserFiltersPanel({ tabs = DEFAULT_TABS, defaultTab = 'all' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <section className="filter-panel">
      <FilterTabBar tabs={tabs} activeId={activeTab} onChange={setActiveTab} />

      <SearchField placeholder="Search users by name, email or ID..." />

      <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-3">
        <div className="space-y-2">
          <label className="filter-field-label" htmlFor="joined-date">
            Joined Date Range
          </label>
          <div className="relative">
            <MaterialIcon
              name="calendar_month"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant"
            />
            <input id="joined-date" type="date" className="input-field input-field-icon" />
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <span className="filter-field-label">Age Range</span>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <span className="input-prefix-label">From</span>
              <input
                type="number"
                className="input-field input-field-prefix"
                placeholder="18"
                aria-label="Minimum age"
              />
            </div>
            <div className="relative flex-1">
              <span className="input-prefix-label">To</span>
              <input
                type="number"
                className="input-field input-field-prefix"
                placeholder="99"
                aria-label="Maximum age"
              />
            </div>
            <button type="button" className="btn-apply-filters">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

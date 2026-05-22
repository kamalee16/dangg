import { motion } from 'framer-motion';
import { MaterialIcon } from './MaterialIcon';

export function TableSearchToolbar({
  searchPlaceholder = 'Search users...',
  filterLabel = 'Filter',
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <motion.div 
        initial={false}
        whileFocus={{ width: 300 }}
        className="relative w-full sm:w-auto"
      >
        <MaterialIcon
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
          size="sm"
        />
        <input
          type="search"
          className="input-search"
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
        />
      </motion.div>
      <motion.button 
        whileHover={{ backgroundColor: 'var(--surface-container-highest)' }}
        whileTap={{ scale: 0.95 }}
        type="button" 
        className="btn-toolbar"
      >
        <MaterialIcon name="filter_list" className="text-[18px]" />
        <span className="type-body-md normal-case text-on-surface">{filterLabel}</span>
      </motion.button>
    </div>
  );
}

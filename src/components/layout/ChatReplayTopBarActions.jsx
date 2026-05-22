import { motion } from 'framer-motion';
import { MaterialIcon } from '../ui/MaterialIcon';
import { Divider } from '../ui/Divider';

export function ChatReplayTopBarActions({ onDelete }) {
  return (
    <div className="flex items-center gap-3">
      <motion.button 
        whileHover={{ scale: 1.05, backgroundColor: 'var(--error-container)' }}
        whileTap={{ scale: 0.95 }}
        type="button" 
        className="btn-delete-transcript" 
        onClick={onDelete}
      >
        Delete
      </motion.button>
    </div>
  );
}

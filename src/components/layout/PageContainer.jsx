import { motion } from 'framer-motion';

export function PageContainer({ children, className = '', flush = false }) {
  const base = flush ? 'shell-content-flush' : 'shell-content';
  const classes = [base, className].filter(Boolean).join(' ');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={classes}
    >
      {children}
    </motion.div>
  );
}

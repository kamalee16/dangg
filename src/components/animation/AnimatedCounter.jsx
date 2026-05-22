import { motion } from 'framer-motion';

/**
 * A smooth value reveal that replaces the noisy numeric counting.
 * KPI values now appear stable and clean as per enterprise SaaS standards.
 */
export function AnimatedCounter({ 
  value, 
  formatter = (v) => v,
  className = "" 
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`inline-block ${className}`}
    >
      {formatter(value)}
    </motion.span>
  );
}

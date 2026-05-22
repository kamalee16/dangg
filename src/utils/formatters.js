/**
 * Centralized formatting utilities for the application.
 */

/**
 * Formats a number or numeric string as Indian Rupee (INR).
 * Supports Lakhs (L) and Crores (Cr) for large values.
 * 
 * @param {number|string} value - The value to format.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(value) {
  if (value === undefined || value === null) return '₹0';

  let numericValue = value;
  if (typeof value === 'string') {
    // Handle cases where the string might already contain currency symbols or commas
    numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
  }

  if (isNaN(numericValue)) return '₹0';

  // Absolute value for checking thresholds
  const absValue = Math.abs(numericValue);

  if (absValue >= 10000000) {
    return `₹${(numericValue / 10000000).toFixed(1).replace(/\.0$/, '')}Cr`;
  } else if (absValue >= 100000) {
    return `₹${(numericValue / 100000).toFixed(1).replace(/\.0$/, '')}L`;
  } else {
    // Standard formatting for smaller numbers
    const formatted = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(numericValue);
    
    // Remove space between symbol and number if present (browser dependent)
    return formatted.replace(/\s/g, '');
  }
}

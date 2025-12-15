import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to strip HTML tags from a string
 * @param html - HTML string to clean
 * @returns Clean text without HTML tags
 */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

/**
 * Helper function to format trial period
 * @param period - Trial period code (e.g., "2_MONTHS", "3_MONTHS")
 * @returns Formatted trial period in Vietnamese
 */
export function formatTrialPeriod(period: string): string {
  const map: Record<string, string> = {
    "2_MONTHS": "2 tháng",
    "3_MONTHS": "3 tháng",
    "6_MONTHS": "6 tháng",
  };
  return map[period] || period;
}

/**
 * Helper function to format experience requirement
 * @param exp - Experience code (e.g., "0-1", "1-3")
 * @returns Formatted experience in Vietnamese
 */
export function formatExperience(exp: string): string {
  const map: Record<string, string> = {
    "0": "Không yêu cầu",
    "0-1": "0-1 năm",
    "1-3": "1-3 năm",
    "3-5": "3-5 năm",
    "5+": "Trên 5 năm",
  };
  return map[exp] || exp;
}

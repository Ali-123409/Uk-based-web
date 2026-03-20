// ─── Tax Year Labels ─────────────────────────────────────────────────────────
export const TAX_YEAR = "2025/26";
export const CURRENT_YEAR = new Date().getFullYear().toString();
export const SITE_URL = 'https://fairworkcheck.pakistanbill.online';

// ─── SSP Rates (Social Security Contributions and Benefits Act 1992) ─────────
// Update each April when HMRC publishes new rates.
export const SSP_WEEKLY_RATE = 116.75;          // £/week 2025/26
export const LOWER_EARNINGS_LIMIT = 123.00;     // £/week — minimum AWE to qualify for SSP
export const MAX_SSP_WEEKS = 28;                // Maximum SSP entitlement in weeks

// ─── Settlement Agreement Tax (section 403 ITEPA 2003) ───────────────────────
// Update if HMRC changes the ex-gratia compensation exemption.
export const TAX_FREE_COMPENSATION_LIMIT = 30000; // £ — lifetime per-employment exemption

// ─── Vento Bands for Injury to Feelings (Employment Discrimination) ───────────
// Updated annually by the Presidents of Employment Tribunals.
// Current bands apply from 6 April 2025.
export const VENTO_LOWER_MIN = 1200;
export const VENTO_LOWER_MAX = 11700;
export const VENTO_MIDDLE_MIN = 11700;
export const VENTO_MIDDLE_MAX = 35200;
export const VENTO_UPPER_MIN = 35200;
export const VENTO_UPPER_MAX = 58700;
export const VENTO_EXCEPTIONAL_MIN = 58700;

// ─── Income Tax Bands 2025/26 (England, Wales, Northern Ireland) ──────────────
// Update each April when HMRC publishes new thresholds.
export const PERSONAL_ALLOWANCE = 12570;
export const BASIC_RATE_LIMIT = 50270;          // threshold where higher rate begins
export const ADDITIONAL_RATE_THRESHOLD = 125140; // threshold where additional rate begins
export const BASIC_RATE = 0.20;
export const HIGHER_RATE = 0.40;
export const ADDITIONAL_RATE = 0.45;

// ─── National Insurance 2025/26 (Class 1 Employee) ───────────────────────────
export const NI_PRIMARY_THRESHOLD_WEEKLY = 242; // £/week — below this, no employee NI
export const NI_UPPER_EARNINGS_LIMIT_WEEKLY = 967; // £/week
export const NI_RATE_MAIN = 0.08;               // 8% between primary threshold and UEL
export const NI_RATE_UPPER = 0.02;              // 2% above UEL

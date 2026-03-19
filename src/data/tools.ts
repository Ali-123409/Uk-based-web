export interface Tool {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  badge: string;
}

export const ALL_TOOLS: Tool[] = [
  {
    id: 'tribunal-deadline',
    title: 'Employment Tribunal Deadline Calculator',
    description: 'Find your exact ACAS and ET1 filing deadline instantly. Never miss the 3-month time limit.',
    href: '/tools/employment-tribunal-deadline-calculator/',
    icon: '⏱️',
    badge: 'Most Used'
  },
  {
    id: 'constructive-dismissal',
    title: 'Constructive Dismissal Checker',
    description: 'Find out if your resignation could qualify as constructive dismissal with our step-by-step checker.',
    href: '/tools/constructive-dismissal-checker/',
    icon: '⚖️',
    badge: 'Popular'
  },
  {
    id: 'whistleblowing',
    title: 'Whistleblowing Rights Checker',
    description: 'Check if your disclosure is legally protected and whether retaliation by your employer is actionable.',
    href: '/tools/whistleblowing-rights-checker/',
    icon: '🛡️',
    badge: 'New'
  },
  {
    id: 'discrimination',
    title: 'Discrimination Compensation Estimator',
    description: 'Estimate your compensation range based on real Vento bands and Employment Tribunal award data.',
    href: '/tools/workplace-discrimination-compensation-estimator/',
    icon: '💼',
    badge: 'New'
  },
  {
    id: 'zero-hours-holiday',
    title: 'Zero Hours Holiday Pay Calculator',
    description: 'Calculate holiday entitlement and pay using the 52-week reference period method. Harpur v Brazel compliant.',
    href: '/tools/zero-hours-holiday-pay-calculator/',
    icon: '🏖️',
    badge: 'New'
  },
  {
    id: 'redundancy-fairness',
    title: 'Redundancy Selection Fairness Checker',
    description: 'Check whether the criteria your employer used to select you for redundancy were legally fair.',
    href: '/tools/redundancy-selection-fairness-checker/',
    icon: '📋',
    badge: 'New'
  },
  {
    id: 'acas-conciliation',
    title: 'ACAS Conciliation Outcome Estimator',
    description: 'Estimate what ACAS conciliation could achieve vs tribunal. Side-by-side comparison with realistic ranges.',
    href: '/tools/acas-conciliation-outcome-estimator/',
    icon: '🤝',
    badge: 'New'
  },
  {
    id: 'tupe-rights',
    title: 'TUPE Rights Checker',
    description: 'Being transferred to a new employer? Check whether TUPE applies and what rights you have.',
    href: '/tools/tupe-rights-checker/',
    icon: '🔄',
    badge: ''
  },
  {
    id: 'ssp-zero-hours',
    title: 'SSP Calculator for Zero Hours Workers',
    description: 'Calculate your Statutory Sick Pay using irregular earnings — built specifically for zero hours contracts.',
    href: '/tools/ssp-calculator-zero-hours/',
    icon: '🏥',
    badge: ''
  },
  {
    id: 'settlement-tax',
    title: 'Settlement Agreement Tax Calculator',
    description: 'Work out exactly how much of your settlement is tax-free and your net take-home after tax.',
    href: '/tools/settlement-agreement-tax-calculator/',
    icon: '💷',
    badge: 'High Value'
  },
];

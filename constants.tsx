
import { Service, Experience, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Fractional Recruiting',
    description: 'On-demand recruiting support tailored to your business growth without the full-time overhead.',
    icon: 'fa-handshake-angle'
  },
  {
    title: 'Full-Cycle Recruiting',
    description: 'End-to-end management from sourcing and screening to final offer and onboarding.',
    icon: 'fa-arrows-spin'
  },
  {
    title: 'RPO & Contract Recruiting',
    description: 'Seamless integration into your HR environment via RPO, VMS, or MSP models.',
    icon: 'fa-briefcase'
  },
  {
    title: 'High-Volume Recruiting',
    description: 'Scaling teams rapidly across diverse industries like healthcare, logistics, and skilled trades.',
    icon: 'fa-users-viewfinder'
  },
  {
    title: 'Resume & Screening',
    description: 'Expert review of talent pools to ensure only the highest-quality candidates reach your desk.',
    icon: 'fa-file-invoice'
  },
  {
    title: 'Strategic Talent Consulting',
    description: 'In-depth consultation on talent strategy, hiring processes, and market positioning.',
    icon: 'fa-lightbulb'
  }
];

export const EXPERIENCE_HIGHLIGHTS: Experience[] = [
  {
    role: 'Senior Corporate Recruiter',
    company: 'Red Cow Group',
    description: 'Managing end-to-end recruitment for Construction, Property Maintenance, and Landscaping divisions.',
    tags: ['Construction', 'Nationwide', 'Strategic Partner']
  },
  {
    role: 'Fractional Recruiter',
    company: 'Independent / Freelance',
    description: 'Providing bespoke recruiting solutions for startups and growing businesses across the US.',
    tags: ['Bespoke', 'Fractional', 'Consultative']
  },
  {
    role: 'Talent Acquisition Recruiter',
    company: 'DIRECTV (via Randstad)',
    description: 'Supporting high-volume corporate and technical hiring in a complex RPO environment.',
    tags: ['RPO', 'Technical', 'Scale']
  },
  {
    role: 'Recruiter',
    company: 'Kelly Services',
    description: 'Fortune 500 recruiting across multiple verticals including finance and office admin.',
    tags: ['Fortune 500', 'High-Volume', 'Compliance']
  },
  {
    role: 'Marine & Skilled Trades Recruiting',
    company: 'NSC / Ameri-Force',
    description: 'Specializing in hard-to-fill technical roles for maritime and shipbuilding sectors.',
    tags: ['Skilled Trades', 'Maritime', 'Niche']
  },
  {
    role: 'Healthcare Staffing',
    company: 'AMN Healthcare',
    description: 'Full-cycle staffing for clinical and non-clinical healthcare professionals.',
    tags: ['Healthcare', 'Clinical', 'Rapid Response']
  }
];

export const INDUSTRIES = [
  'Healthcare', 'Finance & Banking', 'Manufacturing', 'Construction', 
  'Maritime', 'Call Centers', 'Telecommunications', 'Creative'
];

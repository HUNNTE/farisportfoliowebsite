import { AwardItem, CertificationItem, ExperienceItem, ProjectItem, SkillCategory } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Aulia Azmi Al Farisy',
  pronouns: 'He/Him',
  monogram: 'AF',
  title: 'Motivated Full-Stack Developer',
  headline: 'Motivated Full-Stack Developer proficient in JavaScript, React, Node.js, and Laravel.',
  location: 'East Jakarta, Indonesia',
  email: 'auliaazmialfarisy@gmail.com',
  phone: '+62 858 9366 5546',
  linkedin: 'https://linkedin.com/in/auliaazmialfarisy',
  github: 'https://github.com/HUNNTE',
  status: 'Open to Full-Stack Opportunities',
  school: 'SMK IDN Boarding School',
  degree: 'Software Engineering Student',
  educationPeriod: 'Jul 2023 - Jun 2028',
  educationDetails: [
    'Specialized in full-stack web and mobile application development (HTML, CSS, JS, PHP, Laravel, Flutter, MySQL).',
  ],
  bio: 'Motivated Full-Stack Developer proficient in JavaScript, React, Node.js, and Laravel. Proven track record of building 10+ scalable web applications, from civic tech to e-commerce. Eager to leverage strong problem-solving skills to deliver impactful software solutions.',
  languages: [
    { name: 'Bahasa Indonesia', proficiency: 'Native proficiency', level: '100%' },
    { name: 'English', proficiency: 'Professional working proficiency', level: '85%' },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'lapor-kota',
    title: 'Lapor Kota (Civic Reporting)',
    tagline: 'Civic Engagement Platform & Geolocation Issue Tracking',
    period: 'Aug 2026 - Sep 2026',
    url: 'https://laporkota.up.railway.app/',
    demoUrl: 'https://laporkota.up.railway.app/',
    bullets: [
      'Developed a civic engagement platform using React and Node.js, reducing simulated report resolution time by 30% through real-time tracking and geolocation mapping.',
    ],
    features: [
      'Developed a civic engagement platform using React and Node.js, reducing simulated report resolution time by 30% through real-time tracking and geolocation mapping.',
    ],
    description:
      'Developed a civic engagement platform using React and Node.js, reducing simulated report resolution time by 30% through real-time tracking and geolocation mapping.',
    techStack: ['React', 'Node.js', 'Geolocation API', 'Railway', 'Tailwind CSS'],
    highlights: ['30% Faster Resolution', 'Real-Time Tracking', 'Geolocation Mapping', 'Civic Platform'],
  },
  {
    id: 'web-ecommerce',
    title: 'Web E-Commerce',
    tagline: 'Responsive Online Store with Dynamic Catalog & Cart System',
    period: 'Jul 2026 - Aug 2026',
    url: 'https://github.com/HUNNTE/webecommerce',
    githubUrl: 'https://github.com/HUNNTE/webecommerce',
    bullets: [
      'Engineered a responsive e-commerce platform with a dynamic catalog and cart system, improving page load speed by 25% and ensuring 100% mobile compatibility.',
    ],
    features: [
      'Engineered a responsive e-commerce platform with a dynamic catalog and cart system, improving page load speed by 25% and ensuring 100% mobile compatibility.',
    ],
    description:
      'Engineered a responsive e-commerce platform with a dynamic catalog and cart system, improving page load speed by 25% and ensuring 100% mobile compatibility.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Dynamic Catalog', 'Cart Flow'],
    highlights: ['25% Speed Improvement', 'Dynamic Catalog', 'Cart Simulation', '100% Mobile Ready'],
  },
  {
    id: 'payroll-application',
    title: 'Payroll Application',
    tagline: 'Automated Salary Calculations & Role-Based Access Governance',
    period: 'Jun 2026 - Jul 2026',
    url: 'https://github.com/HUNNTE/Payroll-App',
    githubUrl: 'https://github.com/HUNNTE/Payroll-App',
    bullets: [
      'Automated salary calculations and digital slip generation using Laravel and MySQL, reducing manual data entry errors by 90% and implementing secure Role-Based Access Control (RBAC).',
    ],
    features: [
      'Automated salary calculations and digital slip generation using Laravel and MySQL, reducing manual data entry errors by 90% and implementing secure Role-Based Access Control (RBAC).',
    ],
    description:
      'Automated salary calculations and digital slip generation using Laravel and MySQL, reducing manual data entry errors by 90% and implementing secure Role-Based Access Control (RBAC).',
    techStack: ['Laravel', 'PHP', 'MySQL', 'RBAC Security', 'Salary Engine'],
    highlights: ['90% Error Reduction', 'Automated Slip Generation', 'Secure RBAC', 'Relational Database'],
  },
  {
    id: 'yogyakarta-digital-city',
    title: 'Yogyakarta Digital City',
    tagline: 'Smart City Public Services Portal & Urban Information Architecture',
    period: 'May 2026 - Jun 2026',
    url: 'https://hunnte.github.io/yogyakartadigitalcity/',
    demoUrl: 'https://hunnte.github.io/yogyakartadigitalcity/',
    bullets: [
      'Designed and deployed a smart city portal showcasing public services, achieving a 95+ Lighthouse performance score and increasing information accessibility.',
    ],
    features: [
      'Designed and deployed a smart city portal showcasing public services, achieving a 95+ Lighthouse performance score and increasing information accessibility.',
    ],
    description:
      'Designed and deployed a smart city portal showcasing public services, achieving a 95+ Lighthouse performance score and increasing information accessibility.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Lighthouse 95+', 'Smart City UI'],
    highlights: ['Lighthouse 95+ Score', 'Public Information Access', 'Accessible UI', 'Fast Page Load'],
  },
  {
    id: 'aeshpadd-notepad',
    title: 'AeshPadd (Notepad App)',
    tagline: 'Lightweight Browser Notepad with Zero-Latency LocalStorage',
    period: 'Apr 2026 - May 2026',
    url: 'https://github.com/NotepadProject/AeshPadd',
    githubUrl: 'https://github.com/NotepadProject/AeshPadd',
    bullets: [
      'Built a lightweight browser-based notepad utilizing LocalStorage, enabling instant data retrieval and providing a seamless, zero-latency text editing experience.',
    ],
    features: [
      'Built a lightweight browser-based notepad utilizing LocalStorage, enabling instant data retrieval and providing a seamless, zero-latency text editing experience.',
    ],
    description:
      'Built a lightweight browser-based notepad utilizing LocalStorage, enabling instant data retrieval and providing a seamless, zero-latency text editing experience.',
    techStack: ['JavaScript', 'LocalStorage API', 'HTML5', 'CSS3', 'Zero-Latency'],
    highlights: ['Zero-Latency Editing', 'Instant Local Storage', 'Lightweight Footprint', 'Browser Persistence'],
  },
  {
    id: 'e-library-system',
    title: 'E-Library System',
    tagline: 'Digital Book Catalog Management & Reservation Workflow',
    period: 'Mar 2026 - Apr 2026',
    url: 'https://github.com/HUNNTE/elibrary',
    githubUrl: 'https://github.com/HUNNTE/elibrary',
    bullets: [
      'Created a digital library management system with advanced search filters, streamlining the book reservation process and organizing 100+ catalog entries efficiently.',
    ],
    features: [
      'Created a digital library management system with advanced search filters, streamlining the book reservation process and organizing 100+ catalog entries efficiently.',
    ],
    description:
      'Created a digital library management system with advanced search filters, streamlining the book reservation process and organizing 100+ catalog entries efficiently.',
    techStack: ['Web Application', 'Search Filtering', 'MySQL / Database', 'Reservation Workflows'],
    highlights: ['100+ Catalog Entries', 'Advanced Filters', 'Streamlined Workflows', 'Resource Tracking'],
  },
  {
    id: 'company-profile-website',
    title: 'Company Profile Website',
    tagline: 'Professional Corporate Website with Responsive Cross-Browser Design',
    period: 'Feb 2026 - Mar 2026',
    url: 'https://hunnte.github.io/Skl-2_company-website/',
    demoUrl: 'https://hunnte.github.io/Skl-2_company-website/',
    bullets: [
      'Developed a professional, cross-browser compatible company website, enhancing brand visibility and ensuring optimal viewing across all device sizes.',
    ],
    features: [
      'Developed a professional, cross-browser compatible company website, enhancing brand visibility and ensuring optimal viewing across all device sizes.',
    ],
    description:
      'Developed a professional, cross-browser compatible company website, enhancing brand visibility and ensuring optimal viewing across all device sizes.',
    techStack: ['HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Layout', 'Cross-Browser'],
    highlights: ['Cross-Browser Compatibility', 'Enhanced Visibility', 'Multi-Device Support', 'Clean Aesthetic'],
  },
  {
    id: 'ecohub-app',
    title: 'EcoHub App',
    tagline: 'Environmental Sustainability & Interactive Impact-Tracking Tools',
    period: 'Jan 2026 - Feb 2026',
    url: 'https://github.com/HUNNTE/ecohub-app',
    githubUrl: 'https://github.com/HUNNTE/ecohub-app',
    bullets: [
      'Implemented educational resources and impact-tracking tools for environmental sustainability, driving user engagement through interactive and responsive UI components.',
    ],
    features: [
      'Implemented educational resources and impact-tracking tools for environmental sustainability, driving user engagement through interactive and responsive UI components.',
    ],
    description:
      'Implemented educational resources and impact-tracking tools for environmental sustainability, driving user engagement through interactive and responsive UI components.',
    techStack: ['JavaScript', 'Interactive UI', 'Sustainability Tools', 'Impact Analytics'],
    highlights: ['Interactive Engagement', 'Educational Modules', 'Impact Tracking', 'Responsive Components'],
  },
  {
    id: 'web-e-report',
    title: 'Web E-Report',
    tagline: 'Digital Reporting Dashboard Cutting Report Generation Time by 40%',
    period: 'Dec 2025 - Jan 2026',
    url: 'https://hunnte.github.io/webereport/',
    demoUrl: 'https://hunnte.github.io/webereport/',
    bullets: [
      'Streamlined organizational reporting workflows by building a digital dashboard, cutting report generation time by 40% and simplifying data entry for end-users.',
    ],
    features: [
      'Streamlined organizational reporting workflows by building a digital dashboard, cutting report generation time by 40% and simplifying data entry for end-users.',
    ],
    description:
      'Streamlined organizational reporting workflows by building a digital dashboard, cutting report generation time by 40% and simplifying data entry for end-users.',
    techStack: ['Dashboard UI', 'Data Entry Engine', 'Reporting Automation', 'Tailwind CSS'],
    highlights: ['40% Faster Generation', 'Streamlined Workflows', 'Simplified Data Entry', 'Administrative Dashboard'],
  },
  {
    id: 'aurion-service-web',
    title: 'Aurion Service Web Experience',
    tagline: 'Minimalist AI Service Website Achieving a 98/100 Performance Score',
    period: 'Oct 2025 - Nov 2025',
    url: 'https://kelompok-companyprofile.github.io/Company-profile/',
    demoUrl: 'https://kelompok-companyprofile.github.io/Company-profile/',
    bullets: [
      'Crafted a minimalist, performance-focused AI service website using Tailwind CSS, achieving a 98/100 performance score and delivering smooth user interactions.',
    ],
    features: [
      'Crafted a minimalist, performance-focused AI service website using Tailwind CSS, achieving a 98/100 performance score and delivering smooth user interactions.',
    ],
    description:
      'Crafted a minimalist, performance-focused AI service website using Tailwind CSS, achieving a 98/100 performance score and delivering smooth user interactions.',
    techStack: ['Tailwind CSS', 'Front-End Development', 'Performance 98/100', 'AI Service'],
    highlights: ['98/100 Performance Score', 'Smooth Interactions', 'Minimalist Architecture', 'Tailwind CSS'],
  },
];

export const FEATURED_PROJECT: ProjectItem = PROJECTS[0];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Freelance Full-Stack Developer',
    organization: 'Independent / Remote',
    period: 'Aug 2026 - Present',
    type: 'Professional Work',
    categoryType: 'work',
    location: 'Jakarta, Indonesia',
    summary:
      'Engineered 10+ full-stack web applications, including e-commerce, payroll, and civic reporting systems, from concept to deployment.',
    highlights: [
      'Engineered 10+ full-stack web applications, including e-commerce, payroll, and civic reporting systems, from concept to deployment.',
      'Implemented secure authentication, database management (MySQL), and responsive UI designs, consistently meeting project deadlines and client specifications.',
    ],
    badges: ['10+ Applications', 'React & Node.js', 'MySQL', 'Secure Auth', 'Responsive UI'],
  },
  {
    id: 'exp-2',
    role: 'Website Builder',
    organization: 'PT. Kreasi Otomasi Industri',
    period: 'Jul 2023 - Jul 2026',
    type: 'Professional Work',
    categoryType: 'work',
    location: 'Jakarta, Indonesia',
    summary:
      'Developed and maintained 5+ responsive, user-friendly websites tailored to client requirements using HTML, CSS, JavaScript, and PHP/Laravel.',
    highlights: [
      'Developed and maintained 5+ responsive, user-friendly websites tailored to client requirements using HTML, CSS, JavaScript, and PHP/Laravel.',
      'Collaborated with cross-functional teams in an Agile environment, utilizing Git/GitHub for version control, code reviews, and efficient collaborative development.',
      'Optimized website performance and ensured cross-browser compatibility, resulting in improved user engagement and faster load times.',
    ],
    badges: ['HTML, CSS, JS', 'PHP & Laravel', 'Agile & Git', 'Code Reviews', 'Performance Tuning'],
  },
  {
    id: 'exp-3',
    role: 'Treasurer',
    organization: 'IDN JHS Student Council',
    period: 'Jan 2024 - Jan 2025',
    type: 'Leadership',
    categoryType: 'organization',
    location: 'Jonggol, West Java, Indonesia',
    summary:
      'Managed financial records and budgeting for 10+ student council activities, ensuring 100% transparent fund allocation and preventing budget overruns.',
    highlights: [
      'Managed financial records and budgeting for 10+ student council activities, ensuring 100% transparent fund allocation and preventing budget overruns.',
    ],
    badges: ['10+ Activities', 'Financial Governance', '100% Transparency', 'Budget Control'],
  },
  {
    id: 'exp-4',
    role: 'Member of Religious Department',
    organization: 'IDN JHS Student Council',
    period: 'Mar 2023 - Jan 2024',
    type: 'Leadership',
    categoryType: 'organization',
    location: 'Jonggol, West Java, Indonesia',
    summary:
      'Organized and coordinated 5+ large-scale religious events, enhancing community engagement and improving team collaboration among 20+ student members.',
    highlights: [
      'Organized and coordinated 5+ large-scale religious events, enhancing community engagement and improving team collaboration among 20+ student members.',
    ],
    badges: ['5+ Events', 'Community Engagement', 'Team Collaboration', '20+ Members'],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'HTML and CSS in depth',
    issuer: 'Meta',
    category: 'Front-End Development',
    credentialId: 'CZCYCI85RU1A',
    month: 'Nov',
    year: '2025',
  },
  {
    id: 'cert-2',
    title: 'Version Control',
    issuer: 'Meta',
    category: 'Engineering Tools & Git',
    credentialId: '6HJWDDNN8IMJ',
    month: 'Nov',
    year: '2025',
  },
  {
    id: 'cert-3',
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    category: 'Programming & Web Logic',
    credentialId: 'IJ85G86Z0PKU',
    month: 'Nov',
    year: '2025',
  },
  {
    id: 'cert-4',
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    category: 'Front-End Development',
    credentialId: 'DM991OTUTM0L',
    month: 'Oct',
    year: '2025',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages & Frameworks',
    skills: [
      { name: 'JavaScript', level: 'Proficient' },
      { name: 'React.js', level: 'Proficient' },
      { name: 'Node.js', level: 'Proficient' },
      { name: 'PHP', level: 'Skilled' },
      { name: 'Laravel', level: 'Skilled' },
      { name: 'Python', level: 'Core' },
      { name: 'Java', level: 'Core' },
      { name: 'Dart', level: 'Core' },
      { name: 'HTML5', level: 'In-Depth' },
      { name: 'CSS3', level: 'In-Depth' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Flutter', level: 'Skilled' },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 'Proficient' },
      { name: 'GitHub', level: 'Proficient' },
      { name: 'MySQL', level: 'Proficient' },
      { name: 'RESTful APIs', level: 'Proficient' },
      { name: 'AI Integration', level: 'Applied' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Technical Communication', level: 'Strong' },
      { name: 'Analytical Problem Solving', level: 'Analytical' },
      { name: 'Agile Collaboration', level: 'Experienced' },
      { name: 'Financial Budgeting', level: 'Experienced' },
    ],
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Best Student',
    organization: 'SMK IDN Boarding School',
    period: 'Sep 2026',
    description:
      'Awarded for demonstrating exceptional academic performance, leadership, and active participation. Recognized as the top-performing student in the Software Engineering department for maintaining a GPA above 90.',
    highlights: ['GPA Above 90', 'Top-Performing Student', 'Software Engineering Dept', 'Academic & Leadership Excellence'],
  },
  {
    id: 'award-2',
    title: 'Best English Student',
    organization: 'SMP IDN Boarding School',
    period: 'Apr 2023',
    description:
      'Recognized for outstanding proficiency in the English language, achieving the highest scores in speaking, writing, and comprehension assessments.',
    highlights: ['Highest Assessment Scores', 'Speaking & Writing Mastery', 'Reading Comprehension', 'Language Proficiency'],
  },
];

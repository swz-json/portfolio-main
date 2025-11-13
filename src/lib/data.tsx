import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Formation',
    hash: '#Formation',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-2.webp',
    title: 'Next-starter',
    description:
      'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, testing tools and more.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    links: {
      preview: '',
      github: 'https://github.com/swz-json/next-starter-',
      githubApi: '',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'SocialHub',
    description:
      'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/swz-json/SocialHubb/tree/main',
      githubApi: 'h',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'MSc in Data Engineering for Artificial Intelligence',
    company: 'DSTI - Data ScienceTech Institute',
    description:
      'During my first year of the MSc, I focused on core data engineering: building ETL pipelines (Python/SQL), data modeling, cloud (AWS/Azure), orchestration (Airflow), CI/CD & MLOps, and analytics with Power BI.',
    period: 'Sep 2025 - Present',
    technologies: [
      'Python',
      'SQL',
      'Airflow',
      'AWS',
      'Power BI',
      'Git',
      'Docker',
      'R',
      'Jupyter Notebook',
      'Linux',
    ],
  },
  {
    title: 'International Summer Scholar - Data Science & Machine Learning',
    company: 'University of Cincinnati ( Cincinnati, Ohio, United States )',
    description:
      'As an international summer scholar, I completed an intensive program focused on practical data science and entrepreneurship. I worked with Python (pandas/scikit-learn) for data analysis and basic ML, practiced data visualization, and took a course on interpersonal communication and negotiation. I also joined the StartupCincy bootcamp, progressing from idea to prototype and final pitch within a team.',
    period: 'Mai 2023 - sept 2023',
    technologies: [
      'Entrepreneurship',
      'scikit-learn',
      'Data Visualization',
      'Communication',
      'Negotiation',
      'Next.js',
      'TypeScript',
      'Sanity CMS',
      'Tailwind',
      'SQL',
      'Python',
    ],
  },
  {
    title:
      'MIAGE Bachelor Student - Computer Methods Applied to Business Management',
    company:
      'Université Internationale de Casablanca (UIC), Casablanca, Morocco',
    description:
      'As an MIAGE student, I combined software engineering with business analytics: built web apps and APIs, practiced databases and SQL, and delivered data dashboards. Coursework covered Python, Java, C#, JavaScript, SQL, HTML/CSS, PHP, and Power BI, plus Agile project management (Scrum) and team coordination.',
    period: '2022 - 2025',
    technologies: [
      'Python',
      'Java',
      'C#',
      'JavaScript',
      'SQL',
      'Power BI',
      'HTML/CSS',
      'PHP',
      'Scrum',
      'applied math',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;

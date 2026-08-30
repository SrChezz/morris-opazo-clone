// Content model — single source of truth. See .kiro/steering/content.md

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Service {
  title: string;
  slug: string;
  desc: string;
  icon: string; // key for inline SVG icon
}

export interface Stat {
  value: string;   // display, e.g. "+1K"
  target: number;  // numeric for count-up
  prefix: string;  // "+"
  suffix: string;  // "K" | ""
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Story {
  title: string;
  tag: string;
  href: string;
}

export const site = {
  name: 'Morris & Opazo',
  descriptor:
    'Morris & Opazo es una empresa de consultoría especializada en tecnologías cloud. Nos enorgullece ser un Partner estratégico de Amazon Web Services (AWS).',
  legal: 'MORRIS Y OPAZO | TODOS LOS DERECHOS RESERVADOS | 2026',
  social: {
    linkedin: 'https://www.linkedin.com/company/morrisopazo/',
    instagram: 'https://www.instagram.com/morrisopazo_/',
    youtube: 'https://www.youtube.com/@morrisopazo',
  },
};

export const nav: NavItem[] = [
  { label: 'Nosotros', href: '/nosotros' },
  {
    label: 'Servicios',
    href: '#servicios',
    children: [
      { label: 'Application Modernization', href: '#servicios' },
      { label: 'Cloud Migration', href: '#servicios' },
      { label: 'Data & Analytics', href: '#servicios' },
      { label: 'Gen AI', href: '#servicios' },
      { label: 'AI & Machine Learning', href: '#servicios' },
      { label: 'Internet of Things', href: '#servicios' },
    ],
  },
  {
    label: 'Industrias',
    href: '#industrias',
    children: [
      { label: 'Energy & Resources', href: '#industrias' },
      { label: 'Financial Services', href: '#industrias' },
      { label: 'Healthcare', href: '#industrias' },
      { label: 'Retail', href: '#industrias' },
      { label: 'Transportation and Leisure', href: '#industrias' },
      { label: 'Government', href: '#industrias' },
      { label: 'Otras industrias', href: '#industrias' },
    ],
  },
  { label: 'Casos', href: '#casos' },
  { label: 'Startup', href: '/startup' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Talento', href: '/talento' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '#contacto' },
];

export const clients: string[] = ['am', 'aa', 'sura', 'uno', 'claro'];

export const services: Service[] = [
  {
    title: 'Application Modernization',
    slug: 'application-modernization',
    desc: 'Reescribimos y desacoplamos aplicaciones legadas hacia arquitecturas serverless y de contenedores, sin frenar tu operación.',
    icon: 'modernize',
  },
  {
    title: 'Cloud Migration',
    slug: 'cloud-migration',
    desc: 'Llevamos tu infraestructura a AWS con un plan por etapas: cero sorpresas, mínima interrupción y todo productivo desde el primer intento.',
    icon: 'migrate',
  },
  {
    title: 'Data & Analytics',
    slug: 'data-analytics',
    desc: 'Unificamos tus datos dispersos en una plataforma analítica que convierte el procesamiento masivo en decisiones claras.',
    icon: 'data',
  },
  {
    title: 'Gen AI',
    slug: 'gen-ai',
    desc: 'Diseñamos asistentes y automatizaciones con IA generativa que se integran a tus procesos y a tu cultura, no al revés.',
    icon: 'genai',
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    desc: 'Modelos de decisión en tiempo real y de riesgo, entrenados sobre tus datos y desplegados de forma segura en AWS.',
    icon: 'ml',
  },
  {
    title: 'Internet of Things',
    slug: 'internet-of-things',
    desc: 'Conectamos sensores y activos en terreno a la nube para monitoreo continuo, incluso en las zonas más remotas.',
    icon: 'iot',
  },
];

export const stats: Stat[] = [
  { value: '+21', target: 21, prefix: '+', suffix: '', label: 'Años trabajando' },
  { value: '+1K', target: 1, prefix: '+', suffix: 'K', label: 'Proyectos desarrollados' },
  { value: '+300', target: 300, prefix: '+', suffix: '', label: 'Clientes por el mundo' },
  { value: '+90', target: 90, prefix: '+', suffix: '', label: 'Expertos internos' },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Morris & Opazo nos apoya con nuestras iniciativas de Machine Learning e IA, como la toma de decisiones en tiempo real, con gran efectividad y siempre alineados a nuestra cultura. Su equipo responde con rapidez ante cada nuevo desafío.',
    name: 'Antonio Chumioque',
    role: 'Gerencia de Analítica e Inteligencia Comercial',
  },
  {
    quote:
      'Enfrentábamos una infraestructura dispersa sin espacio para modernizar. El equipo de Morris & Opazo fue un pilar fundamental en este proceso: la organización vio el impacto real de migrar a la nube de AWS en el primer intento y con el 100% en productivo.',
    name: 'Giunelsy Noriega',
    role: 'CIO y Subgerente de Tecnología y Sistemas',
  },
  {
    quote:
      'Como multinacional valoramos la metodología de trabajo de Morris & Opazo y su consultoría estratégica en la nube. Nos permitieron optimizar el procesamiento masivo de datos operacionales alcanzando nuestros objetivos con alta eficiencia.',
    name: 'Oscar Toledo',
    role: 'Gerencia de Sistemas e Infraestructura',
  },
];

export const stories: Story[] = [
  {
    title:
      'Round Trips: más pacientes y mejor atención gracias a la transformación digital con Morris & Opazo y AWS',
    tag: 'Healthcare',
    href: '#casos',
  },
  {
    title:
      'IoT que conecta el agua de Chile: Morris & Opazo y Akotek llevan el monitoreo de plantas rurales a la nube AWS',
    tag: 'IoT · Energy',
    href: '#casos',
  },
  {
    title:
      'Agua de Quito y Morris & Opazo modernizan sobre AWS el sistema que abastece a 2,7 millones de personas',
    tag: 'Government',
    href: '#casos',
  },
  {
    title:
      'Bionaute acelera la investigación biotecnológica con IA avanzada en AWS',
    tag: 'Healthcare · AI',
    href: '#casos',
  },
  {
    title:
      'CChC: infraestructura invisible, impacto visible — Transformación Digital con Morris & Opazo y AWS',
    tag: 'Government',
    href: '#casos',
  },
  {
    title:
      'Escalabilidad y Analítica Avanzada: cómo potenciar la toma de decisiones en grandes organizaciones',
    tag: 'Data',
    href: '#casos',
  },
];

export const industries: string[] = [
  'Energy & Resources',
  'Financial Services',
  'Healthcare',
  'Retail',
  'Transportation and Leisure',
  'Government',
  'Otras industrias',
];

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
  img: string;  // filename in src/assets/home/services
}

export interface Industry {
  title: string;
  slug: string;
  img: string; // filename in src/assets/home/industries
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
  photo: string;   // filename in src/assets/home/testimonials
  company: string; // company logo filename in src/assets/home/testimonials
  companyAlt: string;
}

export interface Story {
  title: string;
  tag: string;
  href: string;
  cover: string; // filename in src/assets/home/stories
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
    href: '/servicio',
    children: [
      { label: 'Application Modernization', href: '/servicio/application-modernization' },
      { label: 'Cloud Migration', href: '/servicio/cloud-migrations' },
      { label: 'Data & Analytics', href: '/servicio/data-analytics' },
      { label: 'Gen AI', href: '/servicio/gen-ai' },
      { label: 'AI & Machine Learning', href: '/servicio/ia-machine-learning' },
      { label: 'Internet of Things', href: '/servicio/internet-of-things' },
    ],
  },
  {
    label: 'Industrias',
    href: '/industria',
    children: [
      { label: 'Energy & Resources', href: '/industria/energy-resources' },
      { label: 'Financial Services', href: '/industria/financial-services' },
      { label: 'Healthcare', href: '/industria/healthcare' },
      { label: 'Retail', href: '/industria/retail' },
      { label: 'Transportation and Leisure', href: '/industria/transportation-and-leisure' },
      { label: 'Government', href: '/industria/goverment' },
      { label: 'Otras industrias', href: '/industria/otras-industrias' },
    ],
  },
  { label: 'Casos', href: '/casos' },
  { label: 'Startup', href: '/startup' },
  { label: 'Blog', href: '/blog' },
  { label: 'Talento', href: '/talento' },
  { label: 'Contacto', href: '/contacto' },
];

export const clients: string[] = ['am', 'aa', 'sura', 'uno', 'claro'];

export const services: Service[] = [
  {
    title: 'Application Modernization',
    slug: 'application-modernization',
    desc: 'Reescribimos y desacoplamos aplicaciones legadas hacia arquitecturas serverless y de contenedores, sin frenar tu operación.',
    icon: 'modernize',
    img: 's-application.png',
  },
  {
    title: 'Cloud Migration',
    slug: 'cloud-migrations',
    desc: 'Llevamos tu infraestructura a AWS con un plan por etapas: cero sorpresas, mínima interrupción y todo productivo desde el primer intento.',
    icon: 'migrate',
    img: 's-Cloud-Migration.png',
  },
  {
    title: 'Data & Analytics',
    slug: 'data-analytics',
    desc: 'Unificamos tus datos dispersos en una plataforma analítica que convierte el procesamiento masivo en decisiones claras.',
    icon: 'data',
    img: 's-Data-Analytics.png',
  },
  {
    title: 'Gen AI',
    slug: 'gen-ai',
    desc: 'Diseñamos asistentes y automatizaciones con IA generativa que se integran a tus procesos y a tu cultura, no al revés.',
    icon: 'genai',
    img: 's-Gen-Ai.png',
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ia-machine-learning',
    desc: 'Modelos de decisión en tiempo real y de riesgo, entrenados sobre tus datos y desplegados de forma segura en AWS.',
    icon: 'ml',
    img: 's-ML.png',
  },
  {
    title: 'Internet of Things',
    slug: 'internet-of-things',
    desc: 'Conectamos sensores y activos en terreno a la nube para monitoreo continuo, incluso en las zonas más remotas.',
    icon: 'iot',
    img: 's-IOT.png',
  },
];

// Industrias con icono real (para el grid de la home). El orden sigue al original.
export const industryCards: Industry[] = [
  { title: 'Energy & Resources', slug: 'energy-resources', img: 'i-energy.png' },
  { title: 'Financial Services', slug: 'financial-services', img: 'i-financial.png' },
  { title: 'Healthcare', slug: 'healthcare', img: 'i-healthcare.png' },
  { title: 'Retail', slug: 'retail', img: 'i-retail.png' },
  { title: 'Transportation and Leisure', slug: 'transportation-and-leisure', img: 'i-transport.png' },
  { title: 'Government', slug: 'goverment', img: 'i-goverment.png' },
  { title: 'Otras industrias', slug: 'otras-industrias', img: 'i-other-industrias.png' },
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
    photo: 'antoine-1.png',
    company: 'interbank-gray.png',
    companyAlt: 'Interbank',
  },
  {
    quote:
      'Enfrentábamos una infraestructura dispersa sin espacio para modernizar. El equipo de Morris & Opazo fue un pilar fundamental en este proceso: la organización vio el impacto real de migrar a la nube de AWS en el primer intento y con el 100% en productivo.',
    name: 'Giunelsy Noriega',
    role: 'CIO y Subgerente de Tecnología y Sistemas',
    photo: 'Giunelsy.png',
    company: 'grupo-aje-gray.png',
    companyAlt: 'Grupo AJE',
  },
  {
    quote:
      'Como multinacional valoramos la metodología de trabajo de Morris & Opazo y su consultoría estratégica en la nube. Nos permitieron optimizar el procesamiento masivo de datos operacionales alcanzando nuestros objetivos con alta eficiencia.',
    name: 'Oscar Toledo',
    role: 'Gerencia de Sistemas e Infraestructura',
    photo: 'oscar.png',
    company: 'camara-de-la-construccion.png',
    companyAlt: 'Cámara Chilena de la Construcción',
  },
];

export const stories: Story[] = [
  {
    title:
      'Round Trips: más pacientes y mejor atención gracias a la transformación digital con Morris & Opazo y AWS',
    tag: 'Healthcare',
    href: '/casos/round-trips-salud',
    cover: 'round-trips.jpg',
  },
  {
    title:
      'IoT que conecta el agua de Chile: Morris & Opazo y Akotek llevan el monitoreo de plantas rurales a la nube AWS',
    tag: 'IoT · Energy',
    href: '/casos/iot-akotek-agua-rural',
    cover: 'iot-akotek.jpg',
  },
  {
    title:
      'Agua de Quito y Morris & Opazo modernizan sobre AWS el sistema que abastece a 2,7 millones de personas',
    tag: 'Government',
    href: '/casos/agua-de-quito-migracion-sector-publico',
    cover: 'agua-quito.jpg',
  },
  {
    title:
      'Bionaute acelera la investigación biotecnológica con IA avanzada en AWS',
    tag: 'Healthcare · AI',
    href: '/casos/bionaute-biotecnologia-ia',
    cover: 'bionaute.jpg',
  },
  {
    title:
      'CChC: infraestructura invisible, impacto visible. Transformación Digital con Morris & Opazo y AWS',
    tag: 'Government',
    href: '/casos/cchc-transformacion-digital',
    cover: 'cchc.jpg',
  },
  {
    title:
      'Escalabilidad y Analítica Avanzada: cómo potenciar la toma de decisiones en grandes organizaciones',
    tag: 'Data',
    href: '/casos/escalabilidad-analitica-avanzada',
    cover: 'escalabilidad.jpg',
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

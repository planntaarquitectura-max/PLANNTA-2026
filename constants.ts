import { 
  Building2, 
  Cpu, 
  Layers, 
  SearchCheck, 
  HardHat, 
  TrendingUp, 
  GraduationCap,
  Box,
  MonitorPlay,
  Zap,
  Workflow,
  Presentation
} from 'lucide-react';
import { Service, Project, MethodStep, Course } from './types';

export const HERO_CONTENT = {
  title: "Arquitectura Viva. Procesos Inteligentes.",
  subtitle: "PLANNTA integra 20 años de experiencia con ecología, eficiencia energética y tecnología avanzada (BIM, Revit, IA) para entregar proyectos de alto valor.",
  ctaPrimary: "Ver Portafolio",
  ctaSecondary: "Consultoría BIM"
};

export const ABOUT_CONTENT = {
  bio: "Somos PLANNTA Arquitectura, un estudio con más de 20 años de experiencia especializado en diseño arquitectónico, tecnología y procesos inteligentes. Nacemos con un ADN sustentable: integramos ecología y responsabilidad ambiental no solo en los espacios, sino en nuestros modelos de negocio.",
  philosophy: "Entendemos la arquitectura desde la eficiencia. Usamos Revit, Navisworks, Dynamo e IA para eliminar la incertidumbre. Para nuestros clientes inversionistas, no somos solo diseñadores, somos aliados estratégicos para planear y tomar decisiones con claridad.",
  highlights: [
    "ADN Sustentable & Ecológico",
    "Dominio BIM (Revit/Navisworks)",
    "Automatización (Dynamo)",
    "Visualización IA & Storytelling"
  ]
};

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: "Diseño Arquitectónico",
    description: "Desarrollo conceptual y ejecutivo. Arquitectura que integra estética, funcionalidad y eficiencia energética desde el primer trazo.",
    icon: Building2,
    benefits: ["Diseño bioclimático", "Documentación ejecutiva precisa", "Visión integral"]
  },
  {
    id: 's2',
    title: "Modelado BIM (Revit)",
    description: "Creación de gemelos digitales detallados. Centralizamos toda la información del proyecto para garantizar coherencia constructiva.",
    icon: Layers,
    benefits: ["Control total del proyecto", "Cómputos precisos", "Reducción de errores"]
  },
  {
    id: 's3',
    title: "Familias & Parametrización",
    description: "Creación de familias inteligentes y parametrización avanzada para optimizar flujos de trabajo y estandarizar la calidad.",
    icon: Box,
    benefits: ["Bibliotecas personalizadas", "Datos inteligentes", "Agilidad de diseño"]
  },
  {
    id: 's4',
    title: "Coordinación (Navisworks)",
    description: "Detección de interferencias (Clash Detection) y coordinación interdisciplinaria antes de llegar a la obra.",
    icon: SearchCheck,
    benefits: ["Cero conflictos en obra", "Ahorro de costos", "Cronogramas blindados"]
  },
  {
    id: 's5',
    title: "Automatización (Dynamo)",
    description: "Implementación de scripts y procesos automatizados para tareas repetitivas y complejas, maximizando la eficiencia del equipo.",
    icon: Workflow,
    benefits: ["Eficiencia operativa", "Optimización de datos", "Procesos complejos simplificados"]
  },
  {
    id: 's6',
    title: "Visualización Hiperrealista",
    description: "Renders de alta fidelidad e imágenes conceptuales que comunican la atmósfera y materialidad del proyecto.",
    icon: MonitorPlay,
    benefits: ["Impacto visual", "Claridad para el cliente", "Material de venta"]
  },
  {
    id: 's7',
    title: "Animación IA & Narrativa",
    description: "Recorridos narrados y animaciones generadas con Inteligencia Artificial para contar la historia del proyecto.",
    icon: Cpu,
    benefits: ["Storytelling inmersivo", "Conexión emocional", "Diferenciación tecnológica"]
  },
  {
    id: 's8',
    title: "Presentaciones Estratégicas",
    description: "Storytelling arquitectónico asistido por IA para presentaciones de inversión y venta de desarrollos.",
    icon: Presentation,
    benefits: ["Persuasión efectiva", "Comunicación de valor", "Éxito comercial"]
  },
  {
    id: 's9',
    title: "Mentoría & Capacitación",
    description: "Formación especializada en BIM, tecnología y sustentabilidad para arquitectos y equipos de alto rendimiento.",
    icon: GraduationCap,
    benefits: ["Transferencia de know-how", "Actualización tecnológica", "Liderazgo BIM"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Residencial Eco-Living",
    category: "Vivienda Sustentable",
    description: "Proyecto residencial diseñado bajo criterios bioclimáticos. Utilizamos simulaciones en Revit para optimizar la captación solar y reducir el consumo energético.",
    techStack: ["Revit", "Energy Analysis", "Eco-Design"],
    imageUrl: "https://picsum.photos/800/600?random=10"
  },
  {
    id: 'p2',
    title: "Torre Corporativa Tech",
    category: "Comercial & Mixto",
    description: "Coordinación interdisciplinaria con Navisworks. Detectamos +500 interferencias antes de obra, ahorrando 15% del presupuesto de ejecución.",
    techStack: ["Navisworks", "Clash Detection", "BIM L3"],
    imageUrl: "https://picsum.photos/800/600?random=11"
  },
  {
    id: 'p3',
    title: "Masterplan Turístico",
    category: "Turismo & Conceptual",
    description: "Desarrollo conceptual presentado con narrativas de IA y animación. Una experiencia inmersiva para atraer capital semilla.",
    techStack: ["AI Storytelling", "Dynamo", "Visualization"],
    imageUrl: "https://picsum.photos/800/600?random=12"
  }
];

export const METHODOLOGY: MethodStep[] = [
  {
    step: 1,
    title: "Diagnóstico & Estrategia",
    description: "Analizamos el potencial del sitio y la viabilidad financiera. La sustentabilidad inicia con decisiones inteligentes."
  },
  {
    step: 2,
    title: "Diseño & Modelado BIM",
    description: "Desarrollo integral en Revit. Creamos un modelo único donde arquitectura e ingeniería conviven desde el día uno."
  },
  {
    step: 3,
    title: "Optimización & Coordinación",
    description: "Uso de Navisworks para clash detection y Dynamo para automatizar procesos. Garantizamos 'Cero Errores' en planos."
  },
  {
    step: 4,
    title: "Narrativa & Visualización",
    description: "Comunicamos el proyecto final con renders hiperrealistas y animaciones IA, asegurando que la visión se entienda y venda."
  }
];

export const COURSES: Course[] = [
  {
    title: "BIM Management & Navisworks",
    description: "Domina la coordinación de proyectos complejos. Aprende a detectar interferencias y gestionar la información constructiva.",
    targetAudience: "Arquitectos, Ingenieros y PMs.",
    topics: ["Navisworks Manage", "Coordinación 3D", "Reportes de Interferencias"]
  },
  {
    title: "Arquitectura + IA + Sustentabilidad",
    description: "Integra herramientas de Inteligencia Artificial y criterios ecológicos en tu flujo de diseño arquitectónico.",
    targetAudience: "Estudiantes y Profesionales Innovadores.",
    topics: ["AI Rendering", "Diseño Bioclimático", "Eficiencia Digital"]
  }
];
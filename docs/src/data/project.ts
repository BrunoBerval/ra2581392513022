// src/data/projects.ts

export type ProjectCategory = 'Fullstack' | 'Backend' | 'AI & Data' | 'Academic';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoLink?: string;
  demoLink?: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Controle Acadêmico (ABP 1)",
    description: "Solução completa para gestão de horários e alocação de aulas desenvolvida para a Fatec Jacareí. O sistema resolve conflitos de agendamento e otimiza a grade curricular institucional.",
    tags: ["TypeScript", "Express", "PostgreSQL", "Docker", "Redis"],
    imageUrl: "/abp1.png",
    repoLink: "https://github.com/BrunoBerval/horarios-fatec",
    category: "Academic"
  },
  {
    id: 2,
    title: "Plataforma de Dados Limnológicos (ABP 2)",
    description: "Aplicação web para visualização e análise de dados ambientais, utilizando base de dados cedida pelo INPE. Foca na disponibilização intuitiva de informações científicas complexas.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    imageUrl: "/abp2.png", // Verifique se o nome do arquivo não tem espaços
    repoLink: "https://github.com/BrunoBerval/abp-dados-limnologicos",
    category: "Academic"
  },
  {
    id: 3,
    title: "Explorador de Criptografia: Cifra de César",
    description: "Ferramenta interativa educacional que demonstra visualmente os princípios da criptografia clássica. Desenvolvida para facilitar o ensino de segurança da informação.",
    tags: ["React", "TypeScript", "Algoritmos"],
    imageUrl: "/cifra-de-cesar.jpg",
    repoLink: "https://github.com/BrunoBerval/cifra-de-cesar",
    category: "Academic"
  },
  {
    id: 4,
    title: "API de Gestão de Vagas (Go)",
    description: "Backend de alta performance desenvolvido em Go. Utiliza GORM para ORM e Gin como framework web, implementando arquitetura limpa para cadastro e busca de oportunidades de trabalho.",
    tags: ["Go", "Gin", "GORM", "SQLite", "API REST"],
    imageUrl: "/gooportunities.jpg",
    repoLink: "https://github.com/seu-user/repo",
    category: "Backend"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "Sistema de comércio eletrônico robusto desenvolvido em Python/Flask. Inclui gestão de produtos, carrinho de compras e integração com banco de dados relacional via SQLAlchemy.",
    tags: ["Python", "Flask", "SQLAlchemy", "HTML/CSS"],
    imageUrl: "/flask-logo.png", // Adicionei .png, verifique sua imagem
    repoLink: "https://github.com/BrunoBerval/ecommerce",
    category: "Fullstack"
  },
  {
    id: 6,
    title: "Comunidade Dev",
    description: "Rede social vertical focada em desenvolvedores. Possui sistema completo de autenticação, feed de postagens, upload de mídia e interações sociais em tempo real.",
    tags: ["Python", "Flask", "Auth", "Social Graph"],
    imageUrl: "/flask-logo.png", // Adicionei .png, verifique sua imagem
    repoLink: "https://github.com/BrunoBerval/comunidade",
    category: "Fullstack"
  },
  {
    id: 7,
    title: "Soluções em Machine Learning & Visão Computacional",
    description: "Conjunto de implementações avançadas desenvolvidas durante o Bootcamp DIO/Bairesdev. Inclui detecção de objetos com YOLO 11 e redes neurais profundas (ResNet50, VGG16).",
    tags: ["Python", "TensorFlow", "Keras", "YOLO 11", "Pandas"],
    imageUrl: "/machine-learning.jpg",
    repoLink: "https://github.com/BrunoBerval/machine-learning",
    category: "AI & Data"
  }
];
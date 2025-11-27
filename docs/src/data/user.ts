// src/data/user.ts
export const userData = {
  name: "Bruno Berval Moreira de Godoi",
  role: "Desenvolvedor de Software Fullstack",
  headline: "Transformando necessidades complexas em software eficiente e escalável.",
  profilePicture: "profile-pic.jpg", // Certifique-se de que o caminho está correto
  location: "Jacareí, SP",
  education: {
    institution: "Fatec Jacareí",
    course: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
    startDate: new Date("2025-02-01"), // Ajuste para a data aproximada do seu início
  },
  contact: {
    email: "brunoberval012@gmail.com", // Adicione seu email real aqui se quiser
    whatsapp: "+5512981730282",
    linkedin: "https://linkedin.com/in/seu-perfil", // Adicione seu link real
    github: "https://github.com/BrunoBerval", // Adicione seu link real
    instagram: "https://instagram.com/brunoberval",
  },
  skills: {
    languages: ["TypeScript", "Python", "Go"],
    frontend: ["React", "Tailwind CSS", "Vite", "HTML5/CSS3"],
    backend: ["Node.js", "Express", "Flask", "Gin (Go)", "GORM", "SQLAlchemy"],
    database: ["PostgreSQL", "SQLite", "Redis"],
    devops: ["Docker", "Git"],
    ai: ["Pandas", "NumPy", "TensorFlow", "Keras", "YOLO 11"]
  }
};
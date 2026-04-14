import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiPrisma,
  SiZod,
  SiHtml5,
  SiCss,
  SiSass,
  SiMysql,
  SiPhp
} from 'react-icons/si'

export const tabs = [
  {
    label: 'Frontend',
    description: 'Interfaces modernas, responsivas e focadas na experiência do usuário.',
    groups: [
      {
        title: 'Core',
        items: [
          { name: 'React', icon: SiReact, level: 'Avançado', description: 'Interfaces dinâmicas e componentizadas.' },
          { name: 'TypeScript', icon: SiTypescript, level: 'Avançado', description: 'Tipagem segura e escalável.' },
          { name: 'JavaScript', icon: SiJavascript, level: 'Avançado', description: 'Base do desenvolvimento web.' }
        ]
      },
      {
        title: 'Estilização',
        items: [
          {
            name: 'TailwindCSS',
            icon: SiTailwindcss,
            level: 'Avançado',
            description: 'Estilização moderna e produtiva.'
          },
          { name: 'Sass', icon: SiSass, level: 'Intermediário', description: 'CSS modular e reutilizável.' },
          { name: 'CSS3', icon: SiCss, level: 'Avançado', description: 'Layouts responsivos e animações.' },
          { name: 'HTML5', icon: SiHtml5, level: 'Avançado', description: 'Estrutura semântica.' }
        ]
      }
    ]
  },
  {
    label: 'Backend',
    description: 'APIs escaláveis com foco em organização e performance.',
    groups: [
      {
        title: 'Core',
        items: [
          { name: 'Node.js', icon: SiNodedotjs, level: 'Avançado', description: 'Backend em JavaScript.' },
          { name: 'TypeScript', icon: SiTypescript, level: 'Avançado', description: 'Código seguro.' },
          { name: 'JavaScript', icon: SiJavascript, level: 'Avançado', description: 'Base do Node.' }
        ]
      },
      {
        title: 'Ferramentas',
        items: [
          { name: 'Express', icon: SiExpress, level: 'Avançado', description: 'Criação de APIs REST.' },
          { name: 'Prisma', icon: SiPrisma, level: 'Intermediário', description: 'ORM moderno.' },
          { name: 'Zod', icon: SiZod, level: 'Intermediário', description: 'Validação de dados.' }
        ]
      }
    ]
  },
  {
    label: 'Banco de Dados',
    description: 'Modelagem e integração com bancos relacionais.',
    groups: [
      {
        title: 'Databases',
        items: [
          { name: 'PostgreSQL', icon: SiPostgresql, level: 'Avançado', description: 'Banco principal.' },
          { name: 'MySQL', icon: SiMysql, level: 'Intermediário', description: 'Banco relacional.' }
        ]
      }
    ]
  },
  {
    label: 'Outros',
    description: 'Tecnologias e ferramentas complementares.',
    groups: [
      {
        title: 'Ferramentas',
        items: [{ name: 'Git', icon: SiGit, level: 'Avançado', description: 'Versionamento e colaboração.' }]
      },
      {
        title: 'Experiência',
        items: [{ name: 'PHP', icon: SiPhp, level: 'Intermediário', description: 'Sistemas legados.' }]
      }
    ]
  }
]

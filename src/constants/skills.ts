import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
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
          {
            name: 'React',
            icon: SiReact,
            description: 'Interfaces dinâmicas e componentizadas.'
          },
          {
            name: 'TypeScript',
            icon: SiTypescript,
            description: 'Tipagem segura e escalável.'
          },
          {
            name: 'JavaScript',
            icon: SiJavascript,
            description: 'Base do desenvolvimento web.'
          }
        ]
      },
      {
        title: 'Estilização',
        items: [
          {
            name: 'TailwindCSS',
            icon: SiTailwindcss,
            description: 'Estilização moderna e produtiva.'
          },
          {
            name: 'Sass',
            icon: SiSass,
            description: 'CSS modular e reutilizável.'
          },
          {
            name: 'CSS3',
            icon: SiCss,
            description: 'Layouts responsivos e animações.'
          },
          {
            name: 'HTML5',
            icon: SiHtml5,
            description: 'Estrutura semântica.'
          }
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
          {
            name: 'Node.js',
            icon: SiNodedotjs,
            description: 'Backend em JavaScript.'
          },
          {
            name: 'TypeScript',
            icon: SiTypescript,
            description: 'Código seguro.'
          },
          {
            name: 'JavaScript',
            icon: SiJavascript,
            description: 'Base do Node.'
          }
        ]
      },
      {
        title: 'Ferramentas',
        items: [
          {
            name: 'Express',
            icon: SiExpress,
            description: 'Criação de APIs REST.'
          },
          {
            name: 'Prisma',
            icon: SiPrisma,
            description: 'ORM moderno.'
          },
          {
            name: 'Zod',
            icon: SiZod,
            description: 'Validação de dados.'
          }
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
          {
            name: 'PostgreSQL',
            icon: SiPostgresql,
            description: 'Banco principal.'
          },
          {
            name: 'MySQL',
            icon: SiMysql,
            description: 'Banco relacional.'
          }
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
        items: [
          {
            name: 'Git',
            icon: SiGit,
            description: 'Versionamento e colaboração.'
          },
          {
            name: 'GitHub',
            icon: SiGithub,
            description: 'Versionamento e colaboração.'
          }
        ]
      },
      {
        title: 'Experiência',
        items: [
          {
            name: 'PHP',
            icon: SiPhp,
            description: 'Sistemas legados.'
          }
        ]
      }
    ]
  }
]

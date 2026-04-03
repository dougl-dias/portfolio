import { SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si'

export const projects = [
  {
    title: 'Sistema de Gestão',
    description:
      'Aplicação completa para gerenciamento de clientes e pedidos, com autenticação, dashboard e controle de dados.',
    techs: [SiReact, SiTypescript, SiNodedotjs, SiPostgresql],
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Dashboard interativo com gráficos e indicadores em tempo real, focado em performance e experiência do usuário.',
    techs: [SiReact, SiTypescript],
  },
  {
    title: 'Sistema de Tarefas',
    description:
      'Aplicação para gerenciamento de tarefas com CRUD completo, organização por status e persistência de dados.',
    techs: [SiReact, SiNodedotjs],
  },
]

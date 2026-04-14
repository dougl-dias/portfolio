import type { IconType } from 'react-icons'

import {
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineDeviceMobile,
  HiOutlineServer,
  HiOutlineLightningBolt,
  HiOutlineCog
} from 'react-icons/hi'

interface ServiceProps {
  title: string
  description: string
  icon: IconType
}

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Criação de sites modernos, rápidos e responsivos com foco em performance e experiência do usuário.',
    icon: HiOutlineGlobeAlt
  },
  {
    title: 'Aplicações Frontend',
    description: 'Interfaces interativas utilizando React, com código limpo e arquitetura escalável.',
    icon: HiOutlineCode
  },
  {
    title: 'APIs e Backend',
    description: 'Desenvolvimento de APIs seguras e eficientes com Node.js e integração com bancos de dados.',
    icon: HiOutlineServer
  },
  {
    title: 'Responsividade Mobile',
    description: 'Layouts adaptados para todos os dispositivos, garantindo usabilidade em qualquer tela.',
    icon: HiOutlineDeviceMobile
  },
  {
    title: 'Otimização de Performance',
    description: 'Melhoria de velocidade e desempenho para garantir carregamento rápido e melhor SEO.',
    icon: HiOutlineLightningBolt
  },
  {
    title: 'Manutenção e Suporte',
    description: 'Atualizações, correções e melhorias contínuas para manter seu sistema sempre funcionando.',
    icon: HiOutlineCog
  }
] satisfies ServiceProps[]

export { services }

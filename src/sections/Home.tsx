import { SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si'

import AnimatedBackground from '../components/ui/AnimatedBackground'

import Badge from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

const Home = () => {
  return (
    <section id='home'>
      <div className='relative min-h-dvh flex justify-center items-center px-4'>
        <AnimatedBackground />

        <div className='relative z-20 text-center max-w-3xl'>
          <Badge pill className='mb-4'>
            Disponível para Freelance & Projetos
          </Badge>

          <h1 className='text-primary text-5xl font-bold mb-6 md:text-7xl'>
            Douglas <span className='text-violet-500'>Dias</span>
          </h1>

          <p className='text-lg text-secondary leading-relaxed mb-8 md:text-xl'>
            Desenvolvedor Fullstack focado em <span className='text-primary font-bold underline'>sistemas web</span>.{' '}
            <br />
            Crio aplicações modernas com foco em experiência do usuário, escalabilidade e código bem estruturado.
          </p>

          <ul className='flex flex-wrap justify-center gap-3 mb-10'>
            <li>
              <Badge color='primary' icon={SiReact}>
                React
              </Badge>
            </li>

            <li>
              <Badge color='info' icon={SiTypescript}>
                TypeScript
              </Badge>
            </li>

            <li>
              <Badge color='success' icon={SiNodedotjs}>
                Node.js
              </Badge>
            </li>

            <li>
              <Badge color='warning' icon={SiPostgresql}>
                PostgreSQL
              </Badge>
            </li>
          </ul>

          <div className='flex flex-wrap justify-center gap-4'>
            <Button color='primary' size='lg'>
              Ver Projetos
            </Button>
            <Button variant='outline' color='info' size='lg'>
              Baixar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

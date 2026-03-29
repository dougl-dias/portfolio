import { SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

const Home = () => {
  return (
    <section className='min-h-screen flex items-center justify-center' id='home'>
      <div className='flex flex-col items-center text-center max-w-3xl px-4'>
        <Badge pill={true} className='mb-4'>
          Disponível para Freelance & Projetos
        </Badge>

        <h1 className='text-primary text-5xl font-bold mb-6 md:text-7xl'>
          Douglas <span className='text-violet-500'>Dias</span>
        </h1>

        <p className='text-lg text-secondary leading-relaxed mb-8 md:text-xl'>
          Desenvolvedor Fullstack focado em <span className='text-primary font-bold underline'>sistemas web</span>.{' '}
          <br />
          Crio aplicações modernas com foco em experiencia do usuário, escalabilidade e código bem estruturado.
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
    </section>
  )
}

export default Home

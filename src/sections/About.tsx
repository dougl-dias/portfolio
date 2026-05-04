import { HiOutlineRocketLaunch, HiOutlineLightBulb, HiOutlineCodeBracket } from 'react-icons/hi2'

import TitleSection from '../components/layouts/TitleSection'
import Section from '../components/layouts/Section'
import Card from '../components/ui/Card'

import { certificates } from '../constants/about'
import { FaArrowRight } from 'react-icons/fa'

const About = () => {
  return (
    <Section id='about'>
      <TitleSection
        title='Um pouco'
        highlight='sobre mim'
        description='Desenvolvedor focado em criar aplicações modernas, escaláveis e com excelente experiência de usuário.'
      />

      <div className='grid lg:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6 text-primary leading-relaxed'>
          <p>
            Sou desenvolvedor full stack com foco em criar soluções digitais eficientes, escaláveis e bem estruturadas.
            Tenho experiência tanto no frontend quanto no backend, construindo aplicações completas do zero.
          </p>

          <p>
            Trabalho principalmente com tecnologias modernas como React, TypeScript e Node.js, sempre buscando escrever
            código limpo, reutilizável e de fácil manutenção.
          </p>

          <p>
            Meu objetivo é desenvolver sistemas que não apenas funcionem bem, mas que também entreguem uma experiência
            intuitiva e agradável para o usuário final.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 gap-5'>
          <Card.Root>
            <Card.Icon icon={HiOutlineCodeBracket} className='mb-3' />
            <Card.Title>Código limpo</Card.Title>
            <Card.Description className='mb-1'>
              Estruturas bem organizadas, foco em legibilidade e manutenção a longo prazo.
            </Card.Description>
          </Card.Root>

          <Card.Root>
            <Card.Icon icon={HiOutlineLightBulb} className='mb-3' />
            <Card.Title>Solução de problemas</Card.Title>
            <Card.Description className='mb-1'>
              Capacidade de analisar cenários e criar soluções eficientes e escaláveis.
            </Card.Description>
          </Card.Root>

          <Card.Root className='sm:col-span-2'>
            <Card.Icon icon={HiOutlineRocketLaunch} className='mb-3' />
            <Card.Title>Foco em performance</Card.Title>
            <Card.Description className='mb-1'>
              Aplicações rápidas, otimizadas e preparadas para crescer sem perder qualidade.
            </Card.Description>
          </Card.Root>
        </div>
      </div>

      <div className='mt-20'>
        <h3 className='text-2xl md:text-3xl font-bold text-primary mb-10 text-center'>Certificados</h3>

        <div className='relative'>
          <div className='absolute top-5 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent' />

          <div className='flex gap-6 overflow-x-auto pb-6 pt-10'>
            {certificates.map((cert, index) => (
              <div key={index} className='relative min-w-[280px] group flex flex-col items-center snap-center'>
                <div className='absolute -top-5 w-4 h-4 bg-violet-500 rounded-full border-4 border-base group-hover:scale-110 transition' />

                <div className='w-[2px] h-6 bg-violet-500/30 mb-3' />

                <Card.Root className='w-full'>
                  <div className='relative z-10 flex items-center justify-between mb-4'>
                    <span className='text-[10px] uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2 py-1 rounded-md'>
                      {cert.platform}
                    </span>

                    <span className='text-[10px] text-muted'>{cert.date}</span>
                  </div>

                  <Card.Title className='text-lg leading-snug'>{cert.title}</Card.Title>

                  <Card.Divider />

                  <div className='relative z-10 flex items-center justify-between'>
                    <span className='text-xs text-secondary'>Certificado</span>

                    <button className='group/button pt-1 pb-0.5 px-2 inline-flex items-center gap-1 text-xs text-violet-400 transition-all hover:text-violet-300'>
                      Ver
                      <FaArrowRight className='transition group-hover/button:translate-x-1' />
                    </button>
                  </div>
                </Card.Root>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About

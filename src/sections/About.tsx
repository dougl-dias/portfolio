import { HiOutlineCode, HiOutlineLightBulb } from 'react-icons/hi'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'

import TitleSection from '../components/layouts/TitleSection'
import Section from '../components/layouts/Section'

const About = () => {
  return (
    <Section id='about'>
      <div className='py-20 px-4 border border-zinc-800/25 rounded-3xl shadow-[0_0_72px_rgba(147,51,234,0.15)]'>
        <div className='max-w-7xl mx-auto'>
          <TitleSection
            title='Um pouco'
            highlight='sobre mim'
            description='Desenvolvedor focado em criar aplicações modernas, escaláveis e com excelente experiência de usuário.'
          />

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 text-primary leading-relaxed'>
              <p>
                Sou desenvolvedor full stack com foco em criar soluções digitais eficientes, escaláveis e bem
                estruturadas. Tenho experiência tanto no frontend quanto no backend, construindo aplicações completas do
                zero.
              </p>

              <p>
                Trabalho principalmente com tecnologias modernas como React, TypeScript e Node.js, sempre buscando
                escrever código limpo, reutilizável e de fácil manutenção.
              </p>

              <p>
                Meu objetivo é desenvolver sistemas que não apenas funcionem bem, mas que também entreguem uma
                experiência intuitiva e agradável para o usuário final.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 gap-6'>
              <div className='group relative p-6 rounded-xl bg-card/60 border border-default backdrop-blur overflow-hidden transition hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.4)]'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition'>
                  <div className='absolute -inset-1 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 blur-xl' />
                </div>

                <div className='relative z-10'>
                  <HiOutlineCode className='text-3xl text-violet-400 mb-4' />

                  <h3 className='text-primary font-semibold mb-2'>Código limpo</h3>

                  <p className='text-sm text-zinc-400'>
                    Estruturas bem organizadas, foco em legibilidade e manutenção a longo prazo.
                  </p>
                </div>
              </div>

              <div className='group relative p-6 rounded-xl bg-card/60 border border-default backdrop-blur overflow-hidden transition hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.4)]'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition'>
                  <div className='absolute -inset-1 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 blur-xl' />
                </div>

                <div className='relative z-10'>
                  <HiOutlineLightBulb className='text-3xl text-violet-400 mb-4' />

                  <h3 className='text-primary font-semibold mb-2'>Solução de problemas</h3>

                  <p className='text-sm text-zinc-400'>
                    Capacidade de analisar cenários e criar soluções eficientes e escaláveis.
                  </p>
                </div>
              </div>

              <div className='group relative p-6 rounded-xl bg-card/60 border border-default backdrop-blur overflow-hidden transition hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.4)] sm:col-span-2'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition'>
                  <div className='absolute -inset-1 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 blur-xl' />
                </div>

                <div className='relative z-10'>
                  <HiOutlineRocketLaunch className='text-3xl text-violet-400 mb-4' />

                  <h3 className='text-primary font-semibold mb-2'>Foco em performance</h3>

                  <p className='text-sm text-zinc-400'>
                    Aplicações rápidas, otimizadas e preparadas para crescer sem perder qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About

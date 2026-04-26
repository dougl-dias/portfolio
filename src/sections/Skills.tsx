import Section from '../components/layouts/Section'
import TitleSection from '../components/layouts/TitleSection'
import Divider from '../components/ui/Divider'

import { skills } from '../constants/skills'

const Skills = () => {
  return (
    <Section id='skills'>
      <Divider animated />

      <TitleSection
        title='Habilidades'
        highlight='técnicas'
        description='Tecnologias e ferramentas que utilizo para construir aplicações modernas, escaláveis e com excelente experiência de usuário.'
      />

      <div className='w-full overflow-hidden p-10 space-y-12 mask'>
        <div className='flex gap-6 w-max marquee'>
          {[...skills, ...skills].map(({ skill, icon: Icon }, index) => (
            <div key={index} className='max-w-44 min-w-44 flex-shrink-0'>
              <div className='group relative py-8 px-6 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-zinc-800 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.5)]'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='p-3 rounded-xl bg-zinc-800 group-hover:bg-violet-500/10 transition'>
                    <Icon className='text-4xl text-violet-400 group-hover:scale-110 transition' />
                  </div>

                  <h3 className='text-base font-semibold text-zinc-100 text-center'>{skill}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Skills

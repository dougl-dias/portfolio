import { useState } from 'react'

import Section from '../components/layouts/Section'
import TitleSection from '../components/layouts/TitleSection'

import { tabs } from '../constants/skills'

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]

  return (
    <Section id='skills'>
      <TitleSection
        title='Habilidades'
        highlight='técnicas'
        description='Tecnologias e ferramentas que utilizo para construir aplicações modernas, escaláveis e com excelente experiência de usuário.'
      />

      <div className='flex justify-center mb-12'>
        <div className='flex gap-2 p-1 rounded-xl bg-zinc-900 border border-zinc-800'>
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`
                    px-4 py-2 text-sm rounded-lg transition-all duration-200 relative
                    ${activeTab === index ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}
                  `}
            >
              {activeTab === index && (
                <span className='absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 opacity-20' />
              )}
              <span className='relative z-10'>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className='space-y-12'>
        {current.groups.map((group, gIndex) => (
          <div key={gIndex}>
            <h3 className='text-xs uppercase tracking-wider text-zinc-500 mb-6 text-center'>{group.title}</h3>

            <div className='flex justify-center'>
              <div className='grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-6 w-full max-w-5xl'>
                {group.items.map((skill, i) => {
                  const Icon = skill.icon

                  return (
                    <div
                      key={i}
                      tabIndex={0}
                      className='group relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.5)] focus:outline-none focus:ring-2 focus:ring-violet-500/40'
                    >
                      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 blur-xl' />
                      </div>

                      <div className='relative z-10'>
                        <div className='flex items-center justify-between mb-4'>
                          <div className='flex items-center gap-3'>
                            <div className='p-3 rounded-xl bg-zinc-800 group-hover:bg-violet-500/10 transition'>
                              <Icon className='text-2xl text-violet-400 group-hover:scale-110 transition' />
                            </div>

                            <h3 className='text-base font-semibold text-zinc-100'>{skill.name}</h3>
                          </div>

                          <span
                            className={`
                                  text-[10px] px-2 py-1 rounded-md
                                  ${
                                    skill.level === 'Avançado'
                                      ? 'bg-violet-500/10 text-violet-400'
                                      : 'bg-zinc-800 text-zinc-400'
                                  }
                                `}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <p className='text-sm text-zinc-400 leading-relaxed'>{skill.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills

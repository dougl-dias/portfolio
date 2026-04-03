import Section from '../components/layouts/Section'
import TitleSection from '../components/layouts/TitleSection'

import Button from '../components/ui/Button'

import { projects } from '../data/projects'

const Projects = () => {
  return (
    <Section id='projects'>
      <div className='absolute -top-32 w-full h-32 bg-gradient-to-t from-body'></div>

      <div className='max-w-7xl mx-auto py-20 px-4'>
        <TitleSection
          title='Projetos'
          highlight='em destaque'
          description='Alguns projetos que desenvolvi com foco em performance, escalabilidade e experiência do usuário.'
        />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-zinc-800 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.5)]'
            >
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition'>
                <div className='absolute -inset-1 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 blur-xl' />
              </div>

              <div className='relative z-10 flex flex-col h-full'>
                <div>
                  <h3 className='text-xl font-semibold text-zinc-100 mb-3'>{project.title}</h3>

                  <p className='text-sm text-zinc-400 leading-relaxed mb-6'>{project.description}</p>
                </div>

                <div className='flex flex-wrap gap-3 mb-6'>
                  {project.techs.map((Icon, i) => (
                    <div key={i} className='p-2 rounded-lg bg-zinc-800 group-hover:bg-violet-500/10 transition'>
                      <Icon className='text-lg text-violet-400 group-hover:scale-110 transition' />
                    </div>
                  ))}
                </div>

                <div className='flex gap-3 mt-auto'>
                  <Button size='sm' className='flex-1'>
                    Demo
                  </Button>

                  <Button variant='outline' size='sm' className='flex-1'>
                    Código
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects

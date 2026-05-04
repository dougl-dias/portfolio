import Section from '../components/layouts/Section'
import TitleSection from '../components/layouts/TitleSection'

import { Button, ButtonLink } from '../components/ui/Button'
import Card from '../components/ui/Card'
import Divider from '../components/ui/Divider'

import { projects } from '../constants/projects'

const Projects = () => {
  const handleShowProjects = () => {
    alert('meus projetos')
  }
  return (
    <Section id='projects'>
      <div className='absolute -top-80 left-0 z-10 w-full h-80 bg-gradient-to-t from-base'></div>

      <TitleSection
        title='Projetos'
        highlight='em destaque'
        description='Projetos que desenvolvi com foco em performance, escalabilidade e experiência do usuário.'
      />

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20'>
        {projects.map(({ title, description, techs, codeUrl, demoUrl }) => (
          <Card.Root key={title}>
            <Card.Title>{title}</Card.Title>
            <Card.Description>{description}</Card.Description>

            <div className='flex flex-wrap gap-2'>
              {techs.map((Icon, i) => (
                <Card.Icon key={i} size='sm' icon={Icon}></Card.Icon>
              ))}
            </div>

            <Card.Actions>
              <ButtonLink href={demoUrl} target='_blank' rel='noopener noreferrer' className='flex-1'>
                Demo
              </ButtonLink>
              <ButtonLink href={codeUrl} target='_blank' rel='noopener noreferrer' className='flex-1'>
                Código
              </ButtonLink>
            </Card.Actions>
          </Card.Root>
        ))}
      </div>

      <Divider>
        <Button className='text-nowrap' onClick={handleShowProjects}>
          Ver mais projetos
        </Button>
      </Divider>
    </Section>
  )
}

export default Projects

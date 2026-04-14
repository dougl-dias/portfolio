import Section from '../components/layouts/Section'
import TitleSection from '../components/layouts/TitleSection'

import Card from '../components/ui/Card'
import Divider from '../components/ui/Divider'

import { projects } from '../constants/projects'

const Projects = () => {
  return (
    <Section id='projects'>
      <Divider animated />

      <TitleSection
        title='Projetos'
        highlight='em destaque'
        description='Alguns projetos que desenvolvi com foco em performance, escalabilidade e experiência do usuário.'
      />

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(({ title, description, techs }, index) => (
          <Card.Root key={index}>
            <Card.Title>{title}</Card.Title>
            <Card.Description>{description}</Card.Description>

            <div className='flex flex-wrap gap-2'>
              {techs.map((Icon, i) => (
                <Card.Icon key={i} size='sm' icon={Icon}></Card.Icon>
              ))}
            </div>

            <Card.Actions>
              <Card.Action>Demo</Card.Action>
              <Card.Action>Código</Card.Action>
            </Card.Actions>
          </Card.Root>
        ))}
      </div>
    </Section>
  )
}

export default Projects

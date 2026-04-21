import Section from '../components/layouts/Section'
import TitleSection from '../components/layouts/TitleSection'

import Card from '../components/ui/Card'

import { services } from '../constants/services'

const Services = () => {
  return (
    <Section id='services'>
      <TitleSection
        title='Meus'
        highlight='Serviços'
        description='Soluções completas para ajudar sua empresa a crescer no digital com tecnologia e estratégia.'
      />

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map(({ title, description, icon }, index) => (
          <Card.Root key={index}>
            <Card.Icon icon={icon} />
            <Card.Title>{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
          </Card.Root>
        ))}
      </div>
    </Section>
  )
}

export default Services

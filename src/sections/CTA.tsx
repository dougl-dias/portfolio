import Section from '../components/layouts/Section'
import Button from '../components/ui/Button'

const CTA = () => {
  return (
    <Section id='cta'>
      <div className='relative rounded-3xl p-10 text-center bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 border border-violet-500/20 overflow-hidden'>
        <div className='absolute inset-0 opacity-50'>
          <div className='absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-transparent to-violet-500/20 blur-2xl' />
        </div>

        <div className='relative z-10'>
          <h2 className='text-2xl md:text-4xl font-bold text-primary mb-4'>Vamos tirar sua ideia do papel?</h2>

          <p className='text-zinc-400 mb-8 max-w-2xl mx-auto'>
            Desenvolvo sistemas modernos, rápidos e escaláveis para ajudar seu negócio a crescer no digital.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg'>Falar comigo</Button>

            <Button variant='outline' size='lg'>
              Ver projetos
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CTA

import { GrGithub, GrLinkedinOption, GrSend } from 'react-icons/gr'
import { BiSolidEnvelope, BiSolidPhone, BiSolidUser } from 'react-icons/bi'

import Section from '../components/layouts/Section'
import TitleSection from '../components/layouts/TitleSection'

import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

const Contact = () => {
  return (
    <Section id='contact'>
      <TitleSection
        title='Vamos'
        highlight='trabalhar juntos'
        description='Tem um projeto em mente ou precisa de uma solução? Entre em contato e vamos conversar.'
      />

      <div className='grid md:grid-cols-5 gap-10'>
        <div className='space-y-6 order-2 md:order-1 md:col-span-2'>
          <div className='p-6 rounded-xl bg-card/60 border border-default backdrop-blur'>
            <h3 className='text-primary font-semibold mb-4'>Informações de contato</h3>

            <div className='space-y-4 text-sm text-zinc-400'>
              <div className='flex items-center gap-3'>
                <BiSolidEnvelope className='text-violet-400 text-lg' />
                douglas18.76.80@email.com
              </div>

              <div className='flex items-center gap-3'>
                <BiSolidPhone className='text-violet-400 text-lg' />
                (11) 97615-3758
              </div>
            </div>
          </div>

          <div className='p-6 rounded-xl bg-card/60 border border-default backdrop-blur'>
            <h3 className='text-primary font-semibold mb-4'>Redes</h3>

            <div className='flex flex-col gap-3'>
              <Button
                variant='outline'
                color='info'
                icon={GrLinkedinOption}
                onClick={() => window.open('https://www.linkedin.com/in/dougl-dias/', '_blank', 'noopener,noreferrer')}
              >
                LinkedIn
              </Button>

              <Button
                variant='outline'
                color='white'
                icon={GrGithub}
                onClick={() => window.open('https://github.com/dougl-dias/', '_blank', 'noopener,noreferrer')}
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>

        <div className='p-8 rounded-xl bg-card/60 border border-default backdrop-blur overflow-hidden order-1 sm:order-2 md:col-span-3'>
          <h3 className='text-primary text-xl font-semibold mb-6'>Envie uma mensagem</h3>

          <form>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-full'>
                <Input.Root>
                  <Input.Label>Nome completo</Input.Label>
                  <Input.Field>
                    <Input.Icon icon={BiSolidUser} />
                    <Input.Control placeholder='Digite seu nome' autoComplete='name' />
                  </Input.Field>
                </Input.Root>
              </div>

              <div className='col-span-full lg:col-span-2'>
                <Input.Root>
                  <Input.Label>E-mail</Input.Label>
                  <Input.Field>
                    <Input.Icon icon={BiSolidEnvelope} />
                    <Input.Control placeholder='Digite seu e-mail' autoComplete='email' />
                  </Input.Field>
                </Input.Root>
              </div>

              <div className='col-span-full lg:col-span-1'>
                <Input.Root>
                  <Input.Label>Telefone</Input.Label>
                  <Input.Field>
                    <Input.Icon icon={BiSolidPhone} />
                    <Input.MaskedControl mask='(00) 00000-0000' placeholder='(00) 00000-0000' />
                  </Input.Field>
                </Input.Root>
              </div>

              <div className='col-span-full'>
                <Input.Root>
                  <Input.Label>Mensagem</Input.Label>
                  <Input.Field>
                    <Input.Textarea rows={5} placeholder='Escreva sua mensagem...' autoComplete='off' />
                  </Input.Field>
                </Input.Root>
              </div>

              <Button className='col-span-full mt-2' color='primary' icon={GrSend}>
                Enviar mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}

export default Contact

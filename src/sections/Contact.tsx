import { GrGithub, GrLinkedinOption, GrSend } from 'react-icons/gr'

import { BiSolidEnvelope, BiSolidPhone, BiSolidUser } from 'react-icons/bi'

import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Divider from '../components/ui/Divider'

const Contact = () => {
  return (
    <section className='min-h-screen flex items-center justify-center' id='contact'>
      <div className='flex flex-col items-center'>
        <div className='max-w-2xl bg-card border border-default rounded-lg py-8 px-6'>
          <h3 className='text-3xl font-bold text-center text-indigo-500 mb-4'>Entre em contato</h3>

          <p className='text-sm font-semibold text-secondary text-center leading-relaxed md:text-base'>
            Lorem ipsum dolor sit amet consectetur, adipisicing. Nobis porro saepe totam soluta minus architecto sint
            minima quasi
          </p>

          <form>
            <div className='grid grid-cols-3 gap-4 py-4'>
              <div className='col-span-full'>
                <Input.Root>
                  <Input.Label label='Nome completo' />
                  <Input.Field>
                    <Input.Icon icon={BiSolidUser} />
                    <Input.Control placeholder='Digite seu nome' />
                  </Input.Field>
                </Input.Root>
              </div>

              <div className='col-span-full sm:col-span-2'>
                <Input.Root>
                  <Input.Label label='E-mail' />
                  <Input.Field>
                    <Input.Icon icon={BiSolidEnvelope} />
                    <Input.Control placeholder='Digite seu e-mail' />
                  </Input.Field>
                </Input.Root>
              </div>

              <div className='col-span-full sm:col-span-1'>
                <Input.Root>
                  <Input.Label label='Telefone' />
                  <Input.Field>
                    <Input.Icon icon={BiSolidPhone} />
                    <Input.Control placeholder='(00) 00000-00000' />
                  </Input.Field>
                </Input.Root>
              </div>

              <div className='col-span-full mb-2'>
                <Input.Root>
                  <Input.Label label='Mensagem' />
                  <Input.Field>
                    <Input.Textarea rows={5} placeholder='Escreva sua a mensagem...' />
                  </Input.Field>
                </Input.Root>
              </div>

              <Button className='col-span-full' color='primary' icon={GrSend}>
                Enviar
              </Button>
            </div>
          </form>

          <Divider label='Redes sociais' />

          <div className='flex flex-wrap gap-3 py-4'>
            <Button className='w-full' variant='outline' color='info' icon={GrLinkedinOption}>
              <a href='https://www.linkedin.com/in/dougl-dias/' target='_blank'>
                Linked-In
              </a>
            </Button>
            <Button className='w-full' variant='outline' color='white' icon={GrGithub}>
              <a href='https://github.com/dougl-dias/' target='_blank'>
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

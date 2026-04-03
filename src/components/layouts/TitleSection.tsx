interface TitleSectionProps {
  title: string
  highlight: string
  description?: string
}

const TitleSection = ({ title, highlight, description }: TitleSectionProps) => {
  return (
    <div className='flex flex-col items-center text-center mb-20'>
      <h2 className='text-primary text-3xl md:text-5xl font-bold mt-6 mb-4'>
        {title} <span className='text-violet-500'>{highlight}</span>
      </h2>

      {description && <p className='text-secondary max-w-2xl'>{description}</p>}
    </div>
  )
}

export default TitleSection

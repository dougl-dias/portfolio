import Button from '../Button'

interface CardActionProps {
  onClick: () => void
}

const CardActions = ({ onClick }: CardActionProps) => {
  return <Button onClick={onClick}></Button>
}

export default CardActions

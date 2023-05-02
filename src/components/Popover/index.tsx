import { CardBody, CardHead, PopoverContainer } from './styles'

interface PopoverProps {
  title: string
  ingredients: string[]
}

export const Popover = ({ title, ingredients }: PopoverProps) => {
  return (
    <PopoverContainer>
      <div>
        <p>Adicionado com Sucesso</p>
      </div>
      <CardHead>
        <p>{title}</p>
      </CardHead>
      <CardBody>
        <p>Ingredients:</p>
        <ul>
          {ingredients.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </CardBody>
    </PopoverContainer>
  )
}

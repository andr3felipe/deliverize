import { useContext } from 'react'
import { CardBody, CardHead, PopoverContainer } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

interface PopoverProps {
  title: string
  ingredients: string[]
  variant?: boolean
}

export const Popover = ({ title, ingredients }: PopoverProps) => {
  const { showPopover } = useContext(CyclesContext)

  console.log(showPopover)

  return (
    <PopoverContainer variant={showPopover}>
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

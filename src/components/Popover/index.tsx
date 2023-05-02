import { useContext } from 'react'
import { CardBody, CardHead, PopoverContainer, Signal } from './styles'
import { CyclesContext, Item } from '../../contexts/CyclesContext'

interface PopoverProps {
  title: string
  ingredients: Item[]
  count: number
  cutlery: boolean
}

export const Popover = ({
  title,
  ingredients,
  count,
  cutlery,
}: PopoverProps) => {
  const { showPopover } = useContext(CyclesContext)

  console.log('render')

  return (
    <PopoverContainer variant={showPopover}>
      <div>
        <Signal></Signal>
        <p>Adicionado com Sucesso</p>
      </div>
      <CardHead>
        <p>{`${count}x ${title}`}</p>
      </CardHead>
      <CardBody>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <ul>
          <li>1 Carne 250gr</li>
          {ingredients?.map((item) => {
            return <li key={item.id}>{`${item.count}x ${item.nm_item}`}</li>
          })}
          <li>Molho Especial</li>
        </ul>
        <p>{cutlery === true ? 'Talher: Sim.' : 'Talher: Não.'}</p>
      </CardBody>
    </PopoverContainer>
  )
}

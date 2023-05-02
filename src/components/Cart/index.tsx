import { Drawer } from '@mui/material'
import { Box } from '@mui/system'
import { CyclesContext } from '../../contexts/CyclesContext'
import { useContext, ReactNode } from 'react'
import { CartItems } from '../CartItems'

interface MenuProps {
  children?: ReactNode
}

export const Cart = ({ children }: MenuProps) => {
  const { isCartOpen, toggleCart, cart } = useContext(CyclesContext)

  console.log(cart)

  return (
    <>
      <Drawer
        open={isCartOpen}
        anchor="right"
        variant="temporary"
        onClose={toggleCart}
      >
        <Box
          display="flex"
          height="100%"
          min-width="100%"
          flexDirection="column"
        >
          {cart.map((item) => {
            return (
              <CartItems
                key={item.id}
                id={item.id}
                title={item.title}
                count={item.count}
                cutlery={item.cutlery}
                total={item.total}
                ingredients={item.ingredients}
                variant={cart[0].id === item.id ? 'first' : 'mid'}
              />
            )
          })}
        </Box>
      </Drawer>
      <Box>{children}</Box>
    </>
  )
}

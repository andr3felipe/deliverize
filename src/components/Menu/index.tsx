import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import { Box } from '@mui/system'
import { SearchInput } from '../SearchInput'
import {
  HomeOutlined,
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import { CyclesContext } from '../../contexts/CyclesContext'
import { useContext, ReactNode } from 'react'
import { CartCount } from './styles'

interface MenuProps {
  children?: ReactNode
}

export const Menu = ({ children }: MenuProps) => {
  const { isMenuOpen, toggleMenu, toggleCart, cart } = useContext(CyclesContext)

  return (
    <>
      <Drawer open={isMenuOpen} variant="temporary" onClose={toggleMenu}>
        <Box display="flex" flexDirection="column">
          <List
            component="nav"
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ListItemButton onClick={toggleMenu}>
              <ListItemIcon>
                <HomeOutlined sx={{ fontSize: 30, color: '#ED3237' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ color: '#ED3237', marginLeft: '-15px' }}
                primary="Página inicial"
              />
            </ListItemButton>
            <Divider
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px',
                borderRadius: '20px',
              }}
            />
            <ListItemButton onClick={toggleMenu}>
              <ListItemIcon>
                <AccountCircleOutlined
                  sx={{ fontSize: 30, color: '#ED3237' }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{ color: '#ED3237', marginLeft: '-15px' }}
                primary="Entrar"
              />
            </ListItemButton>
            <Divider
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px',
                borderRadius: '20px',
              }}
            />
            <ListItemButton
              onClick={() => {
                toggleCart()
                toggleMenu()
              }}
            >
              <ListItemIcon>
                <ShoppingCartOutlined sx={{ fontSize: 30, color: '#ED3237' }} />
                {cart.length > 0 ? <CartCount>{cart.length}</CartCount> : null}
              </ListItemIcon>
              <ListItemText
                sx={{ color: '#ED3237', marginLeft: '-15px' }}
                primary="Carrinho"
              />
            </ListItemButton>
            <Divider
              sx={{
                marginBottom: 2,
                boxShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px',
                borderRadius: '20px',
              }}
            />
            <SearchInput variant="inputMobile" />
          </List>
        </Box>
      </Drawer>
      <Box>{children}</Box>
    </>
  )
}

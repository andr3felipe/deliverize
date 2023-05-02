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
import { useContext } from 'react'

export function Menu({ children }) {
  const { isMenuOpen, toggleMenu } = useContext(CyclesContext)

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
            <ListItemButton>
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
            <ListItemButton>
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
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartOutlined sx={{ fontSize: 30, color: '#ED3237' }} />
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
            <SearchInput />
          </List>
        </Box>
      </Drawer>
      <Box>{children}</Box>
    </>
  )
}

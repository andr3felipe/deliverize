import {
  Drawer,
  useTheme,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
} from '@mui/material'
import { Box } from '@mui/system'
import { SearchInput } from '../SearchInput'
import {
  HomeOutlined,
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'

export function SideMenu({ children }) {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down(800))

  return (
    <>
      <Drawer open={false} variant="temporary">
        <Box display="flex" flexDirection="column">
          <List
            component="nav"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              paddingLeft: '4px',
              paddingRight: '4px',
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlined sx={{ fontSize: 35, color: '#ED3237' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ color: '#ED3237' }}
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
                  sx={{ fontSize: 35, color: '#ED3237' }}
                />
              </ListItemIcon>
              <ListItemText sx={{ color: '#ED3237' }} primary="Entrar" />
            </ListItemButton>
            <Divider
              sx={{
                boxShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px',
                borderRadius: '20px',
              }}
            />
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartOutlined sx={{ fontSize: 35, color: '#ED3237' }} />
              </ListItemIcon>
              <ListItemText sx={{ color: '#ED3237' }} primary="Carrinho" />
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

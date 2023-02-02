import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import { Container } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 28,
  backgroundColor: '#E5E5E5',
  '&:hover': {
    backgroundColor: alpha('#E5E5E5', 0.8),
  },
  marginLeft: theme.spacing(1.5),
  width: '100%',
  height: 40,
  marginRight: theme.spacing(1.5),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontFamily: 'IranSans',
  fontWeight: 700,
  fontSize: '16px',
  color: '#1F1F1F',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const pages = [
  { name: 'لیگ ها', href: '/leagues' },
  { name: 'قوانین', href: '/rules' },
  { name: 'درباره ما', href: '/about' },
  { name: 'تماس با ما', href: '/contact' },
  { name: 'ثبت نام', href: '/signup' },
  { name: 'ورود', href: '/login' },
];

const StyledButton = styled(Button)(() => ({
  borderRadius: '28px',
  padding: 10,
  '&:hover': {
    backgroundColor: '#272727',
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: 'IranSans',
  },
});

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1F1F1F' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ height: 100, width: '90%', margin: 'auto' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu of the pages"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-navbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ justifyContent: 'center' }}
                  >
                    <ThemeProvider theme={theme}>
                      <Link href={page.href}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </Link>
                    </ThemeProvider>
                  </MenuItem>
                ))}
                <MenuItem
                  key={'lang'}
                  onClick={handleCloseNavMenu}
                  sx={{ justifyContent: 'center', gap: 2 }}
                >
                  <ThemeProvider theme={theme}>
                    <Image src="/lang.png" alt="lang" width={24} height={14} />
                    <Typography textAlign="center">فارسی</Typography>
                  </ThemeProvider>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-evenly',
              }}
            >
              <StyledButton
                key={'lang'}
                sx={{
                  fontFamily: 'IranSans',
                  color: '#E5E5E5',
                  display: 'flex',
                  gap: 2,
                }}
              >
                <Image src="/lang.png" alt="lang" width={24} height={14} />
                <span>فارسی</span>
              </StyledButton>
              {pages.map((page) => (
                <StyledButton
                  key={page.name}
                  sx={{
                    fontFamily: 'IranSans',
                    color: '#E5E5E5',
                  }}
                >
                  <Link href={page.href}>{page.name}</Link>
                </StyledButton>
              ))}
            </Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: '#1F1F1F' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={`...جستجو`}
                inputProps={{
                  'aria-label': 'search',
                  style: { textAlign: 'right' },
                }}
              />
            </Search>
            <Image src="/logo.png" alt="logo" width={55.84} height={52.96} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

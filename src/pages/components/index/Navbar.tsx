import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { IndexProps } from '@/pages/types/IndexProps';
import { LangContext } from '@/pages/contexts';

const pages = [
  { name: 'درباره ما', href: '/about' },
  { name: 'تماس با ما', href: '/contact' },
  { name: 'لیگ ها', href: '/leagues' },
  { name: 'اخبار', href: '/rules' },
  { name: 'ثبت نام / ورود', href: '/auth' },
];

const StyledButton = styled(Button)(() => ({
  borderRadius: '28px',
  padding: 10,
  '&:hover': {
    backgroundColor: '#d1d1d1',
  },
}));

const LangButtons = styled(Box)(() => ({
  minWidth: 92,
  maxHeight: 31,
  borderRadius: '7px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  fontWeight: 700,
  '&:hover': {
    cursor: 'pointer',
  },
}));

export default function Navbar({ setLang }: IndexProps) {
  const lang = useContext(LangContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: '#fff', boxShadow: 'none' }}
      >
        <Container maxWidth="xl" sx={{ color: '#000', marginTop: 5 }}>
          <Toolbar
            sx={{
              height: 100,
              width: '90%',
              margin: 'auto',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)',
              borderRadius: '17px',
            }}
          >
            <LangButtons sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Box
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '4px 0',
                  backgroundColor: lang === 'fa' ? '#fff' : '#D9D9D9',
                  borderRadius: '7px 0 0 7px',
                }}
                onClick={() => setLang('en')}
              >
                EN
              </Box>
              <Box
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  backgroundColor: lang === 'fa' ? '#D9D9D9' : '#fff',
                  padding: '4px 0',
                  borderRadius: '0 7px 7px 0',
                }}
                onClick={() => setLang('fa')}
              >
                فا
              </Box>
            </LangButtons>
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
                    <Link href={page.href}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <StyledButton
                  key={page.name}
                  sx={{
                    color: 'inherit',
                    fontWeight: 700,
                  }}
                >
                  <Link href={page.href}>{page.name}</Link>
                </StyledButton>
              ))}
            </Box>

            <Image
              src="/logo.png"
              alt="logo"
              width={63.82}
              height={60.53}
              unoptimized
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

/**
 * import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { IndexProps } from '@/pages/types/IndexProps';
import { LangContext } from '@/pages/contexts';

const pages = [
  { name: 'درباره ما', href: '/about' },
  { name: 'تماس با ما', href: '/contact' },
  { name: 'لیگ ها', href: '/leagues' },
  { name: 'اخبار', href: '/rules' },
  { name: 'ثبت نام / ورود', href: '/auth' },
];

const StyledButton = styled(Button)(() => ({
  borderRadius: '28px',
  padding: 10,
  '&:hover': {
    backgroundColor: '#d1d1d1',
  },
}));

const LangButtons = styled(Box)(() => ({
  minWidth: 92,
  maxHeight: 31,
  borderRadius: '7px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  fontWeight: 700,
  '&:hover': {
    cursor: 'pointer',
  },
}));

export default function Navbar({ setLang }: IndexProps) {
  const lang = useContext(LangContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#fff' }}>
        <Container maxWidth="xl" sx={{ color: '#000' }}>
          <Toolbar
            sx={{
              height: 100,
              margin: 'auto',
            }}
          >
            <LangButtons sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Box
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '4px 0',
                  backgroundColor: lang === 'fa' ? '#fff' : '#D9D9D9',
                  borderRadius: '7px 0 0 7px',
                }}
                onClick={() => setLang('en')}
              >
                EN
              </Box>
              <Box
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  backgroundColor: lang === 'fa' ? '#D9D9D9' : '#fff',
                  padding: '4px 0',
                  borderRadius: '0 7px 7px 0',
                }}
                onClick={() => setLang('fa')}
              >
                فا
              </Box>
            </LangButtons>
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
                    <Link href={page.href}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <StyledButton
                  key={page.name}
                  sx={{
                    color: 'inherit',
                    fontWeight: 700,
                  }}
                >
                  <Link href={page.href}>{page.name}</Link>
                </StyledButton>
              ))}
            </Box>

            <Image
              src="/logo.png"
              alt="logo"
              width={63.82}
              height={60.53}
              unoptimized
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
 */

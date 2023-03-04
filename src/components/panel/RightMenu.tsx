import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuItem, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.caption = {
  fontSize: '0.75rem',
  '@media (min-width:600px)': {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
};

const RightMenuFooter = () => <Box>footer</Box>;

interface ItemMenuProps {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  children: JSX.Element | JSX.Element[];
  enable?: boolean;
}

const ItemMenu = ({ children, enable, onClick }: ItemMenuProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: { xs: '50vw', md: '95%' },
        paddingRight: 2,
        backgroundColor: enable ? '#fff' : '#D9D9D9',
        height: { xs: '4vh', md: 49 },
        borderRadius: '17px',
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: { xs: 1, md: 3 },
        transition: '.2s all ease-in-out',
        '&:hover': {
          cursor: enable ? 'default' : 'pointer',
          boxShadow: enable ? 'none' : '0px 0px 8px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {children}
    </Box>
  );
};

const ItemMenuMobile = ({ children, onClick }: ItemMenuProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: '100%',
        height: { xs: '4vh', md: 49 },
        borderRadius: '17px',
        backgroundColor: '#D9D9D9',
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 1, md: 3 },
        transition: '.2s all ease-in-out',
        '&:hover': {
          cursor: 'pointer',
          boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {children}
    </Box>
  );
};

type MenuItem = {
  icon: JSX.Element;
  text: string;
};

type Anchor = 'right';

const menuItemDetails: MenuItem[] = [
  {
    icon: (
      <HomeIcon
        sx={{ color: '#646464', fontSize: { xs: '1.2rem', md: '1.5rem' } }}
      />
    ),
    text: 'صفحه اصلی پنل',
  },
  {
    icon: (
      <InsertInvitationIcon
        sx={{ color: '#646464', fontSize: { xs: '1.2rem', md: '1.5rem' } }}
      />
    ),
    text: 'رویداد ها و مسابقات',
  },
  {
    icon: (
      <SchoolOutlinedIcon
        sx={{ color: '#646464', fontSize: { xs: '1.2rem', md: '1.5rem' } }}
      />
    ),
    text: 'دوره های آموزشی',
  },
  {
    icon: (
      <MenuBookIcon
        sx={{ color: '#646464', fontSize: { xs: '1.2rem', md: '1.5rem' } }}
      />
    ),
    text: 'ثبت‌نام دوره جدید مسابقات',
  },
  {
    icon: (
      <InsertChartOutlinedTwoToneIcon
        sx={{ color: '#646464', fontSize: { xs: '1.2rem', md: '1.5rem' } }}
      />
    ),
    text: 'اعلام نتایج مسابقات',
  },
  {
    icon: (
      <BadgeOutlinedIcon
        key={5}
        sx={{ color: '#646464', fontSize: { xs: '1.2rem', md: '1.5rem' } }}
      />
    ),
    text: 'گواهی ها و تاییدیه ها',
  },
];

const anchor: Anchor = 'right';

export default function RightMenu() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const [menuId, setMenuId] = useState<number>(0);
  const [enable, setEnable] = useState<number>(3);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: { xs: 2, md: 4 },
          }}
        >
          <Stack sx={{ width: '80%', gap: 2 }}>
            <ItemMenuMobile onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </ItemMenuMobile>
            <Drawer
              anchor="right"
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
              >
                <List sx={{ direction: 'rtl' }}>
                  {menuItemDetails.map((item: MenuItem, _index) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            fontFamily: 'IRANYekanX',
                            fontSize: '0.85rem',
                            align: 'right',
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            {menuItemDetails.map((item: MenuItem, _index: number) => (
              <React.Fragment key={_index}>
                <ItemMenu
                  onClick={() => {
                    setEnable(_index);
                  }}
                  enable={_index === enable}
                >
                  {item.icon}
                  <Typography variant="caption" sx={{ color: '#646464' }}>
                    {item.text}
                  </Typography>
                </ItemMenu>
              </React.Fragment>
            ))}
          </Stack>
          <RightMenuFooter />
        </Box>
      </ThemeProvider>
    </>
  );
}

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const topNavbarTheme = createTheme();

topNavbarTheme.typography.caption = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [topNavbarTheme.breakpoints.up('sm')]: {
    fontSize: '1.875rem',
  },
};

export default function PanelNavbar() {
  return (
    <>
      <ThemeProvider theme={topNavbarTheme}>
        <Stack
          direction="row"
          sx={{
            width: '100%',
            height: '10vh',
            paddingRight: 2.5,
            paddingLeft: 2.5,
            gap: { xs: 1, md: 3 },
          }}
        >
          <Box
            sx={{
              flex: { xs: 3, md: 4 },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
            alignItems="center"
            display="flex"
          >
            <Box
              sx={{
                width: { xs: 41.06, md: 102.65 },
                height: { xs: 25.6, md: 64 },
                position: 'relative',
              }}
            >
              <Image src="/footer-logo.png" fill alt="logo" />
            </Box>
          </Box>
          <Box flex={10} alignItems="center" display="flex">
            <Typography variant="caption" marginRight={3}>
              آیریک عزیز، خوش آمدید
            </Typography>
          </Box>
          <Box
            flex={1}
            alignItems="center"
            justifyContent="flex-end"
            display="flex"
          >
            <Avatar
              src="/avatar.jfif"
              sx={{
                display: { xs: 'none', sm: 'block' },
                width: 64,
                height: 64,
                border: '5px solid #F7BF2C',
              }}
            ></Avatar>
            <Avatar
              src="/avatar.jfif"
              sx={{
                display: { xs: 'block', sm: 'none' },
                width: 56,
                height: 56,
                border: '5px solid #F7BF2C',
              }}
            ></Avatar>
          </Box>
        </Stack>
      </ThemeProvider>
    </>
  );
}

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
            gap: { xs: 2, md: 3 },
          }}
        >
          <Box flex={4} alignItems="center" display="flex">
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Image
                src="/footer-logo.png"
                width={102.65}
                height={64}
                alt="logo"
              />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Image
                src="/footer-logo.png"
                width={85}
                height={52.99}
                alt="logo"
              />
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

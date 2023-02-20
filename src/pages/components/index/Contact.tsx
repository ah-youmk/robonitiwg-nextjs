import {
  Box,
  Container,
  Typography,
  TextField,
  styled,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
  typography: {
    fontFamily: 'IRANYekanX',
  },
  direction: 'rtl',
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

const CustomTextField = styled(TextField)(() => ({
  '& .MuiFormLabel-root': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
}));

export default function Contact() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          width: '90%',
          height: '70vh',
          alignItems: 'center',
          marginTop: 3,
          gap: 5,
        }}
        disableGutters
      >
        <Box
          sx={{
            flex: 1,
            height: '60vh',
            backgroundColor: '#3D73ED',
            borderRadius: '33px',
            backgroundImage: `url('/robot.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '400px 500px',
          }}
        ></Box>
        <Box
          sx={{
            flex: 3,
            height: '60vh',
            backgroundColor: '#3D73ED',
            borderRadius: '33px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              minWidth: 'calc((84vw - 40px) * 3 / 4)',
              height: '60vh',
              backgroundColor: '#1956E4',
              position: 'absolute',
              zIndex: -1,
              transform: 'rotate(-4.05deg)',
              borderRadius: '33px',
              marginLeft: 3,
            }}
          ></Box>
          <Container
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingRight: 10,
              paddingLeft: 10,
              height: '80%',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box sx={{ width: '100%', flex: 1 }}>
              <Typography
                textAlign="right"
                sx={{ color: '#fff', fontSize: 30, fontWeight: 700 }}
              >
                ارتباط با ما
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                gap: 3,
              }}
            >
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <CustomTextField
                    label="ایمیل"
                    size="small"
                    color="secondary"
                    inputMode="email"
                    inputProps={{
                      style: {
                        textAlign: 'right',
                        borderRadius: '9px',
                      },
                    }}
                    sx={{
                      input: {
                        color: 'white',
                      },
                      flex: 1,
                      height: '100%',
                      borderRadius: '9px',
                      textAlign: 'right',
                    }}
                  ></CustomTextField>
                  <CustomTextField
                    label="نام و نام خانوادگی"
                    size="small"
                    color="secondary"
                    inputProps={{
                      style: {
                        textAlign: 'right',
                        borderRadius: '9px',
                      },
                    }}
                    sx={{
                      input: {
                        color: 'white',
                      },
                      flex: 1,
                      height: '100%',
                      borderRadius: '9px',
                      textAlign: 'right',
                    }}
                  ></CustomTextField>
                </ThemeProvider>
              </CacheProvider>
            </Box>
            <Box
              sx={{
                width: '100%',
                flex: 5,
                display: 'flex',
                '& .MuiInputBase-root': {
                  height: '100%',
                },
              }}
            >
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <CustomTextField
                    multiline
                    label="متن پیام شما"
                    size="small"
                    color="secondary"
                    inputProps={{
                      style: {
                        textAlign: 'right',
                        borderRadius: '9px',
                        height: '100%',
                        color: '#fff',
                      },
                    }}
                    sx={{
                      input: {
                        color: 'white',
                      },
                      flex: 1,
                      height: '100%',
                      borderRadius: '9px',
                      textAlign: 'right',
                    }}
                  ></CustomTextField>
                </ThemeProvider>
              </CacheProvider>
            </Box>
            <Box sx={{ width: '100%', flex: 1 }}></Box>
          </Container>
        </Box>
      </Container>
    </>
  );
}

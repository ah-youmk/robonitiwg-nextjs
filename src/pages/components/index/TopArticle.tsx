import { Container } from '@mui/system';
import { Box, Button, Typography, createTheme, styled } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Link from 'next/link';

function toPersianNumeral(en: string) {
  return ('' + en).replace(/[0-9]/g, function (t) {
    return '٠۱٢٣۴۵٦٧٨٩'.slice(+t, +t + 1);
  });
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'IranSans',
          color: '#fff',
        },
      },
    },
  },
});

const StyledLine = styled(Box)(({ theme }) => ({
  width: 197,
  margin: 'auto',
  marginTop: 30,
  border: '1px dashed #F7BF2C',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#F7BF2C',
  fontFamily: 'IranSans',
  color: 'inherit',
  paddingRight: 10,
  paddingLeft: 10,
  borderRadius: 8,
  '&:hover': {
    backgroundColor: '#f7be2cc7',
  },
}));

export default function TopArticle() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          justifyContent: 'center',
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/child-making-robot.png');`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: {
            xs: '100% calc(100vh - 100px)',
            md: '100% calc(100vh - 100px)',
          },
        }}
      >
        <Box>
          <ThemeProvider theme={theme}>
            <Typography
              textAlign="center"
              sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: 700 }}
            >
              چهاردهمین دوره مسابقات رباتیک دانشگاه صنعتی نوشیروانی بابل
              <br />
              (روبونیت)
            </Typography>
          </ThemeProvider>
          <StyledLine />
        </Box>
        <Box>
          <ThemeProvider theme={theme}>
            <Typography
              textAlign="center"
              sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: 700 }}
            >
              {`از ${toPersianNumeral('15')} تا ${toPersianNumeral(
                '18'
              )} بهمن ${toPersianNumeral('1401')}`}
            </Typography>
          </ThemeProvider>
          <StyledLine />
        </Box>
        <Box>
          <ThemeProvider theme={theme}>
            <Typography
              textAlign="center"
              sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: 700 }}
            >
              بابل، مازندران، ایران
            </Typography>
          </ThemeProvider>
          <StyledLine />
        </Box>
        <Box>
          <Link href="/signup">
            <StyledButton>همین حالا ثبت نام کنید</StyledButton>
          </Link>
        </Box>
      </Container>
    </>
  );
}

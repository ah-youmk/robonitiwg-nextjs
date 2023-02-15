import { Container } from '@mui/system';
import { Box, Button, Typography, createTheme, styled } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Link from 'next/link';

function toPersianNumeral(en: string) {
  return ('' + en).replace(/[0-9]/g, function (t) {
    return '٠۱٢٣۴۵۶٧٨٩'.slice(+t, +t + 1);
  });
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'IRANYekanX',
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
          color: '#fff',
          width: '90%',
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: '41px',
          justifyContent: 'flex-end',
          background: `url('/wall-e.jpg');`,
          backgroundRepeat: 'no-repeat',
          textAlign: 'right',
          backgroundSize: {
            xs: '100% calc(100vh - 120px)',
            md: 'cover',
          },
        }}
      >
        <Box sx={{ marginRight: 5 }}>
          <Typography sx={{ fontSize: 96, fontWeight: 700 }}>
            روبونیت ۲۰۲۳
          </Typography>
          <Typography sx={{ fontSize: 37 }}>
            چهاردهمین دوره مسابقات رباتیک
            <br />
            دانشگاه صنعتی نوشیروانی بابل
          </Typography>
        </Box>
      </Container>
    </>
  );
}

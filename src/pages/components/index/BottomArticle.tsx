import { Box, Typography, styled } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import styles from './BottomArticle.module.css';

function toPersianNumeral(en: string) {
  return ('' + en).replace(/[0-9]/g, function (t) {
    return '٠۱٢٣۴۵۶٧٨٩'.slice(+t, +t + 1);
  });
}

const StyledLine = styled(Box)(({ theme }) => ({
  width: 197,
  margin: 'auto',
  marginTop: 10,
  border: '1px dashed #F7BF2C',
}));

export default function BottomArticle() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: '90%',
          minHeight: '50vh',
          gap: 3,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
        }}
        disableGutters
      >
        <Box
          sx={{
            flex: 5,
            height: '35vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            background: '#FFDD59',
            justifyContent: 'space-evenly',
            borderRadius: '40px',
          }}
        >
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            height: '35vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#323232',
            justifyContent: 'space-evenly',
            borderRadius: '40px',
          }}
        >
          <Box>
            <Image
              src="/rocket.png"
              alt="Image of a rocket"
              width={120}
              height={120}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: 30, fontWeight: 400, color: '#fff' }}>
              ثــــبت‌نـام
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

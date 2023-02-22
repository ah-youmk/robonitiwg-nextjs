import { Container, Box, Typography } from '@mui/material';

export default function Colleagues() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 15,
          gap: 5,
          paddingBottom: 20,
        }}
        disableGutters
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box>
            <Typography
              textAlign="center"
              sx={{ fontSize: '30px', fontWeight: 700 }}
            >
              همکاران ما
            </Typography>
            <Typography textAlign="center" sx={{ fontSize: '20px' }}>
              حامیان برگزاری مسابقات و پروژه های دبیرخانه
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              height: 143,
              width: 127,
              backgroundImage: `url('/colleague1.png')`,
              backgroundSize: '127px 143px',
              opacity: 0.6,
              backgroundRepeat: 'no-repeat',
              transition: '.3s all',
              '&:hover': {
                opacity: 1,
              },
            }}
          ></Box>
          <Box
            sx={{
              height: 143,
              width: 143,
              backgroundImage: `url('/colleague2.png')`,
              backgroundSize: '127px 143px',
              opacity: 0.6,
              backgroundRepeat: 'no-repeat',
              transition: '.3s all',
              '&:hover': {
                opacity: 1,
              },
            }}
          ></Box>
          <Box
            sx={{
              height: 143,
              width: 143,
              backgroundImage: `url('/colleague3.png')`,
              backgroundSize: '127px 143px',
              opacity: 0.6,
              backgroundRepeat: 'no-repeat',
              transition: '.3s all',
              '&:hover': {
                opacity: 1,
              },
            }}
          ></Box>
          <Box
            sx={{
              height: 143,
              width: 285,
              backgroundImage: `url('/colleague4.png')`,
              backgroundSize: '285px 143px',
              opacity: 0.6,
              backgroundRepeat: 'no-repeat',
              transition: '.3s all',
              '&:hover': {
                opacity: 1,
              },
            }}
          ></Box>
        </Box>
      </Container>
    </>
  );
}

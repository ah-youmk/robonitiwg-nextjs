import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';

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
          marginTop: 5,
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

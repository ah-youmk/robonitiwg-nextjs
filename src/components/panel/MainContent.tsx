import Container from '@mui/material/Container';
import RightMenu from './RightMenu';
import Box from '@mui/material/Box';

export default function MainContent() {
  return (
    <>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          display: 'flex',
          paddingTop: 1,
          paddingRight: 2.5,
          paddingLeft: 2.5,
        }}
      >
        <RightMenu />
        <Box
          sx={{ flex: { xs: 13, md: 11 }, paddingRight: { xs: 3, md: 6 } }}
        ></Box>
      </Container>
    </>
  );
}

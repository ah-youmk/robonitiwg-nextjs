import Container from '@mui/material/Container';
import RightMenu from './RightMenu';
import Box from '@mui/material/Box';
import AddMember from './AddMember';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.body1 = {
  fontSize: '0.75rem',
  '@media (min-width:600px)': {
    fontSize: '0.75rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
};

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
          minHeight: 'calc(90vh - 20px)',
        }}
      >
        <RightMenu />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 2.5,
            flex: { xs: 13, md: 11 },
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: { xs: 3, md: 6 },
            backgroundColor: '#fff',
            borderRadius: '0px 27px 0px 0px',
            gap: 5,
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="body1">
              فرم ثبت نام پانزدهمین دوره مسابقات روبونیت
            </Typography>
          </ThemeProvider>
          <Box display="flex" flexDirection="column" gap={2}>
            <AddMember />
            <AddMember />
            <AddMember />
            <AddMember />
          </Box>
        </Box>
      </Container>
    </>
  );
}

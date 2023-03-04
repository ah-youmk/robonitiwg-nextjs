import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled, ThemeProvider, createTheme } from '@mui/material';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import Grid from '@mui/material/Unstable_Grid2';
import { CacheProvider } from '@emotion/react';

const theme = createTheme({
  typography: {
    fontFamily: 'IRANYekanX',
  },
  direction: 'rtl',
});

theme.typography.body1 = {
  fontSize: '0.68rem',
  '@media (min-width:600px)': {
    fontSize: '0.68rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

const CustomTextField = styled(TextField)(() => ({
  '& .MuiFormLabel-root': {
    color: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D5D5D5',
    },
  },
}));

type FieldProps = {
  fieldText: string;
};

const Field = ({ fieldText }: FieldProps) => {
  return (
    <>
      <Box>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <CustomTextField
              sx={{ width: '100%' }}
              size="small"
              label={fieldText}
              inputProps={{
                style: {
                  width: '100%',
                  height: 18,
                },
              }}
            />
          </ThemeProvider>
        </CacheProvider>
      </Box>
    </>
  );
};

export default function AddMember() {
  return (
    <>
      <Stack>
        <Accordion
          sx={{
            boxShadow: 'none',
            '&.MuiAccordion-root': {
              borderRadius: '15px',
            },
            '&.MuiPaper-root': {
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ThemeProvider theme={theme}>
              <Typography variant="body1">
                ایجاد پروفایل / ورود به حساب کاربری
              </Typography>
            </ThemeProvider>
          </AccordionSummary>
          <AccordionDetails>
            <Stack gap={2}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, md: 2 }}>
                <Grid xs={6} md={4}>
                  <Field fieldText="نام" />
                </Grid>
                <Grid xs={6} md={4}>
                  <Field fieldText="نام خانوادگی" />
                </Grid>
                <Grid xs={6} md={4}>
                  <Field fieldText="کد ملی" />
                </Grid>
                <Grid xs={6} md={4}>
                  <Field fieldText="شماره همراه" />
                </Grid>
                <Grid xs={12} md={4}>
                  <Field fieldText="تعداد اعضای تیم" />
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="center">
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: '9px',
                      width: '10%',
                      minWidth: '0',
                      height: 30,
                      color: '#000',
                      backgroundColor: '#F7BF2C',
                      '&:hover': {
                        backgroundColor: '#e5b029',
                      },
                    }}
                  >
                    <Typography variant="body1">تایید</Typography>
                  </Button>
                </ThemeProvider>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </>
  );
}

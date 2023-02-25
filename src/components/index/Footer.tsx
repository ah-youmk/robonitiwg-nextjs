import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  styled,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const CustomTextField = styled(TextField)(() => ({
  '& .MuiFilledInput-root': {
    borderTopLeftRadius: '9px',
    borderTopRightRadius: '9px',
  },
}));

export default function Footer() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          paddingBottom: 9,
        }}
        disableGutters
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              flex: 2,
              height: 115,
              backgroundImage: `url('/footer-logo.png')`,
              backgroundSize: '185px 115px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              order: 4,
            }}
          ></Box>
          <Box
            sx={{
              flex: 10,
              order: 3,
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{ width: '99%', height: 0, border: '1px solid #D8D8D8' }}
            ></Box>
          </Box>
          <Box
            sx={{
              flex: 1.2,
              order: 2,
              display: 'flex',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link href="/instagram">
              <Image
                src="/instagram.png"
                width={32}
                height={32}
                alt="instagram"
              />
            </Link>
            <Link href="/twitter">
              <Image src="/twitter.png" width={32} height={32} alt="twitter" />
            </Link>
            <Link href="/telegram">
              <Image
                src="/telegram.png"
                width={32}
                height={32}
                alt="telegram"
              />
            </Link>
          </Box>
          <Box
            sx={{
              flex: 1,
              order: 1,
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '90%',
                height: 0,
                border: '1px solid #D8D8D8',
                justifyContent: 'center',
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '95%',
            margin: 'auto',
            gap: 15,
          }}
        >
          <Box
            sx={{
              order: 4,
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography
                textAlign="right"
                sx={{ fontSize: '1.125rem', fontWeight: 700 }}
              >
                ارتباط با ما
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
              }}
            >
              <Box sx={{ width: '100%', display: 'flex', gap: 1 }}>
                <MailIcon fontSize="small" />
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                  }}
                >
                  info@robonit.ir
                </Typography>
              </Box>
              <Box sx={{ width: '100%', display: 'flex', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                  }}
                >
                  ۰۱۱-۱۲۱۳۱۴۱۵
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              order: 3,
              flex: 1.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Typography
                textAlign="right"
                sx={{ fontSize: '1.125rem', fontWeight: 700 }}
              >
                دسترسی سریع
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 0.2,
              }}
            >
              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  اخبار
                </Typography>
              </Link>

              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  پنل کاربری
                </Typography>
              </Link>
              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  قوانین لیگ ها
                </Typography>
              </Link>
              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  درباره ما
                </Typography>
              </Link>
              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  تماس با ما
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              order: 2,
              flex: 1.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Typography
                textAlign="right"
                sx={{ fontSize: '1.125rem', fontWeight: 700 }}
              >
                لینک های مرتبط
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 0.2,
              }}
            >
              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  دانشگاه صنعتی بابل
                </Typography>
              </Link>

              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  بنیاد ملی نخبگان
                </Typography>
              </Link>
              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  وبگاه وزارت علوم
                </Typography>
              </Link>
              <Link href="#">
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                  }}
                >
                  وبگاه سازمان علمی برق
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              order: 1,
              flex: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography
                textAlign="right"
                sx={{ fontSize: '1.125rem', direction: 'rtl' }}
              >
                با عضویت در خبرنامه از اخبار روبونیت آگاه شوید:
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
              }}
            >
              <CustomTextField
                type="email"
                label="E-mail"
                variant="filled"
                size="small"
                sx={{
                  flex: 10,
                }}
              ></CustomTextField>
              <Box
                sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '9px',
                    width: '80%',
                    minWidth: '0',
                    height: '100%',
                    backgroundColor: '#F7BF2C',
                    '&:hover': {
                      backgroundColor: '#e5b029',
                    },
                  }}
                >
                  <SendIcon sx={{ color: '#000' }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

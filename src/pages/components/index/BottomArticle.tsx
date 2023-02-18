import { Box, Typography, styled } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import styles from './BottomArticle.module.css';

function toPersianNumeral(en: string) {
  return ('' + en).replace(/[0-9]/g, function (t) {
    return '۰۱٢٣۴۵۶٧٨٩'.slice(+t, +t + 1);
  });
}

const Circle = styled(Box)(({}) => ({
  width: 20,
  height: 20,
  borderRadius: '50%',
  border: '5px solid #000',
}));

const Line = styled(Box)(({}) => ({
  height: 35,
  border: '5px solid #FFA801',
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
            background: '#FFDD59',
            borderRadius: '40px',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              order: 2,
              height: '80%',
              marginRight: 3,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
              <Box sx={{ width: '30%' }}>
                <Circle />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flex: 3,
              }}
            >
              <Box className={styles.blob}>
                <Typography className={styles.blobText}>{`${toPersianNumeral(
                  '+150'
                )}`}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                width: '100%',
                marginTop: 5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700 }}
                textAlign="right"
              >
                تیم شرکت کننده در آخرین دوره
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              order: 1,
              display: 'flex',
              flexDirection: 'column',
              height: '80%',
              marginRight: 5,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
              <Box sx={{ width: '30%' }}>
                <Circle />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flex: 3,
              }}
            >
              <Box className={styles.blob}>
                <Typography className={styles.blobText}>{`${toPersianNumeral(
                  '+13'
                )}`}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                width: '100%',
                marginTop: 5,
              }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
                رشته متنوع در آخرین دوره
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              marginRight: 5,
              height: '80%',
              gap: 0,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 30, fontWeight: 700 }}>
                  درباره روبونیت
                </Typography>
              </Box>
              <Line></Line>
            </Box>
            <Box
              sx={{
                flex: 4,
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <Box sx={{ width: '98%' }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    direction: 'rtl',
                  }}
                  align="justify"
                >
                  مسابقات رباتیک دانشگاه صنعتی نوشیروانی بابل (روبونیت)
                  پرسابقه‌ترین مسابقهٔ رباتیک در سطح کشور است که پس از
                  بنیانگذاری درمهر ماه سال ۱۳۸۱ و برگزاری اولین دوره کشوری آن در
                  اردیبهشت سال ۱۳۸۲ به همت انجمن علمی دانشجویان مهندسی برق و
                  کامپیوتر ابتدا در دانشکدهٔ فنی دانشگاه مازندران و امروزه با
                  عنوان دانشگاه صنعتی نوشیروانی بابل با شور و اشتیاق و حساسیت
                  بالایی برگزار می‌گردد و هرساله توجه علاقه‌مندان عرصه رباتیک و
                  تیم‌های رباتیک زیادی را در سطح کشور به خود معطوف کرده‌است.
                </Typography>
              </Box>
            </Box>
          </Box>
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

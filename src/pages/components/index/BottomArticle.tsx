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
          minHeight: '70vh',
          backgroundColor: '#E5E5E5',
          display: { xs: 'none', md: 'flex' },
          gap: 5,
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            height: '50vh',
            display: 'flex',
            flex: 3,
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'space-evenly',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{ fontFamily: 'IranSans', fontSize: 32, fontWeight: 700 }}
              textAlign="center"
            >{`روبونیت ${toPersianNumeral('1401')}`}</Typography>
            <StyledLine />
          </Box>
          <Box sx={{ flexGrow: 3 }}>
            <Typography
              textAlign="right"
              sx={{
                fontFamily: 'IranSans',
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              مسابقات رباتیک دانشگاه صنعتی نوشیروانی بابل (روبونیت) پرسابقه‌ترین
              مسابقهٔ رباتیک در سطح کشور است که پس از بنیانگذاری درمهر ماه سال
              ۱۳۸۱ و برگزاری اولین دوره کشوری آن در اردیبهشت سال ۱۳۸۲ به همت
              انجمن علمی دانشجویان مهندسی برق و کامپیوتر ابتدا در دانشکدهٔ فنی
              دانشگاه مازندران و امروزه با عنوان دانشگاه صنعتی نوشیروانی بابل با
              شور و اشتیاق و حساسیت بالایی برگزار می‌گردد و هرساله توجه
              علاقه‌مندان عرصه رباتیک و تیم‌های رباتیک زیادی را در سطح کشور به
              خود معطوف کرده‌است.
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography
              sx={{ fontFamily: 'IranSans', fontSize: 24, fontWeight: 700 }}
            >{`تیم ${toPersianNumeral('150')}`}</Typography>
            <Typography
              sx={{ fontFamily: 'IranSans', fontSize: 24, fontWeight: 700 }}
            >{`استان ${toPersianNumeral('6')}`}</Typography>
            <Typography
              sx={{ fontFamily: 'IranSans', fontSize: 24, fontWeight: 700 }}
            >{`شرکت کننده ${toPersianNumeral('2500')}`}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: '50vh',
            flex: 2,
          }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/prev.png"
              alt="Preview of event"
              layout="fill"
              className={styles.image}
            />
          </div>
        </Box>
      </Container>
    </>
  );
}

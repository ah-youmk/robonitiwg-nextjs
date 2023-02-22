import { Typography, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { RecentEventsProps } from '@/pages/types/RecentEventsProps';

export default function HiddenCards({
  firstText,
  secondText,
  thirdText,
  hiddenSetLeft,
  activeSetEvents,
}: RecentEventsProps) {
  return (
    <>
      {/* hidden Card 1 start */}
      <Card
        sx={{
          maxWidth: 'calc(280px * 3 / 2)',
          borderRadius: '21px',
          position: 'relative',
          left: hiddenSetLeft,
          display: activeSetEvents,
          transition: ' .4s all',
        }}
        component="div"
      >
        <CardMedia
          sx={{ height: 280, aspectRatio: '3/2' }}
          image="/event1.png"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            align="justify"
            sx={{ direction: 'rtl', fontSize: 18, fontWeight: 700 }}
          >
            روبونیت ۲۰۱۹ - گزارش کلی پنهان اول
          </Typography>
          <Typography sx={{ fontSize: 16, direction: 'rtl' }} align="justify">
            {firstText}
          </Typography>
        </CardContent>
      </Card>
      {/* hidden Card end */}

      {/* hidden Card 2 start */}
      <Card
        sx={{
          maxWidth: 'calc(280px * 3 / 2)',
          borderRadius: '21px',
          position: 'relative',
          left: hiddenSetLeft,
          display: activeSetEvents,
          transition: ' .3s all',
        }}
        component="div"
      >
        <CardMedia
          sx={{ height: 280, aspectRatio: '3/2' }}
          image="/event2.png"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            align="justify"
            sx={{ direction: 'rtl', fontSize: 18, fontWeight: 700 }}
          >
            روبونیت ۲۰۱۹ - گزارش کلی پنهان دوم
          </Typography>
          <Typography sx={{ fontSize: 16, direction: 'rtl' }} align="justify">
            {secondText}
          </Typography>
        </CardContent>
      </Card>
      {/* hidden Card 2 end */}

      {/* hidden Card 3 start */}
      <Card
        sx={{
          maxWidth: 'calc(280px * 3 / 2)',
          borderRadius: '21px',
          position: 'relative',
          left: hiddenSetLeft,
          overflow: 'hidden',
          display: activeSetEvents,
          transition: ' .2s all',
        }}
        component="div"
      >
        <CardMedia
          sx={{ height: 280, aspectRatio: '3/2' }}
          image="/event3.png"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            align="justify"
            sx={{ direction: 'rtl', fontSize: 18, fontWeight: 700 }}
          >
            روبونیت ۲۰۱۹ - گزارش کلی پنهان سوم
          </Typography>
          <Typography sx={{ fontSize: 16, direction: 'rtl' }} align="justify">
            {thirdText}
          </Typography>
        </CardContent>
      </Card>
      {/* hidden Card 3 end */}
    </>
  );
}

import { useRef, useState, MutableRefObject, useEffect } from 'react';
import { Container, Box, Typography, Card, styled, Radio } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import HiddenCards from './HiddenCards';
import { firstSetCardsText, secondSetCardsText } from '../../imports/texts';

const CustomRadio = styled(Radio)(({}) => ({
  border: 0,
  '&.Mui-checked': { color: '#1E1E1E' },
}));

type setTransitions = {
  first: string;
  second: string;
  third: string;
};

export default function RecentEvents() {
  const interval = useRef<any>(null);
  const [firstSetLeft, setFirstSetLeft] = useState('none');
  const [firstSetDisplay, setFirstSetDisplay] = useState('block');
  const [firstSetTransitions, setFirstSetTransitions] =
    useState<setTransitions>({
      first: '',
      second: '',
      third: '',
    });
  const [firstHiddenSetLeft, setFirstHiddenSetLeft] = useState('calc(100vw)');
  const [secondHiddenSetLeft, setSecondtHiddenSetLeft] =
    useState('calc(-100vw)');
  useState<setTransitions>({
    first: '',
    second: '',
    third: '',
  });

  const [activeFirstSetEvents, setActiveFirstSetEvents] = useState('none');
  const [activeSecondSetEvents, setActiveSecondSetEvents] = useState('none');
  const [currentActiveEvents, setCurrentActiveEvents] = useState(2);
  useEffect(() => {
    const intercalId = setInterval(() => {
      if (currentActiveEvents === 3) {
        firstClickHandler(
          setActiveFirstSetEvents,
          setFirstHiddenSetLeft,
          currentActiveEvents,
          setFirstSetDisplay,
          setActiveSecondSetEvents,
          setCurrentActiveEvents
        );
      } else if (currentActiveEvents === 2) {
        thirdClickHandler(
          setActiveFirstSetEvents,
          setSecondtHiddenSetLeft,
          currentActiveEvents,
          setFirstSetDisplay,
          setActiveSecondSetEvents,
          setCurrentActiveEvents
        );
      } else {
        secondClickHandler(
          setActiveFirstSetEvents,
          currentActiveEvents,
          setFirstSetTransitions,
          setFirstSetDisplay,
          setFirstSetLeft,
          setActiveSecondSetEvents,
          setCurrentActiveEvents
        );
      }
    }, 8000);
    interval.current = intercalId;

    return () => clearInterval(intercalId);
  });

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', width: '90%', flexDirection: 'column' }}
        disableGutters
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: '1.875rem', fontWeight: 700 }}>
            رویداد های اخیر
          </Typography>
          <Typography sx={{ fontSize: '1.25rem' }}>
            آخرین رویداد های برگزار شده توسط دبیرخانه
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 5,
            flexWrap: 'wrap',
          }}
        >
          <HiddenCards
            firstText={firstSetCardsText.firstText}
            secondText={firstSetCardsText.secondText}
            thirdText={firstSetCardsText.thirdText}
            hiddenSetLeft={firstHiddenSetLeft}
            activeSetEvents={activeFirstSetEvents}
          />
          <Card
            sx={{
              maxWidth: 'calc(280px * 3 / 2)',
              borderRadius: '21px',
              position: 'relative',
              left: firstSetLeft,
              display: firstSetDisplay,
              transition: firstSetTransitions.first,
            }}
          >
            <CardMedia
              sx={{ height: 280, aspectRatio: '3/2' }}
              image="/event1.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                align="justify"
                sx={{ direction: 'rtl', fontSize: '1.125rem', fontWeight: 700 }}
              >
                روبونیت ۲۰۱۹ - گزارش کلی اول
              </Typography>
              <Typography
                sx={{ fontSize: 16, direction: 'rtl' }}
                align="justify"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت...
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 'calc(280px * 3 / 2)',
              borderRadius: '21px',
              position: 'relative',
              left: firstSetLeft,
              display: firstSetDisplay,
              transition: firstSetTransitions.second,
            }}
          >
            <CardMedia
              sx={{ height: 280, aspectRatio: '3/2' }}
              image="/event2.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                align="justify"
                sx={{ direction: 'rtl', fontSize: '1.125rem', fontWeight: 700 }}
              >
                نمایشگاه ایده اختراع ۲۰۱۹ - گزارش کلی
              </Typography>
              <Typography
                sx={{ fontSize: '1rem', direction: 'rtl' }}
                align="justify"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت...
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 'calc(280px * 3 / 2)',
              borderRadius: '21px',
              position: 'relative',
              left: firstSetLeft,
              display: firstSetDisplay,
              transition: firstSetTransitions.third,
            }}
          >
            <CardMedia
              sx={{ height: 280, aspectRatio: '3/2' }}
              image="/event3.webp"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                align="justify"
                sx={{ direction: 'rtl', fontSize: '1.125rem', fontWeight: 700 }}
              >
                شروع فعالیت مجدد دبیرخانه پس از کرونا
              </Typography>
              <Typography
                sx={{ fontSize: '1rem', direction: 'rtl' }}
                align="justify"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت...
              </Typography>
            </CardContent>
          </Card>
          <HiddenCards
            firstText={secondSetCardsText.firstText}
            secondText={secondSetCardsText.secondText}
            thirdText={secondSetCardsText.thirdText}
            hiddenSetLeft={secondHiddenSetLeft}
            activeSetEvents={activeSecondSetEvents}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginTop: 7,
          }}
        >
          <RadioGroup
            aria-labelledby="radio-buttons-events-group-label"
            defaultValue="2"
            name="radio-group-buttons"
            row
          >
            <Box>
              <FormControlLabel
                value="1"
                control={
                  <CustomRadio
                    checked={currentActiveEvents === 1 ? true : false}
                  ></CustomRadio>
                }
                label=""
                onClick={() => {
                  clearInterval(interval.current);
                  firstClickHandler(
                    setActiveFirstSetEvents,
                    setFirstHiddenSetLeft,
                    currentActiveEvents,
                    setFirstSetDisplay,
                    setActiveSecondSetEvents,
                    setCurrentActiveEvents
                  );
                }}
              />
            </Box>
            <Box>
              <FormControlLabel
                value="2"
                control={
                  <CustomRadio
                    checked={currentActiveEvents === 2 ? true : false}
                  ></CustomRadio>
                }
                label=""
                onClick={() => {
                  clearInterval(interval.current);
                  secondClickHandler(
                    setActiveFirstSetEvents,
                    currentActiveEvents,
                    setFirstSetTransitions,
                    setFirstSetDisplay,
                    setFirstSetLeft,
                    setActiveSecondSetEvents,
                    setCurrentActiveEvents
                  );
                }}
              />
            </Box>
            <Box>
              <FormControlLabel
                value="3"
                control={
                  <CustomRadio
                    checked={currentActiveEvents === 3 ? true : false}
                  ></CustomRadio>
                }
                label=""
                onClick={() => {
                  clearInterval(interval.current);
                  thirdClickHandler(
                    setActiveFirstSetEvents,
                    setSecondtHiddenSetLeft,
                    currentActiveEvents,
                    setFirstSetDisplay,
                    setActiveSecondSetEvents,
                    setCurrentActiveEvents
                  );
                }}
              />
            </Box>
          </RadioGroup>
        </Box>
      </Container>
    </>
  );
}

function firstClickHandler(
  setActiveFirstSetEvents: React.Dispatch<React.SetStateAction<string>>,
  setFirstHiddenSetLeft: React.Dispatch<React.SetStateAction<string>>,
  currentActiveEvents: number,
  firstSetDisplay: React.Dispatch<React.SetStateAction<string>>,
  setActiveSecondSetEvents: React.Dispatch<React.SetStateAction<string>>,
  setCurrentActiveEvents: React.Dispatch<React.SetStateAction<number>>
): void {
  setActiveFirstSetEvents('block');
  setFirstHiddenSetLeft('calc(100vw)');
  if (currentActiveEvents === 2) {
    firstSetDisplay('none');
  } else {
    setActiveSecondSetEvents('none');
  }
  setInterval(() => {
    setFirstHiddenSetLeft('0');
  });
  setCurrentActiveEvents(1);
}

function secondClickHandler(
  setActiveFirstSetEvents: React.Dispatch<React.SetStateAction<string>>,
  currentActiveEvents: number,
  setFirstSetTransitions: React.Dispatch<React.SetStateAction<setTransitions>>,
  setFirstSetDisplay: React.Dispatch<React.SetStateAction<string>>,
  setFirstSetLeft: React.Dispatch<React.SetStateAction<string>>,
  setActiveSecondSetEvents: React.Dispatch<React.SetStateAction<string>>,
  setCurrentActiveEvents: React.Dispatch<React.SetStateAction<number>>
): void {
  currentActiveEvents < 2
    ? setActiveFirstSetEvents('none')
    : setActiveSecondSetEvents('none');
  setFirstSetTransitions(({ ...prev }) => {
    return {
      first: currentActiveEvents < 2 ? '.4s all' : '.2s all',
      second: prev.second,
      third: prev.third,
    };
  });
  setFirstSetTransitions(({ ...prev }) => {
    return {
      first: prev.first,
      second: '.3s all',
      third: prev.third,
    };
  });
  setFirstSetTransitions(({ ...prev }) => {
    return {
      first: prev.first,
      second: prev.second,
      third: currentActiveEvents < 2 ? '.2s all' : '.4s all',
    };
  });
  setFirstSetLeft(currentActiveEvents < 2 ? 'calc(-100%)' : 'calc(100vw)');
  setFirstSetDisplay('block');
  setInterval(() => {
    setFirstSetLeft('0');
  });
  setCurrentActiveEvents(2);
}

function thirdClickHandler(
  setActiveFirstSetEvents: React.Dispatch<React.SetStateAction<string>>,
  setSecondtHiddenSetLeft: React.Dispatch<React.SetStateAction<string>>,
  currentActiveEvents: number,
  setFirstSetDisplay: React.Dispatch<React.SetStateAction<string>>,
  setActiveSecondSetEvents: React.Dispatch<React.SetStateAction<string>>,
  setCurrentActiveEvents: React.Dispatch<React.SetStateAction<number>>
): void {
  setActiveSecondSetEvents('block');
  setSecondtHiddenSetLeft('calc(-100vw)');
  if (currentActiveEvents === 2) {
    setFirstSetDisplay('none');
  } else {
    setActiveFirstSetEvents('none');
  }
  setInterval(() => {
    setSecondtHiddenSetLeft('0');
  });
  setCurrentActiveEvents(3);
}

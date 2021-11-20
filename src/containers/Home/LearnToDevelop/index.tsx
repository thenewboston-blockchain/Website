import React from 'react';

import {URLS} from 'constants/routes';
import {useWindowDimensions} from 'hooks';
import breakpoints from 'styles/breakpoints';

import SliderArrowLeft from 'assets/svgs/slider-arrow-left.svg';
import SliderArrowRight from 'assets/svgs/slider-arrow-right.svg';

import * as S from './Styles';

const mockPlaylists = [
  {
    pk: '342d22b4-36bf-47fc-b621-920703defb15',
    thumbnail: 'https://i.imgur.com/7jdLfP5l.png',
    title: 'React JS for Beginners',
  },
  {
    pk: '4966781a-1195-4bab-bcc6-ce34b4c4da4a',
    thumbnail: 'https://i.imgur.com/IZpRGGBl.png',
    title: 'Angular 2 for Beginners',
  },
  {
    pk: 'fb2baf39-6ac0-4c46-b7c9-e840d35bd3cd',
    thumbnail: 'https://i.imgur.com/BZYgdcdl.png',
    title: 'ECMAScript 6 / ES6',
  },
  {
    pk: '4da500ba-0865-4682-abf6-bc0d75f9f0cd',
    thumbnail: 'https://i.imgur.com/Il1aB1Xl.png',
    title: 'HTML5',
  },
  {
    pk: 'd4b0f62f-7242-4812-ac47-8f268d1f3c57',
    thumbnail: 'https://i.imgur.com/l8hYdVDl.png',
    title: 'Django for Beginners',
  },
  {
    pk: 'f3282142-32fe-48f3-a51c-453ac281b736',
    thumbnail: 'https://i.imgur.com/5jguROcl.png',
    title: 'Git',
  },
  {
    pk: 'd45aed95-7695-47a0-a26d-faf233e12dee',
    thumbnail: 'https://i.imgur.com/PTMJGmel.png',
    title: 'Python 3.4 Programming',
  },
  {
    pk: '267192ac-dc06-4d49-9648-a987cddc972e',
    thumbnail: 'https://i.imgur.com/8qRTSXvl.png',
    title: 'Computer Networking',
  },
  {
    pk: '10bec649-967d-4b0d-bc0d-e3c9eacda40c',
    thumbnail: 'https://i.imgur.com/8GU0fKal.png',
    title: 'Node.js for Beginners',
  },
  {
    pk: 'd059c74f-44c6-45a0-b1a0-60faa9998ddb',
    thumbnail: 'https://i.imgur.com/LbMH7Awl.png',
    title: 'iOS Development with Swift',
  },
  {
    pk: 'db13669e-5e98-41f0-8823-f61cc336d012',
    thumbnail: 'https://i.imgur.com/HbUcE6Ul.png',
    title: 'C Programming',
  },
];

const SLIDER_HORIZONTAL_PADDING = {
  lg: 80,
  md: 48,
  sm: 48,
  xs: 24,
};
const SLIDER_ITEM_HEIGHT = {
  lg: 192,
  md: 148,
  sm: 148,
  xs: 88,
};
const SLIDER_ITEM_WIDTH = {
  lg: 336,
  md: 264,
  sm: 264,
  xs: 160,
};
const SLIDER_ITEM_MARGIN_RIGHT = 16;
const TOTAL_ITEMS = 11; // Note: remember to update this value when more items are needed to be displayed

const LearnToDevelop = () => {
  const {width} = useWindowDimensions();

  const sliderRef = React.useRef<HTMLDivElement>();
  const [scrollableWidth, setScrollableWidth] = React.useState<number>(0);
  const [totalSlides, setTotalSlides] = React.useState(1);
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const isNotSmallScreen = width > parseInt(breakpoints.small, 10);

  const sliderItemWidth = React.useMemo(() => {
    if (width > parseInt(breakpoints.large, 10)) return SLIDER_ITEM_WIDTH.lg;
    if (width > parseInt(breakpoints.medium, 10)) return SLIDER_ITEM_WIDTH.md;
    if (width > parseInt(breakpoints.small, 10)) return SLIDER_ITEM_WIDTH.sm;
    return SLIDER_ITEM_WIDTH.xs;
  }, [width]);

  const sliderItemHeight = React.useMemo(() => {
    if (width > parseInt(breakpoints.large, 10)) return SLIDER_ITEM_HEIGHT.lg;
    if (width > parseInt(breakpoints.medium, 10)) return SLIDER_ITEM_HEIGHT.md;
    if (width > parseInt(breakpoints.small, 10)) return SLIDER_ITEM_HEIGHT.sm;
    return SLIDER_ITEM_HEIGHT.xs;
  }, [width]);

  const paddingHorizontal = React.useMemo(() => {
    if (width > parseInt(breakpoints.large, 10)) return SLIDER_HORIZONTAL_PADDING.lg;
    if (width > parseInt(breakpoints.medium, 10)) return SLIDER_HORIZONTAL_PADDING.md;
    if (width > parseInt(breakpoints.small, 10)) return SLIDER_HORIZONTAL_PADDING.sm;
    return SLIDER_HORIZONTAL_PADDING.xs;
  }, [width]);

  const handleScroll = React.useCallback(
    (scroll: number) => {
      if (sliderRef.current && scrollableWidth) {
        sliderRef.current.scrollBy({behavior: 'smooth', left: scroll});
        setCurrentSlide(scroll < 0 ? currentSlide - 1 : currentSlide + 1);
      }
    },
    [scrollableWidth, setCurrentSlide, currentSlide],
  );

  React.useEffect(() => {
    setScrollableWidth(sliderRef.current?.clientWidth ?? 0);

    const scrollAreaWidth = width - paddingHorizontal * 2;
    const calculatedSlides =
      (TOTAL_ITEMS * sliderItemWidth + SLIDER_ITEM_MARGIN_RIGHT * (TOTAL_ITEMS - 1)) / scrollAreaWidth;

    setTotalSlides(Math.ceil(calculatedSlides));
  }, [setScrollableWidth, width, setTotalSlides, sliderItemWidth, paddingHorizontal]);

  const renderSlider = () => {
    return (
      <S.Slider
        ref={(ref) => {
          sliderRef.current = ref!;
        }}
        paddingHorizontal={paddingHorizontal}
      >
        {isNotSmallScreen && currentSlide !== 1 && (
          <S.SliderControl position="left" height={sliderItemHeight}>
            <S.SliderControlImg alt="Arrow Left" src={SliderArrowLeft} onClick={() => handleScroll(-scrollableWidth)} />
          </S.SliderControl>
        )}
        {mockPlaylists.map((item) => (
          <S.SliderItem
            key={item.pk}
            title={item.title}
            role="button"
            tabIndex={0}
            onClick={() => {
              window.location.href = `${URLS.developerPortal.tutorials}/All/${item.pk}`;
            }}
            marginRight={SLIDER_ITEM_MARGIN_RIGHT}
            width={sliderItemWidth}
            height={sliderItemHeight}
          >
            <S.SliderThumbnail alt={item.title} src={item.thumbnail} />
          </S.SliderItem>
        ))}
        {isNotSmallScreen && currentSlide !== totalSlides && (
          <S.SliderControl position="right" height={sliderItemHeight}>
            <S.SliderControlImg
              alt="Arrow Right"
              src={SliderArrowRight}
              onClick={() => handleScroll(scrollableWidth)}
            />
          </S.SliderControl>
        )}
      </S.Slider>
    );
  };

  return (
    <S.Container>
      <S.Content>
        <S.Heading>Learn to Develop Apps</S.Heading>
        <S.Paragraph>
          Watch free coding tutorials created by thenewboston YouTube channel to help you develop apps in any language.{' '}
          <S.Link href={URLS.developerPortal.tutorials} newWindow={false} showNewWindowIcon={false}>
            View All
          </S.Link>
        </S.Paragraph>
      </S.Content>
      {renderSlider()}
    </S.Container>
  );
};

export default LearnToDevelop;

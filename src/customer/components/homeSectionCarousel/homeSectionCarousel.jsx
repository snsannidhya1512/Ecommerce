import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../homeSectionCard/homeSectionCard.jsx';
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const slideNext = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className=' border'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className='z-50 bg-white '
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '1rem',
              transform: 'translateX(-50%) rotate(0deg)',
              bgcolor: 'white'
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(0deg)", color: "black" }} />
          </Button>
        )}

        {activeIndex < data.length - 1 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className='z-50 bg-white '
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(180deg)',
              bgcolor: 'white'
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(0deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  )
}

export default HomeSectionCarousel;

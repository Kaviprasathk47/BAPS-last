import React, { useState } from 'react';
import { Box, Typography, styled } from "@mui/material";
import useStyles from './EventStyles';

import Img1 from '../../assets/images/e1.jpg';
import Img2 from '../../assets/images/e2.jpg';
import Img3 from '../../assets/images/e3.jpg';


const Title = styled(Typography)(({theme})=>({
  fontSize:theme.text.size,
  color:theme.text.color.primary,
}))


const images = [
  Img1,
  Img2,
  Img3,
];

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const classes = useStyles();

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <Box className={classes.eventContainer}>
      <Title>Events</Title>
      <Box className={classes.sliderContainer}>
        <Box className={classes.imageContainer} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <Box key={index} className={classes.image}>
              <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
            </Box>
          ))}
        </Box>

        <button className={`${classes.controlButton} ${classes.prevButton}`} onClick={handlePrevClick}>
          &lt;
        </button>
        <button className={`${classes.controlButton} ${classes.nextButton}`} onClick={handleNextClick}>
          &gt;
        </button>
      </Box>
    </Box>
  );
};

export default Event;

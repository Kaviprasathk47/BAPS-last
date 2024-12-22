import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { eventStyles } from "./eventStyles";
import Eve1 from '../../assets/images/e1.jpg'
import Eve2 from '../../assets/images/e2.jpg'
import Eve3 from '../../assets/images/e3.jpg'

const images = [
    Eve1,
    Eve2,
    Eve3,
];

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box sx={eventStyles.container}>
      <Box sx={eventStyles.imageContainer}>
        <IconButton
          sx={{ ...eventStyles.arrowButton, ...eventStyles.prevButton }}
          onClick={handlePrev}
        >
          <ArrowBack />
        </IconButton>

        {images.map((image, index) => (
          index === currentIndex && (
            <img key={index} src={image} style={eventStyles.image} alt={`Event ${index + 1}`} />
          )
        ))}

        <IconButton
          sx={{ ...eventStyles.arrowButton, ...eventStyles.nextButton }}
          onClick={handleNext}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Event;

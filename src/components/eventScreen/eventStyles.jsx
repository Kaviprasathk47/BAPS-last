import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    position: 'relative',
    width: '600px',
    height: '400px',
    overflow: 'hidden',
  },
  imageContainer: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  image: {
    width: '600px',
    height: '400px',
    objectFit: 'cover',
    flexShrink: 0,
  },
  controlButton: {
    position: 'absolute',
    top: '50%',
    zIndex: 10,
    background: theme.backgroundcolors.trans,
    color: theme.backgroundcolors.primary,
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
  },
  prevButton: {
    left: '10px',
  },
  nextButton: {
    right: '10px',
  },
}));

export default useStyles;

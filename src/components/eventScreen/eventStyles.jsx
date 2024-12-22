export const eventStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxWidth: "800px",
    margin: "0 auto",
    overflow: "hidden",
    backgroundColor:'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    width: "100%",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    transform: "translateY(-50%)",
    padding: "0",
  },
  prevButton: {
    left: "10px",
  },
  nextButton: {
    right: "10px",
  },
};

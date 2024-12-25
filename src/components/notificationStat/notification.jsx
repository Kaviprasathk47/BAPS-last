import React from "react";
import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import useStyles from "./notificationStyles";

const NotificationChart = () => {
  const classes = useStyles();

  const notifications = [
    { id: 1, name: "std name", date: "04 April, 2021", time: "04:00 PM", image: "https://via.placeholder.com/150" },
    { id: 2, name: "std name", date: "04 April, 2021", time: "04:00 PM", image: "https://via.placeholder.com/150" },
    { id: 3, name: "std name", date: "03 April, 2021", time: "02:00 PM", image: "https://via.placeholder.com/150" },
    { id: 4, name: "std name", date: "02 April, 2021", time: "02:00 PM", image: "https://via.placeholder.com/150" },
    { id: 5, name: "std name", date: "01 April, 2021", time: "03:00 PM", image: "https://via.placeholder.com/150" },
  ];

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="h6">Notifications</Typography>
        <Typography variant="body2" className={classes.viewAll}>
          View All
        </Typography>
      </Box>
      <List className={classes.list}>
        {notifications.map((notification) => (
          <ListItem key={notification.id} className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src={notification.image} className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={notification.name}
              secondary={`${notification.date} | ${notification.time}`}
              classes={{
                primary: classes.primaryText,
                secondary: classes.secondaryText,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotificationChart;

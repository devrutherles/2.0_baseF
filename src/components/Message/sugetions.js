import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";

import Typography from "@mui/material/Typography";
import { LocationOnOutlined } from "@mui/icons-material";

export default function Locations() {
  return (
    <ListItem
      style={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="div"
    >
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <LocationOnOutlined />
        </ListItemIcon>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </ListItem>
  );
}

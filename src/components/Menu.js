import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

export default function BasicPopover({ anchorEl, handleClose, logOut }) {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        elevation={0}
      >
        <Paper sx={{ px: 3, py: 3 }}>
          <button onClick={logOut}>logout</button>
        </Paper>
      </Popover>
    </div>
  );
}

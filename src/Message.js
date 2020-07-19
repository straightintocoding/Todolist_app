import React, { forwardRef } from "react";
import { Paper, CardContent, Typography } from "@material-ui/core";
import "./styles.css";
const Message = forwardRef(({ message }, ref) => {
  return (
    <div ref={ref}>
      <Paper variant="outlined" rounded className="Listitem">
        <CardContent>
          <Typography color="white" component="h2">
            {message.message}
          </Typography>
        </CardContent>
      </Paper>
    </div>
  );
});

export default Message;

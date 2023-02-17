import React from "react";
import Button from "@mui/material/Button";

function MButton({ children }) {


  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          color: "#782304",
          fontWeight: "700",
          border: "1px solid #782304",
          margin: "10px 0",
        }}
      >
        {children}
      </Button>
    </div>
  );
}

export default MButton;

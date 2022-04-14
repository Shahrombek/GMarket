import { Box, Paper, Typography } from "@mui/material";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";

const Category = () => {

  const [state, setState] = useState(1);
  const categories = ["Pantrys", "Fruits and Vegetables", "Eggs and Dairys", "Frozens", "Beverange", "Snacks", "Households", "More"]

  return (
    <Box>
      <Box sx={{ width: "96%", mx: 1, my: 3, display: "flex", gap: "12px" }}>
        <Paper
          sx={{
            borderRadius: "10px",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TimelineRoundedIcon sx={{ fontSize: "28px" }} />
        </Paper>
        {categories.map((item, index) =>{
          return <Paper
          key={index}
          onClick={() => setState(index)}
          sx={{
            cursor: "pointer",
            borderRadius: "10px",
            px:"18px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: state === index ? "white" : "rgb(0,0,0,0.1)",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              color: state === index ? 'black' : "rgb(0,0,0,0.7)",
              display:'flex'
            }}
          >
            {item} {index === 7 && <KeyboardArrowDownRoundedIcon sx={{ mb: "-7px" }} />}
          </Typography>
        </Paper>
        })}
      </Box>
    </Box>
  );
};

export default Category;

import { Box, Tabs, Tab, Typography, Button } from "@mui/material";

import orange from "../asset/orange.png";
import tomato from "../asset/tomato.png";
import food from "../asset/food.png";
import Image from "next/image";

const Tabb = () => {
  return (
    <Box sx={{ width: "1100px", overflowX: "auto" }}>
      <Box
        sx={{
          my: 2,
          mx: 1,
          width: "145%",
          display: "flex",
          gap: "15px",
          flexShrink: 1,
        }}
      >
        <Box
          sx={{
            width: "250px",
            height: "150px",
            borderRadius: "10px",
            background: "#ef6c00",
            position: "relative",
            overflow: "hidden",
            p: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "22px", color: "white", fontWeight: 600 }}
          >
            Sale Orange
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "white",
              fontWeight: 500,
              width: "150px",
            }}
          >
            Promocode down
          </Typography>
          <Button
            sx={{
              background: "white",
              "&:hover": { background: "white" },
              borderRadius: "30px",
              px: 2,
              fontWeight: 600,
              color: "#FF7F10",
              my: 2,
            }}
          >
            orange20
          </Button>
          <Box sx={{ position: "absolute", bottom: "-6px", right: "-1px" }}>
            <Image src={orange} alt="orange" />
          </Box>
        </Box>

        <Box
          sx={{
            width: "250px",
            height: "150px",
            borderRadius: "10px",
            background: "red",
            position: "relative",
            overflow: "hidden",
            p: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "22px", color: "white", fontWeight: 600 }}
          >
            Tomato
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "white",
              fontWeight: 500,
              width: "100px",
            }}
          >
            Buy at affordable prices
          </Typography>
          <Box sx={{ position: "absolute", bottom: "-6px", right: "-1px" }}>
            <Image src={tomato} alt="orange" />
          </Box>
        </Box>

        <Box
          sx={{
            width: "250px",
            height: "150px",
            borderRadius: "10px",
            background: "#aeea00",
            position: "relative",
            overflow: "hidden",
            p: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "22px", color: "white", fontWeight: 600 }}
          >
            Sale Orange
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "white",
              fontWeight: 500,
              width: "150px",
            }}
          >
            Promocode down
          </Typography>
          <Button
            sx={{
              background: "white",
              "&:hover": { background: "white" },
              borderRadius: "30px",
              px: 2,
              fontWeight: 600,
              color: "#aeea00",
              my: 2,
            }}
          >
            orange20
          </Button>
          <Box sx={{ position: "absolute", bottom: "-6px", right: "-1px" }}>
            <Image src={food} alt="orange" />
          </Box>
        </Box>

        <Box
          sx={{
            width: "250px",
            height: "150px",
            borderRadius: "10px",
            background: "#ef6c00",
            position: "relative",
            overflow: "hidden",
            p: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "22px", color: "white", fontWeight: 600 }}
          >
            Sale Orange
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "white",
              fontWeight: 500,
              width: "150px",
            }}
          >
            Promocode down
          </Typography>
          <Button
            sx={{
              background: "white",
              "&:hover": { background: "white" },
              borderRadius: "30px",
              px: 2,
              fontWeight: 600,
              color: "#FF7F10",
              my: 2,
            }}
          >
            orange20
          </Button>
          <Box sx={{ position: "absolute", bottom: "-6px", right: "-1px" }}>
            <Image src={orange} alt="orange" />
          </Box>
        </Box>

        <Box
          sx={{
            width: "250px",
            height: "150px",
            borderRadius: "10px",
            background: "red",
            position: "relative",
            overflow: "hidden",
            p: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "22px", color: "white", fontWeight: 600 }}
          >
            Tomato
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "white",
              fontWeight: 500,
              width: "100px",
            }}
          >
            Buy at affordable prices
          </Typography>
          <Box sx={{ position: "absolute", bottom: "-6px", right: "-1px" }}>
            <Image src={tomato} alt="orange" />
          </Box>
        </Box>

        <Box
          sx={{
            width: "250px",
            height: "150px",
            borderRadius: "10px",
            background: "#aeea00",
            position: "relative",
            overflow: "hidden",
            p: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "22px", color: "white", fontWeight: 600 }}
          >
            Sale Orange
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "white",
              fontWeight: 500,
              width: "150px",
            }}
          >
            Promocode down
          </Typography>
          <Button
            sx={{
              background: "white",
              "&:hover": { background: "white" },
              borderRadius: "30px",
              px: 2,
              fontWeight: 600,
              color: "#aeea00",
              my: 2,
            }}
          >
            orange20
          </Button>
          <Box sx={{ position: "absolute", bottom: "-6px", right: "-1px" }}>
            <Image src={food} alt="orange" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tabb;

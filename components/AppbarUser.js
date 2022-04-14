import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import TelegramIcon from "@mui/icons-material/Telegram";import user from "../asset/user.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";


const AppbarUser = () => {
  return (
    <Box>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SettingsIcon sx={{ fontSize: "25px", color: "rgb(0,0,0,0.3)" }} />
        <Image src={user} alt='user'/>
        <NotificationsRoundedIcon
          sx={{ fontSize: "25px", color: "rgb(0,0,0,0.3)" }}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "18px",
          width: "100%",
          textAlign: "center",
        }}
      >
        Roberto Cavanali
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          width: "100%",
          textAlign: "center",
        }}
      >
        (+99893) 100-00-00
      </Typography>

      <Box
        sx={{
          mt: 3,
          mb: "3px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgb(0,0,0,0.025)",
          border: "1px solid rgb(0,0,0,0.03)",
          borderRadius: "10px",
          p: "20px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              width: "100%",
            }}
          >
            Wallet balance
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              width: "100%",
            }}
          >
            $425,97
          </Typography>
        </Box>
        <AddCircleRoundedIcon sx={{ color: "#16AA16" }} />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          background: "#f2631018",
          borderRadius: "10px",
          p: "10px 35px",
        }}
      >
        <TelegramIcon sx={{ color: "#F26110" }} />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            width: "100%",
            color: "#F26110",
          }}
        >
          Share wallet
        </Typography>
      </Box>
    </Box>
  );
};

export default AppbarUser;

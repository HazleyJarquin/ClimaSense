import styles from "./styles.module.css";
import { Box } from "@mui/material";

import { motion } from "framer-motion";
import { SunIcon } from "lucide-react";

export const SplashScreen = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <SunIcon size={200} className={styles.sunIconStyle} />
      </motion.div>
    </Box>
  );
};

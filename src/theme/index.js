import { createTheme } from "@mui/material";

import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: vazirmatn.style.fontFamily,
  },
});

export default theme;

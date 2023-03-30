import "@/styles/globals.css";

import { ThemeProvider, createTheme, Container } from "@mui/material";
import { Vazirmatn } from "next/font/google";

import { ApplicationLayout } from "@/layouts";
import { Navbar } from "@/components";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
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

  return (
    <ThemeProvider theme={theme}>
      <ApplicationLayout>
        <Navbar />
        <Container
          sx={
            {
              // py: 3,
            }
          }
        >
          <Component {...pageProps} />
        </Container>
      </ApplicationLayout>
    </ThemeProvider>
  );
}

import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";

import { Navbar, Footer } from "@/components";
import theme from "@/theme";

export const ApplicationLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box>{children}</Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

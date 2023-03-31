import { ThemeProvider, Container, Box } from "@mui/material";

import { Navbar } from "@/components";
import theme from "@/theme";

export const ApplicationLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <Box>{children}</Box>{" "}
      </Container>
    </ThemeProvider>
  );
};

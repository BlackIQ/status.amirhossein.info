import { Container, Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 2,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography color="white" variant="body1" fontSize={15}>
            Powered by Next.Js
          </Typography>
          <Typography color="white" variant="body1" fontSize={15}>
            Amirhossein Mohamamdi 2019 - {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

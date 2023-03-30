import { Box, Card, CardContent, Typography, Tooltip } from "@mui/material";

import { Circle } from "@mui/icons-material";

const ServiceComponent = ({ service }) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 0 }}>
      <CardContent>
        <Tooltip title={`ID: ${service.pm_id}`} arrow>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="body1" gutterBottom>
                {service.name}
              </Typography>
              <Typography variant="body2">{service.pm2_env.status}</Typography>
            </Box>
            <Box>
              <Circle
                color={
                  service.pm2_env.status === "online" ? "success" : "error"
                }
                sx={{
                  animation: "blinking 1s infinite",
                }}
                className="blinking"
              />
            </Box>
          </Box>
        </Tooltip>
      </CardContent>
    </Card>
  );
};

export default ServiceComponent;

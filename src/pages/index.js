import { Box, Grid, Toolbar, Typography } from "@mui/material";

import Head from "next/head";

import { API } from "@/api";
import { Service } from "@/components";

export const getServerSideProps = async () => {
  try {
    const services = await API.get("services");

    return {
      props: {
        services: services.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};

export default function Home({ services, error }) {
  return (
    <>
      <Head>
        <title>Amirhossein.app Services Status</title>
      </Head>
      <Box sx={{ my: 5 }}>
        <Toolbar />
        <Box
          sx={{
            py: 20,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "radial-gradient(circle at center, #ccc 0%, #fff 50%)",
          }}
        >
          <Box>
            <Typography fontWeight={900} fontSize={80}>
              Amir Services Status
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={20}
              sx={{
                mb: 10,
              }}
              gutterBottom
            >
              Powered by Next.<small>Js</small>
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={16}
              color="typography.secondary"
            >
              Welcome to Service Status - the app that keeps you informed about
              the status of your online services in real-time. No more manually
              checking for updates or wondering if a service is down. Whether
              youre a business owner or an avid user of online services, Service
              Status can save you time and help you stay on top of any service
              disruptions. Try it out today!
            </Typography>
          </Box>
        </Box>
        {services ? (
          <Box>
            {services.in ? (
              <Box>
                <Typography variant="h5" gutterBottom>
                  Internal services
                </Typography>
                <Grid container>
                  {services.in.map((service) => (
                    <Grid md={6} sm={12} xs={12} item key={service.pid}>
                      <Service service={service} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ) : (
              <Typography>No internal service is found</Typography>
            )}
            <br />
            {services.out ? (
              Object.entries(services.out).map(([name, srvs]) => (
                <Box>
                  <Typography variant="h5" gutterBottom>
                    {name}
                  </Typography>
                  {srvs === false ? (
                    <Typography>{name} has error in fetching data</Typography>
                  ) : (
                    <Grid container>
                      {srvs.map((service) => (
                        <Grid md={6} sm={12} xs={12} item key={service.pid}>
                          <Service service={service} />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Box>
              ))
            ) : (
              <Typography>No service is found for {name}</Typography>
            )}
          </Box>
        ) : (
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography fontSize={50} fontWeight={400} color="error">
              {error.message}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

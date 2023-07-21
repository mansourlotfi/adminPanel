import Head from "next/head";
import NextLink from "next/link";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import { prefix } from "src/utils/prefix";

const Page = () => (
  <>
    <Head>
      <title>404 | Devias Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: "center",
            }}
          >
            <img
              alt="Under development"
              src={`${prefix}/assets/errors/error-404.png`}
              style={{
                display: "inline-block",
                maxWidth: "100%",
                width: 400,
              }}
            />
          </Box>
          <Typography align="center" sx={{ mb: 3 }} variant="h3">
            404: صفحه مورد نظر یافت نشد
          </Typography>
          <Typography align="center" color="text.secondary" variant="body1">
            شما یا از مسیری مشکوک استفاده کردید یا به اشتباه اینجا آمدید. هر کدام که هست، سعی کنید
            از ناوبری استفاده کنید.
          </Typography>
          <Button
            component={NextLink}
            href="/"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            }
            sx={{ mt: 3 }}
            variant="contained"
          >
            بازگشت به داشبورد
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default Page;

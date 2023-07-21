import { useCallback } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";

export const SettingsNotifications = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="مدیریت هشدار ها" title="هشدارها" />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid xs={12} sm={6} md={4}>
              <Stack spacing={1}>
                <Typography variant="h6">هشدار ها</Typography>
                <Stack>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="ایمیل" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="پوش نوتیفیکیشن" />
                  <FormControlLabel control={<Checkbox />} label="پیامک" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="تماس تلفنی" />
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">پیام ها</Typography>
                <Stack>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="ایمیل" />
                  <FormControlLabel control={<Checkbox />} label="پوش نوتیفیکیشن" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="تماس تلفنی" />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">ذخیره</Button>
        </CardActions>
      </Card>
    </form>
  );
};

import { Card, CardContent, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Dashboard</Typography>
        <Typography color="text.secondary">KPI, grafici e riepiloghi qui.</Typography>
      </CardContent>
    </Card>
  );
}

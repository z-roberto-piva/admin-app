import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Topbar({ drawerWidth }: { drawerWidth: number }) {
  return (
    <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1, ml: `${drawerWidth}px` }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Admin Console
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

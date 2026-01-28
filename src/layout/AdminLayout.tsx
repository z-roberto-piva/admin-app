import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const drawerWidth = 260;

export function AdminLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Topbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

import { Drawer, Toolbar, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { to: "/users", label: "Users", icon: <PeopleIcon /> },
  { to: "/settings", label: "Settings", icon: <SettingsIcon /> },
];

export default function Sidebar({ drawerWidth }: { drawerWidth: number }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        {items.map((it) => (
          <ListItemButton
            key={it.to}
            component={NavLink}
            to={it.to}
            sx={{
              "&.active": {
                bgcolor: "action.selected",
                "& .MuiListItemIcon-root": { color: "primary.main" },
              },
            }}
          >
            <ListItemIcon>{it.icon}</ListItemIcon>
            <ListItemText primary={it.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

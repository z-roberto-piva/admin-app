import { Card, CardContent, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";

const rows = [
  { id: 1, name: "Mario Rossi", role: "Admin" },
  { id: 2, name: "Luigi Bianchi", role: "User" },
];

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "role", headerName: "Role", width: 160 },
];

export default function Users() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>Users</Typography>
        <div style={{ height: 360, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick />
        </div>
      </CardContent>
    </Card>
  );
}

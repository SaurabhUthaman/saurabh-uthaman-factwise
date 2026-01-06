import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { AllCommunityModule, ModuleRegistry, type ColDef } from 'ag-grid-community'; 
import { provideGlobalGridOptions } from 'ag-grid-community';

// Mark all grids as using legacy themes
provideGlobalGridOptions({ theme: "legacy" });

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; // or alpine
import type { Employee } from "../types";

const EmployeeGrid = ({ employees }: { employees : Employee[] }) => {

const columnDefs: ColDef<Employee>[] = useMemo(
  () => [
    { headerName: "ID", field: "id", width: 80 },
    {
      headerName: "Name",
      valueGetter: (params) =>
        `${params.data?.firstName} ${params.data?.lastName}`,
    },
    { field: "email" },
    {
      field: "department",
      filter: "agSetColumnFilter",
    },
    { field: "position" },
    {
      field: "salary",
      headerName: "Salary",
      filter: "agNumberColumnFilter",
      valueFormatter: (params) =>
        params.value != null
          ? `$${params.value.toLocaleString()}`
          : "",
    },
    {
      field: "hireDate",
      filter: "agDateColumnFilter",
    },
    {
      field: "age",
      filter: "agNumberColumnFilter",
      width: 120
    },
    { field: "location" },
    {
      field: "performanceRating",
      headerName: "Rating",
      filter: "agNumberColumnFilter",
      width: 120
    },
    {
      field: "projectsCompleted",
      headerName: "Projects",
      width: 120,
      filter: "agNumberColumnFilter",
    },
    {
      field: "isActive",
      headerName: "Active",
      width: 100
    },
    {
      field: "skills",
      cellRenderer: (params: { value: string[] }) =>
        params.value?.join(", "),
    },
    { field: "manager" },
  ],
  []
);


  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: false,
      resizable: true,
    }),
    []
  );

  return (
    <div
      className="ag-theme-quartz"
      style={{ height: "545px", width: "100%" }}
    >
      <AgGridReact
        rowData={employees}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10,20]}
        animateRows={true}
      />
    </div>
  );
};

export default EmployeeGrid;
import React from "react";

interface DashboardHeaderProps {
  totalEmployees: number;
}

const Header: React.FC<DashboardHeaderProps> = ({
  totalEmployees,
}) => {
  return (
    <div className="dashboard-header">
      <h1>Employee Dashboard</h1>
      <span className="subtitle">
        Total Employees: <strong>{totalEmployees}</strong>
      </span>
    </div>
  );
};

export default Header;

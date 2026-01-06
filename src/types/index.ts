export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: "Engineering"| "Marketing"| "Sales"| "HR"| "Finance";
  position: string;
  salary: number;
  hireDate: string;
  age: number;
  location: string;
  performanceRating: number;
  projectsCompleted: number;
  isActive: boolean;
  skills: string[];
  manager: string | null;
}
export interface EmployeeResponse {
  employees: Employee[];
}
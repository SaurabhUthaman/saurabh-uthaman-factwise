import EmployeeGrid from "./components/EmployeeGrid";
import Header from "./components/Header";
import useEmployeeData from "./hooks/useEmployeeData";

const App = () => {
  const { isLoading, employees, error } = useEmployeeData()

  return (
    <>
    <Header
      totalEmployees={10}
    />
    <main className="container">
      {isLoading ? <div>isLoading</div> : error ? <div>{error}</div> :<EmployeeGrid employees={employees} />}
    </main>
    </>
  );
};

export default App;
import Dashboard from "./components/Dashboard";
import data from "../data.json";

function App() {
  return (
    <>
      <Dashboard data={data} />
    </>
  );
}

export default App;

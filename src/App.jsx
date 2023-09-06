import "./App.css";
import Header from "./assets/layers/Header";
import PreTable from "./assets/layers/PreTable";
import Table from "./assets/layers/Table";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
        <PreTable />
        <Table />
      </div>
    </div>
  );
}

export default App;

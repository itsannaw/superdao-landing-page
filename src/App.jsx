import "./App.css";
import Header from "./assets/layers/Header";
import PreTable from "./assets/layers/PreTable";
import { RoadmapClub } from "./assets/layers/RoadmapClub";
import Table from "./assets/layers/Table";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
        <PreTable />
        <Table />
        <RoadmapClub />
      </div>
    </div>
  );
}

export default App;

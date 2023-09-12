import "./App.css";
import BackedBy from "./assets/layers/BackedBy";
import Footer from "./assets/layers/Footer";
import Header from "./assets/layers/Header";
import LearnMore from "./assets/layers/LearnMore";
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
        <LearnMore />
        <BackedBy />
        <Footer />
      </div>
    </div>
  );
}

export default App;

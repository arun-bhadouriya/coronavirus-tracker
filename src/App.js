import "./styles.css";
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Chart from "../src/components/Chart";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Chart region="WORLD"/>
      <Chart region="IN" />
    </div>
  );
}

import "./App.css";
import AddTable from "./components/AddTable.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  return (
    <>
      <div className="flex flex-wrap h-screen p-5">
        <div className="w-full sm:w-auto md:w-1/4 lg:w-1/4 xl:w-1/4 p-5">
          <Menu />
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-5">
          <AddTable />
        </div>
      </div>
    </>
  );
}

export default App;

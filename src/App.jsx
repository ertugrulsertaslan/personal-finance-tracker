import "./App.css";
import AddTable from "./components/AddTable.jsx";

import Menu from "./components/Menu.jsx";

function App() {
  return (
    <>
      <div className="flex w-full justify-center p-5">
        <div>
          <Menu />
        </div>
        <div className="w-6/7 p-5">
          <AddTable />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;

import AddTable from "./AddTable.jsx";
import Menu from "./Menu.jsx";

function HomePage() {
  return (
    <>
      <div className="bg-customDashboardColor w-full h-screen">
        <div className="w-full container flex justify-center items-center p-5">
          <div className="w-full sm:w-auto md:w-1/4 lg:w-1/4 xl:w-1/3 p-5">
            <Menu />
          </div>
          <div className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-2/4 p-5">
            <AddTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

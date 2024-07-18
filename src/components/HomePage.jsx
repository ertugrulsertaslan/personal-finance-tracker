import AddTable from "./AddTable.jsx";
import Menu from "./Menu.jsx";

function HomePage() {
  return (
    <>
      <div className="bg-customDashboardColor min-h-screen">
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-3">
              <Menu />
            </div>
            <div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-8 xl:col-span-8 2xl:col-span-6 p-5">
              <AddTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

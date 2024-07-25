import AddTable from "./AddTable.jsx";
import Menu from "./Menu.jsx";

function HomePage() {
  return (
    <>
      <div className="bg-customBgColor h-screen">
        <div className="container mx-auto">
          <div className="w-full grid grid-cols-12 gap-4 h-screen p-2">
            <div className="col-span-12 md:col-span-3  xl:col-span-2">
              <Menu />
            </div>
            <div className="col-span-12  md:col-span-9 lg:col-span-8 xl:col-span-8 2xl:col-span-7 p-5">
              <AddTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

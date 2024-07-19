import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <div className="w-full flex flex-col h-full p-5 shadow-lg text-center md:text-left">
        <div className="flex-grow">
          <div className="w-full">
            <h2 className="text-2xl font-bold p-5">Personal Finance</h2>
          </div>
          <div className="w-full">
            <Link to={`/`}>
              <button className="font-bold p-3 mt-5 text-sm">Overview</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`}>
              <button className="font-bold p-3 mt-5 text-sm">Dashboard</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`}>
              <button className="font-bold p-3 mt-5 text-sm">Analytics</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`}>
              <button className="font-bold p-3 mt-5 text-sm">Account</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`}>
              <button className="font-bold p-3 mt-5 text-sm">Exchange</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`}>
              <button className="font-bold p-3 mt-5 text-sm">
                Transaction
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <div className="w-full">
            <Link to={`/components/Dashboard`}>
              <button className="font-bold p-3 mt-5 text-sm">Help</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`}>
              <button className="font-bold p-3 mt-5 text-sm">Setting</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

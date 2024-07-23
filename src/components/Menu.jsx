import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
function Menu() {
  return (
    <>
      <div className="w-full flex flex-col h-full p-5 shadow-lg text-center md:text-left text-xs">
        <div className="flex-grow">
          <div className="w-full mb-5 mt-5 flex items-center">
            <Icon
              icon="material-symbols:finance-mode"
              className="text-customLineColor text-xl"
            />
            <h2 className="text-base font-bold ml-2">Personal Finance</h2>
          </div>
          <div className="w-full">
            <Link to={`/`} className="flex items-center">
              <Icon
                icon="material-symbols:overview-outline"
                className="text-customLineColor text-xl"
              />
              <button className="font-bold p-3">Overview</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`} className="flex items-center">
              <Icon
                icon="fluent:data-pie-16-filled"
                className="text-customLineColor text-xl"
              />
              <button className="font-bold p-3">Dashboard</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`} className="flex items-center">
              <Icon
                icon="clarity:analytics-solid"
                className="text-customLineColor text-xl"
              />
              <button className="font-bold p-3">Analytics</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`} className="flex items-center">
              <Icon
                icon="material-symbols:account-box"
                className="text-customLineColor text-xl"
              />
              <button className="font-bold p-3">Account</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`} className="flex items-center">
              <Icon
                icon="ri:exchange-fill"
                className="text-customLineColor text-xl"
              />
              <button className="font-bold p-3">Exchange</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`} className="flex items-center">
              <Icon
                icon="hugeicons:transaction"
                className="text-customLineColor text-xl"
              />
              <button className="font-bold p-3">Transaction</button>
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <div className="w-full">
            <Link to={`/components/Dashboard`} className="flex items-center">
              <Icon
                icon="ic:outline-help"
                className="text-customLineColor text-xl"
              />
              <button className="font-bold p-3">Help</button>
            </Link>
          </div>
          <div className="w-full">
            <Link to={`/components/Dashboard`} className="flex items-center">
              <Icon
                icon="uil:setting"
                className="text-customLineColor text-xl"
              />
              <button className="font-bold p-3">Setting</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

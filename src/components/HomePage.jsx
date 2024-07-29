import React from "react";
import AddTable from "./AddTable.jsx";
import Menu from "./Menu.jsx";

function HomePage({ item }) {
  return (
    <>
      <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-8 2xl:col-span-7 p-5">
        <AddTable />
      </div>
    </>
  );
}

export default HomePage;

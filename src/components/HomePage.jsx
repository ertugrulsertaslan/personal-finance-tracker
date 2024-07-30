import React from "react";
import AddTable from "./AddTable.jsx";
import Menu from "./Menu.jsx";

export default function HomePage({ item }) {
  return (
    <>
      <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-10 2xl:col-span-10 p-5">
        <AddTable />
      </div>
    </>
  );
}

import React from "react";
import { useDataStore } from "./Store.jsx";
import { Icon } from "@iconify/react";
export default function RecentModal({ show, onClose }) {
  const { expenses, incomes, sendMoneys } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
    sendMoneys: state.sendMoneys,
  }));
  const combinedList = [
    ...expenses.map((item) => ({ ...item, type: "expense" })),
    ...incomes.map((item) => ({ ...item, type: "income" })),
    ...sendMoneys.map((item) => ({ ...item, type: "expense" })),
  ];
  combinedList.sort((a, b) => {
    const dateA = new Date(`${a.year}-${a.month}-${a.day}`);
    const dateB = new Date(`${b.year}-${b.month}-${b.day}`);
    return dateB - dateA;
  });
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-96 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-3">
          <h4 className="font-semibold text-black">Recent Transactions</h4>
          <button onClick={onClose} className="text-black close">
            &times;
          </button>
        </div>
        <div className="text-black text-xs space-y-4">
          <div className="h-[330px] overflow-y-auto">
            {combinedList.map((item, index) => (
              <div className="grid grid-cols-12 border-b p-1" key={index}>
                <div className="col-span-5 text-xs flex">
                  <div className="mr-2">
                    <Icon
                      className="text-3xl text-customLineColor"
                      icon={item.icon}
                    />
                  </div>
                  <div className="w-12 overflow-hidden whitespace-nowrap text-ellipsis">
                    <p className="mb-1">{item.category}</p>

                    <p className="text-gray-400 font-">· · · 2687</p>
                  </div>
                </div>
                <div className="col-span-4 text-xs">
                  <p>
                    {item.day} {item.month} {item.year}
                  </p>
                </div>
                <div className="col-span-3 flex justify-end">
                  <p
                    className={`font-bold text-xs ${
                      item.type === "expense"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {item.type === "expense" ? "- $" : "+ $"}
                    {Math.abs(item.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

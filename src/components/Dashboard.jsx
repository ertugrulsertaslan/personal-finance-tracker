import React, { useState } from "react";
import { useDataStore } from "./Store.jsx";
import { Icon } from "@iconify/react";
import LineGraph from "./Charts/Line.jsx";
import PieChart from "./Charts/PieChart.jsx";
import RecentModal from "./Modals/RecentModal.jsx";
import SendMoneyModal from "./Modals/SendMoneyModal.jsx";

export default function Dashboard() {
  const {
    expenses,
    incomes,
    totalExpenses,
    totalIncomes,
    calculateTotalPrice,
    sendMoneys,
  } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
    calculateTotalPrice: state.calculateTotalPrice(),
    sendMoneys: state.sendMoneys,
  }));
  const [showSendMoneyModal, setShowSendMoneyModal] = useState(false);
  const [showRecentModal, setShowRecentModal] = useState(false);

  const toggleSendMoneyModal = () => {
    setShowSendMoneyModal(!showSendMoneyModal);
  };
  const toggleRecentModal = () => {
    setShowRecentModal(!showRecentModal);
  };
  const combinedList = [
    ...expenses.map((item) => ({ ...item, type: "expense" })),
    ...incomes.map((item) => ({ ...item, type: "income" })),
    ...sendMoneys.map((item) => ({ ...item, type: "expense" })),
  ];
  combinedList.sort((a, b) => {
    const dateA = new Date(`${a.year}-${a.month}-${a.day}-${a.time}`);
    const dateB = new Date(`${b.year}-${b.month}-${b.day}-${b.time}`);
    return dateB - dateA;
  });

  return (
    <>
      <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-7 h-full">
        <div className="bg-white rounded-xl border">
          <div>
            <LineGraph />
          </div>
        </div>
        <div className="w-full flex justify-center bg-white mt-5 rounded-xl border">
          <div className="grid grid-cols-4">
            <div className="col-span-4 md:col-span-2 ml-5 mr-6">
              <div className="mt-4 ml-3 mb-3">
                <h5 className="font-semibold mb-2">Savings</h5>
                <p className="text-gray-400 text-xs">Total Balance</p>
                <h2 className="text-xl font-bold mb-3">
                  {totalExpenses && totalExpenses > totalIncomes
                    ? `${calculateTotalPrice}`
                    : `${calculateTotalPrice}`}
                </h2>
                <div className="space-y-1 mt-2 mb-1">
                  <div className="flex p-3 border rounded border-gray-100">
                    <div className="flex flex-wrap">
                      <div className=" mr-5 p-2 rounded-xl bg-customEmojiBgColor">
                        ✈️
                      </div>
                      <div className="mr-3 mt-1 text-xs">
                        <p className="font-semibold">Travel</p>
                        <p className="text-gray-400">Achieved in 2 months!</p>
                      </div>
                      <div className="p-2">
                        <h2 className="font-semibold">$63,000</h2>
                      </div>
                      <div className="w-full bg-customRangeColor h-1 mt-3">
                        <div className="bg-customLineColor w-2/3 h-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-3 border rounded border-gray-100">
                    <div className="flex flex-wrap">
                      <div className=" mr-5 p-2 rounded-xl bg-customEmojiBgColor">
                        💰
                      </div>
                      <div className="mr-3 mt-1 text-xs">
                        <p className="font-semibold">Married</p>
                        <p className="text-gray-400">Achieved in 6 months!</p>
                      </div>
                      <div className="p-2">
                        <h2 className="font-semibold">$52,000</h2>
                      </div>
                      <div className="w-full bg-customRangeColor h-1 mt-3">
                        <div className="bg-customLineColor w-1/2 h-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-3 border rounded border-gray-100">
                    <div className="flex flex-wrap">
                      <div className=" mr-5 p-2 rounded-xl bg-customEmojiBgColor">
                        🎓
                      </div>
                      <div className="mr-3 mt-1 text-xs">
                        <p className="font-semibold">College</p>
                        <p className="text-gray-400">Achieved in 9 months!</p>
                      </div>
                      <div className="p-2">
                        <h2 className="font-semibold">$42,000</h2>
                      </div>
                      <div className="w-full bg-customRangeColor h-1 mt-3">
                        <div className="bg-customLineColor w-1/3 h-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-2">
              <div className="flex-1">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-12 xl:col-span-3 border rounded-lg h-full bg-white relative">
        <div className="grid grid-cols-1 grid-rows-2 items-center justify-center">
          <div className="rounded-xl h-70 justify-center items-center text-center p-5">
            <div className="col-span-1 mb-5">
              <h5 className="font-semibold xl:text-left">Card</h5>
            </div>
            <div className=" col-span-1 flex justify-center items-center">
              <div className="bg-customCardBgColor p-5 rounded-lg text-white w-full sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-full">
                <div className="space-y-5">
                  <div className="flex justify-between text-xs">
                    <p>Virtual card</p>
                    <h5>
                      <img src="/assets/card-image.png" alt="" />
                    </h5>
                  </div>
                  <div className="text-left">
                    <p className="mb-1 font-thin text-xs">Total Balance</p>
                    <p className=" text-2xl">
                      {totalExpenses && totalExpenses > totalIncomes
                        ? `${calculateTotalPrice}`
                        : `${calculateTotalPrice}`}
                    </p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p>2148 3214 9812 2687</p>
                    <h5 className="font-myriad font-extrabold text-lg">VISA</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full justify-center items-center flex">
              <div className="w-5/12 xl:w-full flex justify-between mt-5 text-customCardBtnTextColor">
                <button className="bg-customCardBtnBgColor p-2 text-xs w-5/12 rounded-lg items-center flex justify-center font-medium">
                  <Icon
                    icon="heroicons:plus-16-solid"
                    className="mt-0.5 mr-1"
                  />
                  Request
                </button>
                <button
                  onClick={toggleSendMoneyModal}
                  className="bg-customCardBtnBgColor p-2 text-xs w-5/12 rounded-lg items-center flex justify-center font-medium"
                >
                  <Icon icon="solar:arrow-up-linear" className="mt-0.5 mr-1" />
                  Send
                </button>
                <SendMoneyModal
                  show={showSendMoneyModal}
                  onClose={toggleSendMoneyModal}
                />
              </div>
            </div>
          </div>
          <div className="ml-3 p-5 border-t relative">
            <div className="flex justify-between text-sm mb-2 text-center items-center">
              <h2 className="font-semibold">Recent Transactions</h2>
              <button
                onClick={toggleRecentModal}
                className="font-semibold border px-2 py-1 text-xs"
              >
                Show all
              </button>
              <RecentModal show={showRecentModal} onClose={toggleRecentModal} />
            </div>
            <div className="w-full h-[290px] overflow-hidden">
              <div className="space-y-1">
                <div className="flex justify-between text-xs border-b text-gray-400">
                  <div className="flex mb-3">
                    <p>Name</p>
                    <Icon icon="ep:arrow-down" className="ml-1 mt-1" />
                  </div>
                  <div className="flex">
                    <p>Date</p>
                    <Icon icon="ep:arrow-down" className="ml-1 mt-1" />
                  </div>

                  <p>Amount</p>
                </div>
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
                        className={`font-bold text-xs w-14 overflow-hidden whitespace-nowrap text-ellipsis ${
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
        <div
          onClick={toggleRecentModal}
          className="absolute right-1/2 bottom-3 cursor-pointer"
        >
          <Icon icon="ep:arrow-down" className="ml-1 mt-1" />
        </div>
      </div>
    </>
  );
}

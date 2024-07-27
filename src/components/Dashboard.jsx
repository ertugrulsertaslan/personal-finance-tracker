import LineGraph from "./Line.jsx";
import { useDataStore } from "./Store.jsx";
import PieChart from "./PieChart.jsx";
import Menu from "./Menu.jsx";
import { Icon } from "@iconify/react";
import { useState } from "react";
import FirstModal from "./FirstModal.jsx";
import SecondModal from "./SecondModal.jsx";
import RecentModal from "./RecentModal.jsx";
import React from "react";

export default function Dashboard() {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showRecentModal, setShowRecentModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const toggleFirstModal = () => {
    setShowFirstModal(!showFirstModal);
  };
  const toggleRecentModal = () => {
    setShowRecentModal(!showRecentModal);
  };

  const handleContinue = (person) => {
    setSelectedPerson(person);
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const closeSecondModal = () => {
    setShowSecondModal(false);
  };
  const closeRecentModal = () => {
    setShowRecentModal(false);
  };
  const {
    expenses,
    incomes,
    totalExpenses,
    totalIncomes,
    calculateTotalPrice,
    categoryIcons,
    sendMoneys,
  } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
    calculateTotalPrice: state.calculateTotalPrice(),
    categoryIcons: state.categoryIcons,
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

  return (
    <>
      <div className="bg-customBgColor h-screen">
        <div className="container mx-auto p-2">
          <div className="w-full grid grid-cols-12 gap-4 bg-customBgColor">
            <div className="col-span-12 md:col-span-2">
              <Menu />
            </div>
            <div className="col-span-12 md:col-span-10">
              <div className="grid grid-cols-6 grid-rows-1 gap-4">
                <div className="col-span-6 md:col-span-4 bg-customBgColor">
                  <div className="bg-white rounded-xl border">
                    <LineGraph />
                  </div>
                  <div className="w-full flex justify-between bg-white mt-5 rounded-xl border">
                    <div className="grid grid-cols-4">
                      <div className="col-span-4 md:col-span-2 ml-5 mr-6">
                        <div className="mt-4 ml-3">
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
                                  <p className="text-gray-400">
                                    Achieved in 2 months!
                                  </p>
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
                                  <p className="text-gray-400">
                                    Achieved in 6 months!
                                  </p>
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
                                  <p className="text-gray-400">
                                    Achieved in 9 months!
                                  </p>
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
                <div className="col-span-6 md:col-span-2 bg-white rounded-xl border">
                  <div className="grid grid-rows-1">
                    <div className="rounded-xl h-70 flex-col justify-center items-center p-5">
                      <div className="mb-5">
                        <h5 className="font-semibold">Card</h5>
                      </div>
                      <div className="bg-customCardBgColor p-5 rounded-lg text-white ">
                        <div className="space-y-5">
                          <div className="flex justify-between text-xs">
                            <p>Virtual card</p>
                            <h5>
                              <img src="/src/assets/card-image.png" alt="" />
                            </h5>
                          </div>
                          <div>
                            <p className="mb-1 font-thin text-xs">
                              Total Balance
                            </p>
                            <p className=" text-2xl">
                              {totalExpenses && totalExpenses > totalIncomes
                                ? `${calculateTotalPrice}`
                                : `${calculateTotalPrice}`}
                            </p>
                          </div>
                          <div className="flex justify-between text-sm">
                            <p>2148 3214 9812 2687</p>
                            <h5 className="font-myriad font-extrabold text-lg">
                              VISA
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-between mt-5 text-customCardBtnTextColor">
                        <button className="bg-customCardBtnBgColor p-2 text-xs w-5/12 rounded-lg items-center flex justify-center font-medium">
                          <Icon
                            icon="heroicons:plus-16-solid"
                            className="mt-0.5 mr-1"
                          />
                          Request
                        </button>
                        <button
                          onClick={toggleFirstModal}
                          className="bg-customCardBtnBgColor p-2 text-xs w-5/12 rounded-lg items-center flex justify-center font-medium"
                        >
                          <Icon
                            icon="solar:arrow-up-linear"
                            className="mt-0.5 mr-1"
                          />
                          Send
                        </button>
                        <FirstModal
                          show={showFirstModal}
                          onClose={toggleFirstModal}
                          onContinue={handleContinue}
                        />
                        <SecondModal
                          show={showSecondModal}
                          onClose={closeSecondModal}
                          person={selectedPerson}
                        />
                      </div>
                    </div>
                    <div className="ml-3 p-5 border-t">
                      <div className="flex justify-between text-sm mb-2 text-center items-center">
                        <h2 className="font-semibold">Recent Transactions</h2>
                        <button
                          onClick={toggleRecentModal}
                          className="font-semibold border px-2 py-1 text-xs"
                        >
                          Show all
                        </button>
                        <RecentModal
                          show={showRecentModal}
                          onClose={closeRecentModal}
                        />
                      </div>
                      <div className="w-full h-[330px] overflow-hidden">
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs border-b text-gray-400">
                            <div className="flex mb-3">
                              <p>Name</p>
                              <Icon
                                icon="ep:arrow-down"
                                className="ml-1 mt-1"
                              />
                            </div>
                            <div className="flex">
                              <p>Date</p>
                              <Icon
                                icon="ep:arrow-down"
                                className="ml-1 mt-1"
                              />
                            </div>

                            <p>Amount</p>
                          </div>
                          {combinedList.map((item, index) => (
                            <div
                              className="grid grid-cols-12 border-b p-1"
                              key={index}
                            >
                              <div className="col-span-5 text-xs flex">
                                <div className="mr-2">
                                  <Icon
                                    className="text-3xl text-customLineColor"
                                    icon={
                                      item.icon.trim()
                                        ? `material-symbols:${item.icon}`
                                        : `material-symbols:home`
                                    } // or mdi:
                                  />
                                </div>
                                <div className="w-12 overflow-hidden whitespace-nowrap text-ellipsis">
                                  <p className="mb-1">{item.category}</p>

                                  <p className="text-gray-400 font-">
                                    · · · 2687
                                  </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import LineGraph from "./Line.jsx";
import { useDataStore } from "./Store.jsx";
import PieChart from "./PieChart.jsx";
import Menu from "./Menu.jsx";
import { Icon } from "@iconify/react";

export default function Dashboard() {
  const {
    expenses,
    incomes,
    totalExpenses,
    totalIncomes,
    calculateTotalPrice,
    categoryIcons,
    getSortedCombinedItems,
  } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
    calculateTotalPrice: state.calculateTotalPrice(),
    categoryIcons: state.categoryIcons,
  }));
  const combinedList = [
    ...expenses.map((item) => ({ ...item, type: "expense" })),
    ...incomes.map((item) => ({ ...item, type: "income" })),
  ];
  combinedList.sort((a, b) => {
    const dateA = new Date(`${a.year}-${a.month}-01`);
    const dateB = new Date(`${b.year}-${b.month}-01`);
    return dateA - dateB;
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
                  <div className="grid grid-rows-1 gap-2">
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

                        <button className="bg-customCardBtnBgColor p-2 text-xs w-5/12 rounded-lg items-center flex justify-center font-medium">
                          <Icon
                            icon="solar:arrow-up-linear"
                            className="mt-0.5 mr-1"
                          />
                          Send
                        </button>
                      </div>
                    </div>
                    <div className="ml-3 p-5">
                      <h2 className="font-semibold flex justify-center md:justify-start text-sm mb-4">
                        Recent Transactions
                      </h2>
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
                              className="flex items-center w-full border-b p-1"
                              key={index}
                            >
                              <div className="flex text-xs">
                                <div className="mr-2">
                                  <Icon
                                    icon={categoryIcons[item.category]}
                                    className="text-3xl"
                                  />
                                </div>
                                <div>
                                  <p className="mb-1">{item.category}</p>

                                  <p className="text-gray-400 font-">
                                    · · · 2687
                                  </p>
                                </div>
                              </div>
                              <div className="ml-8 text-xs">
                                <p>
                                  {item.month} {item.year}
                                </p>
                              </div>
                              <h3 className="flex-1 truncate"></h3>
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

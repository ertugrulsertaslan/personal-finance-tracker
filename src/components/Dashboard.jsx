import LineGraph from "./Line.jsx";
import { useDataStore } from "./Store.jsx";
import PieChart from "./PieChart.jsx";
import Menu from "./Menu.jsx";
import PriceChangeRoundedIcon from "@mui/icons-material/PriceChangeRounded";

export default function Dashboard() {
  const { expenses, totalExpenses } = useDataStore((state) => ({
    expenses: state.expenses,
    totalExpenses: state.totalExpenses(),
  }));

  return (
    <>
      <div className="bg-customBgColor h-screen">
        <div className="container mx-auto p-2">
          <div className="w-full grid grid-cols-12 gap-4 bg-customBgColor">
            <div className="col-span-12 md:col-span-2 bg-customBgColor">
              <Menu />
            </div>
            <div className="col-span-12 md:col-span-10">
              <div className="grid grid-cols-6 grid-rows-1 gap-4">
                <div className="col-span-6 md:col-span-4 bg-customBgColor">
                  <div className="bg-white rounded">
                    <LineGraph />
                  </div>
                  <div className="flex justify-between bg-white mt-5 rounded">
                    <div className="ml-5 mt-2">
                      <h5 className="mb-2 font-bold">Saving</h5>
                      <p className="text-gray-400 text-sm">Total Balance</p>
                      <h2 className="text-2xl font-bold mb-3">$25,000.00</h2>
                      <div className="space-y-1 mt-2">
                        <div className="flex p-3 border rounded">
                          <div className="flex flex-wrap">
                            <div className=" mr-5 p-2 rounded-xl bg-customEmojiBgColor">
                              ✈️
                            </div>
                            <div className="mr-3">
                              <p className="text-sm font-bold">Travel</p>
                              <p className="text-sm text-gray-400">
                                Achieved in 2 months!
                              </p>
                            </div>
                            <div className="p-2">
                              <h2 className="font-bold">$63,000</h2>
                            </div>
                            <div className="w-full bg-customRangeColor h-1 mt-3">
                              <div className="bg-customLineColor w-2/3 h-1"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex p-3 border rounded">
                          <div className="flex flex-wrap">
                            <div className=" mr-5 p-2 rounded-xl bg-customEmojiBgColor">
                              💰
                            </div>
                            <div className="mr-3">
                              <p className="text-sm font-bold">Married</p>
                              <p className="text-sm text-gray-400">
                                Achieved in 6 months!
                              </p>
                            </div>
                            <div className="p-2">
                              <h2 className="font-bold">$52,000</h2>
                            </div>
                            <div className="w-full bg-customRangeColor h-1 mt-3">
                              <div className="bg-customLineColor w-1/2 h-1"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex p-3 border rounded">
                          <div className="flex flex-wrap">
                            <div className=" mr-5 p-2 rounded-xl bg-customEmojiBgColor">
                              🎓
                            </div>
                            <div className="mr-3">
                              <p className="text-sm font-bold">College</p>
                              <p className="text-sm text-gray-400">
                                Achieved in 9 months!
                              </p>
                            </div>
                            <div className="p-2">
                              <h2 className="font-bold">$42,000</h2>
                            </div>
                            <div className="w-full bg-customRangeColor h-1 mt-3">
                              <div className="bg-customLineColor w-1/3 h-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <PieChart />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-2 bg-white">
                  <div className="grid grid-rows-1 gap-4">
                    <div className="rounded-xl h-60 flex justify-center items-center">
                      <img
                        src="/src/assets/credit-card.png"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="ml-4">
                      <h2 className="font-bold text-2xl mb-4">
                        Recent Transactions
                      </h2>
                      <div className="p-5 w-full h-[410px] overflow-hidden">
                        <div className="space-y-4">
                          {expenses.map((item, index) => (
                            <div
                              className="flex items-center w-full mb-4"
                              key={index}
                            >
                              <div className="w-14 mr-3">
                                <PriceChangeRoundedIcon fontSize="large" />
                              </div>
                              <h3 className="flex-1 truncate">
                                {item.category}
                              </h3>
                              <p className="text-red-600 font-bold">
                                -${item.amount}
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

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
      <div className="bg-customDashboardColor min-h-screen text-white">
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-12 grid-rows-1 gap-4">
            <div className="col-span-12 md:col-span-3">
              <Menu />
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-3 grid-rows-1 gap-4">
                <div className="col-span-3 md:col-span-1">
                  <div className="bg-customBgColor rounded-xl h-60 flex justify-center items-center">
                    <img
                      src="/src/assets/credit-card.png"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <div className="bg-customBgColor rounded-xl h-60 flex flex-col justify-center items-center text-center">
                    <h1 className="text-xl font-bold mb-2">Total Expenses</h1>
                    <h1 className="text-3xl text-blue-500 font-bold">
                      $ {totalExpenses}
                    </h1>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <div className="bg-customBgColor rounded-xl h-60 flex flex-col justify-center items-center text-center">
                    <h2 className="font-bold mb-2">Expenses</h2>
                    <PieChart />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-10">
                <div className="col-span-2 md:col-span-1">
                  <div className="col-span-2">
                    <LineGraph />
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="col-span-2 md:col-span-1">
                    <div className="ml-4 flex-1">
                      <h2 className="font-bold text-2xl mb-4">
                        Recent Transactions
                      </h2>
                      <div className="space-y-4">
                        {expenses.map((item, index) => (
                          <div className="flex items-center" key={index}>
                            <div className="w-14 mr-3">
                              <PriceChangeRoundedIcon fontSize="large" />
                            </div>
                            <h3 className="flex-1">{item.category}</h3>
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
    </>
  );
}

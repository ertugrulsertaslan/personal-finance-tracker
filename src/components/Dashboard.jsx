import LineGraph from "./Line.jsx";
import { useDataStore } from "./Store.jsx";
import PieChart from "./PieChart.jsx";
import Menu from "./Menu.jsx";
import PriceChangeRoundedIcon from "@mui/icons-material/PriceChangeRounded";

function App() {
  const { expenses, incomes, totalExpenses, totalIncomes } = useDataStore(
    (state) => ({
      expenses: state.expenses,
      incomes: state.incomes,
      totalExpenses: state.totalExpenses(),
      totalIncomes: state.totalIncomes(),
    })
  );
  return (
    <>
      <div className="flex w-full justify-center p-5 bg-customDashboardColor text-white h-screen">
        <div className="container w-full flex justify-center">
          <div className="w-full sm:w-auto md:w-1/4 lg:w-1/4 xl:w-1/3 p-5">
            <Menu />
          </div>
          <div className="w-full">
            <div className="flex w-full mb-10">
              <div className="bg-customBgColor rounded-xl h-60 w-full flex justify-center">
                <img src="/src/assets/credit-card.png" alt="" />
              </div>
              <div className="bg-customBgColor rounded-xl ml-5 h-60 w-full flex flex-wrap justify-center items-center text-center">
                <h1 className="w-full text-xl font-bold">Total Expenses</h1>
                <h1
                  className="w-full text-3xl text-blue-500 font-bold 
              "
                >
                  $ {totalExpenses}
                </h1>
              </div>
              <div className="bg-customBgColor rounded-xl flex-col ml-5 h-60 w-full flex justify-center items-center text-center">
                <h2 className="mb-5 font-bold">Expenses</h2>
                <PieChart />
              </div>
            </div>
            <div className="w-full flex">
              <LineGraph />
              <div className="w-2/3 ml-16">
                <div className="float-left mb-10">
                  <h2 className="font-bold text-2xl">Recent Transactions</h2>
                </div>
                <div className="items-center flex-col mt-10 w-full">
                  {expenses.map((item, index) => (
                    <div
                      className="flex items-center justify-start w-full ml-5 mb-10"
                      key={index}
                    >
                      <div className="w-14 mr-3">
                        <PriceChangeRoundedIcon fontSize="large" />
                      </div>
                      <h3 className="ml-10 mb-3">{item.category}</h3>
                      <p className="ml-auto mr-5 text-red-600 font-bold">
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
    </>
  );
}

export default App;

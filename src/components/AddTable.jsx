import { useDataStore } from "./Store";

export default function addExpenses() {
  const {
    addExpenses,
    addIncomes,
    rent,
    setRent,
    kitchen,
    setKitchen,
    bill,
    setBill,
    clothes,
    setClothes,
    transport,
    setTransport,
    health,
    setHealth,
    entertainment,
    setEntertainment,
    salary,
    setSalary,
    sideJob,
    setSideJob,
    investment,
    setInvestment,
  } = useDataStore();
  const expensesHandler = (e) => {
    e.preventDefault();
    addExpenses({
      rent,
      kitchen,
      bill,
      clothes,
      transport,
      health,
      entertainment,
    });
  };
  const incomesHandler = (e) => {
    e.preventDefault();
    addIncomes({
      salary,
      sideJob,
      investment,
    });
  };
  return (
    <>
      <div className="container mx-auto p-5">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-11/12 md:w-full lg:w-1/2 xl:1/2 px-2 mb-4">
            <div className="2xl:p-24 xl:p-24 lg:p-24 md:p-24 sm:p-12 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-10">Expenses</h2>
              <div className="2xl:flex xl:flex lg:flex md:flex 2xl:space-x-4 sm-flex-col">
                <div className="2xl:w-full xl:w-full lg:w-full sm:w-full">
                  <label
                    className="float-start font-bold text-sm"
                    htmlFor="rent"
                  >
                    Rent
                  </label>
                  <input
                    id="rent"
                    className="ml-1 mt-2 mb-2 w-full p-2 border rounded"
                    type="number"
                    name="rent"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    placeholder="Rent"
                  />
                </div>
                <div className="2xl:w-full xl:w-full lg:w-full sm:w-full">
                  <label
                    className="float-start 2x:ml-3 2xl:ml-3 xl:ml-3 lg:ml-3 md:ml-3 font-bold text-sm"
                    htmlFor="kitchen"
                  >
                    Kitchen
                  </label>
                  <input
                    id="kitchen"
                    className="ml-1 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-4 mt-2 mb-2 w-full p-2 border rounded"
                    type="number"
                    name="kitchen"
                    value={kitchen}
                    onChange={(e) => setKitchen(e.target.value)}
                    placeholder="Kitchen"
                  />
                </div>
              </div>
              <div className="2xl:flex xl:flex lg:flex md:flex 2xl:space-x-4 sm-flex-col">
                <div className="2xl:w-full xl:w-full lg:w-full sm:w-full">
                  <label
                    className="float-start mt-3 font-bold text-sm"
                    htmlFor="bill"
                  >
                    Bill
                  </label>
                  <input
                    id="bill"
                    className="ml-1 mt-2 mb-2 w-full p-2 border rounded"
                    type="number"
                    name="bill"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="Bill"
                  />
                </div>
                <div className="2xl:w-full xl:w-full lg:w-full sm:w-full">
                  <label
                    className="float-start mt-3 2x:ml-3 2xl:ml-3 xl:ml-3 lg:ml-3 md:ml-3 font-bold text-sm"
                    htmlFor="clothes"
                  >
                    Clothes
                  </label>
                  <input
                    id="clothes"
                    className="ml-1 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-4 mt-2 mb-2 w-full p-2 border rounded"
                    type="number"
                    name="clothes"
                    value={clothes}
                    onChange={(e) => setClothes(e.target.value)}
                    placeholder="Clothes"
                  />
                </div>
              </div>
              <div className="2xl:flex xl:flex lg:flex md:flex 2xl:space-x-4 sm-flex-col">
                <div className="2xl:w-full xl:w-full lg:w-full sm:w-full">
                  <label
                    className="float-start mt-3 font-bold text-sm"
                    htmlFor="transport"
                  >
                    Transport
                  </label>
                  <input
                    id="transport"
                    className="ml-1 mt-2 mb-2 w-full p-2 border rounded"
                    type="number"
                    name="transport"
                    value={transport}
                    onChange={(e) => setTransport(e.target.value)}
                    placeholder="Transport"
                  />
                </div>
                <div className="2xl:w-full xl:w-full lg:w-full sm:w-full">
                  <label
                    className="float-start mt-3 2x:ml-3 2xl:ml-3 xl:ml-3 lg:ml-3 md:ml-3 font-bold text-sm"
                    htmlFor="health"
                  >
                    Health
                  </label>
                  <input
                    id="health"
                    className="ml-1 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-4 mt-2 mb-2 w-full p-2 border rounded"
                    type="number"
                    name="health"
                    value={health}
                    onChange={(e) => setHealth(e.target.value)}
                    placeholder="Health"
                  />
                </div>
              </div>
              <label
                className="float-start mt-3 font-bold text-sm"
                htmlFor="entertainment"
              >
                Entertainment
              </label>
              <input
                id="entertainment"
                className="w-full ml-1 mt-2 mb-2 p-2 border rounded"
                type="number"
                name="entertainment"
                value={entertainment}
                onChange={(e) => setEntertainment(e.target.value)}
                placeholder="Entertainment"
              />
              <button
                onClick={expensesHandler}
                className="w-full bg-blue-500 mt-20 text-white py-2 rounded hover:bg-blue-700"
              >
                Expenses Add
              </button>
            </div>
          </div>
          <div className="w-full sm:w-11/12 md:w-full lg:w-1/2 xl:1/2 px-2 mb-4">
            <div className="2xl:p-24 xl:p-24 lg:p-24 md:p-24 sm:p-12 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-10">Incomes</h2>
              <label className="float-start font-bold text-sm" htmlFor="salary">
                Salary
              </label>
              <input
                id="salary"
                className="mt-2 mb-2  w-full p-2 border rounded"
                type="number"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Salary"
              />
              <label
                className="float-start mt-3 font-bold text-sm"
                htmlFor="sideJob"
              >
                Side Job
              </label>
              <input
                id="sideJob"
                className="mt-2 mb-2 w-full  p-2 border rounded"
                type="number"
                name="sideJob"
                value={sideJob}
                onChange={(e) => setSideJob(e.target.value)}
                placeholder="SideJob"
              />
              <label
                className="float-start mt-3 font-bold text-sm"
                htmlFor="investment"
              >
                Investment
              </label>
              <input
                id="investment"
                className="w-full float-start mt-2 mb-16 p-2 border rounded"
                type="number"
                name="investment"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                placeholder="Investment"
              />
              <button
                onClick={incomesHandler}
                className="w-full bg-green-500 text-white py-2 2xl:mt-28 xl:mt-28 md:mt-28 sm:mt-10 rounded hover:bg-green-700"
              >
                Incomes Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/*


<div className="w-full flex">
        <div className="w-full flex items-center justify-center">
          <div className="flex w-full flex-wrap items-center justify-center border-2 p-5">
            <h1 className="w-1/2 mt-5 mb-5 text-2xl font-bold">Expenses</h1>
            <div className="w-full">
              <input
                className="mt-2 mb-2 w-2/5 mr-5  p-2 border border-red-500 rounded-lg"
                type="number"
                name="rent"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                placeholder="rent"
              />
              <input
                className="w-2/5 p-2 ml-5 border border-red-500 rounded-lg"
                type="number"
                name="kitchen"
                value={kitchen}
                onChange={(e) => setKitchen(e.target.value)}
                placeholder="kitchen"
              />

              <input
                className="w-2/5 p-2 mr-5 border border-red-500 rounded-lg"
                type="number"
                name="bill"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="bill"
              />
              <input
                className="mt-2 mb-2 w-2/5 ml-5 p-2 border border-red-500 rounded-lg"
                type="number"
                name="clothes"
                value={clothes}
                onChange={(e) => setClothes(e.target.value)}
                placeholder="clothes"
              />
              <input
                className="mt-2 mb-2 w-2/5 mr-5 p-2 border border-red-500 rounded-lg"
                type="number"
                name="transport"
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                placeholder="transport"
              />
              <input
                className="mt-2 mb-2 w-2/5 ml-5 p-2 border border-red-500 rounded-lg"
                type="number"
                name="health"
                value={health}
                onChange={(e) => setHealth(e.target.value)}
                placeholder="health"
              />
              <input
                className="w- ml-3 mt-2 mb-2 p-2 border border-red-500 rounded-lg"
                type="number"
                name="entertainment"
                value={entertainment}
                onChange={(e) => setEntertainment(e.target.value)}
                placeholder="entertainment"
              />
            </div>
            <button
              className="m-2 mb-10 bg-red-500 p-3 w-1/2 mt-5 text-white"
              onClick={expensesHandler}
            >
              Expenses Add
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ml-2">
          <div className="flex w-full flex-wrap items-center justify-center border-2 p-5">
            <h1 className="w-1/2 mt-5 mb-8 text-2xl font-bold">Expenses</h1>
            <div className="w-full">
              <input
                className="mb-4 w-full mr-5 p-2 border border-red-500 rounded-lg"
                type="number"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="salary"
              />
              <input
                className="mt-1 mb-3 w-full  p-2 border border-red-500 rounded-lg"
                type="number"
                name="sideJob"
                value={sideJob}
                onChange={(e) => setSideJob(e.target.value)}
                placeholder="sideJob"
              />
              <input
                className="w-full float-start mt-2 mb-11 p-2 border border-red-500 rounded-lg"
                type="number"
                name="investment"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                placeholder="investment"
              />
            </div>
            <button
              className="m-2 mb-8 mt-10 bg-red-500 p-3 w-1/2  text-white"
              onClick={incomesHandler}
            >
              Incomes Add
            </button>
          </div>
        </div>
      </div>
*/

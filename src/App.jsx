import { useState } from "react";

const Expences = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 2,
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 5, 15),
  },
  {
    id: 3,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 4,

    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2024, 8, 12),
  },
  {
    id: 5,
    title: "A New Car",
    amount: 100,
    date: new Date(2024, 8, 12),
  },
];

const App = () => {
  const [newExpences, setNewExpences] = useState(Expences);

  const [newTitel, setNewTitle] = useState();
  const [newAmount, setNewAmount] = useState();
  const [newDate, setNewDate] = useState();

  const [filterYear, setFilterYear] = useState(2024);

  const expenseChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const dateInputHandler = (event) => {
    setNewDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpence = {
      id: Math.random(),
      title: newTitel,
      amount: newAmount,
      date: new Date(newDate),
    };

    setNewExpences((prevExpences) => {
      return [newExpence, ...prevExpences];
    });

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  const filterYearHandler = (event) => {
    setFilterYear(event.target.value);
  };

  const filterExpences = newExpences.filter(
    (expence) => expence.date.getFullYear() == filterYear
  );

  let totalExpences = 0;

  for (const expence of filterExpences) {
    totalExpences += Number(expence.amount);
  }

  const montheExpences = (month) => {
    let total = 0;
    for (const expence of filterExpences) {
      if (expence.date.getMonth() === month) {
        total += Number(expence.amount);
      }
    }
    return total;
  };

  const jan = Math.round((montheExpences(0) / totalExpences) * 100) + "%";
  const feb = Math.round((montheExpences(1) / totalExpences) * 100) + "%";
  const mar = Math.round((montheExpences(2) / totalExpences) * 100) + "%";
  const apr = Math.round((montheExpences(3) / totalExpences) * 100) + "%";
  const may = Math.round((montheExpences(4) / totalExpences) * 100) + "%";
  const jun = Math.round((montheExpences(5) / totalExpences) * 100) + "%";
  const jul = Math.round((montheExpences(6) / totalExpences) * 100) + "%";
  const aug = Math.round((montheExpences(7) / totalExpences) * 100) + "%";
  const sep = Math.round((montheExpences(8) / totalExpences) * 100) + "%";
  const oct = Math.round((montheExpences(9) / totalExpences) * 100) + "%";
  const nov = Math.round((montheExpences(10) / totalExpences) * 100) + "%";
  const dec = Math.round((montheExpences(11) / totalExpences) * 100) + "%";

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-slate-200 m-20 mb-3 p-10 w-1/2">
          <h1 className="font-bold text-2xl text-center">
            Add Expences to the list
          </h1>
          <form
            action=""
            className="m-4 p-4 bg-white rounded-lg shadow-md"
            onSubmit={submitHandler}
          >
            <div className="mb-4">
              <label
                for="Expense"
                htmlFor="Expense"
                className="block text-gray-700 font-bold mb-2"
              >
                Expense:{" "}
              </label>
              <input
                id="Expense"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newTitel}
                onChange={expenseChangeHandler}
              />
            </div>
            <div className="mb-4">
              <label
                for="amount"
                htmlFor="Amount"
                className="block text-gray-700 font-bold mb-2"
              >
                Amount:{" "}
              </label>
              <input
                id="amount"
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="mb-4">
              <label
                for="date"
                htmlFor="Date"
                className="block text-gray-700 font-bold mb-2"
              >
                Date:{" "}
              </label>
              <input
                id="date"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newDate}
                onChange={dateInputHandler}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Expense
            </button>
          </form>
        </div>

        <div
          className="bg-slate-800 m-20 mt-4
           p-10 w-1/2 rounded-lg text-white shadow-2xl"
        >
          <h1 className="font-bold text-2xl text-center">Expences</h1>
          <div className="mb-4 flex justify-between m-8 text-lg">
            <div className="font-bold mb-2 text-white">Filter by year</div>
            <div>
              <select
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-32"
                onChange={filterYearHandler}
              >
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024" selected>
                  2024
                </option>
              </select>
            </div>
          </div>
          <div className="charts flex m-8 justify-between border bg-sky-700 rounded-lg p-2 h-[200px]">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? jan : "0%",
                  }}
                ></div>
              </div>
              <div>Jan</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? feb : "0%",
                  }}
                ></div>
              </div>
              <div>Feb</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? mar : "0%",
                  }}
                ></div>
              </div>
              <div>Mar</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? apr : "0%",
                  }}
                ></div>
              </div>
              <div>Apr</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? may : "0%",
                  }}
                ></div>
              </div>
              <div>May</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? jun : "0%",
                  }}
                ></div>
              </div>
              <div>Jun</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? jul : "0%",
                  }}
                ></div>
              </div>
              <div>Jul</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? aug : "0%",
                  }}
                ></div>
              </div>
              <div>Aug</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? sep : "0%",
                  }}
                ></div>
              </div>
              <div>Sep</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? oct : "0%",
                  }}
                ></div>
              </div>
              <div>Oct</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? nov : "0%",
                  }}
                ></div>
              </div>
              <div>Nov</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[10px] h-[90%] bg-slate-400 rounded-md flex justify-end items-end">
                <div
                  className="bg-red-600 w-full rounded-lg"
                  style={{
                    height: totalExpences > 0 ? dec : "0%",
                  }}
                ></div>
              </div>
              <div>Dec</div>
            </div>
          </div>
          <div className="">
            {filterExpences.length === 0 ? (
              <h1 className="text-center text-2xl font-bold">
                No Expences Found
              </h1>
            ) : (
              filterExpences.map((expence) => (
                <div
                  key={expence.id}
                  className="m-8 bg-slate-600 rounded-lg p-4 flex justify-between items-center"
                >
                  <div className="flex justify-start gap-2 items-center">
                    <div className="border p-2 rounded-lg text-lg font-medium w-[100px] flex flex-col justify-center items-center bg-slate-800">
                      <h3>
                        {expence.date.toLocaleString("en-us", {
                          month: "long",
                        })}
                      </h3>
                      <h3>
                        {expence.date.toLocaleString("en-us", {
                          day: "2-digit",
                        })}
                      </h3>
                      <h3>{expence.date.getFullYear()}</h3>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{expence.title}</h1>
                    </div>
                  </div>
                  <div className="border p-2 rounded-lg bg-cyan-600 font-medium text-lg">
                    <h2>$ {expence.amount}</h2>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

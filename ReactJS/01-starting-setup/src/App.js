import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INNITIAL_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Food",
    amount: 1040.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Shampoo",
    amount: 50.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "Toothe Paste",
    amount: 50.12,
    date: new Date(2020, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INNITIAL_DATA);

  const addExpenseHendler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseHedler={addExpenseHendler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

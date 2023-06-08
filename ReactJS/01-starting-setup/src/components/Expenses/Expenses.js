import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpensesFilter";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveSelectedFilter = (filterData) => {
    setFilteredYear(filterData);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        default={filteredYear}
        onChangeFilter={saveSelectedFilter}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

//Another version of
// {filteredExpenses.length === 0 && <p>No expense found.</p>}
//       {filteredExpenses.length > 1 &&
//         filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
// =========is===========
//{filteredExpenses.length === 0 ? <p>No expense found.</p> : (filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />)))}

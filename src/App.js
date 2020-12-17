import React from "react";
import Header from "../src/components/Header";
import Balance from "../src/components/Balance";
import IncomeExpenses from "../src/components/IncomeExpenses";
import TransactionList from "../src/components/TransactionList";
import AddTransaction from "../src/components/AddTransactions";
import "../src/App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </React.Fragment>
  );
};

export default App;

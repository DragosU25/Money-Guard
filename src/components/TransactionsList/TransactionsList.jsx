import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../redux/transactions/operationsTransactions";
import { selectTransactions } from "../../redux/transactions/selectorsTransactions";
import TransactionItem from "../TransactionsItem/TransactionsItem";
import styles from "./TransactionsList.module.css";

const TransactionsList = ({ openEditModal, openDeleteModal }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className={styles.transactionsList}>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
        />
      ))}
    </div>
  );
};

export default TransactionsList;

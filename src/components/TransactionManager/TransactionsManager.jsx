import { useEffect, useState } from "react";
import { ButtonAddTransactions } from "../ButtonAddTransactions/ButtonAddTransactions";
import TransactionsList from "../TransactionsList/TransactionsList";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import { useMediaQuery } from "react-responsive";

import { useDispatch, useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectorsTransactions";
import { fetchTransactions } from "../../redux/transactions/operationsTransactions";
import ModalDeleteTransaction from "../ModalDeleteTransaction copy/ModalDeleteTransaction";
import ModalEditTransactionNew from "../ModalEditTransaction/ModalEditTransaction";
import ModalAddTransaction from "../ModalAddTransaction/ModalAddTransaction";
import Loader from "../commonComponents/Loader/Loader";
import clsx from "clsx";

import styles from "./TransactionManager.module.css";

const TransactionsManager = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const data = useSelector(selectTransactions);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const screenCondition = useMediaQuery({ query: "(min-width: 768px)" });

  const [forcedLoading, setForcedLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setForcedLoading(false), 1500);
  }, [forcedLoading]);

  if (forcedLoading) {
    return <Loader />;
  }

  const animation = "animate__animated animate__fadeIn animate__slow";

  return (
    <div className={styles.transactionManagerMainContainer}>
      <div
        className={clsx(styles.transactionsListAndTableContainer, animation)}>
        {screenCondition ? (
          // <div className={styles.theadContainer}>
          //   <table className={styles.table}>
          //     <thead className={styles.tableHead}>
          //       <tr className={styles.tableHeadRow}>
          //         <th className={styles.dateColumn}>Date</th>
          //         <th className={styles.typeColumn}>Type</th>
          //         <th className={styles.categoryColumn}>Category</th>
          //         <th className={styles.commentColumn}>Comment</th>
          //         <th className={styles.sumColumn}>Sum</th>
          //         <th className={styles.editColumn}></th>
          //         <th className={styles.deleteColumn}></th>
          //       </tr>
          //     </thead>
          //   </table>
          //   <TransactionsTable
          //     data={data}
          //     openDeleteModal={() => setIsDeleteModalOpen(true)}
          //     openEditModal={() => setIsEditModalOpen(true)}
          //   />
          // </div>
          <TransactionsTable
            data={data}
            openDeleteModal={() => setIsDeleteModalOpen(true)}
            openEditModal={() => setIsEditModalOpen(true)}
          />
        ) : (
          <TransactionsList
            data={data}
            openDeleteModal={() => setIsDeleteModalOpen(true)}
            openEditModal={() => setIsEditModalOpen(true)}
          />
        )}

        <ButtonAddTransactions onClick={() => setIsAddModalOpen(true)} />
      </div>

      <div className={styles.transactionManagerModalsContainer}>
        {isAddModalOpen && (
          <ModalAddTransaction closeModal={() => setIsAddModalOpen(false)} />
        )}

        {isDeleteModalOpen && (
          <ModalDeleteTransaction
            closeModal={() => setIsDeleteModalOpen(false)}
          />
        )}

        {isEditModalOpen && (
          <ModalEditTransactionNew
            closeModal={() => setIsEditModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TransactionsManager;

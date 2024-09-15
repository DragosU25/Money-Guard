import { useEffect, useState } from "react";
import { ButtonAddTransactions } from "../ButtonAddTransactions/ButtonAddTransactions";
import TransactionsList from "../TransactionsList/TransactionsList";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import { useMediaQuery } from "react-responsive";
import styles from "./TransactionManager.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectorsTransactions";
import { fetchTransactions } from "../../redux/transactions/operationsTransactions";
import ModalDeleteTransaction from "../ModalDeleteTransaction copy/ModalDeleteTransaction";
import ModalEditTransactionNew from "../ModalEditTransaction/ModalEditTransaction";
import ModalAddTransaction from "../ModalAddTransaction/ModalAddTransaction";
import Loader from "../commonComponents/Loader/Loader";

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
    <>
      <div className={`${styles.HomePage} ${animation}`}>
        {screenCondition ? (
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

      <>
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
      </>
    </>
  );
};

export default TransactionsManager;

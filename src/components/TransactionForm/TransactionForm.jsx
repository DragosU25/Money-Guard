import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTransaction,
  addTransaction,
} from "../../redux/transactions/operationsTransactions";
import { fetchTransactionCategories } from "../../redux/transactions/operationsTransactions"; // Import the new action
import { refreshUser } from "../../redux/auth/operationsAuth";
import {
  selectTransactionForUpdate,
  selectTransactionCategories,
} from "../../redux/transactions/selectorsTransactions";
import styles from "./TransactionForm.module.css";
import FormButton from "../commonComponents/FormButton/FormButton";
import icons from "../../assets/images/icons/sprite.svg";
import { useMediaQuery } from "react-responsive";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FiCalendar } from "react-icons/fi";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enUS from "date-fns/locale/en-US";

registerLocale("en-US", enUS);

const TransactionForm = ({ closeModal, isEditMode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionCategories());
  }, [dispatch]);

  const transactionCategories = useSelector(selectTransactionCategories);
  const transactionForUpdate = useSelector(selectTransactionForUpdate);
  const isInitialIncomeTab = isEditMode
    ? transactionForUpdate.type === "INCOME"
    : false;

  const [isOnIncomeTab, setIsOnIncomeTab] = useState(isInitialIncomeTab);
  const screenCondition = useMediaQuery({ query: "(min-width: 768px)" });
  const [startDate, setStartDate] = useState(new Date());

  const initialValues = {
    amount: "",
    comment: "",
  };

  const validationSchema = isOnIncomeTab
    ? Yup.object({
        amount: Yup.string().required("Required*"),
        comment: Yup.string().required("Required*"),
      })
    : Yup.object({
        amount: Yup.string().required("Required*"),
        comment: Yup.string().required("Required*"),
        category: Yup.string().required("Required*"),
      });

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);
    const transactionData = {
      transactionDate: startDate,
      type: isOnIncomeTab ? "INCOME" : "EXPENSE",
      categoryId: transactionCategories.find(
        (cat) => cat.name === (values.category || "Income")
      ).id,
      comment: values.comment,
      amount: isOnIncomeTab ? values.amount : 0 - values.amount,
    };

    const action = isEditMode
      ? updateTransaction({
          transactionId: transactionForUpdate.id,
          transactionData,
        })
      : addTransaction(transactionData);

    dispatch(action)
      .unwrap()
      .then(() => {
        closeModal();
        dispatch(refreshUser());
      })
      .catch((error) => {
        setStatus({ success: false, error: error });
        setSubmitting(false);
      });
  };

  return (
    <div className={styles.modalContent}>
      {screenCondition && (
        <button className={styles.closeButton} onClick={() => closeModal()}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className={styles.formTitle}>
              {isEditMode ? "Edit transaction" : "Add transaction"}
            </h2>

            <div className={styles.switcheWrapper}>
              <span className={`${isOnIncomeTab ? styles.income : ""}`}>
                Income
              </span>
              {isEditMode ? (
                <span className={styles.delimeter}>/</span>
              ) : (
                <>
                  <input
                    type="checkbox"
                    id="switcherButton"
                    onChange={() => setIsOnIncomeTab(!isOnIncomeTab)}
                    checked={!isOnIncomeTab}
                  />
                  <label htmlFor="switcherButton"></label>
                </>
              )}
              <span className={`${!isOnIncomeTab ? styles.expense : ""}`}>
                Expense
              </span>
            </div>

            <div className={styles.inputWrapper}>
              {!isOnIncomeTab && (
                <div className={`${styles.inputField} ${styles.category}`}>
                  <Field as="select" name="category" autoFocus required>
                    <option value="">Select your category</option>
                    {transactionCategories
                      .filter((cat) => cat.type === "EXPENSE")
                      .map((item) => (
                        <option key={item.id}>{item.name}</option>
                      ))}
                  </Field>
                  <ErrorMessage name="category" component="p" />
                </div>
              )}
              <div className={styles.flexContainer}>
                <div className={`${styles.inputField} ${styles.amount}`}>
                  <Field
                    type="number"
                    name="amount"
                    min="1"
                    placeholder="0.00"
                  />
                  <ErrorMessage name="amount" component="p" />
                </div>

                <div className={`${styles.inputField} ${styles.date}`}>
                  <ReactDatePicker
                    dateFormat="dd.MM.yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    locale="en-US"
                    calendarStartDay={1}
                    maxDate={new Date()} // Restricționăm selecția datelor din viitor
                  />
                  <FiCalendar className={styles.icon} />
                </div>
              </div>
              <div className={`${styles.inputField} ${styles.comment}`}>
                <Field type="text" name="comment" placeholder="Comment" />
                <ErrorMessage name="comment" component="p" />
              </div>
            </div>

            <div className={styles.buttonsWrapper}>
              <FormButton
                type={"submit"}
                text={"save"}
                variant={"multiColorButtton"}
                isDisabled={isSubmitting}
              />
              <FormButton
                type={"button"}
                text={"cancel"}
                variant={"whiteButtton"}
                handlerFunction={() => closeModal()}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const EditTransactionForm = ({ closeModal }) => (
  <TransactionForm closeModal={closeModal} isEditMode={true} />
);

export const AddTransactionForm = ({ closeModal }) => (
  <TransactionForm closeModal={closeModal} isEditMode={false} />
);

import { useState, useEffect } from "react";
import styles from "./AddTransactionForm.module.css";
import FormButton from "../commonComponents/FormButton/FormButton";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Using faTimes for close button
import { useMediaQuery } from "react-responsive";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enUS from "date-fns/locale/en-US"; // Importăm localizarea pentru engleză
import {
  fetchTransactionCategories,
  addTransaction,
} from "../../redux/transactions/operationsTransactions"; // Assume you have this operation
import { refreshUser } from "../../redux/auth/operationsAuth";
import { FiCalendar } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Înregistrăm localizarea pentru utilizarea în componenta ReactDatePicker
registerLocale("en-US", enUS);

const AddTransactionForm = ({ closeModal, onAddTransaction }) => {
  const [isOnIncomeTab, setIsOnIncomeTab] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const screenCondition = useMediaQuery({ query: "(min-width: 768px)" });

  // Fetch categories from backend
  useEffect(() => {
    dispatch(fetchTransactionCategories())
      .unwrap()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Failed to fetch categories:", error));
  }, [dispatch]);

  const initialValues = {
    amount: "",
    comment: "",
    category: "",
  };

  const validationSchema = isOnIncomeTab
    ? Yup.object({
        amount: Yup.number()
          .required("Required*")
          .positive("Must be a positive number")
          .typeError("Amount must be a number"),
        comment: Yup.string().required("Required*"),
      })
    : Yup.object({
        amount: Yup.number()
          .required("Required*")
          .positive("Must be a positive number")
          .typeError("Amount must be a number"),
        comment: Yup.string().required("Required*"),
        category: Yup.string().required("Required*"),
      });

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);

    const transactionData = {
      transactionDate: startDate,
      type: isOnIncomeTab ? "INCOME" : "EXPENSE",
      categoryId: values.category || "Income", // Use a default or fallback value
      comment: values.comment,
      amount: isOnIncomeTab ? values.amount : -values.amount, // Negate amount for expense
    };

    dispatch(addTransaction(transactionData))
      .unwrap()
      .then(() => {
        onAddTransaction(transactionData); // Call onAddTransaction from props
        dispatch(refreshUser()); // Refresh user info after successful transaction
        closeModal(); // Close modal on success
      })
      .catch((error) => {
        setStatus({ success: false, error });
        setSubmitting(false);
      });
  };

  return (
    <div className={styles.modalContent}>
      {screenCondition && (
        <button className={styles.closeButton} onClick={() => closeModal()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className={styles.formTitle}>Add transaction</h2>

            <div className={styles.switchWrapper}>
              <span className={`${isOnIncomeTab ? styles.income : ""}`}>
                Income
              </span>

              <input
                type="checkbox"
                id="switcherButton"
                onChange={() => setIsOnIncomeTab(!isOnIncomeTab)}
                checked={isOnIncomeTab}
              />
              <label htmlFor="switcherButton"></label>

              <span className={`${!isOnIncomeTab ? styles.expense : ""}`}>
                Expense
              </span>
            </div>

            <div className={styles.inputWrapper}>
              {!isOnIncomeTab && (
                <div className={`${styles.inputField} ${styles.category}`}>
                  <Field as="select" name="category" required>
                    <option value="">Select your category</option>
                    {categories
                      .filter((category) => category.type === "EXPENSE")
                      .map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage name="category" component="p" />
                </div>
              )}

              <div className={`${styles.inputField} ${styles.amount}`}>
                <Field
                  type="number"
                  name="amount"
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                />
                <ErrorMessage name="amount" component="p" />
              </div>

              <div className={`${styles.inputField} ${styles.date}`}>
                <ReactDatePicker
                  dateFormat="yyyy.MM.dd"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  locale="en-US"
                  calendarStartDay={1}
                />
                <FiCalendar className={styles.icon} />
              </div>

              <div className={`${styles.inputField} ${styles.comment}`}>
                <Field type="text" name="comment" placeholder="Comment" />
                <ErrorMessage name="comment" component="p" />
              </div>
            </div>

            <div className={styles.buttonsWrapper}>
              <FormButton
                type="submit"
                text="Add"
                variant="multiColorButton"
                isDisabled={isSubmitting}
              />
              <FormButton
                type="button"
                text="Cancel"
                variant="whiteButton"
                handlerFunction={() => closeModal()}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransactionForm;

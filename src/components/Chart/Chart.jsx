"use client";

import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import "animate.css";

import "chart.js/auto";
import { useStatistics } from "../../hooks/useStatistics";

import styles from "./Chart.module.css";
import clsx from "clsx";
import Loader from "../commonComponents/Loader/Loader";

export default function Chart() {
  const { statisticsTransactions, statisticsLoading } = useStatistics();

  const transactionsItems = statisticsTransactions?.categoriesSummary;

  const expensesItems = transactionsItems?.filter((transaction) => {
    return transaction.type !== "INCOME";
  });

  function transactionValue(name) {
    return expensesItems?.find((item) => {
      return name === item.name;
    });
  }

  const mainExpenses = transactionValue("Main expenses");
  const main = mainExpenses ? Math.abs(mainExpenses?.total) : 0;

  const mainProducts = transactionValue("Products");
  const products = mainProducts ? Math.abs(mainProducts?.total) : 0;

  const mainCar = transactionValue("Car");
  const car = mainCar ? Math.abs(mainCar?.total) : 0;

  const mainSelfCare = transactionValue("Self care");
  const selfCare = mainSelfCare ? Math.abs(mainSelfCare?.total) : 0;
  //   console.log(selfCare);

  const mainChildCare = transactionValue("Child care");
  const childCare = mainChildCare ? Math.abs(mainChildCare?.total) : 0;

  const mainHouseholdProducts = transactionValue("Household products");
  const householdProducts = mainHouseholdProducts
    ? Math.abs(mainHouseholdProducts?.total)
    : 0;

  const mainEducation = transactionValue("Education");
  const education = mainEducation ? Math.abs(mainEducation?.total) : 0;

  const mainLeisure = transactionValue("Leisure");
  const leisure = mainLeisure ? Math.abs(mainLeisure?.total) : 0;

  const mainOtherExpenses = transactionValue("Other expenses");
  const otherExpenses = mainOtherExpenses
    ? Math.abs(mainOtherExpenses?.total)
    : 0;

  const mainEntertainment = transactionValue("Entertainment");
  const entertainment = mainEntertainment
    ? Math.abs(mainEntertainment?.total)
    : 0;

  //  data
  const data = [
    main > 0 && {
      name: "Main expenses",
      value: main,
      backgroundColor:
        main > 0 ? "rgba(254, 208, 87, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    products > 0 && {
      name: "Products",
      value: products,
      backgroundColor:
        products > 0 ? "rgba(255, 0, 255, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    car > 0 && {
      name: "Car",
      value: car,
      backgroundColor:
        car > 0 ? "rgba(253, 148, 152, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    selfCare > 0 && {
      name: "Self care",
      value: selfCare,
      backgroundColor:
        selfCare > 0 ? "rgba(197, 186, 255, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    childCare > 0 && {
      name: "Child care",
      value: childCare,
      backgroundColor:
        childCare > 0 ? "rgba(127, 255, 0, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    householdProducts > 0 && {
      name: "Household products",
      value: householdProducts,
      backgroundColor:
        householdProducts > 0
          ? "rgba(74, 86, 226, 1)"
          : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    education > 0 && {
      name: "Education",
      value: education,
      backgroundColor:
        education > 0 ? "rgba(0, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    leisure > 0 && {
      name: "Leisure",
      value: leisure,
      backgroundColor:
        leisure > 0 ? "rgba(255, 119, 0, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    otherExpenses > 0 && {
      name: "Other expenses",
      value: otherExpenses,
      backgroundColor:
        otherExpenses > 0 ? "rgba(0, 173, 132, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    entertainment > 0 && {
      name: "Entertainment",
      value: entertainment,
      backgroundColor:
        entertainment > 0 ? "rgba(177, 15, 72, 1)" : "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
    {
      name: "Default",
      value: 0.0000000001,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      borderWidth: 0,
      hoverOffset: 5,
    },
  ];

  const textAnimationClasses =
    "animate__animated  animate__zoomIn animate__slow";

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart fill="rgba(255, 255, 255, 0.6)">
          <Tooltip />
          <Pie
            data={data}
            dataKey="value"
            outerRadius={135}
            innerRadius={95}
            // paddingAngle={5}
            fill="rgba(255, 255, 255, 0.6)">
            {data.map((entry, index) => {
              console.log(entry.backgroundColor);

              return <Cell key={entry.name} fill={entry.backgroundColor} />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <p className={clsx(styles.chartBalance, textAnimationClasses)}>
        <span>₴</span>
        {statisticsTransactions?.periodTotal
          ? Number(statisticsTransactions.periodTotal).toFixed(2)
          : Number(0).toFixed(2)}
      </p>
    </div>
  );
}

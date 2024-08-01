import React from "react";
import { useDataStore } from "../Store.jsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "./vfs_fontes.js";
pdfMake.vfs = pdfFonts;

import html2canvas from "html2canvas";

export default function PdfMaker() {
  const { expenses, incomes, sendMoneys, calculateTotalPrice, selectType } =
    useDataStore((state) => ({
      expenses: state.expenses,
      incomes: state.incomes,
      sendMoneys: state.sendMoneys,
      totalExpenses: state.totalExpenses(),
      totalIncomes: state.totalIncomes(),
      calculateTotalPrice: state.calculateTotalPrice(),
      selectType: state.selectType,
      setSelectType: state.setSelectType,
    }));

  const combinedList = [
    ...expenses.map((item) => ({ ...item, type: "expense" })),
    ...incomes.map((item) => ({ ...item, type: "income" })),
    ...sendMoneys.map((item) => ({ ...item, type: "expense" })),
  ];

  pdfMake.fonts = {
    Roboto: {
      normal:
        "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
      bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
      italics:
        "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
      bolditalics:
        "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
    },
  };

  const tableBody = combinedList.map((item) => [
    item.type,
    item.amount,
    item.category,
    item.day,
    item.month,
    item.year,
  ]);

  const categories = ["Type", "Amount", "Category", "Day", "Month", "Year"];

  const generatePdf = () => {
    const Linechart = document.getElementById("chart");
    const pieType = selectType ? "expenses" : "incomes";
    const pieChart = document.getElementById(pieType);

    html2canvas(Linechart).then((canvas1) => {
      const imgData1 = canvas1.toDataURL("image/png");

      html2canvas(pieChart).then((canvas2) => {
        const imgData2 = canvas2.toDataURL("image/png");

        const docDefinition = {
          pageSize: "A4",
          pageMargins: [40, 60, 40, 60],

          content: [
            {
              text: "Person Data",
              style: "header",
              margin: [0, 20, 0, 20],
              alignment: "center",
            },
            {
              table: {
                widths: ["*", "*", "*", "*", "*", "*"],
                body: [categories, ...tableBody],
              },
              margin: [0, 0, 0, 20],
            },

            {
              text: "Graphics",
              style: "subheader",
              alignment: "center",
              margin: [0, 10, 0, 20],
            },

            {
              text: "Chart",
              style: "subheader",
              margin: [0, 10, 0, 5],
              alignment: "center",
            },
            {
              image: imgData1,
              width: 500,
              alignment: "center",
              fit: [500, 400],
            },

            {
              text: `Pie Type : ${pieType}`,
              style: "subheader",
              margin: [0, 20, 0, 20],
              alignment: "center",
            },
            {
              image: imgData2,
              width: 500,
              alignment: "center",
              fit: [300, 300],
            },
            {
              text: `Total Balance: ${calculateTotalPrice}`,
              fontSize: 20,
              margin: [0, 20, 0, 20],
              bold: true,
              alignment: "center",
            },
          ],
          styles: {
            header: {
              fontSize: 22,
              bold: true,
            },
            subheader: {
              fontSize: 16,
              bold: true,
              margin: [0, 10, 0, 5],
            },
          },
        };

        pdfMake.createPdf(docDefinition).download("report.pdf");
      });
    });
  };
  return (
    <div>
      <button
        className="text-red-500 border-2 p-2 text-xs font-semibold border-red-400"
        onClick={generatePdf}
      >
        Download PDF
      </button>
    </div>
  );
}

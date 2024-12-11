import { useLoaderData } from "react-router-dom";
import ChatAndSearchComp from "../Income Folder/Income segment components/SearchInputComp";
import ExpensesDetails from "./expenses component/ExpensesDetails.jsx";
import { useState } from "react";

export default function FiatExpenses(){

    const fiatExpensesLoader = useLoaderData()

    const totalFiatExpenses = fiatExpensesLoader.reduce(
        (sum, item)=> sum + parseFloat(item.Amount.replace(/[^0-9.-]+/g, "")), 0);

        const currencyOptions = [
            { value: "USD", label: "USD" },
            { value: "NGR", label: "NGR" },
            { value: "CAD", label: "CAD" },
            { value: "EUR", label: "EUR" },
        ];

        const [selectCurrency, setSelectedCurrency] = useState("USD")

        const conversionRates = {
            USD: 1,
            NGR: 1530,
            CAD: 1.2,
            EUR: 0.9,
        };

        const convertedFiatExpenses = (totalFiatExpenses * conversionRates[selectCurrency])
            .toLocaleString(undefined, { style: "currency", currency: selectCurrency });

    return(
        <div>
            <ExpensesDetails 
            expensesDrop={currencyOptions}
            titleText="Total Fiat Expenses"
            amountText={convertedFiatExpenses}
            expensesDropChange={(e)=>setSelectedCurrency(e.target.value)}
            incomeData={fiatExpensesLoader}
            />

            <ChatAndSearchComp 
            inputholder="Talk to Our Al Finance expert"
            />
        </div>
    )
}
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ExpensesDetails from "./expenses component/ExpensesDetails.jsx";
import ChatAndSearchComp from "../Income Folder/Income segment components/SearchInputComp.jsx";

export default function TotalExpenses(){


    const totalExpensesLoader = useLoaderData()

    const totalExpensesTotal = totalExpensesLoader.reduce(
        (sum, item) => sum + parseFloat(item.Amount.replace(/[^0-9.-]+/g, "")),0);

        const currencyOptions = [
            { value: "USD", label: "USD" },
            { value: "NGR", label: "NGR" },
            { value: "CAD", label: "CAD" },
            { value: "EUR", label: "EUR" },
            { value: "BTC", label: "BTC" },
        ];
        
    const [selectCurrency, setSelectedCurrency] = useState("USD")

    const conversionRates = {
        USD: 1,
        NGR: 1530,
        CAD: 1.2,
        EUR: 0.9,
        BTC: 2000,
    };

    const convertedTotal = (totalExpensesTotal * conversionRates[selectCurrency])
        .toLocaleString(undefined, {style: "currency", currency: selectCurrency})
    return(
        <div>
            <div>
            <ExpensesDetails 
            titleText="Total Investment"
            amountText={convertedTotal}
            expensesDrop={currencyOptions}
            expensesDropChange={(e)=>setSelectedCurrency(e.target.value)}
            incomeData={totalExpensesLoader}
            />

            <ChatAndSearchComp 
            inputholder="Talk to Our Al Finance expert"
            />
        </div>
        </div>
    )
}
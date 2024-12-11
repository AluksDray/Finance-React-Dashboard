import { useLoaderData } from "react-router-dom";
import IncomeDetails from "./Income segment components/IncomeDetailsComp";
import ChatAndSearchComp from "./Income segment components/SearchInputComp";
import { useState } from "react";

export default function TotalIncome(){

    const totalIncome = useLoaderData()

    const totalTotalIncome = totalIncome.reduce((sum, item) => sum + parseFloat(item.Amount.replace(/[^0-9.-]+/g, "")), 0)

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

    const convertedTotal = (totalTotalIncome * conversionRates[selectCurrency])
        .toLocaleString(undefined, {style: "currency", currency: selectCurrency})

    return(
        <div>
            <IncomeDetails 
                titleText="Total Income"
                amountText={convertedTotal}
                dropDown={currencyOptions}
                DropDownChange={(e)=>setSelectedCurrency(e.target.value)}
                incomeData={totalIncome}
            />
            <ChatAndSearchComp 
            inputholder="Talk to Our Al Finance expert"
            />
        </div>
    )
}
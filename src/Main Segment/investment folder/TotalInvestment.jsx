import { useLoaderData } from "react-router-dom";
import ChatAndSearchComp from "../Income Folder/Income segment components/SearchInputComp";
import InvestmentDetails from "./investment component/investmentDetails";
import { useState } from "react";

export default function TotalInvestment (){

    const totalInvestmentLoader = useLoaderData()

    const totalInvestmentTotal = totalInvestmentLoader.reduce(
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

    const convertedTotal = (totalInvestmentTotal * conversionRates[selectCurrency])
        .toLocaleString(undefined, {style: "currency", currency: selectCurrency})

    return(
        <div>
            <InvestmentDetails 
            titleText="Total Investment"
            amountText={convertedTotal}
            currencyDrop={currencyOptions}
            currencyDropChange={(e)=>setSelectedCurrency(e.target.value)}
            incomeData={totalInvestmentLoader}
            />

            <ChatAndSearchComp 
            inputholder="Talk to Our Al Finance expert"
            />
        </div>
    )
}
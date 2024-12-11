import { useLoaderData } from "react-router-dom";
import ChatAndSearchComp from "../Income Folder/Income segment components/SearchInputComp.jsx";
import InvestmentDetails from "./investment component/investmentDetails.jsx";
import { useState } from "react";

export default function FiatInvestment (){

    const fiatIncomeData = useLoaderData()

    const totalInvestmentAmount = fiatIncomeData.reduce(
        (sum, item) => sum + parseFloat(item.Amount.replace(/[^0-9.-]+/g, "")), 0);


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
        
        const convertedAmount = (totalInvestmentAmount * conversionRates[selectCurrency])
            .toLocaleString(undefined, { style: "currency", currency: selectCurrency });
        

    return(
        <div>
            <InvestmentDetails
            titleText="Total Fiat Investment"
            amountText={convertedAmount}
            currencyDrop={currencyOptions}
            incomeData={fiatIncomeData}
            currencyDropChange={(e) => setSelectedCurrency(e.target.value)}
            />

            <ChatAndSearchComp 
            inputholder="Talk to Our Al Finance expert"
            />
        </div>
    )
}
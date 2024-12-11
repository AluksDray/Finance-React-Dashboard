import { useLoaderData } from "react-router-dom";
import IncomeDetails from "./Income segment components/IncomeDetailsComp.jsx";
import ChatAndSearchComp from "./Income segment components/SearchInputComp.jsx";
import { useState } from "react";


export default function FiatIncome(){

    const fiatIncomeData = useLoaderData()

    const totalAmount = fiatIncomeData.reduce(
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
        
        const convertedAmount = (totalAmount * conversionRates[selectCurrency])
            .toLocaleString(undefined, { style: "currency", currency: selectCurrency });

    return(
        <div className="page-cont">
           <IncomeDetails 
            titleText="Total Fiat Income"
            amountText={convertedAmount}
            dropDown={currencyOptions}
            incomeData={fiatIncomeData}
            DropDownChange={(e)=>setSelectedCurrency(e.target.value)}
           />
           <ChatAndSearchComp 
           inputholder="Talk to Our Al Finance expert"
           /> 
        </div>
    )
}
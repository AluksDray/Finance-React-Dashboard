import { useLoaderData } from "react-router-dom";
import InvestmentDetails from "./investment component/investmentDetails";
import { useState } from "react";
import ChatAndSearchComp from "../Income Folder/Income segment components/SearchInputComp";

export default function CryptoInvestment (){

    const cryptoInvestmentLoader = useLoaderData()

    const totalCryptoInvestment = cryptoInvestmentLoader.reduce(
        (sum, item)=>sum + parseFloat(item.Amount.replace(/[^0-9.-]+/g, "")),0);

        const cryptoOptions = [
            { value: "BTC", label: "BTC" },
            { value: "ETH", label: "ETH" },
            { value: "SOL", label: "SOL" },
        ];

        const [selectCurrency, setSelectedCurrency] = useState("BTC")

        const conversionRates = {
            BTC: 1,
            ETH: 0.85,
            SOL: 0.67,
        };

        const convertedCrypto = (totalCryptoInvestment * conversionRates[selectCurrency])
            .toLocaleString(undefined, { style: "currency", currency: selectCurrency });


    return(

        <div>
            <InvestmentDetails 
            titleText="Total Crypto Investment"
            amountText={convertedCrypto}
            currencyDrop={cryptoOptions}
            incomeData={cryptoInvestmentLoader}
            currencyDropChange={(e) => setSelectedCurrency(e.target.value)}
            />

            <ChatAndSearchComp 
            inputholder="Talk to Our Al Finance expert"
            />
        </div>
    )
}
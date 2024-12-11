import { useLoaderData } from "react-router-dom"
import IncomeDetails from "./Income segment components/IncomeDetailsComp.jsx"
import ChatAndSearchComp from "./Income segment components/SearchInputComp.jsx"
import { useState } from "react";

export default function CryptoIncome(){


    const cryptoLoader = useLoaderData()

    const totalCryptoAmount = cryptoLoader
        .reduce((sum, item) => sum + parseFloat(item.Amount.replace(/[^0-9.-]+/g, "")), 0)
        .toLocaleString();

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

        const convertedCrypto = (totalCryptoAmount * conversionRates[selectCurrency])
            .toLocaleString(undefined, { style: "currency", currency: selectCurrency });


    return(
        <div>
          <IncomeDetails 
            titleText="Total Crypto Income"
            amountText={convertedCrypto}
            dropDown={cryptoOptions}
            DropDownChange={(e)=>(setSelectedCurrency(e.target.value))}
            incomeData={cryptoLoader}
          />
          <ChatAndSearchComp 
          inputholder="Talk to Our Al Finance expert"
          />  
        </div>
    )
}
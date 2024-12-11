import { MdOutlineSimCardDownload } from "react-icons/md";


export default function ExpensesDetails({titleText, amountText, incomeData, expensesDrop,expensesDropChange, selectedCurrency}){
    

    return(
        <div className="incomeDetails-cont">
            <div className="container1">
                <select>
                    <option value="1">Filter Applied :2</option>
                    <option value="2">Filter Applied :3</option>
                </select>
            </div>

            <div className="container2">
                <div className="container2-child1">
                    <div className="text-cont">
                        <h1>{titleText}</h1>
                    </div>
                    <div className="number-cont">
                        <div className="amount-cont3">
                            <h2>{amountText}</h2>
                        </div>
                        <div className="currency-cont">
                            <select
                            value={selectedCurrency}
                            onChange={expensesDropChange}
                            >
                                {expensesDrop.map((currency, index)=>(
                                    <option key={index} value={currency.value}>
                                        {currency.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="container2-child2">
                    {incomeData && incomeData.map((item, index) => (
                        <div className="price-cont" key={index}>
                            <div className="money-month-cont3">
                                <h3>{item.Amount}</h3>
                                <p>{item.Month}</p>
                            </div>
                            <div className="action-cont">
                                <p>See Details</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container1">
                <div className="elements">
                    <p>Download</p>
                    <MdOutlineSimCardDownload />
                </div>
            </div>
        </div>
    )
}

export const investmentFiatloader = async () => {
    const response = await fetch("http://localhost:5000/investmentData");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};

export const cryptoInvestmentloader = async () => {
    const response = await fetch("http://localhost:5001/CryptoInvestmentData");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};

export const totalInvestmentloader = async () => {
    const response = await fetch("http://localhost:5002/TotalInvestmentData");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};
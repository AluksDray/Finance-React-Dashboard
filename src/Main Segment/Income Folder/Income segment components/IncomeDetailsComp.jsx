import { MdOutlineSimCardDownload } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

export default function IncomeDetails({titleText, amountText, incomeData, dropDown, DropDownChange, selectedCurrency}){
    

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
                        <div className="amount-cont">
                            <h2>{amountText}</h2>
                        </div>
                        <div className="currency-cont">
                            <select
                            value={selectedCurrency}
                            onChange={DropDownChange}
                            >
                                {dropDown.map((currency, index)=>(
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
                            <div className="money-month-cont">
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

export const loader = async () => {
    const response = await fetch("http://localhost:5000/incomeData");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};

export const cryptoloader = async () => {
    const response = await fetch("http://localhost:5001/CryptoIncomeData");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};

export const totalloader = async () => {
    const response = await fetch("http://localhost:5002/TotalIncomeData");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
};


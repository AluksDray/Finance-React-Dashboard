import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Expenses(){

    const [clicked, SetClicked] = useState("fiat")

    const navigate = useNavigate()

    const handleClick = (route, type)=>{
        SetClicked(type)
        navigate(route)
    }
    return(
        <div className="sub-main-segment-cont">
            <button
                onClick={() => handleClick("fiatExpenses", "fiat")}
                className={clicked === "fiat" ? "active-button" : ""}
            >
                Fiat Expenses
            </button>

            
            <button
                onClick={() => handleClick("cryptoExpenses", "crypto")}
                className={clicked === "crypto" ? "active-button" : ""}
            >
                Crypto Expenses
            </button>

            
            <button
                onClick={() => handleClick("totalExpenses", "total")}
                className={clicked === "total" ? "active-button" : ""}
            >
                Total Expenses
            </button>
        </div>
    )
}
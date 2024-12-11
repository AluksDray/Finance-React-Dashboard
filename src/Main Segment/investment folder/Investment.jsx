import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Investment(){

    const [clicked, SetClicked] = useState("fiat")

    const navigate = useNavigate()

    const handleClick = (route, type) => {
        SetClicked(type);
        navigate(route); 
    }

    return(
        <div className="sub-main-segment-cont">

            <button
                onClick={() => handleClick("fiatInvestment", "fiat")}
                className={clicked === "fiat" ? "active-button" : ""}
            >
                Fiat Income
            </button>

            
            <button
                onClick={() => handleClick("cryptoInvestment", "crypto")}
                className={clicked === "crypto" ? "active-button" : ""}
            >
                Crypto Income
            </button>

            
            <button
                onClick={() => handleClick("totalInvestment", "total")}
                className={clicked === "total" ? "active-button" : ""}
            >
                Total Income
            </button>
            
        </div>
    )
}
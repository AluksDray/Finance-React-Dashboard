import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Settings(){

    const [clicked, setClicked] = useState("profile")

    const navigate = useNavigate()

    const handleClick = (route, type)=>{
        setClicked(type)
        navigate(route)
    }
    return(
        <div className="sub-main-segment-cont">
            <button onClick={()=>handleClick("profile", "pro")}
                className={clicked === "pro" ? "active-button" : ""}
            >
                Profile
            </button>


            <button onClick={()=>handleClick("notification", "noti")}
                className={clicked === "noti" ? "active-button" : ""}
            >
                General Settings
            </button>
        </div>
    )
}
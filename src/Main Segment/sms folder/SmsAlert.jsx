import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function SmsAlert(){

    const Sms = useNavigate()

    const [clicked, SetClicked] = useState("allSms")

    const handleClick = ((route, type)=>{
        Sms(route)
        SetClicked(type)

    })

    return(
        <div className="sub-main-segment-cont">
            <button onClick={()=>handleClick("AllSms", "allSms")}
            className={clicked === "allSms" ? "active-button" : ""}
            >
                All Sms
            </button>

            <button onClick={()=>handleClick("ReadSms", "readSms")}
            className={clicked === "readSms" ? "active-button" : ""}
            >
                Read Sms
            </button>
            
            <button onClick={()=>handleClick("UnreadSms", "unreadSms")}
            className={clicked === "unreadSms" ? "active-button" : ""}
            >
                Unread Sms
            </button>

            <button onClick={()=>handleClick("ArchivedSms", "archivedSms")}
            className={clicked === "archivedSms" ? "active-button" : ""}
            >
                Archived Sms
            </button>
        </div>
    )
}

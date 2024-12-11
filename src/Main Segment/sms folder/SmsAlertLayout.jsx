import { Outlet } from "react-router-dom";
import SmsAlert from "./SmsAlert";

export default function SmsLayout(){
    return(
        <div className="smsAlert-Outlet-cont">
            <SmsAlert />
            <Outlet />
        </div>
    )
}
import { Outlet } from "react-router-dom";
import Investment from "./Investment.jsx";

export default function InvestmentLayout (){
    return(
        <div>
            <Investment />
            <Outlet />
        </div>
    )
}
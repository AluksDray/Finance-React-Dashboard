import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";

export default function RootLayOut(){

    return(
        <div className="main-page">
            <div className="sidebar">
                <SideBar />
            </div>

            <div className="main-content-segment">
                <Outlet />
            </div>
        </div>
    )
}
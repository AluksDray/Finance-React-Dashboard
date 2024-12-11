import { Outlet } from "react-router-dom";
import Settings from "./Settings";

export default function SettingsLayout (){
    return(
        <div>
            <Settings />
            <Outlet />
        </div>
    )
}
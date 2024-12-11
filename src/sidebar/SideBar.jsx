import { NavLink } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"
import { GrMoney } from "react-icons/gr";
import { BsSave } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { SiKeepassxc } from "react-icons/si";
import Income from "../Main Segment/Income Folder/Income.jsx";
import Expenses from "../Main Segment/Expenses folder/Expenses.jsx";
import SmsAlert from "../Main Segment/sms folder/SmsAlert.jsx";
import Investment from "../Main Segment/investment folder/Investment.jsx";
import Settings from "../Main Segment/Settings Folder/Settings.jsx";

export default function SideBar(){

    return(
        <div className="sidebar-container">

            <div className="menu-items-container">

                <NavLink to={"FiatIncome"}>
                    <div className="menu-item-icon">
                        <div className="icon-container">
                            <GrMoney />
                        </div>

                        <div className="menu-text-cont">
                            <h1>Income</h1>
                            <p>Click to see how much you've made</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to={"fiatExpenses"}>
                    <div className="menu-item-icon">
                        <div className="icon-container">
                            <BsSave />
                        </div>

                        <div className="menu-text-cont">
                            <h1>Expenses</h1>
                            <p>Click to see how much you've spent</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to={"AllSms"}>
                    <div className="menu-item-icon">
                        <div className="icon-container">
                            <CiMail />
                        </div>

                        <div className="menu-text-cont">
                            <h1>SMS Alerts</h1>
                            <p>Click to see your financial SMS notification</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to={"fiatInvestment"}>
                    <div className="menu-item-icon">
                        <div className="icon-container">
                            <SiKeepassxc/>
                        </div>

                        <div className="menu-text-cont">
                            <h1>Investments</h1>
                            <p>Click to see how much you've invested</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to={"profile"}>
                    <div className="menu-item-icon">
                        <div className="icon-container">
                            <IoSettingsOutline />
                        </div>

                        <div className="menu-text-cont">
                            <h1>Settings</h1>
                            <p>Click to change your settings</p>
                        </div>
                    </div>
                </NavLink>

            </div>
        </div>
    )
}
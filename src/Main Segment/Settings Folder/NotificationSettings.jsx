import TitleandActionBtn from "./Component folder/TitleComponent";
import ToggleSwitch from "./Component folder/ToggleComponent";

export default function NotificationSettings(){
    return(
        <div className="notification-cont">
            <TitleandActionBtn 
            Title="General Settings"
            subTitle="Enable notifications and change default settings"
            />

            <div className="lang-cont">
                <label htmlFor="lang">Choose Language</label>
                <select name="lang" id="lang">
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                </select>
            </div>

            <div className="currency-noti-cont">
                <label htmlFor="">Select Default Currency</label>
                <select>
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                    <option value="CAD">CAD</option>
                    <option value="NGR">NGR</option>
                </select>
            </div>

            <div className="currency-noti-cont">
                <label htmlFor="">Turn on Notifications</label>
                <ToggleSwitch />
            </div>

            <div className="currency-noti-cont">
                <label htmlFor="">Select Default Sound</label>
                <select>
                    <option value="sound 1">Sound 1</option>
                    <option value="sound 2">Sound 2</option>
                    <option value="sound 3">Sound 3</option>
                    <option value="sound 4">Sound 4</option>
                    <option value="sound 5">Sound 5</option>
                </select>
            </div>
        </div>
    )
}
import { useLoaderData } from "react-router-dom";
import ChatAndSearchComp from "../Income Folder/Income segment components/SearchInputComp";
import MarkAllAsRead from "./SmsComponents/MarkAll";
import Messages from "./SmsComponents/Messages";
import { useState } from "react";

export default function AllSms (){

    const [read, setRead] = useState("true")
    const messageData = useLoaderData()

    const handleMessageClick = (()=>{
        setRead(read)
    })

    return(
        <div className="main-sms-cont">
            <ChatAndSearchComp 
            inputholder="Search Our Al expert for a Sender"
            />
            <div className="allSms-main-cont">
                <MarkAllAsRead 
                onClick={handleMessageClick}
                />

                <div className="mapped-message-cont">
                    {messageData.map((item)=>(
                        <div key={item.id} className="mess-cont" >
                            <Messages 
                            sender={item.sender}
                            message={item.content}
                            date={item.date}
                            isRead={read [item.id]}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export const smsLoader = async ()=>{
    const response = await fetch("http://localhost:5003/SmsData")
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
}
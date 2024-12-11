import { useLoaderData } from "react-router-dom";
import ChatAndSearchComp from "../Income Folder/Income segment components/SearchInputComp";
import { useState } from "react";
import Messages from "./SmsComponents/Messages.jsx";

export default function UnreadSms (){

    const [read, setRead] = useState("true")

    const messageData = useLoaderData()

    const unreadMessagesData = messageData.filter((item) => !read[item.id]);

    return(
        <div className="main-sms-cont">
            <ChatAndSearchComp 
            inputholder="Search Our Al expert for a Sender"
            />

            <div className="mapped-message-cont">
                {unreadMessagesData.map((item)=>(
                    <div className="mess-cont" key={item.id}>
                        <Messages 
                         sender={item.sender}
                         message={item.content}
                         date={item.date}
                         isRead={read[item.id]}
                        />
                    </div>
                ))}

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
export default function Messages({sender, message, date, isRead}){
    return(
        <div className={`message-cont ${isRead ? "isRead-True" : "isRead-False"}`}>
            <div className="sender-message-cont">
                <h2>{sender}</h2>
                <p>{message}</p>
            </div>
            <div className="message-date-cont">
                <p>{date}</p>
            </div>
        </div>
    )
}

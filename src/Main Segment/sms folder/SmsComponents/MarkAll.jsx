export default function MarkAllAsRead ({onClick}){
    return(
        <div className="markAll">
            <div className="mark-btn">
                <button onClick={onClick}>Mark All As Read</button>
            </div>
        </div>
    )
}
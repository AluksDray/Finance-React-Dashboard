export default function TextArea ({txtfor, txtLabel, txtname, txtID, txtHolder}){
    return(
        <div className="Text-area-cont">
            <label htmlFor={txtfor}>{txtLabel}</label>
            <textarea name={txtname} id={txtID} placeholder={txtHolder}></textarea>
        </div>
    )
}
export default function InputComp({inputLabel, inputText, inputType, inputID, inputName, labelFor}){
    return(
        <div className="input-label-cont">
            <label htmlFor={labelFor}>{inputLabel}</label>
            <input type={inputType} name={inputName} id={inputID} placeholder={inputText}/>
        </div>
    )
}
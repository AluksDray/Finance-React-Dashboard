import { TiArrowMaximise } from "react-icons/ti";

export default function ChatAndSearchComp({inputholder}){
    return(
        <div className="searchChat-cont">
            <input type="search" name="search" id="search" placeholder={inputholder}/>
            <TiArrowMaximise />
        </div>
    )
}
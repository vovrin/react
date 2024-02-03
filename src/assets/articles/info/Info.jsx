import Heads from "../head/Heads"
export default function Info({cName, clickedPart}){
    if (clickedPart == "head"){
        return(
            <div className={cName}>
                <Heads></Heads>
            </div>
        )
    }
    
   
}
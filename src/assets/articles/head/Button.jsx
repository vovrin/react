import HeadChange from './HeadChange'
import { useState } from 'react'
export default function Button({infob, children}){
    const [val, func] = useState(false);
    function clicker(){
        func((item)=>!item);
    }
    return(
        <>
            <li><h1 onClick = {clicker} className='glTxtAb'>{children}</h1></li>
            {val && <HeadChange iname = {infob}/>}
        </>
    )
}
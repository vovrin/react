import {headi} from '../../bases'
import Button from './Button';

export default function Heads(){
    return(
       
            <ul className='buttonscont'>
                <Button infob = {headi.phead}>Голова</Button>
                <Button infob = {headi.peyes}>Очі</Button>
                <Button infob = {headi.pmouse}>Губи</Button>
            </ul>
            
    )
}
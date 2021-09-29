import {memo} from 'react'
import { useRecoilState } from 'recoil';
import { toggleSelector } from '../recoil/toggle';


const  Course  = ({item}) =>  {
    const [openId, toggle] = useRecoilState(toggleSelector(item.id))
    const isOpen = openId === item.id

        console.log("RERENDER", item.id);
        return (
            <li className="list-group-item">
                <h2>{item.title}</h2>
                <button onClick={() => toggle(item.id)}  className="btn btn-primary">
                    {isOpen ? "Close": "Show"}
                 </button>
                 {isOpen && <p>{item.anons}</p>}        
            </li>
        )
    }

export default Course



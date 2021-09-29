import {useState, useCallback} from 'react'

function useToggle(){
    const [openId, setOpenId] = useState(null)
 
    const toggle = useCallback(id => setOpenId(x => x === id ? null : id), [])

    return {openId, toggle}
}

export default useToggle;

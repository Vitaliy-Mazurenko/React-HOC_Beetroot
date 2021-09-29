import { atomFamily, selectorFamily} from 'recoil'

export const openIdAtom = atomFamily({
    key: "openId",
    default: null
})

export const toggleSelector = selectorFamily({
    key: "toggleId",
    get: id => ({get}) => get(openIdAtom(id)),
    set: id => ({set, get}) => {
        const openId = get(openIdAtom(id));
        if(openId === id){
            set(openIdAtom(id), null)
        } else {
            set(openIdAtom(id), id)
        }
    } 
})


/* export const toggleSelector = selector({
    key: "toggleId",
    get: ({get})=> get(openIdAtom),
    set: ({set, get}, id) => {
        const openId = get(openIdAtom);
        if(openId === id){
            set(openIdAtom, null)
        } else {
            set(openIdAtom, id)
        }
    } 
}) */
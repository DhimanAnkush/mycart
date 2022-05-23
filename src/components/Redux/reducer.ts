import { STORE_DATA } from "./actionTypes"


const init = {
    data: []
}

const reducer = (state = init, action: any) => {
    switch (action.type) {
        case STORE_DATA:
            return { ...state, data: action.payload }
        
        default:
            return state;
    }
}


export {reducer }
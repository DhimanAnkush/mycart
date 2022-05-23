import { STORE_DATA } from "./actionTypes";

const storeData = (payload:any) => ({
    type: STORE_DATA,
    payload:payload
})

export {storeData}
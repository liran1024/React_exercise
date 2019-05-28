import {CHANGE_INPUT_VALUE,LIST_ADD_ITEM,LIST_DELETE_ITEM} from './actionType'

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getListAddItemAction=()=>({
    type:LIST_ADD_ITEM,
})
export const getListDetItemAction=(index)=>({
    type:LIST_DELETE_ITEM,
    index
})
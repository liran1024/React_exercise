const defaultState={
   inputValue:'',
    list:[1,2,3]
}
export default (state = defaultState,action)=>{
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState;
    }
    if(action.type==='list_add_item'){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState;
    }
    if(action.type==='list_delet_item'){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState;
    }
return state;
}
const initState = {
    open: false,
    steps: { one: true, two: false, three: false }
}

const DialogReducer = (state=initState, action)=>{
    switch (action.type) {
        case 'changeState':
            return {...state, open: action.payload}
        case 'two':
            return {...state, two: true, one: false }
    
        default:
            return state;
    }
}

export default DialogReducer
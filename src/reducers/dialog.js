const initState = {
    open: false,
    one: true, 
    two: false, 
    three: false,
    four: false
}

const DialogReducer = (state=initState, action)=>{
    switch (action.type) {
        case 'changeState':
            return {...state, open: action.payload}
        case 'one':
            return {...state, one: true, two: false, three: false }
        case 'two':
            return {...state, two: true, one: false }
        case 'three':
            return {...state, two: false, three: true}
        case 'four':
            return {...state, four: true, three: false}
            
        default:
            return state;
    }
}

export default DialogReducer
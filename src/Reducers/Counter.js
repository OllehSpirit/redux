const Counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return --state
        default:
            return state
    }
}
export default Counter;
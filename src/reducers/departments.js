const reducer = (departments = [], action) => {
    switch(action.type) {
        case 'FETCH_DEPARTMENTS':
        return action.payload;
        
        default:
        return departments;
    }
}

export default reducer;
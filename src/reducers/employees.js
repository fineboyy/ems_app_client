const reducer = (employees = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
        case 'FETCH_SINGLE':
            return action.payload;
        
        case 'CREATE':
            return action.payload;
        
        default:
            return employees;
    }
}

export default reducer;
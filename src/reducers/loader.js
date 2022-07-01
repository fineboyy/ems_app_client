const reducer = (loading = false, action) => {
    switch(action.type) {
        
        case 'SHOW_LOADER':
        return  loading = true;
        case 'HIDE_LOADER':
        return loading = false;
        
        default:
            return loading;
    }
}

export default reducer;
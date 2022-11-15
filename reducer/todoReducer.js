const initialData = {
    lists : []
}


const todoReducer = (state = initialData, action)=>{
    switch(action.type){
        
        case "ADD_TODO" :
            
                const {id, data} = action.payload;
                return {
                    ...state,
                    lists : [
                        ...state.lists,
                        {
                            id : id,
                            data : data
                        }
                    ]
                }
            
                
            
            

            case "DELETE_TODO" :
                const newList = state.lists.filter((elem)=> elem.id !== action.id);
            return {
                ...state,
                lists : newList 
            }

            default: return state;
    }

    
}

export default todoReducer;
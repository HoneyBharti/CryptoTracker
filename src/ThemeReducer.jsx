

export const Themereducer =(state,action)=>{
    

        switch(action.type){

            case "SWITCH_THEME" :
            return{
                ...state ,
                theme: state.theme >=4 ?0 : state.theme + 1
            }


            default :
            return state
        }


    
}
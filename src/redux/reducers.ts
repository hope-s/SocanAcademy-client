import { CHNAGE_NAME } from "./constans";

export interface initialStateTypes {
    counter: number
}

const initialState : initialStateTypes = {
    counter: 199
}

const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHNAGE_NAME:
            return {
                ...state, counter: state.counter+1
            };
        default:
            return state
    }
}

export default reducer;
import { combineReducers} from 'redux'
import { reducer as detailSlice } from './details'

const appReducer=combineReducers({
    detailSlice,
})

const rootReducer=(state,action)=>{
    return appReducer(state,action)

}
 export default rootReducer
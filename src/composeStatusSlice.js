import { createSlice } from '@reduxjs/toolkit' 
export const composeStatusSlice = createSlice({
    name: 'composeStatus',
    initialState: {
        value:false
    },
    reducers: {
        setStatus: (state,action) => {
            state.value=action.payload
        }
    }
})
export const {setStatus} = composeStatusSlice.actions
export default composeStatusSlice.reducer
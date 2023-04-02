import { createSlice } from "@reduxjs/toolkit"
import { getRandomColor } from "../components/getRandomColor"
import updateColorsHash from "../components/updateColorsHash"




const initialState = {
    colors: [
        {
            id: 0,
            color: getRandomColor(),
            locked: false
        },
        {
            id: 1,
            color: getRandomColor(),
            locked: false
        },
        {
            id: 2,
            color: getRandomColor(),
            locked: false
        },
        {
            id: 3,
            color: getRandomColor(),
            locked: false
        },
        {
            id: 4,
            color: getRandomColor(),
            locked: false
        }
    ]
}


const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        createColors (state) {
            state.colors = state.colors.map( 
                color => {

                    if(!color.locked) {
                        color.color = getRandomColor()
                    }
                    return color
                }
            )
            updateColorsHash(state.colors)
        },
        swapLock (state, action) {
            const lockedColor = state.colors.find(color => color.id === action.payload)
            lockedColor.locked = !lockedColor.locked
        }
    }
})

export const { createColors, swapLock } = colorSlice.actions
export default colorSlice.reducer
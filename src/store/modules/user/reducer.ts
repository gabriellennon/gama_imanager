import { createSlice } from "@reduxjs/toolkit";
import { IUserInformationState } from "../../types";

const INITIAL_VALUE_STATE: IUserInformationState = {
    name: undefined,
    emailUser: undefined,
    imageUser: undefined
}

const userReduce = createSlice({
    name: "user",
    initialState: INITIAL_VALUE_STATE,
    reducers: {
        setUser(state, action){
            Object.assign(state, {
                name: action.payload.name,
                emailUser: action.payload.emailUser,
                imageUser: action.payload.imageUser
            })
        }
    }
})

export const { setUser } = userReduce.actions

export default userReduce.reducer
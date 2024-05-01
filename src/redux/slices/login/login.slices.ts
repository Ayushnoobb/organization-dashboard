import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStore } from "../../store";
import { addMinutesAndConvertToISOString } from "../../../utils/helper";
import { TOKEN_EXPIRE_TIME } from "../../../constants/constants";
import { Customer, LoginResponse } from "../interface/login.interface";
import { loginHandler } from "../../actions/login/login.action";

export interface InitialLoginInterface {
    data: {
        token: string | null;
        customer: Customer | null;
    };
    isLoading: boolean;
    isError: boolean;
    isFulfilled: boolean,
    expiry: string | null;
}

const initialState: InitialLoginInterface = {
    data: {
        token: null,
        customer: null
    },
    isLoading: false,
    isError: false,
    isFulfilled: false,
    expiry: null
};


const loginSlice = createSlice({
    name: "@voting-dashboard/Authentication",
    initialState,
    reducers: {
        logout(state: InitialLoginInterface) {
            state.data.token = null;
            state.data.customer = null;
            state.expiry = null;
            state.isFulfilled = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginHandler.pending, (state: InitialLoginInterface) => {
                state.isLoading = true;
            })
            .addCase(loginHandler.fulfilled, (state: InitialLoginInterface, action: PayloadAction<LoginResponse>) => {
                const { token, customer } = action.payload.data;
                state.data.token = token;
                state.data.customer = customer;
                if(token){
                    state.expiry = addMinutesAndConvertToISOString(new Date(), 1000);
                    state.isLoading = false;
                    state.isFulfilled = true;
                }
                // state.expiry = addMinutesAndConvertToISOString(new Date(), TOKEN_EXPIRE_TIME);
            })
            .addCase(loginHandler.rejected, (state: InitialLoginInterface) => {
                state.isError = true;
                state.isLoading = false
            });
    }
});

export const { logout } = loginSlice.actions;
export const loginData = (state: RootStore) => state.login;
export default loginSlice.reducer;

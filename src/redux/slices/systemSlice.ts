import { createSlice } from "@reduxjs/toolkit"
import { RootStore } from "../store"

interface SystemInitialInterface {
  menu: boolean
}

const initialState: SystemInitialInterface = {
  menu: true,
}
const systemSlice = createSlice({
  name: "System",
  initialState,
  reducers: {
    toggleMenu: (state: SystemInitialInterface) => {
      state.menu = !state.menu
    },
  },
})
export const { toggleMenu } = systemSlice.actions
export const systemData = (state: RootStore) => state.systemState
export default systemSlice.reducer

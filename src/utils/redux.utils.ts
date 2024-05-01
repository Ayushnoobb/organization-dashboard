import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootStore } from "../redux/store"
export const TypedSelector: TypedUseSelectorHook<RootStore> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

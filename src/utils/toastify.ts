import { toast, ToastOptions } from "react-toastify"
const config: ToastOptions<unknown> = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}
export const successToast = (message: string) => {
  toast.success(message, config)
}

export const warningToast = (message: string) => {  
  toast.warning(message, config)
}
export const errorToast = (message: string) => {
  toast.error(message, config)
}
export const loadingToast = (message : string) =>{
  toast.loading(message , config)
}
export const dismissToast = () => {
  toast.dismiss()
}

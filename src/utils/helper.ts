import axios from "axios"
import { errorToast, successToast } from "./toastify"


export const handleApiError = (error: any) => {
  if (axios.isCancel(error)) return
  if (error.response?.data?.message) {
    return errorToast(error.response.data.message)
  }
  return errorToast("Something went wrong")
}

export const parseInputType = (type: any, e: any) => {
  if (type === "checkbox" && "checked" in e.target) return e.target.checked
  if (type === "number") {
    const value = parseFloat(e.target.value.trim())
    return isNaN(value) ? "" : value
  }
  if (type === "file" && "files" in e.target) return e.target.files
  if (type === "list") return e.target.value ?? []
  return e.target.value
}

export const copyToClipboard = (val: any) => {
  if (!navigator.clipboard) return errorToast("Cannot copy!")
  navigator.clipboard.writeText(val)
  successToast("Coppied!")
}



export const addMinutesAndConvertToISOString = (date: Date, minutes: number): string => {
  const newDate = new Date(date.getTime() + minutes * 60000); //!60000 ms = 1 min
  return newDate.toISOString();
}

export const isExpired = (expiryTimeString: string | null): boolean => {
  if (!expiryTimeString) return false; //! if expiry == null 
  const expiryTime = new Date(expiryTimeString);
  const currentTime = new Date();
  return expiryTime <= currentTime;
};


export function convertToIsoDateTime(dateStr : string) : string {
  const date = new Date(dateStr);

  // Extract date components
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  const hours = "00";
  const minutes = "00";
  const seconds = "00";

  // ISO 8601 formatted string
  const isoDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  return isoDateTime;
}

export function convertIsoToNormalDateTime(date : string) : string | undefined{
  return date.split('T').at(0)
}

export const generateRandomHex = (length : number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


export const generateCode = (name : string) : string =>{
  const randomhex = generateRandomHex(4);
  const acronym = name.split(' ');
  const returnAcronym = acronym.map(letter => letter.at(0)?.toUpperCase()).join()
  return returnAcronym + randomhex;
}

export const generateForm = ({...form} : any) : FormData => {
  let returnForm = new FormData()
  for(const key in form){
    if(form.hasOwnProperty(key)){
      console.log(key , form[key])
      returnForm.append(key , form[key])
      console.log(returnForm)
    }
  }
  return returnForm
}

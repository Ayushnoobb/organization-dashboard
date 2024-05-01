export interface ActionsInitialState {
  isLoading : boolean
  isFulfilled : boolean
  isRejected : boolean
} 

export const ActionInitialState : ActionsInitialState =  {
  isLoading  : false,
  isFulfilled : false,
  isRejected : false
}
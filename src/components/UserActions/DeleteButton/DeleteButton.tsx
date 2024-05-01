import React, { useEffect, useState } from 'react'
import { RootStore } from '../../../redux/store'
import { useAppDispatch } from '../../../utils/redux.utils'
import { useSelector } from 'react-redux'
import { errorToast, loadingToast, successToast } from '../../../utils/toastify'
import { resetState } from '../../../redux/slices/user/blockUser.slices'
import { BlockUserThunk } from '../../../redux/actions/user/blockUser.actions'
import { dataService } from '../../../utils/axios'
import { DeleteUserThunk } from '../../../redux/actions/user/deleteUser.actions'

const DeleteButton : React.FC<{id : string}> = ({id}) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false);  
  const [toastDisplayed, setToastDisplayed] = useState(false);

  const { isFulfilled : blockFulfill , isPending : blockPending , isRejected : blockRejected } = useSelector((state : RootStore) => state.delete_user)
  const  { x_api } = useSelector((state : RootStore) => state.x_api_key)
  const { data } = useSelector((state : RootStore) => state.login)

  useEffect(() => {
    if (blockFulfill && isLoading && !toastDisplayed) {
      setIsLoading(false); 
      setToastDisplayed(true); 
      successToast('User deleted successfully!');
      dispatch(resetState());
    }
    if (blockRejected && isLoading && !toastDisplayed) {
      setIsLoading(false); 
      setToastDisplayed(true); 
      errorToast('Error deleteing user!');
      dispatch(resetState());
    }
  },[blockFulfill , blockRejected, dispatch, isLoading, toastDisplayed])

  function handleClick(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
    setIsLoading(true); 
    setToastDisplayed(false);  dataService.setApiKey(x_api!)
    dataService.setToken(data.token!)
    dispatch(DeleteUserThunk(id!))
  }

  return (
    <button className={`bttn delete-btn ${isLoading ? 'loading' : ''}`} onClick={handleClick} disabled={isLoading}>
      {isLoading ? 'Deleting...' : 'Delete'}
    </button>
  )
}

export default DeleteButton
